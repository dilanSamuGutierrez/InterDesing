import React, { useState, useEffect } from "react";
import { Box } from "@chakra-ui/core";
import { FaWhatsapp, FaArrowUp } from "react-icons/fa";

const FloatingButtons: React.FC = () => {
  const [showScroll, setShowScroll] = useState(false);
  const [hoverLeft, setHoverLeft] = useState(false);
  const [hoverRight, setHoverRight] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScroll(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      {/* WhatsApp flotante izquierda */}
      <Box
        as="button"
        position="fixed"
        bottom="30px"
        left="30px"
        zIndex={1000}
        w="50px"
        h="50px"
        borderRadius="full"
        bg={hoverLeft ? "green.600" : "green.500"}
        display="flex"
        alignItems="center"
        justifyContent="center"
        boxShadow="md"
        style={{
          transform: hoverLeft ? "scale(1.1)" : "scale(1)",
          transition: "0.3s",
        }}
        onMouseEnter={() => setHoverLeft(true)}
        onMouseLeave={() => setHoverLeft(false)}
      >
        <FaWhatsapp size={24} color="white" />
      </Box>

      {/* Scroll to Top flotante derecha */}
      {showScroll && (
        <Box
          as="button"
          position="fixed"
          bottom="30px"
          right="30px"
          zIndex={1000}
          w="50px"
          h="50px"
          borderRadius="full"
          bg={hoverRight ? "orange.600" : "orange.500"}
          display="flex"
          alignItems="center"
          justifyContent="center"
          boxShadow="md"
          style={{
            transform: hoverRight ? "scale(1.1)" : "scale(1)",
            transition: "0.3s",
          }}
          onMouseEnter={() => setHoverRight(true)}
          onMouseLeave={() => setHoverRight(false)}
          onClick={scrollToTop}
        >
          <FaArrowUp size={24} color="white" />
        </Box>
      )}
    </>
  );
};

export default FloatingButtons;