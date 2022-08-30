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
export const HomeTitle = () => {
  return (
    <Container
      w={'100%'}
      maxW={'800px'}
      p={0}
      mb={[6, 8, 10, 12, 16]}
      ml={[0, 0, 0, 10, 16]}
    >
      <Flex alignItems={'center'} w={'100%'}>
        <Box
          transform={'rotate(-90deg)'}
          color={'white'}
          fontSize={[33, 33, 42, 45, 48, 60]}
        >
          <TriangleDownIcon />
        </Box>

        <Heading
          textTransform={'uppercase'}
          color={'white'}
          w={'80%'}
          whiteSpace="nowrap"
          ml={'1.25rem'}
        >
          хүчирхэг хүн
        </Heading>
      </Flex>
      <Text
        ml={['4.5em', 16, 20, 20, '4.5em', '5em']}
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
    <Box flex={1} mb={4}>
      <VStack color={''} justifyContent="start" alignItems={'start'} px={2}>
        <Heading
          fontSize={['65px', '18vw', '70px', '75px', '80px', '100px']}
          textTransform="uppercase"
        >
          Арван
        </Heading>
        <Heading
          fontSize={['65px', '18vw', '70px', '75px', '80px', '100px']}
          textTransform="uppercase"
        >
          жилдээ
        </Heading>
        <Heading
          fontSize={['65px', '18vw', '70px', '75px', '80px', '100px']}
          textTransform="uppercase"
        >
          амьдрал
        </Heading>
        <HStack gap={5}>
          <Heading
            fontSize={['117px', '35vw', '150px', '150px', '142px', '180px']}
            textTransform="uppercase"
          >
            үз!
          </Heading>

          <Text fontSize={['16px', '16px', '12px', '16px', '16px', '16px']}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic autem
            aut officia adipisci officiis eligendi ex fuga repellendus
            doloremque possimus.
          </Text>
        </HStack>
      </VStack>
    </Box>
  );
};

export const BasicTitle = () => {
  return (
    <Container maxW={'1340px'} w={'100%'} px={0}>
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
    <VStack gap={4}>
      <Heading fontSize={'30px'}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat,
        exercitationem?
      </Heading>
      <HStack gap={4} alignItems="start" flexDir={['column', 'column']}>
        <Box flex={1} p={2}>
          <Image src="https://images.unsplash.com/photo-1661435805015-37e730f47f9c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
        </Box>
        <Box flex={1}>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
            velit non. Doloremque suscipit omnis eaque, numquam molestias sunt
            sint saepe nostrum atque reiciendis asperiores veniam nam corporis,
            natus voluptatibus reprehenderit!
          </Text>
          <Box h={4} />
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
            ratione hic quis, dolore reiciendis enim qui consequuntur suscipit
            eos, quos perferendis mollitia voluptatum quisquam neque architecto!
            Quidem consequuntur consequatur ipsam adipisci asperiores aperiam,
            neque enim quod quasi harum non ipsum.
          </Text>
        </Box>
      </HStack>
    </VStack>
  );
};
