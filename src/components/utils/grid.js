import { GridItem, Text } from '@chakra-ui/react';
import { BsHash } from 'react-icons/bs';
export const IconGrid = () => {
  return (
    <GridItem display={'flex'} alignItems={'center'} justifyContent="center">
      <BsHash fontSize={'20px'} fontWeight={'bold'} />
      <Text>Lorem, ipsum dolor.</Text>
    </GridItem>
  );
};
