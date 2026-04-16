"use client";

import { Box, Flex, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Image from "next/image";
import type { ReactNode } from "react";

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

interface AuthSplitLayoutProps {
  children: ReactNode;
}

export function AuthSplitLayout({ children }: AuthSplitLayoutProps) {
  return (
    <Flex
      minH="100vh"
      w="100vw"
      align="center"
      justify="center"
      bg="surface.canvas"
      p={{ base: 4, md: 8, lg: 12 }}
    >
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        w="full"
        maxW="6xl"
        bg="surface.panel"
        borderRadius="3xl"
        border="1px solid"
        borderColor="surface.border"
        boxShadow="0 32px 80px -28px rgba(15, 23, 42, 0.16), 0 1px 0 rgba(255, 255, 255, 0.8) inset"
        overflow="hidden"
        minH={{ lg: "800px" }}
      >
        {/* Lado Esquerdo - Imagem e Decoracao */}
        <MotionBox
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          position="relative"
          display={{ base: "none", lg: "block" }}
          bg="surface.950"
          m={3}
          borderRadius="2xl"
          overflow="hidden"
          border="1px solid"
          borderColor="surface.borderStrong"
        >
          <Box position="absolute" inset={0} zIndex={1}>
            <Image
              src="/auth-bg.png"
              alt="Dashboard and productivity shapes"
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
              priority
            />
          </Box>
          <Box
            position="absolute"
            inset={0}
            zIndex={2}
            bgGradient="to-b"
            gradientFrom="transparent"
            gradientTo="blackAlpha.900"
          />

          {/* Cópia/Texto na Imagem */}
          <VStack
            position="absolute"
            bottom={12}
            left={12}
            zIndex={3}
            align="flex-start"
            gap={4}
            maxW="md"
          >
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <Text
                fontSize="4xl"
                fontWeight="black"
                lineHeight="1.1"
                color="white"
                letterSpacing="tight"
              >
                Organize sua vida, planeje seu futuro.
              </Text>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <Text fontSize="lg" color="whiteAlpha.800" fontWeight="medium">
                Gerencie suas tarefas, projetos e objetivos em um único fluxo de trabalho elegante e
                minimalista.
              </Text>
            </motion.div>
          </VStack>
        </MotionBox>

        {/* Lado Direito - Formulário */}
        <MotionFlex
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          align="center"
          justify="center"
          p={{ base: 8, md: 16, lg: 20 }}
          position="relative"
        >
          <Box
            position="absolute"
            inset={0}
            bg="radial-gradient(circle at 50% 50%, rgba(37,99,235,0.06) 0%, transparent 70%)"
          />
          <Box w="full" maxW="md" position="relative" zIndex={1}>
            {children}
          </Box>
        </MotionFlex>
      </SimpleGrid>
    </Flex>
  );
}
