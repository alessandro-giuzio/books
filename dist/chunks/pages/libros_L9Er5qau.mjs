/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, g as addAttribute, l as renderComponent } from '../astro_YOYdZTiC.mjs';
import 'kleur/colors';
import 'clsx';
import { g as getCollection, $ as $$Header, a as $$Layout } from './index_MwSds0Qc.mjs';
/* empty css                           */

const $$Astro$2 = createAstro();
const $$CardLibro = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$CardLibro;
  const { libro } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="book" data-astro-cid-sogadnim> <a${addAttribute(libro.data.link, "href")} data-astro-cid-sogadnim> <img loading="lazy" width="180" height="270"${addAttribute(libro.data.cover, "src")}${addAttribute(libro.data.alt, "alt")} data-astro-cid-sogadnim></a> <div class="info" data-astro-cid-sogadnim> <h3 class="title" data-astro-cid-sogadnim>${libro.data.title}</h3> <!-- <p>{book.data.body}</p> --> <p data-astro-cid-sogadnim>${libro.data.author}</p> <!-- <p>{book.data.tag}</p> --> <ul data-astro-cid-sogadnim> ${libro.data.tag.map((tag) => renderTemplate`<li data-astro-cid-sogadnim>${tag}</li>`)} </ul> <!-- <p class='tag'>{book.data.yearRead}</p> --> </div> </div> `;
}, "/Users/alessandro-giuzio/Documents/Ale/GitHub-Repo/books/src/components/CardLibro.astro", void 0);

const $$Astro$1 = createAstro();
const $$LibrosLista = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$LibrosLista;
  const { libros } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="libros" data-astro-cid-pupainwx> ${libros.map((libro) => renderTemplate`${renderComponent($$result, "CardLibro", $$CardLibro, { "libro": libro, "data-astro-cid-pupainwx": true })}`)} </div> `;
}, "/Users/alessandro-giuzio/Documents/Ale/GitHub-Repo/books/src/components/LibrosLista.astro", void 0);

const $$Astro = createAstro();
const $$Libros = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Libros;
  const todosLosLibros = await getCollection("libros");
  todosLosLibros.length;
  const librosAsier = todosLosLibros.filter((libro) => libro.data.concorrente === "asier").map((libro) => libro.data.title);
  console.log(librosAsier);
  return renderTemplate`${renderComponent($$result, "LayoutLibros", $$Layout, { "title": "Libros", "data-astro-cid-omyimrr6": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "data-astro-cid-omyimrr6": true })} ${maybeRenderHead()}<h1 class="text-5xl text-red-500 uppercase mb-16" data-astro-cid-omyimrr6>
libros
</h1> <div class="books" data-astro-cid-omyimrr6> ${renderComponent($$result2, "LibrosLista", $$LibrosLista, { "libros": todosLosLibros, "data-astro-cid-omyimrr6": true })} </div> ` })} `;
}, "/Users/alessandro-giuzio/Documents/Ale/GitHub-Repo/books/src/pages/libros.astro", void 0);

const $$file = "/Users/alessandro-giuzio/Documents/Ale/GitHub-Repo/books/src/pages/libros.astro";
const $$url = "/libros";

export { $$Libros as default, $$file as file, $$url as url };
