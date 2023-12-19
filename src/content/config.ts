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

export const collections = {
  'concorrenti': concorrentiCollection,
}
