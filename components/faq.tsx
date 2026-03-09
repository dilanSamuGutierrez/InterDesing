import React, { useState } from 'react'
import { Box, Flex, Heading, Text, Button } from '@chakra-ui/core'

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: "¿Cuánto cuesta un proyecto de diseño de dormitorio?",
    answer: "Nuestros proyectos empiezan desde $999.000, y cada diseño se adapta a tus necesidades y espacio disponible.",
  },
  {
    question: "¿Cuánto tiempo tardan en entregar el proyecto?",
    answer: "Dependiendo del tamaño del dormitorio, entre 1 a 3 semanas para diseño y planificación completa.",
  },
  {
    question: "¿Incluyen mobiliario en el diseño?",
    answer: "Sí, podemos sugerir y coordinar la compra de muebles, iluminación y decoración para que todo quede perfecto.",
  },
  {
    question: "¿Puedo personalizar el diseño según mis gustos?",
    answer: "Totalmente. Nuestro equipo trabajará contigo para asegurarse de que tu dormitorio refleje tu estilo y comodidad.",
  },
]

const FAQCTA: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <Box bg="gray.50" py="20" px={['4', '8', '20']}>
      <Heading as="h3" fontSize={['3xl', '4xl', '5xl']} textAlign="center" mb="12">
        Preguntas frecuentes
      </Heading>

      <Flex direction="column" maxW="800px" mx="auto" mb="12">
        {faqs.map((item, index) => (
          <Box
            key={index}
            mb="4"
            p="5"
            bg="white"
            borderRadius="16px"
            boxShadow="sm"
            cursor="pointer"
            onClick={() => toggleFAQ(index)}
            style={{
              transition: 'transform 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.02)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            <Text fontWeight="bold" fontSize="lg" mb="2">
              {item.question}
            </Text>

            <Box
              maxHeight={openIndex === index ? '500px' : '0'}
              overflow="hidden"
              transition="all 0.3s ease"
            >
              <Text fontSize="md" color="gray.600" mt={openIndex === index ? 2 : 0}>
                {item.answer}
              </Text>
            </Box>
          </Box>
        ))}
      </Flex>

      {/* CTA completo */}
      <Flex
        direction={['column', 'column', 'row']}
        align="center"
        justify="space-between"
        bg="orange.50"
        p="10"
        borderRadius="24px"
        maxW="800px"
        mx="auto"
      >
        <Box flex="1" mb={['6', '6', '0']}>
          <Heading fontSize={['2xl', '3xl']} mb="4">
            ¿Listo para transformar tu dormitorio?
          </Heading>
          <Text fontSize="md" color="gray.700">
            Agenda tu asesoría personalizada y deja que nuestro equipo diseñe un espacio que refleje tu estilo y comodidad.
          </Text>
        </Box>
        <Button
          bg="orange.500"
          color="white"
          borderRadius="50px"
          px="10"
          py="6"
          _hover={{}} // Chakra Core 0.8 ignora esto, pero no afecta
          size="lg"
        >
          Agenda tu asesoría ahora
        </Button>
      </Flex>
    </Box>
  )
}

export default FAQCTA