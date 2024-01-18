const id = "malen.md";
						const collection = "concorrenti";
						const slug = "libros-malen";
						const body = "";
						const data = {nome:"Malen",username:"malen",alt:"malen",image:
						new Proxy({"src":"/_astro/malen.JYAuMM0O.jpeg","width":3024,"height":4032,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							globalThis.astroAsset.referencedImages.add(target.fsPath);
							return target[name];
						}
					})
					,punti:3};
						const _internal = {
							type: 'content',
							filePath: "/Users/alessandro-giuzio/Documents/Ale/GitHub-Repo/books/src/content/concorrenti/malen.md",
							rawData: "\nnome: Malen\nusername: malen\nalt: malen\nimage: './img/malen.jpeg'\npunti: 3\nborderColor: ''\nslug: 'libros-malen'",
						};

export { _internal, body, collection, data, id, slug };
