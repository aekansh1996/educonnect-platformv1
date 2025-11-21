import { Box, Heading, Text, SimpleGrid, VStack, HStack, Circle, Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const HowItWorksSection = () => {
  const navigate = useNavigate();

  const tutorSteps = [
    { step: 1, title: 'Sign up & upload resume', description: '' },
    { step: 2, title: 'AI auto-fills your skills, experience & profile', description: '' },
    { step: 3, title: 'Get matched & apply instantly', description: '' },
  ];

  const orgSteps = [
    { step: 1, title: 'Create your account', description: '' },
    { step: 2, title: 'Post your first job for free', description: '' },
    { step: 3, title: 'Get recommended trainers instantly', description: '' },
  ];

  return (
    <Box bg="gray.50" py={20} px={6}>
      <Box maxW="6xl" mx="auto">
        <Heading as="h2" size="xl" textAlign="center" mb={4} color="blue.800">
          How It Works
        </Heading>
        <Text fontSize="lg" textAlign="center" mb={16} color="gray.600">
          Simple 3-Step Process for Both Tutors & Organizations
        </Text>

        <SimpleGrid columns={[1, 2]} spacing={12}>
          <Box>
            <Heading size="md" mb={8} color="blue.700" textAlign="center">
              For Tutors
            </Heading>
            <VStack spacing={8} align="stretch">
              {tutorSteps.map((item) => (
                <HStack key={item.step} spacing={6} align="flex-start">
                  <Circle size={12} bg="blue.500" color="white" flexShrink={0}>
                    <Text fontWeight="bold" fontSize="lg">{item.step}</Text>
                  </Circle>
                  <Box>
                    <Text fontWeight="bold" color="gray.800" fontSize="md">
                      {item.title}
                    </Text>
                  </Box>
                </HStack>
              ))}
            </VStack>
            <Button
              mt={8}
              w="full"
              colorScheme="blue"
              size="md"
              onClick={() => navigate('/signup')}
            >
              Become a Tutor
            </Button>
          </Box>

          <Box>
            <Heading size="md" mb={8} color="blue.700" textAlign="center">
              For Organizations
            </Heading>
            <VStack spacing={8} align="stretch">
              {orgSteps.map((item) => (
                <HStack key={item.step} spacing={6} align="flex-start">
                  <Circle size={12} bg="blue.500" color="white" flexShrink={0}>
                    <Text fontWeight="bold" fontSize="lg">{item.step}</Text>
                  </Circle>
                  <Box>
                    <Text fontWeight="bold" color="gray.800" fontSize="md">
                      {item.title}
                    </Text>
                  </Box>
                </HStack>
              ))}
            </VStack>
            <Button
              mt={8}
              w="full"
              colorScheme="blue"
              size="md"
              onClick={() => navigate('/signup')}
            >
              Post a Job Free
            </Button>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default HowItWorksSection;
