import { Box, Flex, Grid, Heading, Text, Button } from "@chakra-ui/react";
import { BookOpen, Sparkles, TrendingUp, Plus } from "lucide-react";
import { StartsCard } from "@/components/ui/starts-card";

export default function MateriasPage() {
  return (
    <Box maxW="7xl" mx="auto" p={{ base: 4, md: 8 }}>
      <Flex 
        direction={{ base: "column", md: "row" }} 
        justify="space-between" 
        align={{ base: "flex-start", md: "center" }}
        gap={4}
        mb={8}
      >
        <Box>
          <Heading size="xl" mb={1} color="gray.900" fontWeight="bold">Minhas Materias</Heading>
          <Text color="gray.500" fontSize="md">
            Organize seus estudos e acompanhe seu progresso
          </Text>
        </Box>
        <Button 
          bg="blue.600" 
          color="white" 
          _hover={{ bg: "blue.700" }} 
          borderRadius="lg"
          size="md"
          px={5}
        >
          <Plus size={18} />
          <Text ml={1}>Nova Materia</Text>
        </Button>
      </Flex>

      <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={6}>
        <StartsCard 
          title="Total de Materias" 
          value="6" 
          icon={{ Icon: BookOpen }} 
          colorScheme="blue" 
        />
        <StartsCard 
          title="Concluidas" 
          value="1" 
          icon={{ Icon: Sparkles }} 
          colorScheme="green" 
        />
        <StartsCard 
          title="Progresso Medio" 
          value="61%" 
          icon={{ Icon: TrendingUp }} 
          colorScheme="orange" 
        />
      </Grid>
    </Box>
  );
}
