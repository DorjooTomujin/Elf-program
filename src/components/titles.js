import { TriangleDownIcon } from '@chakra-ui/icons';
import {
  Box,
  Container,
  Flex,
  Heading,
  Highlight,
  HStack,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react';
import {BsTriangleFill} from 'react-icons/bs'
export const HomeTitle = () => {
  return (
    <Container
      w={'100%'}
      maxW={'auto'}
      p={0}
      mb={[6, 8, 10, 12, 16]}
      ml={[0, 0, 0, 10, 16]}
    >
      <Box>
      <Image src='/assets/img/elf-curriculum-logo-white.png'/>
    </Box>

      <Box h={10}/>
      <Text
        color={'white'}
        fontWeight="bold"
      >
        өөрийнхөөрөө сэтгэл дүүрэн амьдрах потенциал хүн бүрт
        байдаг.өөрийнхөөрөө сэтгэл дүүрэн амьдрах потенциал хүн бүрт байдаг.
      </Text>
    </Container>
  );
};

export const MainTitle = () => {
  return (
    <Container w={'100%'} maxW={'1340px'} p={0}>
      <Flex alignItems={'start'} w={'100%'}>
        <Box
          transform={'rotate(-90deg)'}
          color={'green.main'}
          fontSize={['33px', '33px', '42px', '45px', '48px', '60px']}
        >
          <TriangleDownIcon />
        </Box>
        <VStack textAlign={'start'} px={5} alignItems="start">
          <Heading textTransform={'uppercase'} color={'blue.main'} w={'80%'}>
            өөрийнхөөрөө сэтгэл дүүрэн амьдрах потенциал хүн бүрт байдаг.
          </Heading>
          <Text>
            өөрийнхөөрөө сэтгэл дүүрэн амьдрах потенциал хүн бүрт
            байдаг.өөрийнхөөрөө сэтгэл дүүрэн амьдрах потенциал хүн бүрт байдаг.
          </Text>
          <Text />
          <Text>
            <Highlight
              query={'өөрийнхөөрөө сэтгэл '}
              styles={{ fontWeight: 'bold' }}
            >
              өөрийнхөөрөө сэтгэл дүүрэн амьдрах потенциал хүн бүрт
              байдаг.өөрийнхөөрөө сэтгэл дүүрэн амьдрах потенциал хүн бүрт
              байдаг.өөрийнхөөрөө сэтгэл дүүрэн амьдрах потенциал хүн бүрт
              байдаг.
            </Highlight>
          </Text>
        </VStack>
      </Flex>
    </Container>
  );
};

export const ProgramTitle = () => {
  return (
    <Box w={'100%'}>
      <Heading
        px={'70px'}
        fontSize={['16px', '16px', '17px', '18px', '20px', '24px']}
        textTransform="uppercase"
        color={'purple.main'}
      >
        Lorem, ipsum dolor.
      </Heading>
      <HStack w={'100%'} maxW={'1340px'}>
        <Box
          transform={'rotate(-90deg)'}
          color={'purple.main'}
          fontSize={['33px', '33px', '42px', '45px', '48px', '60px']}
        >
          <TriangleDownIcon />
        </Box>
        <Heading
          px={'20px'}
          fontSize={['31px', '31px', '35px', '37px', '40px', '50px']}
          color={''}
          textTransform="uppercase"
        >
          Lorem, ipsum dolor.
        </Heading>
      </HStack>
    </Box>
  );
};
export const AdvantageTitle = () => {
  return (
    <HStack w={'100%'} maxW={'1340px'}>
      <Box
        transform={'rotate(-90deg)'}
        color={'purple.main'}
        fontSize={[33, 33, 42, 45, 48, 60]}
      >
        <TriangleDownIcon />
      </Box>
      <VStack alignItems={'start'}>
        <Heading
          px={3}
          fontSize={'3xl'}
          fontWeight="normal"
          color={''}
          textTransform="uppercase"
        >
          Lorem, ipsum dolor.
        </Heading>
        <Heading
          px={3}
          fontSize={'3xl'}
          color={''}
          mt={0}
          textTransform="uppercase"
        >
          Lorem, ipsum dolor.
        </Heading>
      </VStack>
    </HStack>
  );
};

export const PrimaryTitle = () => {
  return (
    <Box flexGrow={2} mb={4}>
      <VStack color={'white'} justifyContent="start" alignItems={'start'} px={2}>
        <Heading
          fontSize={['65px', '18vw', '70px', '75px', '80px', '80px']}
          textTransform="uppercase"
        >
          Арван
        </Heading>
        <Heading
          fontSize={['65px', '18vw', '70px', '75px', '80px', '80px']}
          textTransform="uppercase"
        >
          жилдээ
        </Heading>
        <Heading
          fontSize={['65px', '18vw', '70px', '75px', '80px', '80px']}
          textTransform="uppercase"
        >
          амьдрал
        </Heading>
        <HStack gap={5}>
          <Heading
            fontSize={['117px', '35vw', '150px', '150px', '142px', '150px']}
            textTransform="uppercase"
          >
            үз!
          </Heading>
        </HStack>
      </VStack>
    </Box>
  );
};

export const BasicTitle = () => {
  return (
    <Container maxW={'1340px'} w={'100%'} px={[4,4,4,0,0, 0]}>
      <Flex w={'100%'}>
        <Box
          transform={'rotate(-90deg)'}
          color={'green.main'}
          fontSize={[33, 33, 42, 45, 48, 60]}
        >
          <TriangleDownIcon />
        </Box>
        <VStack alignItems={'start'} px={'20px'}>
          <HStack>
            <Heading>BASICS</Heading>
            <Heading color={'green.main'}>болон</Heading>
            <Heading>MASTERY</Heading>
          </HStack>
          <Text>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus,
            deleniti.
          </Text>
        </VStack>
      </Flex>
    </Container>
  );
};

export const PowerTitle = () => {
  return (
    <Container px={0} mx={0} w={'100%'} alignItems="start" maxW={'auto'}>
      <Flex w={'100%'} alignItems="start">
        <Box
          transform={'rotate(-90deg)'}
          color={'green.main'}
          fontSize={[33, 33, 42, 45, 48, 60]}
        >
          <TriangleDownIcon />
        </Box>
        <VStack alignItems={'start'} px={'20px'} w={'100%'} pr={0}>
          <HStack>
            <Heading>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus, minima.
            </Heading>
          </HStack>
          <Text>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus,
            deleniti.
          </Text>
        </VStack>
      </Flex>
    </Container>
  );
};
export const Title = () => {
  return (
    <VStack gap={4} alignItems={'start'} >
      <HStack color={'white'} fontWeight={600} mb={5}><Text fontSize={'20px'} textTransform='uppercase'>
        Lorem, ipsum.
      </Text>
      <Text fontSize={'20px'} color='green.main' textTransform='uppercase'>
       Lorem, ipsum dolor.
      </Text>
      <Text fontSize={'20px'} textTransform='uppercase'>
       :
      </Text></HStack>
      <VStack gap={10}>
        <HStack alignItems={'start'}>
        <Box bg={'green.main'} w={'40px'} h={'40px'}></Box>
        <Box w={2}/>
        <Text  color='white' fontSize={'20px'}>Lorem ipsum dolor sit amet.</Text>
        </HStack>
        <HStack alignItems={'start'}>
        <Box bg={'green.main'} w={'40px'} h={'40px'}></Box>
        <Box w={2}/>
        <Text  color='white' fontSize={'20px'}>Lorem ipsum dolor sit amet.</Text>
        </HStack>
        <HStack alignItems={'start'}>
        <Box bg={'green.main'} w={'40px'} h={'40px'}></Box>
        <Box w={2}/>
        <Text  color='white' fontSize={'20px'}>Lorem ipsum dolor sit amet.</Text>
        </HStack>
      </VStack>
    </VStack>
  );
};
