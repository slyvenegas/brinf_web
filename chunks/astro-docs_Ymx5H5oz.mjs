const id = "astro-docs";
const collection = "showcase";
const data = {title:"Astro Docs",image:
						new Proxy({"src":"/_astro/astro-docs.a_4kJ1rC.png","width":906,"height":514,"format":"png","fsPath":"C:/Users/Sly Venegas/Desktop/dev/dev_brutalismoinformatico.com/src/content/showcase/_images/astro-docs.png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Sly Venegas/Desktop/dev/dev_brutalismoinformatico.com/src/content/showcase/_images/astro-docs.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/Sly Venegas/Desktop/dev/dev_brutalismoinformatico.com/src/content/showcase/_images/astro-docs.png");
							return target[name];
						}
					})
					,url:"https://docs.astro.build/",featured:2};
const _internal = {
	type: 'data',
	filePath: "C:/Users/Sly Venegas/Desktop/dev/dev_brutalismoinformatico.com/src/content/showcase/astro-docs.json",
	rawData: "",
};

export { _internal, collection, data, id };
