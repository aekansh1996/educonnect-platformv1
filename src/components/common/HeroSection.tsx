// src/components/common/HeroSection.tsx

import { Box, Heading, Text, Stack, Button, Flex } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <Box
      bgGradient="linear(to-r, blue.700, teal.500)"
      color="white"
      py={[16, 24]}
      px={[6, 12]}
      textAlign="center"
    >
      <Flex direction="column" align="center" justify="center" maxW="4xl" mx="auto">
        <Heading fontSize={['3xl', '4xl', '5xl']} mb={4} fontWeight="bold">
          Empowering Learning Connections
        </Heading>
        <Text fontSize={['lg', 'xl']} mb={8} opacity={0.95}>
          Bringing Tutors & Organizations Together – Faster, Smarter, Commission-Free
        </Text>
        <Stack direction={['column', 'row']} spacing={4} justify="center">
          <Button
            size="lg"
            bg="yellow.400"
            color="blue.700"
            fontWeight="bold"
            _hover={{ bg: "yellow.300" }}
            onClick={() => navigate('/signup')}
          >
            Register as Tutor (Free)
          </Button>
          <Button
            size="lg"
            bg="white"
            color="blue.700"
            fontWeight="bold"
            _hover={{ bg: "gray.100" }}
            onClick={() => navigate('/signup')}
          >
            Post First Job Free
          </Button>
          <Button
            size="lg"
            variant="outline"
            color="white"
            borderColor="white"
            _hover={{ bg: "rgba(255,255,255,0.1)" }}
            onClick={() => navigate('/login')}
          >
            Login
          </Button>
        </Stack>
      </Flex>
    </Box>
  );
};

export default HeroSection;
