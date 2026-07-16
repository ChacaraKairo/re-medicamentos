import { z } from 'zod';

export const personFormSchema = z.object({
  name: z.string().trim().min(2, 'Informe pelo menos 2 caracteres.').max(80),
  birthDate: z
    .string()
    .trim()
    .refine((value) => value === '' || /^\d{4}-\d{2}-\d{2}$/.test(value), {
      message: 'Use o formato AAAA-MM-DD.',
    }),
  notes: z.string().trim().max(500, 'Use no máximo 500 caracteres.'),
  color: z.string().regex(/^#[0-9A-Fa-f]{6}$/, 'Selecione uma cor válida.'),
});

export type PersonFormValues = z.infer<typeof personFormSchema>;
