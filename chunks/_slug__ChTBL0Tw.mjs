/* empty css                            */
import { b as createAstro, c as createComponent, r as renderTemplate, a as renderComponent } from './astro/server_BaE2SKqo.mjs';
import 'kleur/colors';
import { g as getCollection } from './_astro_content_BMQPOEG-.mjs';

const $$Astro = createAstro("https://localhost:3000/");
async function getStaticPaths() {
  const blogEntries = await getCollection("blog");
  return blogEntries.map((blogpost) => ({
    params: { slug: blogpost.slug },
    props: { blogpost }
  }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { blogpost } = Astro2.props;
  const { Content } = await blogpost.render();
  return renderTemplate`${renderComponent($$result, "Content", Content, {})}`;
}, "C:/Users/Sly Venegas/Desktop/dev/dev_brutalismoinformatico.com/src/pages/blog/[slug].astro", void 0);

const $$file = "C:/Users/Sly Venegas/Desktop/dev/dev_brutalismoinformatico.com/src/pages/blog/[slug].astro";
const $$url = "/blog/[slug]";

export { $$slug as default, $$file as file, getStaticPaths, $$url as url };
