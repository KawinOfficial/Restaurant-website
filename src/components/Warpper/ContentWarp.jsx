import React from "react";
import NavBar from "./NavBar";
import SideBar from "./SideBar";

import { Box } from "@chakra-ui/react";

export default function ContentWarp({ content: Content }) {
  return (
    <>
      <Box bgColor="#F5F6F8" minH="100vh">
        <Box display={{ base: "none", md: "unset" }}>
          <SideBar />
        </Box>
        <NavBar />
        <Box ml={{ base: "0vw", md: "5vw" }} pt={2} px={5}>
          <Content />
        </Box>
      </Box>
    </>
  );
}
