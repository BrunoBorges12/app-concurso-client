"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { AppToaster } from "@/components/ui/toaster";
import { getQueryClient } from "@/lib/query-client";
import { system } from "@/theme/system";

type ProvidersProps = {
  children: React.ReactNode;
};

export function Providers({ children }: ProvidersProps) {
  const queryClient = getQueryClient();

  return (
    <ChakraProvider value={system}>
      <QueryClientProvider client={queryClient}>
        {children}
        <AppToaster />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ChakraProvider>
  );
}
