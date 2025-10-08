import { defineCollection, z } from "astro:content";

const experience = defineCollection({
  schema: z.object({
    company: z.string(),
    location: z.string().optional(),
    role: z.string(),
    from: z.string(), // YYYY-MM
    to: z.string().optional(),
    stack: z.array(z.string()).optional(),
    highlights: z.array(z.string())
  })
});

const projects = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.object({ es: z.string(), en: z.string() }),
    tech: z.array(z.string()),
    href: z.string().url()
  })
});

export const collections = { experience, projects };
