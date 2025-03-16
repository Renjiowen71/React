import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {

  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack 
      backgroundColor="white"
      color="black"
      borderRadius="lg"
      spacing={6}
      >
        
      <Image src={imageSrc} borderRadius="lg" width="100%"></Image>
      <VStack
        pl={1}
        align="flex-start"
        width = "95%"
        spacing={4}
      >
        <Heading fontSize="20px">{title}</Heading>
        <Text color="gray">{description}</Text>
        <HStack pb={4}>
          <Text>See More </Text>
          <FontAwesomeIcon icon={faArrowRight} size="1x"/>
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Card;
