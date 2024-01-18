import { d as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_YOYdZTiC.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"All Systems Red","author":"Martha Wells","body":"","cover":"https://m.media-amazon.com/images/I/81thdg0KmZL._SY466_.jpg","alt":"All Systems Red","link":"https://amzn.to/3NtARMJ","yearRead":2022,"tag":["Sci-Fi"],"concorrente":"alessandro","slug":"libros-all-systems-white"};
				const file = "/Users/alessandro-giuzio/Documents/Ale/GitHub-Repo/books/src/content/libros/provaOtroLibro.md";
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
