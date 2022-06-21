import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";

export default function ImgDetail({ information }) {
  return (
    <>
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
    </>
  );
}
