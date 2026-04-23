import { Box, Card, Flex, Grid, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import { BookOpen, Clock, Flame, Target } from "lucide-react";
import { StartsCard } from "@/components/ui/starts-card";

export default async function Home() {
  return (
    <Box m={"auto"} maxW={"7xl"} px={"4"} py={"8"} as={"main"} flex={1} p={4}>
      <Card.Root
        mb={8}
        bg={"blue.700"}
        overflow="hidden"
        borderRadius="2xl"
        color="white"
        boxShadow="lg"
      >
        <Card.Body p={{ base: 6, sm: 8 }}>
          <Flex
            direction={{ base: "column", sm: "row" }}
            justify="space-between"
            align={{ base: "flex-start", sm: "center" }}
            gap={4}
          >
            <Box>
              <Heading size={{ base: "lg", sm: "xl" }}>Olá, Estudante!</Heading>
              <Text mt={1} color="blue.100">
                Continue sua jornada rumo à aprovação
              </Text>
            </Box>

            <HStack gap={6}>
              <VStack gap={1}>
                <HStack gap={1}>
                  <Box color="orange.300">
                    <Flame size={20} />
                  </Box>
                  <Text fontSize="2xl" fontWeight="bold">
                    7
                  </Text>
                </HStack>
                <Text fontSize="xs" color="blue.200">
                  Dias seguidos
                </Text>
              </VStack>

              <VStack gap={1}>
                <Text fontSize="2xl" fontWeight="bold">
                  635
                </Text>
                <Text fontSize="xs" color="blue.200">
                  Questões resolvidas
                </Text>
              </VStack>

              <VStack gap={1}>
                <Text fontSize="2xl" fontWeight="bold">
                  72%
                </Text>
                <Text fontSize="xs" color="blue.200">
                  Taxa de acerto
                </Text>
              </VStack>
            </HStack>
          </Flex>
        </Card.Body>
      </Card.Root>
      <Grid templateColumns="repeat(4, 1fr)" gap={6}>
        <StartsCard title="Matérias" value="12" icon={{ Icon: BookOpen }} colorScheme="blue" />
        <StartsCard title="Questões" value="12" icon={{ Icon: Target }} colorScheme="green" />
        <StartsCard title="Taxa de acerto" value="12" icon={{ Icon: Clock }} colorScheme="red" />
        <StartsCard title="Dias seguidos" value="12" icon={{ Icon: Flame }} colorScheme="yellow" />
      </Grid>
    </Box>
  );
}
