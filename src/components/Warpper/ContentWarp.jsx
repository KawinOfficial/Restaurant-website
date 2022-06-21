import React from "react";
import NavBar from "./NavBar";
import SideBar from "./SideBar";

import { Box, Center } from "@chakra-ui/react";

export default function ContentWarp({ content: Content }) {
  return (
    <>
      <Box bgColor="#e0e0e0" minH="100vh">
        <SideBar />
        <NavBar />
        <Box ml={{ base: "11vw", md: "5vw" }} pt={2} px={5}>
          <Content />
        </Box>
      </Box>
    </>
  );
}
