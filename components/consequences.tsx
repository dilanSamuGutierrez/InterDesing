import React from 'react'
import { Box, Flex, Heading, Text, Image, Button, List, ListItem } from '@chakra-ui/core'

const ConsequencesSection: React.FC = () => {
  return (
    <Flex
      flexDirection={['column', 'column', 'row']}
      bg="gray.50"
      py="20"
      px={['4', '8', '20']}
      alignItems="center"
      justifyContent="space-between"
      mt="12"
    >
      {/* IZQUIERDA: Imagen */}
      <Box flex="1" mb={['12', '12', '0']} mr={['0', '0', '12']}>
        <Image
          src="/header/1.jpg" // Cambia por tu imagen
          alt="Dormitorio sin diseño"
          width="100%"
          borderRadius="20px"
          boxShadow="md"
        />
      </Box>

      {/* DERECHA: Texto y lista de consecuencias */}
      <Box flex="1" maxW="600px">
        <Heading
          as="h3"
          fontSize={['3xl', '4xl', '5xl']}
          mb="6"
          color="orange.500"
        >
          ¿Qué pasa si no diseñas tu dormitorio correctamente?
        </Heading>

        <Text fontSize="md" mb="6" lineHeight="1.5">
          Muchos piensan que un dormitorio solo es un lugar para dormir, pero un mal diseño puede afectar tu descanso, generar estrés y reducir tu bienestar diario. Aquí te contamos las consecuencias:
        </Text>

        <List spacing="4" mb="6">
          <ListItem>Sueño interrumpido y mala calidad de descanso</ListItem>
          <ListItem>Estrés y ansiedad por un espacio desordenado o incómodo</ListItem>
          <ListItem>Pérdida de tiempo y dinero al no aprovechar el espacio</ListItem>
          <ListItem>Ambiente poco acogedor que no invita a relajarte</ListItem>
        </List>

        <Button
          bg="orange.500"
          color="white"
          borderRadius="50px"
          _hover={{ bg: 'orange.600' }}
        >
          Agenda tu asesoría ahora
        </Button>
      </Box>
    </Flex>
  )
}

export default ConsequencesSection