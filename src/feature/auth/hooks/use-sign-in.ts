"use client";

import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { authMutations } from "@/feature/auth/api/mutation";

export function useSignIn() {
  const router = useRouter();

  return useMutation({
    ...authMutations.signIn(),
    onSuccess: () => router.push("/"),
  });
}
