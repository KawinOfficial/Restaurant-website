import React from "react";
import {
  Box,
  Text,
  Grid,
  GridItem,
  Badge,
  Icon,
  Center,
} from "@chakra-ui/react";
import { MdCalendarToday } from "react-icons/md";

export default function Detail({ data }) {
  const colorBadge = (cate) => {};
  return (
    <>
      <Text>Address: {data.address}</Text>
      <Box display="flex" alignItems="center" my={2}>
        <Text>Categories: </Text>
        {data.categories.map((cate) => (
          <Badge bg="#c4d3e9" mx={2} key={cate}>
            {cate}
          </Badge>
        ))}
      </Box>

      <Text>Operation Time: </Text>
      {data.operation_time.map((datetime, i) => (
        <Grid templateColumns="repeat(2,1fr)" key={i} alignItems="center">
          <GridItem pl={10}>{datetime.day} :</GridItem>
          {datetime.time_open != "closed" ? (
            <GridItem>
              {datetime.time_open} - {datetime.time_close} AM
            </GridItem>
          ) : (
            <GridItem color="#9e9e9e">Close</GridItem>
          )}
        </Grid>
      ))}
    </>
  );
}
