// src/components/pages/AboutSection.tsx

import { Box, Heading, Text } from '@chakra-ui/react';

const AboutSection = () => {
  return (
    <Box bg="white" py={20} px={6}>
      <Box maxW="4xl" mx="auto" textAlign="center">
        <Heading as="h2" size="xl" mb={8} color="blue.800">
          Why Trainerstree?
        </Heading>
        <Text fontSize="lg" lineHeight="1.8" color="gray.700">
          Trainerstree is India's first commission-free marketplace that connects qualified tutors with organizations, colleges, NGOs, EdTechs, and training companies. We make hiring and getting hired simple, fast, and stress-free.
        </Text>
      </Box>
    </Box>
  );
};

export default AboutSection;
