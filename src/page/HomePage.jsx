import React, { useState, useEffect } from "react";
import {
  Text,
  Box,
  Input,
  Icon,
  InputRightElement,
  IconButton,
  InputGroup,
  Select,
  GridItem,
  Grid,
} from "@chakra-ui/react";
import { MdOutlineSearch } from "react-icons/md";

import { ListBox } from "../components/Home";
import data from "../components/example_data.json";

export default function HomePage() {
  const [realData, setRealData] = useState(data);
  const [selectData, setSelectData] = useState();

  const handleSelect = (value) => {
    const filterData = data.filter((info) => {
      for (var i = 0; i < info.categories.length; i++) {
        if (info.categories[i] == value) {
          return info;
        }
      }
    });
    setRealData(filterData);
    setSelectData(filterData);
  };

  const handleSearch = (e) => {
    const { value } = e.target;
    const filterSearch = selectData.filter((info) =>
      info.name
        .toLocaleLowerCase("en-US")
        .includes(value.toLocaleLowerCase("en-US"))
    );

    if (value == "") {
      setRealData(selectData);
    } else {
      setRealData(filterSearch);
    }
  };

  useEffect(() => {
    const initPage = setTimeout(() => {
      handleSelect("restaurant");
    }, 0);
    return () => {
      clearTimeout(initPage);
    };
  }, []);

  return (
    <>
      <Box
        display={{ base: "", md: "flex" }}
        alignItems="center"
        justifyContent="space-between"
        px={{ md: 8 }}
      >
        <Text fontSize="2xl" fontWeight="semibold">
          Place List
        </Text>

        {/* Search Box */}
        <Grid
          templateColumns={{ base: "repeat(1,1fr)", md: "repeat(3,1fr)" }}
          alignItems="center"
          my={2}
          w={{ base: "100%", md: "50%" }}
        >
          <GridItem mr={5} w="100%">
            <Select
              mb={{ base: 3, md: 0 }}
              pr={{ base: 0, md: 3 }}
              rounded="full"
              bgColor="white"
              borderColor="#0f1e56"
              size="sm"
              color="#9e9e9e"
              onChange={(e) => handleSelect(e.target.value)}
            >
              <option value="restaurant">Restaurant</option>
              <option value="bakery">Bakery</option>
              <option value="cafe">Cafe</option>
            </Select>
          </GridItem>

          <GridItem
            colSpan={{ md: 2 }}
            borderLeft={{ md: "1px" }}
            pl={{ md: 3 }}
          >
            <InputGroup color="#9e9e9e">
              <Input
                placeholder="Search name..."
                rounded="full"
                bgColor="white"
                borderColor="#0f1e56"
                size="sm"
                onChange={handleSearch}
              />
              <InputRightElement
                pb={2}
                children={
                  <IconButton
                    variant="link"
                    icon={<Icon as={MdOutlineSearch} boxSize={5} />}
                  />
                }
              />
            </InputGroup>
          </GridItem>
        </Grid>
      </Box>

      <Grid
        px={{ md: 8 }}
        templateColumns={{
          base: "repeat(1,1fr)",
          md: "repeat(2,1fr)",
          lg: "repeat(3,1fr)",
        }}
        gap={8}
        h={{ base: "83vh", md: "85vh" }}
        overflow="auto"
        rounded="xl"
        pb={3}
      >
        {realData.map((info) => (
          <GridItem key={info.id}>
            <ListBox data={info} />
          </GridItem>
        ))}
      </Grid>
    </>
  );
}
