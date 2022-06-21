import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Button,
  Box,
  Grid,
  GridItem,
  Icon,
  useBreakpointValue,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import data from "../components/example_data.json";

import { ImgDetail, MainDetail } from "../components/Detail";

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
        _hover={{
          bgColor: "#0f1e56",
        }}
        _active={{
          bgColor: "#0f1e56",
        }}
      >
        <Icon as={MdKeyboardArrowLeft} mr={2} />
        BACK
      </Button>

      {breakpoint ? (
        <React.Fragment>
          <Tabs
            isFitted
            variant="soft-rounded"
            overflow="auto"
            h="88vh"
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
                <MainDetail information={information} h1="35%" h2="65%" />
              </TabPanel>

              <TabPanel p={0} py={4}>
                <ImgDetail information={information} />
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
          <GridItem colSpan={2}>
            <MainDetail information={information} h1="50%" h2="50%" />
          </GridItem>

          {/* Image */}
          <GridItem>
            <ImgDetail information={information} />
          </GridItem>
        </Grid>
      )}
    </>
  );
}
