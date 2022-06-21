import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Button,
  Box,
  Image,
  Grid,
  GridItem,
  Icon,
  Text,
  useBreakpointValue,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Center,
} from "@chakra-ui/react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import data from "../components/example_data.json";

export default function Detail() {
  const breakpoint = useBreakpointValue({ base: true, md: false });
  const [information, setInformation] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const initPage = setTimeout(() => {
      const detailData = data.find((info) => info.id == location.state);
      setInformation(detailData);
    });

    return () => {
      clearTimeout(initPage);
    };
  }, []);

  if (information == "") {
    return <Box />;
  }
  return (
    <>
      <Button
        bgColor="#134B8A"
        color="white"
        rounded="full"
        px={5}
        onClick={() => navigate("/")}
        mb={3}
        size="sm"
      >
        <Icon as={MdKeyboardArrowLeft} mr={2} />
        BACK
      </Button>

      {breakpoint ? (
        <React.Fragment>
          <Tabs
            isFitted
            variant="soft-rounded"
            colorScheme="green"
            overflow="auto"
            h="87vh"
            rounded="xl"
          >
            <TabList bg="white" rounded="full" shadow="md">
              {["INFORMATION", "IMAGE"].map((text) => (
                <Tab _selected={{ bg: " #134B8A", color: "white" }} key={text}>
                  {text}
                </Tab>
              ))}
            </TabList>

            <TabPanels>
              <TabPanel p={0} py={4}>
                <Box
                  bgColor="white"
                  rounded="xl"
                  backgroundImage={` url(${information.profile_image_url})`}
                  backgroundSize="cover"
                  backgroundRepeat="no-repeat"
                  h="80vh"
                  shadow="md"
                >
                  <Box h="30%" />
                  <Box h="70%" bgColor="white" roundedBottom="xl" p={5}>
                    <Box
                      mb={8}
                      display="flex"
                      alignItems="center"
                      justifyContent="space-between"
                    >
                      <Text fontSize="2xl" fontWeight="semibold">
                        {information.name}
                      </Text>
                      <Center color="#134B8A">
                        <Icon viewBox="0 0 200 200" mr={2}>
                          <path
                            fill="currentColor"
                            d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
                          />
                        </Icon>
                        {information.rating}
                      </Center>
                    </Box>

                    {/* Detail */}
                    <Text fontWeight="semibold">Address :</Text>
                    <Text>{information.address}</Text>

                    <Text mt={8} fontWeight="semibold">
                      Opening Hour :
                    </Text>
                    {information.operation_time.map((datetime, i) => (
                      <Grid
                        templateColumns="repeat(3,1fr)"
                        key={i}
                        alignItems="center"
                      >
                        <GridItem>{datetime.day} :</GridItem>
                        {datetime.time_open != "closed" ? (
                          <GridItem colSpan={2}>
                            {datetime.time_open} - {datetime.time_close} AM
                          </GridItem>
                        ) : (
                          <GridItem colSpan={2}>Close</GridItem>
                        )}
                      </Grid>
                    ))}
                  </Box>
                </Box>
              </TabPanel>

              <TabPanel p={0} py={4}>
                <Box shadow="md" bgColor="white" rounded="xl" px={8} py={5}>
                  <Text fontSize="lg" mb={3}>
                    Images
                  </Text>
                  {information.images.map((pic, i) => (
                    <Image
                      src={pic}
                      key={i}
                      roundedBottom={i == 2 && "xl"}
                      roundedTop={i == 0 && "xl"}
                    />
                  ))}
                </Box>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </React.Fragment>
      ) : (
        <Grid
          templateColumns="repeat(3,1fr)"
          bgColor="#c4d3e9"
          p={5}
          rounded="xl"
          gap={5}
          overflowY="auto"
          h="86vh"
        >
          <GridItem
            colSpan={2}
            bgColor="white"
            rounded="xl"
            backgroundImage={` url(${information.profile_image_url})`}
            backgroundSize="cover"
            backgroundRepeat="no-repeat"
            h="80vh"
          >
            <Box h="50%" />
            <Box h="50%" bgColor="white" roundedBottom="xl" p={5}>
              <Text fontSize="2xl" fontWeight="semibold" mb={5}>
                {information.name}
              </Text>

              {/* Detail */}
              <Grid templateColumns="repeat(3,1fr)" gap={5}>
                <GridItem>Address :</GridItem>
                <GridItem colSpan={2}>{information.address}</GridItem>
                <GridItem>Opening Hour :</GridItem>
                <GridItem colSpan={2}>
                  {information.operation_time.map((datetime, i) => (
                    <Grid
                      templateColumns="repeat(3,1fr)"
                      key={i}
                      alignItems="center"
                    >
                      <GridItem>{datetime.day} :</GridItem>
                      {datetime.time_open != "closed" ? (
                        <GridItem colSpan={2}>
                          {datetime.time_open} - {datetime.time_close} AM
                        </GridItem>
                      ) : (
                        <GridItem colSpan={2}>Close</GridItem>
                      )}
                    </Grid>
                  ))}
                </GridItem>
              </Grid>
            </Box>
          </GridItem>

          {/* Image */}
          <GridItem bgColor="white" rounded="xl" px={8} py={5}>
            <Text fontSize="lg" mb={3}>
              Images
            </Text>
            {information.images.map((pic, i) => (
              <Image
                src={pic}
                key={i}
                roundedBottom={i == 2 && "xl"}
                roundedTop={i == 0 && "xl"}
              />
            ))}
          </GridItem>
        </Grid>
      )}
    </>
  );
}
