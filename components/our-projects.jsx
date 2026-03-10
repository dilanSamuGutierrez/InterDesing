import React from 'react';
import { Flex, Text, Heading, Grid, Image } from '@chakra-ui/core';

const OurProject = () => {
  const images = [
    '/grid/1.png',
    '/grid/2.png',
    '/grid/3.png',
    '/grid/4.png',
    '/grid/5.png',
    '/grid/6.png',
  ];

  return (
    <Flex flexDirection="column" alignItems="center" mt="24">
      <Heading as="h3" textTransform="uppercase" mb="20px">
        Nuestros Proyectos
      </Heading>
      <Text fontSize="16px" mb="32px" maxW="460px" textAlign="center">
        Descubre algunos de nuestros proyectos de diseño de interiores, donde combinamos estilo, funcionalidad y comodidad.
      </Text>
      <Grid
        gridTemplateColumns={['1fr', 'repeat(2, 1fr)', 'repeat(3, 1fr)']}
        gridGap="26px"
        px={['4', '8', '24']}
      >
        {images.map((src, index) => (
          <Image
            key={index}
            src={src}
            borderRadius="16px"
            style={{ transition: 'transform 0.3s, box-shadow 0.3s' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          />
        ))}
      </Grid>
    </Flex>
  );
};

export default OurProject;