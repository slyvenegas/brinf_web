const id = "corset";
const collection = "showcase";
const data = {title:"Corset",image:
						new Proxy({"src":"/_astro/corset.DbVxo4hD.png","width":906,"height":514,"format":"png","fsPath":"C:/Users/Sly Venegas/Desktop/dev/dev_brutalismoinformatico.com/src/content/showcase/_images/corset.png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Sly Venegas/Desktop/dev/dev_brutalismoinformatico.com/src/content/showcase/_images/corset.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/Sly Venegas/Desktop/dev/dev_brutalismoinformatico.com/src/content/showcase/_images/corset.png");
							return target[name];
						}
					})
					,url:"https://corset.dev/",featured:6};
const _internal = {
	type: 'data',
	filePath: "C:/Users/Sly Venegas/Desktop/dev/dev_brutalismoinformatico.com/src/content/showcase/corset.json",
	rawData: "",
};

export { _internal, collection, data, id };
