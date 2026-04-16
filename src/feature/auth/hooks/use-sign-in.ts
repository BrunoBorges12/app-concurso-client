"use client";

import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toaster } from "@/components/ui/toaster";
import { authMutations } from "@/feature/auth/api/mutation";

export function useSignIn() {
  const router = useRouter();

  return useMutation({
    mutationFn: async (data: { email: string; password: string }) => {
      const result = await authMutations.signIn().mutationFn(data);

      if (result.error) {
        throw new Error(result.error.message ?? "Nao foi possivel fazer login.");
      }

      return result;
    },
    onSuccess: () => {
      toaster.success({
        title: "Login realizado",
        description: "Redirecionando para o dashboard.",
      });
      router.push("/");
    },
    onError: (error) => {
      toaster.error({
        title: "Falha no login",
        description: error.message,
        closable: true,
      });
    },
  });
}
