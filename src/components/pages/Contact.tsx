import { Box, Heading, Text, VStack, Input, Textarea, Button } from '@chakra-ui/react';
import Navbar from '../common/navbar';
import Footer from '../common/Footer';

const Contact = () => {
  return (
    <>
      <Navbar />

      <Box bg="white" py={20} px={6}>
        <Box maxW="4xl" mx="auto" textAlign="center">
          <Heading as="h2" size="xl" mb={6} color="blue.800">
            Contact Us
          </Heading>

          <Text fontSize="lg" mb={10} color="gray.600">
            We'd love to hear from you! Fill out the form below and we'll get back to you soon.
          </Text>

          <VStack spacing={5} align="stretch" maxW="lg" mx="auto">
            <Input placeholder="Your Name" focusBorderColor="green.400" />
            <Input placeholder="Your Email" type="email" focusBorderColor="green.400" />
            <Textarea placeholder="Your Message" rows={5} focusBorderColor="green.400" />
            <Button colorScheme="green" size="lg" borderRadius="full">
              Send Message
            </Button>
          </VStack>
        </Box>
      </Box>

      <Footer />
    </>
  );
};

export default Contact;
