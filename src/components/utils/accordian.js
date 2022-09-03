import { AddIcon, MinusIcon, TriangleDownIcon } from "@chakra-ui/icons";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Heading,
  keyframes,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
const spin = keyframes`
    from {transform: rotate(-90deg);}
    to {transform: rotate(0deg)}
  `;
const spin1 = keyframes`
    from {transform: rotate(0deg);}
    to {transform: rotate(-90deg)}
  `;
export const PowerAccordian = () => {
  return (
    <VStack flex={1}>
      <Box px={4}>
        <Heading color={"blue.main"} fontSize={24} textTransform='uppercase'>Lorem, ipsum dolor.</Heading>
        <Box h={4}/>
        <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem explicabo similique eum dolorum reprehenderit consequuntur debitis cum facilis velit quae!</Text>
      </Box>
      <Accordion defaultIndex={[0]} allowMultiple w={'full'}>
        <AccordianItems />
        <AccordianItems />
        <AccordianItems />
        <AccordianItems />
        <AccordianItems />
      </Accordion>
    </VStack>
  );
};

export const AccordianItems = () => {
  const animation = `${spin} 0.3s linear`;
  const animation1 = `${spin1} 0.3s linear`;
  return (
    <AccordionItem border={'none'}>
      {({ isExpanded }) => (
        <>
          <h2>
            <AccordionButton>
              <Box w={'20px'} h={'20px'} bg={'green.main'}/>
              <Box
                flex="1"
                textAlign="left"
                ml={5}
                fontSize={[20]}
                fontWeight={'600'}
              >
                Lorem ipsum dolor sit amet.
              </Box>
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </>
      )}
    </AccordionItem>
  );
};

export const AdvantageAccordian = () => {
  return (
    <Accordion defaultIndex={[0]} allowMultiple>
      <AdvantageAccordianItems />
      <AdvantageAccordianItems />
      <AdvantageAccordianItems />
    </Accordion>
  );
};

export const AdvantageAccordianItems = () => {
  return (
    <AccordionItem>
      <>
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="left" fontSize={"30px"}>
              Lorem ipsum dolor sit amet.
            </Box>
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4} color="black">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </AccordionPanel>
      </>
    </AccordionItem>
  );
};
