import React from "react"
import { Grid, Flex, Heading, Box } from "@chakra-ui/core"

const images = [
  "/header/1.jpg",
  "/header/2.jpg",
  "/header/3.jpg",
]

const Hero = () => {
  const [index, setIndex] = React.useState(0)

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length)
    }, 4000) // cambia cada 4s

    return () => clearInterval(interval)
  }, [])

  return (
    <Grid
      backgroundImage={`url(${images[index]})`}
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      height={["60vh", "60vh", "60vh", "70vh"]}
      templateRows="1fr 1fr 1fr"
      transition="background-image 1s ease-in-out"
      position="relative"
    >
      {/* overlay */}
      <Box
        position="absolute"
        top="0"
        right="0"
        bottom="0"
        left="0"
        bg="rgba(0,0,0,0.35)"
      />

      <Flex
        flexDirection="column"
        gridRow="3 / 3"
        paddingX={["1.5em", "1.5em", "1.5em", "15%"]}
        position="relative"
        zIndex={2}
      >
        <Heading
          as="h2"
          fontSize={["4xl", "5xl", "6xl"]}
          color="white"
          bg="orange.500"
          mb="3"
          width="fit-content"
          px="20px"
          py="10px"
        >
          Ideas de Decoración
        </Heading>

        <Heading
          as="h3"
          fontSize={["lg", "lg", "2xl"]}
          textTransform="uppercase"
          color="orange.500"
          bg="white"
          width="fit-content"
          px="28px"
          py="12px"
        >
          Inspiración para tu hogar
        </Heading>
      </Flex>
    </Grid>
  )
}

export default Hero