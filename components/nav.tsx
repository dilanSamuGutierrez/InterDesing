import React from "react"
import { Box, Flex, Link, Button } from "@chakra-ui/core"
import Logo from "./logo"

interface MenuItemProps {
  link?: string
}

const MenuItems: React.FC<MenuItemProps> = ({ children, link }) => (
  <Link
    href={link}
    mt={["4", "4", "0", "0"]}
    mr="32px"
    fontWeight="500"
    fontSize="md"
    position="relative"
    _hover={{
      textDecoration: "none",
      color: "#FBA442",
      transition: "0.3s",
    }}
  >
    {children}
  </Link>
)

const Nav = (props) => {
  const [show, setShow] = React.useState(false)
  const handleToggle = () => setShow(!show)

  return (
    <Flex
      as="nav"
      position="fixed"
      top="0"
      zIndex="999"
      width="100%"
      align="center"
      justify="space-between"
      wrap="wrap"
      paddingX={["1.5em", "1.5em", "1.5em", "10%"]}
      paddingY="1.3em"
      bg="rgba(255,255,255,0.9)"
      backdropFilter="blur(10px)"
      boxShadow="sm"
      color="black"
      textTransform="uppercase"
      {...props}
    >
      {/* LOGO */}
      <Flex align="center">
        <Logo />
      </Flex>

      {/* MENU MOBILE */}
      <Box
        display={["block", "block", "none", "none"]}
        cursor="pointer"
        onClick={handleToggle}
      >
        <svg fill="#FBA442" width="24px" viewBox="0 0 20 20">
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </Box>

      {/* MENU */}
      <Flex
        display={[show ? "flex" : "none", show ? "flex" : "none", "flex", "flex"]}
        flexDirection={["column", "column", "row", "row"]}
        alignItems="center"
        width={["full", "full", "auto", "auto"]}
        mt={["16px", "16px", "0", "0"]}
      >
        <Box
          display="flex"
          flexDirection={["column", "column", "row", "row"]}
          alignItems="center"
        >
          <MenuItems link="#">Inicio</MenuItems>
          <MenuItems link="#">Nosotros</MenuItems>
          <MenuItems link="#">Servicios</MenuItems>
          <MenuItems link="#">Galería</MenuItems>
          <MenuItems link="#">Blog</MenuItems>
          <MenuItems link="#">Contacto</MenuItems>
        </Box>

        {/* BOTONES CTA */}
        <Flex
          ml={["0", "0", "12", "20"]}
          mt={["4", "4", "0", "0"]}
          flexDirection={["column", "column", "row", "row"]}
          alignItems="center"
        >
          <Button
            bg="#FBA442"
            color="white"
            mb={["4", "4", "0", "0"]}
            mr={["0", "0", "4", "4"]}
            _hover={{
              bg: "#e8922d",
              transform: "translateY(-2px)",
              boxShadow: "md",
            }}
            transition="0.3s"
          >
            Agenda tu asesoría
          </Button>

          <Button
            variant="ghost"
            _hover={{
              color: "#FBA442",
            }}
          >
            Contáctanos
          </Button>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Nav