"use client";

import { Alert, Box, Button, Flex, Heading, Link, Stack, Text } from "@chakra-ui/react";
import { PasswordInput, TextInput } from "@/components/forms";
import { useAuthForm } from "../../hooks/use-auth-form";

export function FormLogin() {
  const { currentMode, form, handleSubmit, isPending, submitError } = useAuthForm();
  const {
    formState: { errors },
    register,
  } = form;

  const submitLabel = "Fazer login";

  return (
    <Box w="full" bg="transparent">
      <Stack gap={10}>
        <Stack gap={3} align="flex-start" textAlign="left">
          <Heading size="3xl" fontWeight="black" letterSpacing="tight" color="text.primary">
            Acessar Plataforma
          </Heading>
          <Text color="text.secondary" fontSize="md" maxW="sm">
            Bem-vindo de volta. Informe seus dados para entrar na sua conta.
          </Text>
        </Stack>

        <form onSubmit={handleSubmit}>
          <Stack gap={5}>
            <input type="hidden" {...register("mode")} />

            {submitError ? (
              <Alert.Root
                status="error"
                borderRadius="md"
                variant="subtle"
                bg="red.50"
                borderColor="red.200"
                borderWidth="1px"
              >
                <Alert.Indicator color="red.400" />
                <Alert.Content>
                  <Alert.Title color="red.700" fontSize="sm">
                    {submitError}
                  </Alert.Title>
                </Alert.Content>
              </Alert.Root>
            ) : null}

            <TextInput
              {...register("email")}
              label="E-mail"
              type="email"
              placeholder="voce@exemplo.com"
              errorText={errors.email?.message}
              errorTextProps={{ color: "red.400" }}
            />

            <PasswordInput
              {...register("password")}
              label="Senha"
              placeholder="••••••••"
              errorText={errors.password?.message}
              errorTextProps={{ color: "red.400" }}
            />

            {currentMode === "sign-in" && (
              <Flex justify="flex-start" mt={-2}>
                <Link
                  fontSize="sm"
                  color="blue.fg"
                  fontWeight="medium"
                  _hover={{ color: "blue.800" }}
                >
                  Esqueceu a senha?
                </Link>
              </Flex>
            )}

            <Button type="submit" loading={isPending} size="xl" w="full" mt={4}>
              {submitLabel}
            </Button>

            <Text textAlign="center" color="text.secondary" fontSize="sm" mt={6}>
              {currentMode === "sign-in" ? "Ainda não tem conta?" : "Já possui uma conta?"}{" "}
              <Link
                as="button"
                type="button"
                color="blue.fg"
                fontWeight="bold"
                _hover={{ textDecoration: "underline" }}
              >
                Criar conta
              </Link>
            </Text>
          </Stack>
        </form>
      </Stack>
    </Box>
  );
}
