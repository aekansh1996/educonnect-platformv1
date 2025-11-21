// src/components/common/FAQSection.tsx

import {
  Box,
  Heading,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';

const FAQSection = () => {
  return (
    <Box bg="gray.50" py={16} px={6}>
      <Box maxW="6xl" mx="auto">
        <Heading as="h2" size="xl" textAlign="center" mb={10} color="blue.800">
          Frequently Asked Questions
        </Heading>

        <Accordion allowMultiple boxShadow="md" borderRadius="md" bg="white" p={4}>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontWeight="medium">
                  Is the first job posting free?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              YES! Organizations get their first job posting completely free. You can post your initial opportunity without any cost and start receiving trainer recommendations instantly.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontWeight="medium">
                  Do you charge trainers any commission?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              NO! Trainerstree is commission-free for tutors. You keep 100% of your earnings. We believe tutors should be fairly compensated for their expertise and time.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontWeight="medium">
                  Is resume scanning automatic?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              YES, AI-powered! Our intelligent resume scanner automatically reads your resume and fills your profile with skills, experience, and specializations. No manual data entry needed.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontWeight="medium">
                  What types of organizations use Trainerstree?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Colleges, universities, NGOs, EdTech companies, corporates, training institutes, and any organization looking to hire skilled trainers and instructors.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontWeight="medium">
                  How does the AI matching work?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Our AI analyzes trainer profiles, skills, experience, and specializations to recommend the best matches for job postings. This ensures tutors get relevant opportunities and organizations find the right fit.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontWeight="medium">
                  Can I apply to multiple opportunities?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Yes! You can apply to as many opportunities as you want. With one-click applications, you can easily find and apply for multiple roles that match your expertise.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
    </Box>
  );
};

export default FAQSection;
