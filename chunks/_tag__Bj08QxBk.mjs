/* empty css                            */
import { b as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from './astro/server_BaE2SKqo.mjs';
import 'kleur/colors';
import { g as getCollection } from './_astro_content_BMQPOEG-.mjs';
import { $ as $$Default } from './Default_C82LgKWS.mjs';
import { $ as $$BlogList } from './BlogList_e_kBploz.mjs';
import { a as $$Button } from './Pill_BK6a3u8y.mjs';

const $$Astro = createAstro("https://localhost:3000/");
async function getStaticPaths() {
  const allPosts = await getCollection("blog").then(
    (collection) => collection.reverse()
  );
  const tags = [];
  allPosts.forEach((post) => {
    post.data.tags.forEach((tag) => {
      tags.push(tag.toLowerCase());
    });
  });
  return Array.from(new Set(tags)).map((tag) => {
    return {
      params: { tag },
      props: {
        tag,
        blogposts: allPosts.filter(
          (post) => post.data.tags.map((tag2) => tag2.toLowerCase()).includes(tag)
        )
      }
    };
  });
}
const $$tag = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$tag;
  const { tag, blogposts } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Default, { "title": `Blog: ${tag}`, "description": `brutalismoinformatico Blog | All posts tagged with ${tag}`, "pageTitle": `brutalismoinformatico Blog |\xA0Blogposts tagged with ${tag}` }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="p-6 bg-purple grid gap-4"> <div> ${renderComponent($$result2, "Button", $$Button, { "href": "/blog/" }, { "default": ($$result3) => renderTemplate`&larr; Volver al blog` })} </div> ${renderComponent($$result2, "BlogList", $$BlogList, { "posts": blogposts })} </main> ` })}`;
}, "C:/Users/Sly Venegas/Desktop/dev/dev_brutalismoinformatico.com/src/pages/blog/tags/[tag].astro", void 0);

const $$file = "C:/Users/Sly Venegas/Desktop/dev/dev_brutalismoinformatico.com/src/pages/blog/tags/[tag].astro";
const $$url = "/blog/tags/[tag]";

export { $$tag as default, $$file as file, getStaticPaths, $$url as url };
