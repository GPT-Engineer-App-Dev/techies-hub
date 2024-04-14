import { Box, Heading, Text, Button, Stack, Image, Flex, useColorModeValue } from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      <Flex as="header" align="center" justify="space-between" py={4} px={8} bg={useColorModeValue("gray.100", "gray.900")}>
        <Heading as="h1" size="xl" color="blue.500">
          Particles
        </Heading>
      </Flex>

      <Box as="section" pt={24} pb={12} px={8} textAlign="center">
        <Heading as="h2" size="2xl" mb={4}>
          The marketplace for top software talent
        </Heading>
        <Text fontSize="xl" mb={8}>
          Find vetted developers specializing in React, Node, .NET, Go, JavaScript and more
        </Text>
        <Button as="a" href="/developers" size="lg" colorScheme="blue" rightIcon={<FaArrowRight />}>
          Find developers
        </Button>
      </Box>

      <Box as="section" px={8} pb={24}>
        <Stack spacing={12} direction={["column", "row"]} justify="center">
          <Box maxW="sm" bg="white" rounded="md" shadow="md" px={8} py={12} textAlign="center">
            <Image src="https://images.unsplash.com/photo-1707759642885-42994e023046?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjaGVja21hcmslMjBpY29ufGVufDB8fHx8MTcxMzA2ODIyOHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Vetted" boxSize={16} objectFit="contain" mx="auto" mb={6} />
            <Heading as="h3" size="lg" mb={4}>
              Vetted talent
            </Heading>
            <Text>Every developer is pre-screened for technical skills and professionalism.</Text>
          </Box>

          <Box maxW="sm" bg="white" rounded="md" shadow="md" px={8} py={12} textAlign="center">
            <Image src="https://images.unsplash.com/photo-1454923634634-bd1614719a7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmYXN0JTIwZm9yd2FyZCUyMGljb258ZW58MHx8fHwxNzEzMDY4MjI5fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Quick matching" boxSize={16} objectFit="contain" mx="auto" mb={6} />
            <Heading as="h3" size="lg" mb={4}>
              Quick matching
            </Heading>
            <Text>Get matched with available developers in 48 hours based on your needs.</Text>
          </Box>

          <Box maxW="sm" bg="white" rounded="md" shadow="md" px={8} py={12} textAlign="center">
            <Image src="https://images.unsplash.com/photo-1490814525860-594e82bfd34a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzdGFyJTIwaWNvbnxlbnwwfHx8fDE3MTMwNjgyMjl8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Quality" boxSize={16} objectFit="contain" mx="auto" mb={6} />
            <Heading as="h3" size="lg" mb={4}>
              Quality guaranteed
            </Heading>
            <Text>Only pay if you're 100% satisfied with the developer's work.</Text>
          </Box>
        </Stack>
      </Box>

      <Flex as="footer" align="center" justify="space-between" py={8} px={8} bg={useColorModeValue("gray.100", "gray.900")}>
        <Text>&copy; 2023 Particles. All rights reserved.</Text>
        <Stack as="nav" direction="row" spacing={4}>
          <Button variant="link">About</Button>
          <Button variant="link">Developers</Button>
          <Button variant="link">FAQ</Button>
        </Stack>
      </Flex>
    </Box>
  );
};

export default Index;
