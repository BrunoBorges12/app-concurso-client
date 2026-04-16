import { Box, Heading, Link, Stack, Text } from "@chakra-ui/react";
import { headers } from "next/headers";
import NextLink from "next/link";
import { SignOutButton } from "@/app/sign-out-button";
import { auth } from "@/lib/auth";

export default async function Home() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    return (
      <Box px={6} py={16}>
        <Stack gap={4} maxW="xl">
          <Heading size="2xl">Vida Pessoal</Heading>
          <Text color="fg.muted">
            A autenticação já está conectada no Next.js com Better Auth + Prisma.
          </Text>
          <Link asChild colorPalette="teal">
            <NextLink href="/login">Ir para login</NextLink>
          </Link>
        </Stack>
      </Box>
    );
  }

  return (
    <Box px={6} py={16}>
      <Stack gap={4} maxW="xl">
        <Heading size="2xl">Sessão ativa</Heading>
        <Text>
          Usuário: <strong>{session.user.name}</strong>
        </Text>
        <Text>Email: {session.user.email}</Text>
        <SignOutButton />
      </Stack>
    </Box>
  );
}
