const id = "polinations";
const collection = "showcase";
const data = {title:"PoliNations",image:
						new Proxy({"src":"/_astro/polinations.BDY4GR4E.png","width":1585,"height":900,"format":"png","fsPath":"C:/Users/Sly Venegas/Desktop/dev/dev_brutalismoinformatico.com/src/content/showcase/_images/polinations.png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Sly Venegas/Desktop/dev/dev_brutalismoinformatico.com/src/content/showcase/_images/polinations.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/Sly Venegas/Desktop/dev/dev_brutalismoinformatico.com/src/content/showcase/_images/polinations.png");
							return target[name];
						}
					})
					,url:"https://polinations.com/",featured:1};
const _internal = {
	type: 'data',
	filePath: "C:/Users/Sly Venegas/Desktop/dev/dev_brutalismoinformatico.com/src/content/showcase/polinations.json",
	rawData: "",
};

export { _internal, collection, data, id };
