import { Box, Flex, Text, Link, Stack, Divider, VStack } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box bg="gray.900" color="white" py={12}>
      <Box maxW="6xl" mx="auto" px={4}>
        <Flex
          direction={{ base: 'column', md: 'row' }}
          justify="space-between"
          align={{ base: 'center', md: 'flex-start' }}
          mb={8}
        >
          <Box mb={{ base: 8, md: 0 }}>
            <Text fontSize="2xl" fontWeight="bold" mb={2}>
              Trainerstree
            </Text>
            <Text fontSize="sm" color="gray.300">Empowering Learning Connections</Text>
            <Text fontSize="sm" color="gray.300">Bringing Tutors & Organizations Together</Text>
          </Box>

          <Stack direction={{ base: 'column', md: 'row' }} spacing={8} mt={{ base: 4, md: 0 }}>
            <Link href="#" _hover={{ color: 'blue.300' }} fontSize="sm">
              About Us
            </Link>
            <Link href="#" _hover={{ color: 'blue.300' }} fontSize="sm">
              Contact
            </Link>
            <Link href="#" _hover={{ color: 'blue.300' }} fontSize="sm">
              Careers
            </Link>
            <Link href="#" _hover={{ color: 'blue.300' }} fontSize="sm">
              Blog
            </Link>
          </Stack>
        </Flex>

        <Divider mb={6} borderColor="gray.700" />

        <VStack align={{ base: 'center', md: 'flex-start' }} spacing={4} mb={6}>
          <Box textAlign={{ base: 'center', md: 'left' }}>
            <Text fontWeight="bold" color="green.300" mb={1}>
              First Job Free for Employers
            </Text>
            <Text fontSize="sm" color="gray.300">Post your first job posting completely free</Text>
          </Box>
          <Box textAlign={{ base: 'center', md: 'left' }}>
            <Text fontWeight="bold" color="yellow.300" mb={1}>
              0% Commission for Trainers
            </Text>
            <Text fontSize="sm" color="gray.300">Keep 100% of your earnings, no hidden fees</Text>
          </Box>
        </VStack>

        <Divider mb={6} borderColor="gray.700" />

        <Text textAlign="center" fontSize="sm" color="gray.400">
          © {new Date().getFullYear()} Trainerstree. All rights reserved.
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;
