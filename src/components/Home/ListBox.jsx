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

function ButtonImg({ icon, onClick, disabled }) {
  return (
    <IconButton
      rounded="full"
      size="xs"
      variant="solid"
      onClick={onClick}
      icon={<Icon as={icon} />}
      disabled={disabled}
    />
  );
}

export default function ListBox({ data }) {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const breakpoint = useBreakpointValue({ base: true, md: false });

  const { operation_time } = data;

  return (
    <>
      <Box
        rounded="xl"
        bgColor="white"
        shadow="lg"
        h={{ base: "45vh", md: "27vh" }}
        p={{ md: 3 }}
        backgroundImage={breakpoint && ` url(${data.profile_image_url})`}
        backgroundSize="cover"
        onClick={() => navigate("/detail", { state: data.id })}
        position="relative"
      >
        {breakpoint && (
          <React.Fragment>
            <Box
              position="absolute"
              bgColor="#134b8a"
              color="white"
              w="25%"
              py={2}
              textAlign="center"
              rounded="full"
              shadow="md"
              ml="70%"
              mt="23%"
            >
              {data.rating}
            </Box>
            <Box h="30%" />
          </React.Fragment>
        )}

        <Box p={2} bgColor="white" roundedBottom="xl">
          <Grid templateColumns="repeat(6,1fr)" mb={2}>
            <GridItem rowSpan={{ md: 2 }} colSpan={{ base: 6, md: 1 }} mr={3}>
              {!breakpoint && (
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
              fontSize={{ base: "md", md: "xl" }}
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
            {!breakpoint && (
              <GridItem
                display="flex"
                alignItems="center"
                color="#134b8a"
                fontWeight="medium"
              >
                <Icon viewBox="0 0 200 200" mr={2}>
                  <path
                    fill="currentColor"
                    d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
                  />
                </Icon>
                {data.rating}
              </GridItem>
            )}
          </Grid>

          {/* Image   */}
          {breakpoint ? (
            <Center
              justifyContent="space-between"
              backgroundImage={` url(${data.images[index]})`}
              backgroundSize="cover"
              rounded="xl"
              h="24vh"
              px={1}
            >
              <ButtonImg
                icon={MdKeyboardArrowLeft}
                onClick={(e) => {
                  e.stopPropagation();
                  setIndex(index - 1);
                }}
                disabled={index == 0}
              />

              <ButtonImg
                icon={MdKeyboardArrowRight}
                onClick={(e) => {
                  e.stopPropagation();
                  setIndex(index + 1);
                }}
                disabled={index == 2}
              />
            </Center>
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
