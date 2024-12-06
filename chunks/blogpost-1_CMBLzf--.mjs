import { b as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, f as renderSlot, a as renderComponent, l as createComponent$1, n as renderTemplate$1, o as renderComponent$1, p as unescapeHTML } from './astro/server_BaE2SKqo.mjs';
import 'kleur/colors';
import { $ as $$Default } from './Default_C82LgKWS.mjs';
import 'clsx';

const $$Astro$2 = createAstro("https://localhost:3000/");
const $$BlogSideBar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$BlogSideBar;
  const { headings } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<aside> <nav class="hidden lg:block sticky top-6"> <ul> ${headings.map((heading) => renderTemplate`<li class="py-1"> ${[...Array(heading.depth - 1)].map((_, _i) => renderTemplate`<span class="inline-block w-6"></span>`)} <a class="hover:text-stone transition-all duration-150 ease-in-out text-dark poppins"${addAttribute(`#${heading.slug}`, "href")}> ${heading.text} </a> </li>`)} </ul> </nav> </aside>`;
}, "C:/Users/Sly Venegas/Desktop/dev/dev_brutalismoinformatico.com/src/components/blog/BlogSideBar.astro", void 0);

const $$Astro$1 = createAstro("https://localhost:3000/");
const $$BlogContent = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BlogContent;
  const { content } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article class="prose-slate w-sm md:w-prose md:prose poppins"> <a href="/blog" title="*">&larr;</a> <p class="text-slate text-sm md:text-base">
&rarr; ${content.pubDate} </p> ${renderSlot($$result, $$slots["default"])} <p class="text-slate">* ${content.author}</p> <a href="/blog" title="*">&larr;</a> </article>`;
}, "C:/Users/Sly Venegas/Desktop/dev/dev_brutalismoinformatico.com/src/components/blog/BlogContent.astro", void 0);

const $$Astro = createAstro("https://localhost:3000/");
const $$BlogPost = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BlogPost;
  const ogImage = new URL(`/v1/generate/og/${Astro2.params.slug}.png`, Astro2.url);
  const { content, headings } = Astro2.props;
  const { title, description } = content;
  return renderTemplate`${renderComponent($$result, "Layout", $$Default, { "title": title, "description": description, "ogImage": ogImage }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="p-6 lg:grid lg:grid-cols-3 flex justify-center"> ${renderComponent($$result2, "BlogSideBar", $$BlogSideBar, { "headings": headings })} ${renderComponent($$result2, "BlogContent", $$BlogContent, { "content": content }, { "default": ($$result3) => renderTemplate` ${renderSlot($$result3, $$slots["default"])} ` })} </main>  ` })}`;
}, "C:/Users/Sly Venegas/Desktop/dev/dev_brutalismoinformatico.com/src/layouts/BlogPost.astro", void 0);

const html = "<h2 id=\"probando-títulos\">Probando títulos</h2>\n<p>Lorem markdownum longo os thyrso telum, continet servat fetus nymphae, <em>vox\r\nnocte sedesque</em>, decimo. Omnia esse, quam sive; conplevit illis indestrictus\r\nadmovit dedit sub quod protectus, impedit non.</p>\n<h2 id=\"probando-secciones-y-párrafos\">Probando secciones y párrafos</h2>\n<p>Aras reperire, sui motis correpti coniunx Onetor amore ferire lacertis, petiit.\r\nBis pallor et mecum me, igne patruelibus <em>tendebam</em>, vultu sterilique terruerat\r\n<em>tempore</em> medium aera <strong>eadem Mittor</strong>.</p>\n<ul>\n<li>Non turba loca dederunt primordia ineamus Dictys</li>\n<li>Tanti amat mundus sedula</li>\n<li>Potuissent aetas parili coniuge se lumina breve</li>\n<li>Tamen ille crepitantibus ulla coepeq  qqqqqqqqqqqqqqqqqqqqqrunt quibus iugulo</li>\n<li>Pindusque solacia luctataque felix</li>\n</ul>\n<h2 id=\"probando-integraciones\">Probando integraciones</h2>\n<p>`</p>\n<iframe width=\"100%\" height=\"166\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay\" src=\"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1619843079&#x26;color=%23d32424&#x26;auto_play=false&#x26;hide_related=false&#x26;show_comments=true&#x26;show_user=true&#x26;show_reposts=false&#x26;show_teaser=true\"></iframe><div style=\"font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;\"><a href=\"https://soundcloud.com/motztechno\" title=\"MOTZ\" target=\"_blank\" style=\"color: #cccccc; text-decoration: none;\">MOTZ</a> · <a href=\"https://soundcloud.com/motztechno/motz-exclusive-yuhos-suppressed-psychosis-free-dl-1\" title=\"MOTZ Exclusive: Yuhøs - Suppressed Psychosis [FREE DL]\" target=\"_blank\" style=\"color: #cccccc; text-decoration: none;\">MOTZ Exclusive: Yuhøs - Suppressed Psychosis [FREE DL]</a></div>\n`\n<h2 id=\"test-123lift-off\">Test 1,2,3…Lift Off!</h2>\n<p>Genu cupiens quoque: cum dolor: sollicitive cantu, et piae Leuconoe, huius non\r\nnil tuli Peleusque rauca. Et alvum cuncti Hippodamas meritis nec coniunx ausa,\r\npete. Congestaque nisi nullus poena. Tanto cum, curvis vulnera quod optatis,\r\ntrahens conplexa saepe.</p>\n<p>Hominum quo. Signa germanaeque iuvat at feruntur precantibus corpus praebuerat\r\nexcipit mixtaeque inferior, haec percepit regum: nec nec sit ferenti.</p>\n<h2 id=\"ültimo-test-de-título-de-prueba\">ültimo test de título de prueba</h2>\n<p>Insistere pugno. Cum morae vigilantibus dulces Cycnus: neque cum sororis.</p>\n<p>Hac Aestas solet docebo tandem tamquam omnis vitiantur mitte, vatis in animique\r\ninfelix passimque. Superasset onus.</p>";

				const frontmatter = {"title":"Prólogo","pubDate":"03/23/2024 14:25","author":"Noisyman","tags":["Programming","Bitcoin","Formula1"],"imgUrl":"../../assets/astro2.jpeg","description":"Todo tiene un inicio y esto no es la excepción. Sin embargo, hay una particularidad... ideas añejadas de una mente rumiante con una visión renovada. Eso es todo lo que encontrarás aquí.","layout":"../../layouts/BlogPost.astro"};
				const file = "C:/Users/Sly Venegas/Desktop/dev/dev_brutalismoinformatico.com/src/content/blog/blogpost-1.md";
				const url = undefined;
				function rawContent() {
					return "\r\n## Probando títulos\r\n\r\nLorem markdownum longo os thyrso telum, continet servat fetus nymphae, *vox\r\nnocte sedesque*, decimo. Omnia esse, quam sive; conplevit illis indestrictus\r\nadmovit dedit sub quod protectus, impedit non.\r\n\r\n## Probando secciones y párrafos\r\n\r\nAras reperire, sui motis correpti coniunx Onetor amore ferire lacertis, petiit.\r\nBis pallor et mecum me, igne patruelibus *tendebam*, vultu sterilique terruerat\r\n*tempore* medium aera **eadem Mittor**.\r\n\r\n- Non turba loca dederunt primordia ineamus Dictys\r\n- Tanti amat mundus sedula\r\n- Potuissent aetas parili coniuge se lumina breve\r\n- Tamen ille crepitantibus ulla coepeq  qqqqqqqqqqqqqqqqqqqqqrunt quibus iugulo\r\n- Pindusque solacia luctataque felix\r\n\r\n\r\n## Probando integraciones\r\n\r\n`\r\n<iframe width=\"100%\" height=\"166\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay\" src=\"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1619843079&color=%23d32424&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true\"></iframe><div style=\"font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;\"><a href=\"https://soundcloud.com/motztechno\" title=\"MOTZ\" target=\"_blank\" style=\"color: #cccccc; text-decoration: none;\">MOTZ</a> · <a href=\"https://soundcloud.com/motztechno/motz-exclusive-yuhos-suppressed-psychosis-free-dl-1\" title=\"MOTZ Exclusive: Yuhøs - Suppressed Psychosis [FREE DL]\" target=\"_blank\" style=\"color: #cccccc; text-decoration: none;\">MOTZ Exclusive: Yuhøs - Suppressed Psychosis [FREE DL]</a></div>\r\n`\r\n\r\n## Test 1,2,3...Lift Off!\r\n\r\nGenu cupiens quoque: cum dolor: sollicitive cantu, et piae Leuconoe, huius non\r\nnil tuli Peleusque rauca. Et alvum cuncti Hippodamas meritis nec coniunx ausa,\r\npete. Congestaque nisi nullus poena. Tanto cum, curvis vulnera quod optatis,\r\ntrahens conplexa saepe.\r\n\r\nHominum quo. Signa germanaeque iuvat at feruntur precantibus corpus praebuerat\r\nexcipit mixtaeque inferior, haec percepit regum: nec nec sit ferenti.\r\n\r\n## ültimo test de título de prueba\r\n\r\nInsistere pugno. Cum morae vigilantibus dulces Cycnus: neque cum sororis.\r\n\r\nHac Aestas solet docebo tandem tamquam omnis vitiantur mitte, vatis in animique\r\ninfelix passimque. Superasset onus.\r\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"probando-títulos","text":"Probando títulos"},{"depth":2,"slug":"probando-secciones-y-párrafos","text":"Probando secciones y párrafos"},{"depth":2,"slug":"probando-integraciones","text":"Probando integraciones"},{"depth":2,"slug":"test-123lift-off","text":"Test 1,2,3…Lift Off!"},{"depth":2,"slug":"ültimo-test-de-título-de-prueba","text":"ültimo test de título de prueba"}];
				}

				const Content = createComponent$1((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate$1`${renderComponent$1(result, 'Layout', $$BlogPost, {
								file,
								url,
								content,
								frontmatter: content,
								headings: getHeadings(),
								rawContent,
								compiledContent,
								'server:root': true,
							}, {
								'default': () => renderTemplate$1`${unescapeHTML(html)}`
							})}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
