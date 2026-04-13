import { z } from "zod";

const authModeSchema = z.enum(["sign-in", "sign-up"]);

export const authFormSchema = z
  .object({
    mode: authModeSchema,
    name: z.string().trim(),
    email: z.email("Informe um e-mail valido.").trim(),
    password: z
      .string()
      .min(8, "A senha precisa ter pelo menos 8 caracteres.")
      .max(128, "A senha precisa ter no maximo 128 caracteres.")
      .trim(),
  })
  .superRefine(({ mode, name }, ctx) => {
    if (mode === "sign-up" && name.length < 2) {
      ctx.addIssue({
        code: "custom",
        path: ["name"],
        message: "Informe um nome com pelo menos 2 caracteres.",
      });
    }
  });

export type AuthFormValues = z.infer<typeof authFormSchema>;
export type AuthMode = z.infer<typeof authModeSchema>;
