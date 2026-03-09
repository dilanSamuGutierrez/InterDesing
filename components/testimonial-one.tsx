import { useState } from "react";
import { Box, Flex, Text, Heading, Button, Image } from "@chakra-ui/core";

const projects = [
  { title: "Sala Moderna", image: "/header/1.jpg" },
  { title: "Minimalista", image: "/header/2.jpg" },
  { title: "Sala Moderna 2017", image: "/header/3.jpg" },
];

export default function InteriorDesignShowcase() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <Box width="100%" py="20" bg="gray.50">
      <Flex
        maxW="1200px"
        mx="auto"
        px="6"
        flexDirection={["column", null, "row"]}
        alignItems="center"
        justifyContent="space-between"
      >
        {/* LEFT TEXT */}
        <Box maxW="420px" mb={["40px", null, "0"]}>
          <Text fontSize="sm" color="orange.500" fontWeight="bold">
            Interior Design Studio
          </Text>

          <Heading mt="3" fontSize="36px" lineHeight="1.2">
            Mira nuestros proyectos
          </Heading>

          <Text mt="4" color="gray.600">
            Cada espacio cuenta una historia. Diseñamos ambientes modernos,
            funcionales y elegantes que transforman la forma en que las personas
            viven su hogar.
          </Text>

          <Button mt="6" bg="orange.500" color="white" borderRadius="50px">
            Ver proyectos
          </Button>
        </Box>

        {/* RIGHT CARDS */}
        <Flex flexWrap="wrap" justifyContent="center">
          {projects.map((item, index) => (
            <Box
              key={index}
              position="relative"
              w="220px"
              h="320px"
              borderRadius="20px"
              overflow="hidden"
              m="10px"
              boxShadow="lg"
              cursor="pointer"
              transition="transform 0.3s"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                transform:
                  hoveredIndex === index ? "translateY(-6px)" : "translateY(0)",
              }}
            >
              <Image
                src={item.image}
                alt={item.title}
                w="100%"
                h="100%"
                objectFit="cover"
                transition="transform 0.4s"
              />

              <Flex
                position="absolute"
                bottom="0"
                w="100%"
                p="4"
                bg="rgba(0,0,0,0.45)"
              >
                <Text color="white" fontWeight="600" fontSize="18px">
                  {item.title}
                </Text>
              </Flex>
            </Box>
          ))}
        </Flex>
      </Flex>
    </Box>
  );
}