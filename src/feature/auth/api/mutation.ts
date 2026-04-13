import { authClient } from "@/lib/auth-client";

export const authMutations = {
  signIn: () => ({
    mutationFn: (data: { email: string; password: string }) => authClient.signIn.email(data),
  }),
};
