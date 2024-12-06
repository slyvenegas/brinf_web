/* empty css                            */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from './astro/server_BaE2SKqo.mjs';
import 'kleur/colors';
import { g as getCollection } from './_astro_content_BMQPOEG-.mjs';
import { $ as $$Default } from './Default_C82LgKWS.mjs';
import { $ as $$BlogList } from './BlogList_e_kBploz.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const posts = await getCollection("blog").then(
    (collection) => collection.reverse()
  );
  return renderTemplate`${renderComponent($$result, "Layout", $$Default, { "title": "Blog", "description": " Brinf Blog |\xA0En esta p\xE1gina encontrar\xE1s reunidos todos los posts.", "pageTitle": "Brinf Blog" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="bg-#7c0b0b p-6"> ${renderComponent($$result2, "BlogList", $$BlogList, { "posts": posts })} </main> ` })}`;
}, "C:/Users/Sly Venegas/Desktop/dev/dev_brutalismoinformatico.com/src/pages/blog/index.astro", void 0);

const $$file = "C:/Users/Sly Venegas/Desktop/dev/dev_brutalismoinformatico.com/src/pages/blog/index.astro";
const $$url = "/blog";

export { $$Index as default, $$file as file, $$url as url };
