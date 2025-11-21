"use client";

import { BinogiLogo, BinogiWhite } from "@/assets/images";
import LoginSmallImage from "@/assets/images/svg/loginSmallImage.svg";
import { Box, Button, HStack, Stack, Text, VStack } from "@chakra-ui/react";
import { signIn } from "next-auth/react";
import Image from "next/image";

export default function Login({ providers }: any) {
  return (
    <Box h="100vh" overflow="hidden">
      <HStack h="full">
        <Box w="60%" flexDir="column">
          <VStack w="67%" m="0 auto" gap="space2xl">
            <VStack align="start" gap="spaceLg">
              <Box alignSelf="center" minH="7vh" maxH="7vh">
                <Image src={BinogiLogo} width={100} height={100} alt="binogi" />
              </Box>

              <Stack mt="4">
                <Text fontSize="lg" fontWeight="bold">
                  Content Admin
                </Text>
                <Text fontSize="md" fontWeight="light">
                  This tool uses Google SignIn. Make sure you have a binogi
                  email in order to login.
                </Text>
              </Stack>
            </VStack>

            <Box w="full">
              {providers &&
                Object.values(providers).map((provider: any) => (
                  <Box w="full" key={provider.id}>
                    <Button
                      onClick={() => signIn(provider.id)}
                      fontWeight="semibold"
                      border="1px solid black"
                      mt="4"
                    >
                      Sign in with {provider.name}
                    </Button>
                  </Box>
                ))}
            </Box>
          </VStack>
        </Box>

        <VStack
          w="full"
          h="100vh"
          bg="purple.500"
          justifyContent="center"
          alignItems="center"
        >
          <Image
            src={BinogiWhite}
            width={250}
            height={250}
            aria-label="image"
            alt="binogi"
          />
          <Image src={LoginSmallImage} width={500} height={400} alt="binogi" />
        </VStack>
      </HStack>
    </Box>
  );
}
