import React from 'react'
import { Text, Flex, Grid, Box } from '@chakra-ui/core'
import Logo from './logo'
import {
  FaFacebookF,
  FaTwitter,
  FaGoogle,
  FaInstagram,
  FaYoutube
} from 'react-icons/fa'

const Footer: React.FC = () => {
  return (
    <Grid as="footer" templateColumns="repeat(6, 1fr)" mt="16" mb="16">
      {/* Logo y descripción */}
      <Flex
        flexDirection="column"
        alignItems="flex-start"
        gridColumn={['1 / 7', '1 / 7', '1 / 7', '1 / 3', '1 / 3']}
        pl={['8', '8', '8', '24', '24']}
      >
        <Logo />
        <Text fontSize="sm" mt="4" textAlign="left" lineHeight="22px">
          Nuestro estudio se especializa en diseño de interiores, creando espacios
          funcionales y estéticamente atractivos que reflejan tu estilo único.
        </Text>
        <Flex
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          mt="8"
        >
          <Box as={FaFacebookF} size="22px" color="orange.500" mr="12px" />
          <Box as={FaTwitter} size="22px" color="orange.500" mr="12px" />
          <Box as={FaGoogle} size="22px" color="orange.500" mr="12px" />
          <Box as={FaInstagram} size="22px" color="orange.500" mr="12px" />
          <Box as={FaYoutube} size="22px" color="orange.500" />
        </Flex>
      </Flex>

      {/* Proyectos */}
      <Flex
        flexDirection="column"
        alignItems="flex-start"
        gridColumn={['1 / 7', '1 / 7', '1 / 7', '3 / 4', '3 / 4']}
        paddingX="8"
        mt={['12', '12', '12', '0', '0']}
      >
        <Text color="orange.500" fontWeight="bold" fontSize="20px" mb="8px">
          Proyectos
        </Text>
        <Text mb="6px">Diseño de Sala</Text>
        <Text mb="6px">Decoración de Dormitorio</Text>
        <Text mb="6px">Renovación de Cocina</Text>
        <Text mb="6px">Oficinas Corporativas</Text>
        <Text>Tiendas y Comercios</Text>
      </Flex>

      {/* Contacto */}
      <Flex
        flexDirection="column"
        alignItems="flex-start"
        gridColumn={['1 / 7', '1 / 7', '1 / 7', '4 / 5', '4 / 5']}
        paddingX={['8', '8', '8', '2', '2']}
        mt={['12', '12', '12', '0', '0']}
      >
        <Text color="orange.500" fontWeight="bold" fontSize="20px" mb="8px">
          Contáctanos
        </Text>
        <Text mb="6px">Dirección: Calle 123, Bogotá, Colombia</Text>
        <Text mb="6px">Teléfono: +57 300 1234567</Text>
        <Text>Email: info@dilnic.com</Text>
      </Flex>

      {/* Newsletter */}
      <Flex
        flexDirection="column"
        alignItems="flex-start"
        gridColumn={['1 / 7', '1 / 7', '1 / 7', '5 / 6', '5 / 6']}
        paddingX={['8', '8', '8', '2', '2']}
        mt={['12', '12', '12', '0', '0']}
      >
        <Text color="orange.500" fontWeight="bold" fontSize="20px" mb="8px">
          Boletín
        </Text>
        <Text mb="6px">
          Suscríbete a nuestro boletín para recibir noticias, consejos de diseño
          y promociones exclusivas.
        </Text>
      </Flex>
    </Grid>
  )
}

export default Footer