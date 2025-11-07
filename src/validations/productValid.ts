import { z } from "zod";

export const productSchema = z.object({
    nombre: z.string().min(1, { error: "Nombre es obligatorio" }),
    descripcion: z.string().min(1, { error: "Descripcion es obligatorio" }),
    precio: z.number().min(1, { error: "Precio es obligatorio" }),
    imagen: z.string()
});

export type ProductFormData = z.infer<typeof productSchema>;
