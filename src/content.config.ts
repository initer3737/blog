// 1. Import utilities dari astro:content
import { defineCollection, z } from 'astro:content';

// 2. Import fungsi loader bawaan Astro v5
import { glob } from 'astro/loaders';

// 3. Definisikan koleksi dengan loader baru
const blogCollection = defineCollection({
  // Ganti type: 'content' dengan properti loader di bawah ini
  loader: glob({ 
    pattern: '**/*.md',                  // Mencari semua file markdown
    base: './src/content/blog'           // Arahkan ke folder tempat menyimpan file md Anda
  }),
  schema: z.object({
    title: z.string(),
    date: z.date().optional(),
    author: z.string().optional(),
  }),
});

// 4. Export koleksi seperti biasa
export const collections = {
  'blog': blogCollection,
};
