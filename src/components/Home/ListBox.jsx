import React, { useState } from "react";
import {
  Box,
  Image,
  Icon,
  Center,
  Grid,
  GridItem,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  useBreakpointValue,
  IconButton,
  useDisclosure,
  Text,
} from "@chakra-ui/react";
import {
  MdCalendarToday,
  MdKeyboardArrowRight,
  MdKeyboardArrowLeft,
} from "react-icons/md";

import Detail from "./Detail";

export default function ListBox({ data }) {
  const [index, setIndex] = useState(0);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const showGallery = useBreakpointValue({ base: true, md: false });

  const { operation_time } = data;

  return (
    <>
      <Popover isLazy isOpen={isOpen} onClose={onClose}>
        <PopoverTrigger>
          <Center
            flexDirection="column"
            rounded="xl"
            bgColor="white"
            shadow="md"
            w="100%"
            h="26vh"
            p={5}
            onMouseEnter={onOpen}
            onMouseLeave={onClose}
            _hover={{
              shadow: "xl",
            }}
          >
            <Grid templateColumns="repeat(6,1fr)" mb={2}>
              <GridItem rowSpan={2} mr={3}>
                <Box boxSize="7vh">
                  <Image
                    boxSize="7vh"
                    fallbackSrc={data.profile_image_url}
                    rounded="lg"
                  />
                </Box>
              </GridItem>

              {/* Name */}
              <GridItem colSpan={5} fontSize="lg" fontWeight="medium">
                {data.name}
              </GridItem>

              {/* Time */}
              <GridItem colSpan={4} display="flex" alignItems="center">
                <Icon as={MdCalendarToday} mr={3} />
                {operation_time[0].time_open} - {operation_time[0].time_close}{" "}
                PM
              </GridItem>

              {/* Rating */}
              <GridItem
                display="flex"
                alignItems="center"
                color="#134b8a"
                fontWeight="medium"
                justifyItems="end"
              >
                <Icon viewBox="0 0 200 200" mr={2}>
                  <path
                    fill="currentColor"
                    d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
                  />
                </Icon>
                {data.rating}
              </GridItem>
            </Grid>

            {/* Image   */}
            <Center>
              {showGallery ? (
                <React.Fragment>
                  <Box display="flex" alignItems="center">
                    <IconButton
                      size="sm"
                      onClick={() => setIndex(index - 1)}
                      variant="ghost"
                      icon={<Icon as={MdKeyboardArrowLeft} />}
                      disabled={index == 0}
                    />
                    <Center w="50vw">
                      <Image
                        h="16vh"
                        fallbackSrc={data.images[index]}
                        rounded="xl"
                      />
                    </Center>
                    <IconButton
                      size="sm"
                      onClick={() => setIndex(index + 1)}
                      variant="ghost"
                      icon={<Icon as={MdKeyboardArrowRight} />}
                      disabled={index == 2}
                    />
                  </Box>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  {data.images.map((pic, i) => (
                    <Box boxSize="100%" key={i}>
                      <Image
                        boxSize="15vh"
                        roundedLeft={i == 0 && "xl"}
                        roundedEnd={i == 2 && "xl"}
                        fallbackSrc={pic}
                      />
                    </Box>
                  ))}
                </React.Fragment>
              )}
            </Center>
          </Center>
        </PopoverTrigger>

        <PopoverContent
          bg="#134b8a"
          color="white"
          border="none"
          fontSize="small"
        >
          <PopoverArrow bg="#134b8a" />
          <PopoverCloseButton />
          <PopoverHeader>{data.name}</PopoverHeader>
          <PopoverBody>
            <Detail data={data} />
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </>
  );
}
