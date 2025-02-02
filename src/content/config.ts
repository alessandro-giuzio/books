import { z, defineCollection } from "astro:content"; // ✅ Removed incorrect import

const concorrentiCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      nome: z.string(),
      username: z.string(),
      alt: z.string(),
      image: image(),
      punti: z.number(),
    }),
});

const concorrentiCollection25 = defineCollection({
  schema: ({ image }) =>
    z.object({
      nome: z.string(),
      username: z.string(),
      alt: z.string(),
      image: image(),
      punti: z.number(),
    }),
});

const librosCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    author: z.string(),
    concorrente: z.string(),
    body: z.string(),
    cover: z.string().optional(),
    alt: z.string(),
    tag: z.array(z.string()),
    monthRead: z.string(),
    punti: z.number(),
    type: z.string().optional(),
    extra: z.string().optional(),
  }),
});

const librosCollection25 = defineCollection({
  schema: z.object({
    title: z.string(),
    author: z.string(),
    concorrente: z.string(),
    body: z.string(),
    cover: z.string().optional(),
    alt: z.string(),
    monthRead: z.string(),
    punti: z.number(),
    yearRead: z.number(),
    tags: z.array(z.string()),
  }),
});

export const collections = {
  concorrenti: concorrentiCollection,
  libros: librosCollection,
  libros25: librosCollection25,
  concorrenti25: concorrentiCollection25,
};
