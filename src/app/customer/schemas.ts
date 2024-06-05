import { z } from 'zod';

interface DataObject {
  title: string;
}

const areTitlesUnique = (arr: DataObject[]): boolean => {
  const titles = arr.map((obj) => obj.title);
  const uniqueTitles = new Set(titles);
  return titles.length === uniqueTitles.size;
};

export const customerTagSchema = z.object({
  title: z
    .string({
      message: 'Campo de preenchimento obrigatório'
    })
    .min(1, 'Campo precisa de no minimo 1 caracter')
    .max(150, 'Campo pode ter no maximo 150 caracteres')
});

export const customerSchema = z.object({
  name: z
    .string({
      message: 'Campo de preenchimento obrigatório'
    })
    .min(1, 'Campo precisa de no minimo 1 caracter')
    .max(300, 'Campo pode ter no maximo 300 caracteres'),
  email: z
    .string({
      message: 'Campo de preenchimento obrigatório'
    })
    .email({
      message: 'Campo deve ser um e-mail valido'
    })
    .min(1, 'Campo precisa de no minimo 1 caracter')
    .max(150, 'Campo pode ter no maximo 150 caracteres'),
  tags: z
    .array(customerTagSchema)
    .min(1, 'Insire pelo menos 1 tag')
    .refine(areTitlesUnique, 'Não pode existis tags iguais')
});
