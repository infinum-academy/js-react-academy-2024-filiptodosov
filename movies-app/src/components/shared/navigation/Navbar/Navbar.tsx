"use client";

import { Box, Flex, Link, Button, useColorModeValue } from "@chakra-ui/react";

export const Navbar = () => {
  const bg = useColorModeValue("gray.100", "gray.900");
  const color = useColorModeValue("gray.800", "white");

  return (
      <Flex bg={bg} px={4} paddingTop={"5"} paddingBottom={"5"} h={16} justifyContent={"space-between"}>
          <Flex justifyContent={"space-between"}>
              <Button variant="solid" colorScheme="blue" as={Link} href={`/shows`}>
              Home
            </Button>
              <Button variant="solid" colorScheme="blue" as={Link} href={`/shows/top-rated`} marginLeft={"5"}>
                Top-rated shows
              </Button>
          </Flex>
        <Flex justifyContent={"space-between"}>
          <Button variant="solid" colorScheme="blue" as={Link} href={`/`}>
            My Profile
          </Button>
          <Button
            marginLeft={"5"}
            variant="solid"
            colorScheme="blue"
            as={Link}
            href={`/logout`}
          >
            Logout
          </Button>
        </Flex>
      </Flex>
  );
};

export default Navbar;
