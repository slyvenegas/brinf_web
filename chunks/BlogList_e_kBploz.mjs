import { b as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, f as renderSlot } from './astro/server_BaE2SKqo.mjs';
import 'kleur/colors';
import { $ as $$Card, a as $$Button } from './Pill_BK6a3u8y.mjs';
import '@astrojs/internal-helpers/path';
import { Image as $$Image } from './_astro_assets_ePuIDZ4I.mjs';

const $$Astro$2 = createAstro("https://localhost:3000/");
const $$SummaryCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$SummaryCard;
  const { title, imgAlt, imgSrc, description } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Card", $$Card, { "color": "#5f6559" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h3 class="poppins text-lg md:text-xl">${title}</h3> <div class="rounded-lg border-3 border-black my-4 h-40"> ${renderComponent($$result2, "Image", $$Image, { "src": imgSrc, "alt": imgAlt, "width": 800, "height": 400, "class": "rounded h-full w-full object-cover" })} </div> <p class="poppins">${description}</p> ${renderSlot($$result2, $$slots["default"])} ` })}`;
}, "C:/Users/Sly Venegas/Desktop/dev/dev_brutalismoinformatico.com/src/components/generic/SummaryCard.astro", void 0);

const $$Astro$1 = createAstro("https://localhost:3000/");
const $$BlogSummaryCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BlogSummaryCard;
  const { post } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "SummaryCard", $$SummaryCard, { "title": post.data.title, "imgAlt": post.data.title, "imgSrc": post.data.imgUrl, "description": post.data.description }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex justify-end my-4"> ${renderComponent($$result2, "Button", $$Button, { "href": `/blog/${post.slug}/` }, { "default": ($$result3) => renderTemplate` &rarr;` })} </div>  ` })}`;
}, "C:/Users/Sly Venegas/Desktop/dev/dev_brutalismoinformatico.com/src/components/blog/BlogSummaryCard.astro", void 0);

const $$Astro = createAstro("https://localhost:3000/");
const $$BlogList = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BlogList;
  const { posts } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<ul class="grid md:grid-cols-2 lg:grid-cols-3 gap-8"> ${posts.map((post) => {
    return renderTemplate`<li> ${renderComponent($$result, "BlogSummaryCard", $$BlogSummaryCard, { "post": post })} </li>`;
  })} </ul>`;
}, "C:/Users/Sly Venegas/Desktop/dev/dev_brutalismoinformatico.com/src/components/blog/BlogList.astro", void 0);

export { $$BlogList as $ };
