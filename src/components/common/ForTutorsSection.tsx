import { Box, Heading, Text, Button, VStack, HStack, Icon } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';

const ForTutorsSection = () => {
  const navigate = useNavigate();
  const benefits = [
    '0% commission – keep 100% of your earnings',
    'Work with colleges, NGOs, corporates & EdTechs',
    'AI auto-reads your resume & auto-fills your profile',
    'Get matched only with relevant roles',
    'Apply in one click',
    'Build long-term teaching partnerships',
  ];

  return (
    <Box bg="white" py={20} px={6}>
      <Box maxW="6xl" mx="auto">
        <VStack align="start" spacing={12}>
          <Box>
            <Heading as="h2" size="xl" mb={4} color="blue.800">
              For Tutors (Teachers / Trainers)
            </Heading>
            <Text fontSize="lg" mb={6} color="gray.700" fontWeight="500">
              Grow Your Training Career With Zero Commission
            </Text>
            <Text fontSize="md" color="gray.600">
              Find genuine, high-quality teaching opportunities.
            </Text>
          </Box>

          <Box>
            <Heading size="md" mb={6} color="blue.700">
              Benefits for Tutors:
            </Heading>
            <VStack align="start" spacing={4}>
              {benefits.map((benefit, index) => (
                <HStack key={index} spacing={3}>
                  <Icon as={CheckCircleIcon} color="green.500" boxSize={6} />
                  <Text color="gray.700">{benefit}</Text>
                </HStack>
              ))}
            </VStack>
          </Box>

          <Button
            size="lg"
            bg="green.600"
            color="white"
            fontWeight="bold"
            _hover={{ bg: "green.700" }}
            onClick={() => navigate('/signup')}
          >
            Create Your Trainer Profile (Free)
          </Button>
        </VStack>
      </Box>
    </Box>
  );
};

export default ForTutorsSection;
