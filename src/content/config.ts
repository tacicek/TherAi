import { defineCollection, z } from 'astro:content';

const teamCollection = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    position: z.string(),
    department: z.string(),
    bio: z.string(),
    avatar: z.string(),
    linkedin: z.string().optional(),
    email: z.string().email(),
    specialties: z.array(z.string()),
    active: z.boolean().default(true),
    order: z.number().default(99),
    featured: z.boolean().default(false),
  }),
});

const projectsCollection = defineCollection({
  type: 'content', 
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['Oncology', 'Radiology', 'Pathology', 'Cardiology', 'Neurology', 'General']),
    status: z.enum(['active', 'completed', 'in-progress']),
    startDate: z.string(),
    endDate: z.string().optional(),
    technologies: z.array(z.string()),
    team: z.array(z.string()),
    featured: z.boolean().default(false),
    images: z.array(z.string()),
    results: z.string().optional(),
    publications: z.array(z.string()).optional(),
  }),
});

export const collections = {
  'team': teamCollection,
  'projects': projectsCollection,
};