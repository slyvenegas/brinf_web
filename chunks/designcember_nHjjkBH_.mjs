const id = "designcember";
const collection = "showcase";
const data = {title:"Designcember",image:
						new Proxy({"src":"/_astro/designcember.1mE4g9n5.png","width":1585,"height":900,"format":"png","fsPath":"C:/Users/Sly Venegas/Desktop/dev/dev_brutalismoinformatico.com/src/content/showcase/_images/designcember.png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Sly Venegas/Desktop/dev/dev_brutalismoinformatico.com/src/content/showcase/_images/designcember.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/Sly Venegas/Desktop/dev/dev_brutalismoinformatico.com/src/content/showcase/_images/designcember.png");
							return target[name];
						}
					})
					,url:"https://designcember.com/",featured:4};
const _internal = {
	type: 'data',
	filePath: "C:/Users/Sly Venegas/Desktop/dev/dev_brutalismoinformatico.com/src/content/showcase/designcember.json",
	rawData: "",
};

export { _internal, collection, data, id };
