const id = "alessandro.md";
						const collection = "concorrenti";
						const slug = "libros-alessandro";
						const body = "";
						const data = {nome:"Ale",username:"ale",alt:"Alessandro",image:
						new Proxy({"src":"/_astro/alessandro.XcFu9AdZ.jpg","width":231,"height":255,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							globalThis.astroAsset.referencedImages.add(target.fsPath);
							return target[name];
						}
					})
					,punti:0};
						const _internal = {
							type: 'content',
							filePath: "/Users/alessandro/Documents/GitHub/books/src/content/concorrenti/alessandro.md",
							rawData: "\nnome: Ale\nusername: ale\nalt: Alessandro\nimage: './img/alessandro.jpg'\npunti: 0\nborderColor: ''\nslug: 'libros-alessandro'",
						};

export { _internal, body, collection, data, id, slug };
