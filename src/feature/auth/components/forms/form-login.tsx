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
          <Heading size="3xl" fontWeight="black" letterSpacing="tight" color="white">
            Acessar Plataforma
          </Heading>
          <Text color="gray.400" fontSize="md" maxW="sm">
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
                bg="red.900/30"
                borderColor="red.400/30"
                borderWidth="1px"
              >
                <Alert.Indicator color="red.400" />
                <Alert.Content>
                  <Alert.Title color="red.100" fontSize="sm">
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
                  color="teal.300"
                  fontWeight="medium"
                  _hover={{ color: "teal.200" }}
                >
                  Esqueceu a senha?
                </Link>
              </Flex>
            )}

            <Button
              type="submit"
              loading={isPending}
              size="xl"
              h={14}
              w="full"
              bg="white"
              color="black"
              borderRadius="xl"
              mt={4}
              fontWeight="bold"
              fontSize="md"
              _hover={{
                bg: "gray.200",
                transform: "translateY(-1px)",
                boxShadow: "0 8px 20px rgba(255,255,255,0.15)",
              }}
              _active={{ transform: "translateY(0)" }}
              transition="all 0.2s cubic-bezier(.175,.885,.32,1.275)"
            >
              {submitLabel}
            </Button>

            <Text textAlign="center" color="gray.400" fontSize="sm" mt={6}>
              {currentMode === "sign-in" ? "Ainda não tem conta?" : "Já possui uma conta?"}{" "}
              <Link
                as="button"
                type="button"
                color="white"
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
