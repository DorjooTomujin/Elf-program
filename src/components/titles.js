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

export const MainTitle = () => {
  return (
    <Container w={'100%'} maxW={'1360px'} p={0}>
      <Flex alignItems={'start'} w={'100%'}>
        <Box transform={'rotate(-90deg)'} color={'green.main'} fontSize={60}>
          <TriangleDownIcon />
        </Box>
        <VStack textAlign={'start'} px={'20px'} alignItems="start">
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

export const PrimaryTitle = () => {
  return (
    <Box flex={1}>
      <VStack color={''} justifyContent="start" alignItems={'start'}>
        <Heading fontSize={'100px'} textTransform="uppercase">
          Арван
        </Heading>
        <Heading fontSize={'100px'} textTransform="uppercase">
          жилдээ
        </Heading>
        <Heading fontSize={'100px'} textTransform="uppercase">
          амьдрал
        </Heading>
        <HStack gap={5}>
          <Heading fontSize={'180px'} textTransform="uppercase">
            үз!
          </Heading>

          <Text>
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
    <Container maxW={'1360px'} w={'100%'} px={0}>
      <Flex w={'100%'}>
        <Box transform={'rotate(-90deg)'} color={'green.main'} fontSize={60}>
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
        <Box transform={'rotate(-90deg)'} color={'green.main'} fontSize={60}>
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
      <HStack gap={10} alignItems="start">
        <Box flex={1}>
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
