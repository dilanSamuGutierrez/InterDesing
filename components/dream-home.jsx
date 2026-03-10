import React from 'react'
import { Flex, Heading, Image, Text } from '@chakra-ui/core'
import Button from './button'

const DreamHome = () => {
  return (
    <Flex width="100%" flexDirection="column" alignItems="center" mt="20" mb="12">
      {/* TITULO PRINCIPAL */}
      <Heading
        as="h3"
        mb="20"
        fontSize={["2xl", "2xl", "3xl", "3xl"]}
        textAlign="center"
        marginX="auto"
      >
        Dile adiós a los dormitorios que no invitan a descansar
      </Heading>

      <Text
        fontSize="md"
        color="gray.600"
        textAlign="center"
        mb="12"
        maxW="700px"
      >
        Muchos dormitorios hoy en día generan estrés, mala postura y sueño
        interrumpido. Nuestra misión es transformar tu espacio en un lugar
        donde relajarte, desconectar y dormir profundamente sea fácil y natural.
      </Text>

      <Flex
        width="90%"
        flexDirection={["column", "column", "column", "row"]}
        justifyContent="space-between"
        alignItems="center"
        maxW="1280px"
        mb="12"
      >
        {/* ITEM 1 */}
        <Flex
          flexDirection="row"
          alignItems="center"
          maxW="380px"
          mb={["8", "8", "8", "0"]}
        >
          <Image
            src="/icon/power-icon.png"
            alt="Consulta"
            width="50px"
            height="50px"
            mr="18px"
          />

          <Flex flexDirection="column" fontSize="xl">
            <Text fontWeight="bold">Problema: Dormir mal cada noche</Text>

            <Text fontSize="sm">
              Muchos dormitorios no están diseñados para favorecer el descanso. 
              Nuestros expertos crean un plan personalizado para que tu espacio te
              ayude a relajarte y dormir mejor.
            </Text>
          </Flex>
        </Flex>

        {/* ITEM 2 */}
        <Flex
          flexDirection="row"
          alignItems="center"
          maxW="380px"
          mb={["8", "8", "8", "0"]}
        >
          <Image
            src="/icon/rocket-icon.png"
            alt="Diseño rápido"
            width="50px"
            height="50px"
            mr="18px"
          />

          <Flex flexDirection="column" fontSize="xl">
            <Text fontWeight="bold">Problema: Espacios que generan estrés</Text>

            <Text fontSize="sm">
              Colores, luz y distribución inadecuada provocan ansiedad. Creamos
              diseños pensados para generar calma y favorecer un sueño profundo.
            </Text>
          </Flex>
        </Flex>

        {/* ITEM 3 */}
        <Flex
          flexDirection="row"
          alignItems="center"
          maxW="380px"
          mb={["8", "8", "8", "0"]}
        >
          <Image
            src="/icon/power-icon.png"
            alt="Comodidad"
            width="50px"
            height="50px"
            mr="18px"
          />

          <Flex flexDirection="column" fontSize="xl">
            <Text fontWeight="bold">Problema: Dormitorios incómodos</Text>

            <Text fontSize="sm">
              Muchos espacios no invitan a descansar ni relajarse. Creamos
              ambientes cómodos y agradables que transforman tu dormitorio en un
              refugio de bienestar.
            </Text>
          </Flex>
        </Flex>
      </Flex>

      <Button>
        Agenda tu asesoría ahora
      </Button>
    </Flex>
  )
}

export default DreamHome