import { TriangleDownIcon } from '@chakra-ui/icons';
import { Box, Center, Heading, HStack, Image, Text } from '@chakra-ui/react';

export const MainCard = () => {
  return (
    <HStack alignItems={'start'}>
      <Box bg={'green.main'}>
        <Heading
          verticalAlign={'center'}
          color={'blue.main'}
          pl={8}
          my={'auto'}
          pt={1}
          pb={2.5}
          pr={5}
          fontSize={[33, 33, 42, 45, 48, 60]}
        >
          1
        </Heading>
      </Box>
      <Box w={6} />
      <Text textTransform={'uppercase'}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      </Text>
    </HStack>
  );
};

export const MethodCard = () => {
  return (
    <HStack alignItems={'start'} justifyContent="start">
      <Box>
        <TriangleDownIcon
          fontSize={[33, 33, 42, 45, 48, 60]}
          color="blue.main"
        />
      </Box>
      <Box w={6} />
      <Text textTransform={'uppercase'}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      </Text>
    </HStack>
  );
};

export const HexagonCard = () => {
  return (
    <Box pos={'relative'} h={0} pt={'80%'} maxH={'500px'}>
      <Box
        w={'40%'}
        bg={'green.main'}
        pos={'absolute'}
        top={'7%'}
        height={0}
        pt={'40%'}
        left={'50%'}
        transform={'translateX(-50%)'}
      >
        <Center>
          <Text
            pos={'absolute'}
            top={'-12%'}
            fontSize={['0.75em', '0.75em', '0.75em', '1em', '1em', '1me']}
          >
            Lorem, ipsum dolor.
          </Text>
        </Center>
      </Box>
      <Box
        w={'40%'}
        bg={'green.main'}
        pos={'absolute'}
        top={'16.5%'}
        height={0}
        pt={'40%'}
        transform={'rotate(-60deg)'}
        left={'17%'}
      >
        <Center>
          <Text
            pos={'absolute'}
            top={'-12%'}
            fontSize={['0.75em', '0.75em', '0.75em', '1em', '1em', '1me']}
          >
            Lorem, ipsum dolor.
          </Text>
        </Center>
      </Box>
      <Box
        w={'40%'}
        bg={'green.main'}
        pos={'absolute'}
        top={'34.5%'}
        height={0}
        pt={'40%'}
        transform={'rotate(60deg)'}
        left={'17%'}
      >
        <Center>
          <Text fontSize={['0.75em', '0.75em', '0.75em', '1em', '1em', '1me']}>
            Lorem, ipsum dolor.
          </Text>
        </Center>
      </Box>
      <Box
        w={'40%'}
        bg={'green.main'}
        pos={'absolute'}
        top={'43.5%'}
        height={0}
        pt={'40%'}
        left={'50%'}
        fontSize={['0.75em', '0.75em', '0.75em', '1em', '1em', '1me']}
        transform={'translateX(-50%)'}
      >
        <Center>
          <Text>Lorem, ipsum dolor.</Text>
        </Center>
      </Box>
      <Box
        w={'40%'}
        bg={'green.main'}
        pos={'absolute'}
        top={'16.5%'}
        height={0}
        pt={'40%'}
        transform={'rotate(60deg)'}
        right={'17%'}
      >
        <Center>
          <Text
            pos={'absolute'}
            top={'-12%'}
            fontSize={['0.75em', '0.75em', '0.75em', '1em', '1em', '1me']}
          >
            Lorem, ipsum dolor.
          </Text>
        </Center>
      </Box>
      <Box
        w={'40%'}
        bg={'green.main'}
        pos={'absolute'}
        top={'34.5%'}
        height={0}
        pt={'40%'}
        transform={'rotate(-60deg)'}
        right={'17%'}
      >
        <Center>
          <Text fontSize={['0.75em', '0.75em', '0.75em', '1em', '1em', '1me']}>
            Lorem, ipsum dolor.
          </Text>
        </Center>
      </Box>
      <Box
        pos={'absolute'}
        w={'70%'}
        top={'7%'}
        left={'15%'}
        h={0}
        pt={'70%'}
        bg={'white'}
        borderRadius={'100%'}
      ></Box>
      <Box
        pos={'absolute'}
        w={'55%'}
        top={'16.5%'}
        left={'22.5%'}
        h={0}
        pt={'55%'}
        bg={'green.main'}
        borderRadius={'100%'}
      ></Box>
      <Box
        pos={'absolute'}
        w={'38.5%'}
        top={'26.5%'}
        left={'31%'}
        h={0}
        pt={'38.5%'}
        bg={'white'}
      >
        <Center>
          <Text fontSize={['0.75em', '0.75em', '0.75em', '1em', '1em', '1me']}>
            Lorem, ipsum dolor.
          </Text>
        </Center>
        <Center>
          <Text
            pos={'absolute'}
            top={-6}
            fontSize={['0.75em', '0.75em', '0.75em', '1em', '1em', '1me']}
          >
            Lorem, ipsum dolor.
          </Text>
        </Center>
        <Text
          pos={'absolute'}
          transform="translateY(-50%) rotate(90deg) "
          whiteSpace={'nowrap'}
          fontSize={['0.75em', '0.75em', '0.75em', '1em', '1em', '1me']}
          left={['66%', '66%', '66%', '73%', '73%', '73%']}
          top={'50%'}
        >
          Lorem, ipsum dolor.
        </Text>
        <Text
          pos={'absolute'}
          transform="translateY(-50%) rotate(-90deg) "
          whiteSpace={'nowrap'}
          fontSize={['0.75em', '0.75em', '0.75em', '1em', '1em', '1me']}
          right={['66%', '66%', '66%', '73%', '73%', '73%']}
          top={'50%'}
        >
          Lorem, ipsum dolor.
        </Text>
        <Box pos={'absolute'} top={0} w={'100%'}>
          <Image src="/assets/img/logo.png" />
        </Box>
      </Box>
    </Box>
  );
};
