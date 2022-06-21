import React, { useState } from "react";
import {
  Box,
  Image,
  Icon,
  Center,
  Grid,
  GridItem,
  useBreakpointValue,
  IconButton,
} from "@chakra-ui/react";
import {
  MdCalendarToday,
  MdKeyboardArrowRight,
  MdKeyboardArrowLeft,
} from "react-icons/md";
import { useNavigate } from "react-router-dom";

export default function ListBox({ data }) {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const showGallery = useBreakpointValue({ base: true, md: false });
  const { operation_time } = data;

  return (
    <>
      <Box
        flexDirection="column"
        rounded="xl"
        bgColor="white"
        shadow="md"
        w="100%"
        h={{ base: "40vh", md: "26vh" }}
        p={{ md: 3 }}
        _hover={{
          shadow: "xl",
        }}
        backgroundImage={showGallery && ` url(${data.profile_image_url})`}
        backgroundSize="cover"
        onClick={() => navigate("/detail", { state: data.id })}
      >
        {showGallery && <Box h="30%" />}
        <Box w="100%" p={2} bgColor={showGallery && "white"} roundedBottom="xl">
          <Grid templateColumns="repeat(6,1fr)" mb={2}>
            <GridItem rowSpan={{ md: 2 }} colSpan={{ base: 6, md: 1 }} mr={3}>
              {!showGallery && (
                <Box boxSize="7vh">
                  <Image
                    boxSize="7vh"
                    fallbackSrc={data.profile_image_url}
                    rounded="lg"
                  />
                </Box>
              )}
            </GridItem>

            {/* Name */}
            <GridItem
              colSpan={5}
              fontSize={{ base: "sm", md: "xl" }}
              fontWeight="medium"
            >
              {data.name}
            </GridItem>

            {/* Time */}
            <GridItem colSpan={4} display="flex" alignItems="center">
              <Icon as={MdCalendarToday} mr={3} />
              {operation_time[0].time_open} - {operation_time[0].time_close} PM
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
          {showGallery ? (
            <React.Fragment>
              <Center
                display="flex"
                alignItems="center"
                position="relative"
                w="100%"
              >
                <IconButton
                  rounded="full"
                  mr="100%"
                  size="sm"
                  onClick={() => setIndex(index - 1)}
                  variant="ghost"
                  icon={<Icon as={MdKeyboardArrowLeft} />}
                  disabled={index == 0}
                  position="absolute"
                />
                <Center w="73vw">
                  <Image
                    h="20vh"
                    w="100%"
                    fallbackSrc={data.images[index]}
                    rounded="xl"
                  />
                </Center>
                <IconButton
                  rounded="full"
                  ml="100%"
                  size="sm"
                  onClick={() => setIndex(index + 1)}
                  variant="ghost"
                  icon={<Icon as={MdKeyboardArrowRight} />}
                  disabled={index == 2}
                  position="absolute"
                />
              </Center>
            </React.Fragment>
          ) : (
            <Center>
              {data.images.map((pic, i) => (
                <Box boxSize="100%" key={i}>
                  <Image
                    h="15vh"
                    w="100%"
                    roundedLeft={i == 0 && "xl"}
                    roundedEnd={i == 2 && "xl"}
                    fallbackSrc={pic}
                  />
                </Box>
              ))}
            </Center>
          )}
        </Box>
      </Box>
    </>
  );
}
