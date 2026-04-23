import { Box, Card, Flex, Text } from "@chakra-ui/react";
import type { LucideIcon } from "lucide-react";

type StartsCardProps = {
  title: string;
  value: string;
  icon: { Icon: LucideIcon; color?: string };
  colorScheme?: string;
};

export const StartsCard = ({ title, value, icon, colorScheme = "blue" }: StartsCardProps) => {
  return (
    <Card.Root 
      rounded="2xl" 
      bg={`${colorScheme}.50`} 
      border="1px solid"
      borderColor={`${colorScheme}.100`}
      boxShadow="sm"
      position="relative"
      overflow="hidden"
      flex="1"
    >
      {/* Círculo decorativo na direita */}
      <Box 
        position="absolute"
        right="-30px"
        top="50%"
        transform="translateY(-50%)"
        w="120px"
        h="120px"
        bg={`${colorScheme}.100`}
        opacity={0.6}
        borderRadius="full"
      />
      <Card.Body position="relative" zIndex={1} py={5} px={6}>
        <Flex align="center" gap={4}>
          <Flex boxSize="48px" align="center" justify="center" borderRadius="xl" bg={`${colorScheme}.500`} shadow="sm">
            <Box color="white">
              <icon.Icon size={24} />
            </Box>
          </Flex>

          <Box>
            <Text fontSize="sm" fontWeight="semibold" color={`${colorScheme}.600`} mb={0.5}>
              {title}
            </Text>
            <Text fontSize="2xl" fontWeight="bold" color="gray.900" lineHeight="1">
              {value}
            </Text>
          </Box>
        </Flex>
      </Card.Body>
    </Card.Root>
  );
};
