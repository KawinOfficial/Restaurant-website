import React from "react";
import { Box, Image, Divider, Icon, IconButton, Text } from "@chakra-ui/react";
import { logo } from "../img";
import { MdListAlt } from "react-icons/md";

export default function SideBar() {
  return (
    <>
      <Box
        position="absolute"
        w={{ base: "10vw", md: "5vw" }}
        h="100%"
        bgColor="white"
        shadow="lg"
        display="flex"
        flexDirection="column"
        alignItems="center"
        pt="3vh"
        roundedTopEnd={50}
      >
        <Image src={logo} w={{ base: "8vw", md: "4vw" }} />
        <Divider my={5} borderColor="#e0e0e0" />
        <IconButton
          bgColor="#134b8a"
          color="white"
          icon={<Icon as={MdListAlt} boxSize={{ base: 3, md: 6 }} />}
          rounded="lg"
          size="sm"
          _hover={{
            bgColor: "#0f1e56",
          }}
          _active={{
            bgColor: "#0f1e56",
          }}
        />
        <Text fontSize={{ base: "small", md: "md" }}>Place</Text>
        <Divider my={5} borderColor="#e0e0e0" />
      </Box>
    </>
  );
}
