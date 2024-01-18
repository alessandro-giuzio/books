const id = "oihana.md";
						const collection = "concorrenti";
						const slug = "libros-oihana";
						const body = "";
						const data = {nome:"Oihana",username:"oihana",alt:"oihana",image:
						new Proxy({"src":"/_astro/oihana.x6exDsft.jpg","width":1440,"height":1082,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							globalThis.astroAsset.referencedImages.add(target.fsPath);
							return target[name];
						}
					})
					,punti:4};
						const _internal = {
							type: 'content',
							filePath: "/Users/alessandro-giuzio/Documents/Ale/GitHub-Repo/books/src/content/concorrenti/oihana.md",
							rawData: "\nnome: Oihana\nusername: oihana\nalt: oihana\nimage: './img/oihana.jpg'\npunti: 4\nborderColor: ''\nslug: 'libros-oihana'",
						};

export { _internal, body, collection, data, id, slug };
