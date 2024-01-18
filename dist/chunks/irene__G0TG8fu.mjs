import { d as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_YOYdZTiC.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"nome":"Irene","username":"irene","alt":"irene","image":"./img/oihana.jpg","punti":45,"borderColor":""};
				const file = "/Users/alessandro-giuzio/Documents/Ale/GitHub-Repo/books/src/content/concorrenti/irene.md";
				const url = undefined;
				function rawContent() {
					return "";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
