import {z, defineCollection } from "astro:content";

const concorrentiCollection = defineCollection({
  schema: ({image}) => z.object({
  nome: z.string(),
  username: z.string(),
  alt: z.string(),
  image: image(),
  punti: z.number(),

})
});

const librosCollection = defineCollection({
  schema: z.object({
  title: z.string(),
  author: z.string(),
  concorrente: z.string(),
  body: z.string(),
  cover: z.string(),
  alt: z.string(),
  tag:z.array(z.string()),
  monthRead: z.string(),
  /* yearPublished: z.number(), */
 /*  tags: z.array(z.string()), */
})
});

export const collections = {
  'concorrenti': concorrentiCollection,
  'libros': librosCollection,
}
