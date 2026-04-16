"use client";

import {
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  Input,
  InputGroup,
  Link,
  Menu,
  Portal,
  Text,
  VStack,
} from "@chakra-ui/react";
import {
  Bell,
  BookOpen,
  CheckSquare,
  ChevronDown,
  GraduationCap,
  Home,
  Search,
  Target,
  User,
} from "lucide-react";
import NextLink from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Início", icon: Home },
  { href: "/questoes", label: "Questões", icon: CheckSquare },
  { href: "/materias", label: "Matérias", icon: BookOpen },
  { href: "/metas", label: "Metas", icon: Target },
];

export function Header() {
  const pathname = usePathname();

  return (
    <Box as="header" position="sticky" top="0" zIndex="50" bg="surface.panel" boxShadow="sm">
      <Box borderBottom="1px solid" borderColor="surface.border">
        <Flex maxW="7xl" mx="auto" h="16" px="4" align="center" justify="space-between" gap="4">
          <Link asChild textDecoration="none" _hover={{ textDecoration: "none" }}>
            <NextLink href="/">
              <HStack gap="3">
                <Flex
                  boxSize="10"
                  align="center"
                  justify="center"
                  rounded="xl"
                  bgGradient="to-br"
                  gradientFrom="brand.500"
                  gradientTo="brand.700"
                  boxShadow="0 10px 24px var(--chakra-colors-effects-brandGlow)"
                >
                  <GraduationCap size={20} color="white" />
                </Flex>

                <VStack align="start" gap="0">
                  <Text
                    fontSize="xl"
                    fontWeight="bold"
                    letterSpacing="tight"
                    color="text.primary"
                    lineHeight="1"
                  >
                    Global
                    <Text as="span" color="brand.fg">
                      App
                    </Text>
                  </Text>

                  <Text
                    fontSize="10px"
                    fontWeight="medium"
                    textTransform="uppercase"
                    letterSpacing="wider"
                    color="text.tertiary"
                  >
                    Área de concursos e metas
                  </Text>
                </VStack>
              </HStack>
            </NextLink>
          </Link>

          <Box flex="1" maxW="md" mx="8" display={{ base: "none", lg: "block" }}>
            <InputGroup
              startElement={
                <Box color="text.tertiary">
                  <Search size={16} />
                </Box>
              }
            >
              <Input
                type="search"
                placeholder="Buscar questões, matérias, provas..."
                h="10"
                rounded="full"
                variant="subtle"
                ps="10"
                pe="4"
                fontSize="sm"
              />
            </InputGroup>
          </Box>

          <HStack gap="2">
            <Box position="relative">
              <IconButton aria-label="Notificações" variant="ghost">
                <Bell size={20} />
              </IconButton>

              <Flex
                position="absolute"
                top="-0.5"
                right="-0.5"
                boxSize="4"
                align="center"
                justify="center"
                rounded="full"
                bg="red.500"
                color="white"
                fontSize="10px"
                fontWeight="bold"
              >
                3
              </Flex>
            </Box>

            <Menu.Root positioning={{ placement: "bottom-end" }}>
              <Menu.Trigger asChild>
                <Button variant="ghost" px="2">
                  <HStack gap="2">
                    <Flex
                      boxSize="8"
                      align="center"
                      justify="center"
                      rounded="full"
                      bgGradient="to-br"
                      gradientFrom="brand.600"
                      gradientTo="brand.500"
                      color="white"
                      fontSize="sm"
                      fontWeight="semibold"
                    >
                      U
                    </Flex>
                    <Box color="text.tertiary">
                      <ChevronDown size={16} />
                    </Box>
                  </HStack>
                </Button>
              </Menu.Trigger>

              <Portal>
                <Menu.Positioner>
                  <Menu.Content minW="48">
                    <Menu.Item value="perfil">
                      <HStack gap="2">
                        <User size={16} />
                        <Text>Meu Perfil</Text>
                      </HStack>
                    </Menu.Item>

                    <Menu.Item value="configuracoes">Configurações</Menu.Item>

                    <Menu.Separator />

                    <Menu.Item
                      value="sair"
                      color="red.600"
                      _highlighted={{ bg: "red.50", color: "red.700" }}
                    >
                      Sair
                    </Menu.Item>
                  </Menu.Content>
                </Menu.Positioner>
              </Portal>
            </Menu.Root>
          </HStack>
        </Flex>
      </Box>

      <Box
        bg="surface.header"
        backdropFilter="blur(8px)"
        borderBottom="1px solid"
        borderColor="surface.border"
      >
        <Box maxW="7xl" mx="auto" px="4">
          <HStack as="nav" gap="20" justify={"center"} align="stretch">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              const Icon = link.icon;

              return (
                <Link
                  key={link.href}
                  asChild
                  position="relative"
                  display="flex"
                  alignItems="center"
                  gap="2"
                  px="4"
                  py="3"
                  fontSize="sm"
                  fontWeight="medium"
                  color={isActive ? "brand.700" : "text.secondary"}
                  _hover={{
                    color: isActive ? "brand.700" : "text.primary",
                    textDecoration: "none",
                  }}
                  aria-current={isActive ? "page" : undefined}
                >
                  <NextLink href={link.href}>
                    <Icon size={16} />
                    {link.label}

                    {isActive && (
                      <Box
                        position="absolute"
                        bottom="0"
                        left="0"
                        right="0"
                        h="0.5"
                        bg="brand.600"
                        boxShadow="0 -2px 10px var(--chakra-colors-effects-brandUnderline)"
                        rounded="full"
                      />
                    )}
                  </NextLink>
                </Link>
              );
            })}
          </HStack>
        </Box>
      </Box>
    </Box>
  );
}
