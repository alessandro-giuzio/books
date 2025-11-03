import { z, defineCollection } from "astro:content";

// ✅ Single reusable concorrenti schema
const concorrentiSchema = ({ image }: { image: () => z.ZodTypeAny }) =>
  z.object({
    nome: z.string(),
    username: z.string(),
    alt: z.string(),
    image: image().optional(), // ✅ Made optional for flexibility
    punti: z.number(),
    slug: z.string().optional(),
    bio: z.string().optional(), // ✅ Optional bio (2025+)
  });

// ✅ Single reusable libros schema (supports all years)
const librosSchema = z.object({
  title: z.string(),
  author: z.string(),
  concorrente: z.string(),
  body: z.string(),
  cover: z.string().optional(),
  noCover: z.string().default('/src/assets/images/no-cover.webp'),
  alt: z.string().optional(), // ✅ Made optional for 2024 compatibility
  tag: z.array(z.string()).optional(), // ✅ Support old 2024 format
  tags: z.array(z.string()).optional(), // ✅ Support new 2025+ format
  monthRead: z.string(),
  punti: z.number(),
  yearRead: z.number().optional(), // ✅ Optional for 2024 compatibility
  pages: z.number().optional(),
  featured: z.boolean().optional(),
  type: z.string().optional(),
  extra: z.string().optional(),
  slug: z.string().optional(),
});

// ✅ Create collection definitions (reuse schemas)
const concorrenti = defineCollection({ schema: concorrentiSchema });
const libros = defineCollection({ schema: librosSchema });

// ✅ Export all collections (DRY principle)
export const collections = {
  // 2024
  concorrenti,
  libros,

  // 2025
  concorrenti25: concorrenti,
  libros25: libros,

  // 2026
  concorrenti26: concorrenti,
  libros26: libros,
};