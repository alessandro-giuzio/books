import { d as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_YOYdZTiC.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"nome":"Amaia","username":"amaia","alt":"amaia","image":"./img/oihana.jpg","punti":35,"borderColor":"","slug":"libros-amaia"};
				const file = "/Users/alessandro/Documents/GitHub/books/src/content/concorrenti/amaia.md";
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
