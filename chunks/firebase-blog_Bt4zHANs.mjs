const id = "firebase-blog";
const collection = "showcase";
const data = {title:"The Firebase Blog",image:
						new Proxy({"src":"/_astro/firebase-blog.BLHZ5Phx.png","width":1585,"height":900,"format":"png","fsPath":"C:/Users/Sly Venegas/Desktop/dev/dev_brutalismoinformatico.com/src/content/showcase/_images/firebase-blog.png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Sly Venegas/Desktop/dev/dev_brutalismoinformatico.com/src/content/showcase/_images/firebase-blog.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/Sly Venegas/Desktop/dev/dev_brutalismoinformatico.com/src/content/showcase/_images/firebase-blog.png");
							return target[name];
						}
					})
					,url:"https://firebase.blog/",featured:5};
const _internal = {
	type: 'data',
	filePath: "C:/Users/Sly Venegas/Desktop/dev/dev_brutalismoinformatico.com/src/content/showcase/firebase-blog.json",
	rawData: "",
};

export { _internal, collection, data, id };
