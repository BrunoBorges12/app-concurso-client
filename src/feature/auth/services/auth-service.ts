import { authClient } from "@/lib/auth-client";
import type { AuthFormValues } from "../validation/auth-form-schema";

type AuthResult = {
  errorMessage: string | null;
};

export async function authenticate(values: AuthFormValues): Promise<AuthResult> {
  if (values.mode === "sign-up") {
    const { error } = await authClient.signUp.email({
      name: values.name,
      email: values.email,
      password: values.password,
      callbackURL: "/",
    });

    return {
      errorMessage: error?.message ?? null,
    };
  }

  const { error } = await authClient.signIn.email({
    email: values.email,
    password: values.password,
    callbackURL: "/",
  });

  return {
    errorMessage: error?.message ?? null,
  };
}
