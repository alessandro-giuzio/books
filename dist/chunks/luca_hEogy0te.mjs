const id = "luca.md";
						const collection = "concorrenti";
						const slug = "libros-luca";
						const body = "";
						const data = {nome:"Luca",username:"luca",alt:"luca",image:
						new Proxy({"src":"/_astro/luca.cMT9fyyQ.jpg","width":1536,"height":2048,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							globalThis.astroAsset.referencedImages.add(target.fsPath);
							return target[name];
						}
					})
					,punti:20};
						const _internal = {
							type: 'content',
							filePath: "/Users/alessandro/Documents/GitHub/books/src/content/concorrenti/luca.md",
							rawData: "\nnome: Luca\nusername: luca\nalt: luca\nimage: './img/luca.jpg'\npunti: 20\nborderColor: '#ff0000'\nslug: 'libros-luca'",
						};

export { _internal, body, collection, data, id, slug };
