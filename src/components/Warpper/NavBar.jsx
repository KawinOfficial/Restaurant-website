import React from "react";
import {
  Box,
  Spacer,
  Icon,
  Avatar,
  Menu,
  MenuButton,
  Button,
  Center,
  useBreakpointValue,
  Image,
} from "@chakra-ui/react";
import { MdNotifications, MdKeyboardArrowDown } from "react-icons/md";
import { Cover, logo } from "../img";

export default function NavBar() {
  const breakpoint = useBreakpointValue({ base: true, md: false });

  return (
    <>
      <Box
        h="5vh"
        bgColor="#134b8a"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        px={3}
      >
        {breakpoint && <Image src={logo} h="4vh" rounded="lg" />}

        <Spacer />

        <Box display="flex" alignItems="center">
          <Center mr={6}>
            {!breakpoint && (
              <React.Fragment>
                <Icon as={MdNotifications} color="#fff" boxSize={6} />
                <Icon
                  viewBox="0 0 200 200"
                  position="absolute"
                  color="#9e9e9e"
                  mb={2}
                  ml={3}
                  className="blink-status"
                >
                  <path
                    fill="currentColor"
                    d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
                  />
                </Icon>
              </React.Fragment>
            )}
          </Center>

          <Avatar src={Cover} bg="teal.500" boxSize={7} mr={1} />

          {!breakpoint && (
            <Menu>
              <MenuButton
                as={Button}
                rightIcon={<Icon as={MdKeyboardArrowDown} />}
                bgColor="#134b8a"
                size="sm"
                color="white"
                rounded="full"
                _hover={{
                  bgColor: "#0f1e56",
                }}
                _active={{
                  bgColor: "#0f1e56",
                }}
              >
                Kawin Srisomphan
              </MenuButton>
              {/* <MenuList>
              <MenuItem>Download</MenuItem>
              <MenuItem>Create a Copy</MenuItem>
              <MenuItem>Mark as Draft</MenuItem>
              <MenuItem>Delete</MenuItem>
              <MenuItem>Attend a Workshop</MenuItem>
            </MenuList> */}
            </Menu>
          )}
        </Box>
      </Box>
    </>
  );
}
