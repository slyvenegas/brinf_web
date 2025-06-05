import type { VercelRequest, VercelResponse } from '@vercel/node';
import fetch from 'node-fetch';

const GITHUB_TOKEN = process.env.GITHUB_TOKEN!;
const REPO_OWNER = 'slyvenegas';
const REPO_NAME = 'brinf_web';
const FILE_PATH = 'src/data/images2.json'; // Ajusta si lo pones en otra parte
const BRANCH = 'main'; // o "master" según tu repo

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Método no permitido' });

  const { title, url } = req.body;

  if (!title || !url) {
    return res.status(400).json({ error: 'Faltan datos' });
  }

  const headers = {
    Authorization: `Bearer ${GITHUB_TOKEN}`,
    Accept: 'application/vnd.github+json',
    'Content-Type': 'application/json'
  };

  const fileUrl = `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${FILE_PATH}`;

  try {
    // Leer contenido actual del archivo
    const getRes = await fetch(`${fileUrl}?ref=${BRANCH}`, { headers });
    const getData = await getRes.json();

    const sha = getData.sha;
    const content = Buffer.from(getData.content, 'base64').toString('utf8');
    const json = JSON.parse(content);

    // Agregar nuevo objeto
    json.push({ title, url });

    const newContent = Buffer.from(JSON.stringify(json, null, 2)).toString('base64');

    // Crear commit
    const commitRes = await fetch(fileUrl, {
      method: 'PUT',
      headers,
      body: JSON.stringify({
        message: `add image: ${title}`,
        content: newContent,
        sha,
        branch: BRANCH,
      }),
    });

    if (!commitRes.ok) {
      const error = await commitRes.json();
      return res.status(500).json({ error });
    }

    res.status(200).json({ message: 'Imagen agregada correctamente' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error procesando la solicitud' });
  }
}
