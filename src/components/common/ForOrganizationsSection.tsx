import { Box, Heading, Text, Button, VStack, HStack, Icon } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';

const ForOrganizationsSection = () => {
  const navigate = useNavigate();
  const benefits = [
    'First job posting is completely FREE',
    'Access verified trainers (IT, Management, Soft Skills, Finance, HR & more)',
    'View trainer experience, resume & specialization',
    'AI-assisted matching recommends the BEST trainers',
    'Easy shortlisting & direct communication',
    'No long contracts, no hidden fees',
  ];

  return (
    <Box bg="blue.50" py={20} px={6}>
      <Box maxW="6xl" mx="auto">
        <VStack align="start" spacing={12}>
          <Box>
            <Heading as="h2" size="xl" mb={4} color="blue.800">
              For Organizations (Employers)
            </Heading>
            <Text fontSize="lg" mb={6} color="gray.700" fontWeight="500">
              Hire Skilled Trainers – First Job Posting FREE
            </Text>
            <Text fontSize="md" color="gray.600">
              Trainerstree helps institutions find the right trainers in minutes.
            </Text>
          </Box>

          <Box>
            <Heading size="md" mb={6} color="blue.700">
              Benefits for Organizations:
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
            bg="blue.600"
            color="white"
            fontWeight="bold"
            _hover={{ bg: "blue.700" }}
            onClick={() => navigate('/signup')}
          >
            Post Your First Job – Free
          </Button>
        </VStack>
      </Box>
    </Box>
  );
};

export default ForOrganizationsSection;
