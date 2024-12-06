/* empty css                            */
import { b as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from './astro/server_BaE2SKqo.mjs';
import 'kleur/colors';
import { $ as $$Default } from './Default_C82LgKWS.mjs';
import { $ as $$Card } from './Pill_BK6a3u8y.mjs';

const $$Astro = createAstro("https://localhost:3000/");
const $$Basement = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Basement;
  return renderTemplate`${renderComponent($$result, "Layout", $$Default, { "title": "Home", "pageTitle": "Home | BRINF", "description": "A quiet place, full of noise." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="bg-black p-8"> <!-- seccion inicial --> <section id="about" class=" grid md:grid-cols-8 gap-5 mt-4 center"> <h2 class="hidden">Sobre BRINF</h2> <div class="col-span-6"> ${renderComponent($$result2, "Card", $$Card, {}, { "default": ($$result3) => renderTemplate` <a href="#"><img src="/img/brinf008.jpg" alt=""></a> ` })} </div> </section> <!-- <RecentBlogPosts /> --> <!-- <MobileSocials /> --> </main> ` })}`;
}, "C:/Users/Sly Venegas/Desktop/dev/dev_brutalismoinformatico.com/src/pages/basement.astro", void 0);

const $$file = "C:/Users/Sly Venegas/Desktop/dev/dev_brutalismoinformatico.com/src/pages/basement.astro";
const $$url = "/basement";

export { $$Basement as default, $$file as file, $$url as url };
