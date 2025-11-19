import type { VercelRequest, VercelResponse } from '@vercel/node';
import fetch from 'node-fetch';

const GITHUB_TOKEN = process.env.GITHUB_TOKEN!;
const REPO_OWNER = 'slyvenegas';
const REPO_NAME = 'brinf_web';
const FILE_PATH = 'src/data/images2.json';
const BRANCH = 'main';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST')
    return res.status(405).json({ error: 'Método no permitido' });

  const { title, url } = req.body;

  if (!title || !url)
    return res.status(400).json({ error: 'Faltan datos' });

  const headers = {
    Authorization: `Bearer ${GITHUB_TOKEN}`,
    Accept: 'application/vnd.github+json'
  };

  const fileUrl = `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${FILE_PATH}`;

  try {
    // 1️⃣ Leer metadata del archivo
    const getRes = await fetch(`${fileUrl}?ref=${BRANCH}`, { headers });
    const getData = await getRes.json();

    if (!getRes.ok) {
      console.log("Error leyendo metadata:", getData);
      return res.status(500).json({ error: "No se pudo leer el archivo del repo" });
    }

    const sha = getData.sha;

    // 2️⃣ Leer contenido real del archivo usando download_url
    const fileRes = await fetch(getData.download_url);
    const fileText = await fileRes.text();
    const json = JSON.parse(fileText);

    // 3️⃣ Agregar nuevo objeto
    json.push({
      src: url,
      alt: title,
      description: title,
      link: ""
    });

    const newContent = Buffer.from(JSON.stringify(json, null, 2)).toString('base64');

    // 4️⃣ Commit a GitHub
    const commitRes = await fetch(fileUrl, {
      method: 'PUT',
      headers,
      body: JSON.stringify({
        message: `add image: ${title}`,
        content: newContent,
        sha,
        branch: BRANCH
      }),
    });

    const commitData = await commitRes.json();

    if (!commitRes.ok) {
      console.log("Error en commit:", commitData);
      return res.status(500).json({ error: commitData });
    }

    return res.status(200).json({ message: 'Imagen agregada correctamente' });

  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Error procesando la solicitud' });
  }
}
