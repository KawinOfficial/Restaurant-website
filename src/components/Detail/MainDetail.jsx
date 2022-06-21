import React from "react";
import { Box, Grid, GridItem, Icon, Text, Center } from "@chakra-ui/react";

export default function MainDetail({ information, h1, h2 }) {
  return (
    <>
      <Box
        bgColor="white"
        rounded="xl"
        backgroundImage={` url(${information.profile_image_url})`}
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
        h="79vh"
        shadow="md"
      >
        <Box h={h1} />
        <Box h={h2} bgColor="white" roundedBottom="xl" p={5}>
          <Box
            mb={8}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Text fontSize="2xl" fontWeight="semibold">
              {information.name}
            </Text>

            {/* Rating */}
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
          <Grid templateColumns={{ base: "", md: "repeat(3,1fr)" }} gap={3}>
            <GridItem fontWeight="semibold">Address :</GridItem>
            <GridItem colSpan={{ md: 2 }}>{information.address}</GridItem>
            <GridItem fontWeight="semibold">Opening Hour :</GridItem>
            <GridItem colSpan={{ md: 2 }}>
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
      </Box>
    </>
  );
}
