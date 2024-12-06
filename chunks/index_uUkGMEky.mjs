/* empty css                            */
import { b as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from './astro/server_BaE2SKqo.mjs';
import 'kleur/colors';
import { $ as $$Default } from './Default_C82LgKWS.mjs';
import { $ as $$Card } from './Pill_BK6a3u8y.mjs';

const $$Astro = createAstro("https://localhost:3000/");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Default, { "title": "Inicio", "pageTitle": "Inicio | BRINF", "description": "A quiet place, full of noise." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="bg-black p-8"> <section id="about" class="grid md:grid-cols-8 gap-8 mt-4"> <h2 class="hidden">Sobre BRINF</h2> <div class="col-span-8"> ${renderComponent($$result2, "Card", $$Card, {}, { "default": ($$result3) => renderTemplate` <a href="#"><img src="/img/brinf013.jpg" alt=""></a> ` })} </div> </section> <!-- <RecentBlogPosts /> --> <!-- <MobileSocials /> --> </main> ` })} <!-- PAGINA INDEX BLACKOUT --> <!-- <html lang="es" class="h-full html-custom">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Brutalismo Informático | BRINF</title>
  </head>
  <body class="index-layout body-custom">
    <main class="bg- text-white p-8">
      <div class="full-screen">
        <a href="/home"><h3 class="home-text">www.brutalismoinformatico.com</h3></a>
      </div>
    </main>
  </body>
</html>

<style>
  .html-custom,
  .body-custom {
    height: 100%;
    margin: 0;
    padding: 0;
    color
  }


  .body-custom {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #000000;
  }


  .full-screen {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }


  .full-image {
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto;
    object-fit: contain;
  }
</style> -->`;
}, "C:/Users/Sly Venegas/Desktop/dev/dev_brutalismoinformatico.com/src/pages/index.astro", void 0);

const $$file = "C:/Users/Sly Venegas/Desktop/dev/dev_brutalismoinformatico.com/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
