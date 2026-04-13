"use client";

import { Button } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { authClient } from "@/lib/auth-client";

export function SignOutButton() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const handleSignOut = () => {
    startTransition(async () => {
      await authClient.signOut({
        fetchOptions: {
          onSuccess: () => {
            router.refresh();
            router.push("/login");
          },
        },
      });
    });
  };

  return (
    <Button onClick={handleSignOut} loading={isPending} colorPalette="red" variant="subtle">
      Sair
    </Button>
  );
}
