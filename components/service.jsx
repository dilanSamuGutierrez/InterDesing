import React from 'react';
import { Grid, Text, Flex, Heading, Button, Box, Image } from '@chakra-ui/core';

const Service = () => {
  return (
    <Box position="relative">
      <Image
        width={['0%', '0%', '0%', '40%', '60%']}
        maxW="660px"
        position="absolute"
        top="40%"
        left="5%"
        src="/service-bg.png"
        display={['none', 'none', 'none', 'block', 'block']}
        borderColor="white"
        borderWidth="10px"
        borderStyle="solid"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
      />

      <Grid
        backgroundColor="orange.500"
        templateColumns="repeat(12, 1fr)"
        templateRows="repeat(3, 1fr)"
      >
        <Flex
          flexDirection="column"
          flexWrap="nowrap"
          alignItems="center"
          maxW="850px"
          color="white"
          paddingY="88px"
          gridColumn={['2 / 12', '2 / 12', '2 /12', '7 / 13', '7 / 13']}
          gridRow="1 / 4"
        >
          <Heading
            as="h3"
            textTransform="uppercase"
            fontSize={['3xl', '3xl', '5xl', '5xl', '5xl']}
            fontWeight="extrabold"
            mb="8px"
            alignSelf="flex-start"
          >
            Dormitorios que invitan a descansar
          </Heading>

          <Heading
            as="h4"
            fontSize={['lg', 'lg', 'xl', 'xl', 'xl']}
            fontWeight="normal"
            mb="20px"
            alignSelf="flex-start"
          >
            Transformamos tu espacio en un refugio de descanso y bienestar
          </Heading>

          <Text
            fontSize="sm"
            mb="20px"
            alignSelf="flex-start"
            textAlign="left"
            lineHeight="23px"
          >
            Muchos dormitorios no están diseñados para favorecer un sueño profundo,
            generando estrés y cansancio diario. Nuestro equipo de diseñadores
            crea ambientes personalizados, combinando colores, iluminación y
            distribución pensadas para que cada noche sea un momento de relajación
            y comodidad. Dormir bien nunca fue tan fácil.
          </Text>

          <Button
            alignSelf="flex-start"
            backgroundColor="#fff"
            color="orange.500"
            width="fit-content"
          >
            Agenda tu asesoría
          </Button>
        </Flex>
      </Grid>
    </Box>
  );
};

export default Service;