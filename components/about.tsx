import React from 'react'
import { Box, Flex, Heading, Text, Image, Grid } from '@chakra-ui/core'
import Button from './button'

const About: React.FC = () => {
  return (
    <Grid templateColumns="repeat(6, 1fr)" marginY="24" alignItems="center">
      {/* IZQUIERDA: Oferta y CTA */}
      <Flex
        flexDirection="column"
        flexWrap="nowrap"
        gridColumn={['1 / 7', '1 / 7', '1 / 7', '1 / 4', '1 / 4']}
        alignItems="flex-start"
        paddingX={['8', '8', '8', '24', '24']}
        marginX="auto"
        maxW="850px"
      >
        <Heading
          as="h3"
          textTransform="uppercase"
          fontSize="5xl"
          fontWeight="extrabold"
          mb="4"
        >
          Tu dormitorio soñado desde $999.000
        </Heading>

        <Text fontSize="md" mb="6" lineHeight="1.5">
          Transforma tu dormitorio en un espacio moderno, cómodo y relajante. 
          Nuestro equipo de diseño se encarga de todo: distribución, iluminación, 
          colores y mobiliario, para que dormir bien sea natural y placentero.
        </Text>

        <Button>
          Cotiza tu proyecto
        </Button>
      </Flex>

      {/* DERECHA: Imagen */}
      <Box gridColumn="4 / 7">
        <Image
          src="/about-us-bg.png"
          display={['none', 'none', 'none', 'block', 'block']}
          width="100%"
        />
      </Box>
    </Grid>
  )
}

export default About