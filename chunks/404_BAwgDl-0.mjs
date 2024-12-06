/* empty css                            */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent } from './astro/server_BaE2SKqo.mjs';
import 'kleur/colors';
import { $ as $$Default } from './Default_C82LgKWS.mjs';
import 'clsx';

const $$404$1 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="flex flex-col gap-8 justify-between"> <p class="text-9xl font-bold dm-serif">404</p> <h2 class="text-4xl outfit">Ouch! Página no encontrada</h2> <p class="text-xl sm:text-3xl sanchez">
Lo sentimos, lo que buscas no existe o buscaste con errores
</p> <!-- <a
    href='/'
    title='Go back home'
    class='px-4 py-2 border-2 border-black hover:bg-red transition-colors duration-150 ease-in-out w-48 text-center poppins'
    >&larr; Al Inicio</a> --> </section>`;
}, "C:/Users/Sly Venegas/Desktop/dev/dev_brutalismoinformatico.com/src/components/errors/404.astro", void 0);

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Default, { "title": "P\xE1gina no encontrada", "description": "P\xE1gina no encontrada", "classList": "h-full", "pageTitle": "P\xE1gina no encontrada!" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="bg-#7c0b0b px-6 py-24"> ${renderComponent($$result2, "ErrorPage", $$404$1, {})} ${renderComponent($$result2, "ErrorPage", $$404$1, {})} ${renderComponent($$result2, "ErrorPage", $$404$1, {})} ${renderComponent($$result2, "ErrorPage", $$404$1, {})} ${renderComponent($$result2, "ErrorPage", $$404$1, {})} ${renderComponent($$result2, "ErrorPage", $$404$1, {})} <!-- <RecentBlogPosts /> --> </main> ` })}`;
}, "C:/Users/Sly Venegas/Desktop/dev/dev_brutalismoinformatico.com/src/pages/404.astro", void 0);

const $$file = "C:/Users/Sly Venegas/Desktop/dev/dev_brutalismoinformatico.com/src/pages/404.astro";
const $$url = "/404";

export { $$404 as default, $$file as file, $$url as url };
