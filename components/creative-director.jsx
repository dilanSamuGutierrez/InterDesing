import React from 'react'
import { Flex, Text, Heading, Grid, Image, Box } from '@chakra-ui/core'

const Testimonials = () => {
  const testimonials = [
    {
      name: "Simme John",
      role: "Cliente satisfecho",
      avatar: "/directors/1.png",
      message:
        "Transformaron mi dormitorio en un espacio acogedor y relajante. Ahora duermo mucho mejor y me siento más tranquilo cada día.",
    },
    {
      name: "Marie Smith",
      role: "Cliente feliz",
      avatar: "/directors/2.png",
      message:
        "El equipo entendió exactamente lo que quería. Los colores, la iluminación y la distribución quedaron perfectos. ¡Recomendado!",
    },
    {
      name: "Barbara Jones",
      role: "Cliente contenta",
      avatar: "/directors/3.png",
      message:
        "Mi dormitorio nunca había sido tan cómodo y bonito. Ahora disfruto cada momento en mi habitación, gracias al diseño profesional del equipo.",
    },
  ]

  return (
    <Flex flexDirection="column" alignItems="center" mt={['24', '24', '24', '24', '64']}>
      <Heading as="h3" textTransform="uppercase" mb="12" fontSize={['3xl', '4xl', '5xl']}>
        Testimonios de nuestros clientes
      </Heading>

      <Grid
        gridTemplateColumns={['1fr', '1fr', 'repeat(3, 1fr)']}
        gridGap="8"
        px={['4', '8', '24']}
      >
        {testimonials.map((item, index) => (
          <Box
            key={index}
            bg="white"
            borderRadius="20px"
            boxShadow="md"
            p="6"
            textAlign="center"
            position="relative"
          >
            {/* Avatar */}
            <Image
              src={item.avatar}
              alt={item.name}
              borderRadius="50%"
              width="80px"
              height="80px"
              mx="auto"
              mb="4"
              border="4px solid"
              borderColor="orange.500"
            />

            {/* Testimonio */}
            <Text fontSize="sm" color="gray.600" mb="4">
              "{item.message}"
            </Text>

            {/* Nombre */}
            <Text fontWeight="bold" fontSize="lg">
              {item.name}
            </Text>

            {/* Cargo o rol */}
            <Text fontSize="sm" color="orange.500">
              {item.role}
            </Text>
          </Box>
        ))}
      </Grid>
    </Flex>
  )
}

export default Testimonials