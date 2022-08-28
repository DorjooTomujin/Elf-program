import { AddIcon, MinusIcon, TriangleDownIcon } from '@chakra-ui/icons';
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  keyframes,
} from '@chakra-ui/react';
import { useState } from 'react';
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
    <Accordion defaultIndex={[0]} allowMultiple>
      <AccordianItems />
      <AccordianItems />
      <AccordianItems />
      <AccordianItems />
      <AccordianItems />
    </Accordion>
  );
};

export const AccordianItems = () => {
  const animation = `${spin} 0.3s linear`;
  const animation1 = `${spin1} 0.3s linear`;
  return (
    <AccordionItem>
      {({ isExpanded }) => (
        <>
          <h2>
            <AccordionButton>
              <Box
                transform={isExpanded ? 'rotate(0deg)' : 'rotate(-90deg)'}
                animation={isExpanded ? animation : animation1}
                color={'green.main'}
                fontSize={40}
                _active={{ transition: 1, rotate: '0deg' }}
              >
                <TriangleDownIcon />
              </Box>

              <Box flex="1" textAlign="left" ml={5} fontSize={'30px'}>
                Lorem ipsum dolor sit amet.
              </Box>
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} ml={16}>
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
