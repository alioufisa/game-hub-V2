  
  import { Box, Text, Container } from "@chakra-ui/react";

  export default function FooterT() {
    return (
      <Box as="footer" bg="white" borderRadius={10}>
        <Container maxW="7xl" overflow="hidden" px={4} py={[20, 20]} mx="auto">
          <Text mt={5} textAlign="center" fontSize='xs' color="gray.500">
            &copy; 2023 Aliou Fisa, Inc. All rights reserved rawg.io
          </Text>
        </Container>
      </Box>
    );
  }
  