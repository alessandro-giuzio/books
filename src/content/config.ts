import { z, defineCollection } from "astro:content"; // ✅ Removed incorrect import

const concorrentiCollection = defineCollection({
  schema: ({ image }: { image: () => z.ZodTypeAny }) =>
    z.object({
      nome: z.string(),
      username: z.string(),
      alt: z.string(),
      image: image(),
      punti: z.number(),
      slug: z.string().optional(),
    }),
});

const concorrentiCollection25 = defineCollection({
  schema: ({ image }: { image: () => z.ZodTypeAny }) =>
    z.object({
      nome: z.string(),
      username: z.string(),
      alt: z.string(),
      image: image(),
      punti: z.number(),
      slug: z.string().optional(),
      bio: z.string().optional(),
    }),
});

const librosCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    author: z.string(),
    concorrente: z.string(),
    body: z.string(),
    cover: z.string().optional(),
    noCover: z.string().optional().default('/src/assets/images/no-cover.webp'),
    alt: z.string().optional(),
    tag: z.array(z.string()),
    monthRead: z.string(),
    punti: z.number(),
    type: z.string().optional(),
    extra: z.string().optional(),
    slug: z.string().optional(),
  }),
});

const librosCollection25 = defineCollection({
  schema: z.object({
    title: z.string(),
    author: z.string(),
    concorrente: z.string(),
    body: z.string(),
    cover: z.string().optional(),
    noCover: z.string().default('/src/assets/images/no-cover.webp'),
    alt: z.string(),
    monthRead: z.string(),
    punti: z.number(),
    yearRead: z.number(),
    tags: z.array(z.string()),
    pages: z.number().optional(),
    featured: z.boolean().optional(),

  }),
});

export const collections = {
  concorrenti: concorrentiCollection,
  libros: librosCollection,
  libros25: librosCollection25,
  concorrenti25: concorrentiCollection25,
};
