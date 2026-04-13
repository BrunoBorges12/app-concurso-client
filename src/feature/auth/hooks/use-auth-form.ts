"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { type AuthFormValues, authFormSchema } from "../validation/auth-form-schema";
import { useSignIn } from "./use-sign-in";

const defaultValues: AuthFormValues = {
  mode: "sign-in",
  name: "",
  email: "",
  password: "",
};

export function useAuthForm() {
  const { mutate: signIn, isPending, error } = useSignIn();

  const form = useForm<AuthFormValues>({
    resolver: zodResolver(authFormSchema),
    defaultValues,
    mode: "onBlur",
  });

  const currentMode = form.watch("mode");

  const handleSubmit = form.handleSubmit((data) => signIn(data));

  return {
    currentMode,
    form,
    handleSubmit,
    isPending,
    submitError: error?.message ?? null,
  };
}
