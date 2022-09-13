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
      <Accordion defaultIndex={[0]} allowMultiple w={'100%'}>
        <AccordianItems />
        <AccordianItems />
        <AccordianItems />
        <AccordianItems />
        <AccordianItems />
      </Accordion>
    </VStack>
  );
};

export const AccordianItems = ({title, text, text1, color}) => {
  const animation = `${spin} 0.3s linear`;
  const animation1 = `${spin1} 0.3s linear`;
  return (
    <AccordionItem border={'none'} w={'full'}>
      {({ isExpanded }) => (
        <>
          <h2>
            <AccordionButton w={'full'} >
              <Box w={'20px'} h={'20px'} bg={'green.main'} />
              <Box
                flex="1"
                textAlign="left"
                ml={5}
                fontSize={[20]}
                fontWeight={'600'}
                color={color}
              >
                {title == undefined ? 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor cumque dol' : title}
              </Box>
            </AccordionButton>
          </h2>
          <AccordionPanel color={color} pb={4} w={'auto'} maxW={['300px','750px', '750px', '900px', '1200px', '1500px']}>
            <Text w='full'>{text == undefined && ('Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor cumque dolorum error reprehenderit consectetur numquam esse soluta possimus, asperiores nobis ipsa odit distinctio assumenda libero eligendi fuga aspernatur amet quidem repellat fugit quam quod laudantium excepturi molestiae. Ex, non ut corrupti aperiam fuga ipsam explicabo eos placeat inventore quis eius.')}{text}</Text>
            <br/>
            <Text>{text1 != '' || text1 != undefined && ''}{text1}</Text>
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

export const Accordions = ({items, color}) => {
  return (

      <Accordion defaultIndex={[0]} allowMultiple w={'90%'} ml={10} >
        {items && items.map((i, index) => {
          return (
            <AccordianItems key={index} title={i.title} text={i.text} text1={i.text1} color={color}/>
          )
        })}
      </Accordion>
  )
}