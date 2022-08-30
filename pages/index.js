import {
  VStack,
  Container,
  Heading,
  Box,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Flex,
  HStack,
  useDisclosure,
  Text,
  Center,
  Image,
} from '@chakra-ui/react';
import {
  BasicTitle,
  HomeTitle,
  MainTitle,
  PowerTitle,
  PrimaryTitle,
  Title,
} from '../src/components/titles';
import {
  TrainingPanel,
  PartnerModal,
  PowerAccordian,
} from '../src/components/utils/';

import {
  HexagonCard,
  MainCard,
  MethodCard,
} from '../src/components/utils/card';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AchievementSplide, MediaSplide } from '../src/components/utils/splide';
export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <VStack overflowX={'hidden'}>
      <Box
        px={0}
        w={'100vw'}
        h={['60vh', '100vw', '80vw', '50vw', '50vw']}
        pos={'relative'}
        overflow="hidden"
        mb={10}
        bgImage="'https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'"
        display={'flex'}
        alignItems="end"
        justifyContent={'start'}
        bgSize="cover"
        bgRepeat={'no-repeat'}
        bgPos="center"
      >
        <HomeTitle />
      </Box>
      <MainTitle />
      <Box h={10} />
      <Box maxW={'1200px'} py={10} w={'100%'} px={[5, 5, 5, 5, 0, 0]}>
        <Tabs isFitted variant="enclosed">
          <TabList>
            <Tab>2-6 нас</Tab>
            <Tab>6-11 нас</Tab>
            <Tab>11-15 нас</Tab>
            <Tab>15-18 нас</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <TrainingPanel />
            </TabPanel>
            <TabPanel>
              <TrainingPanel />
            </TabPanel>
            <TabPanel>
              <TrainingPanel />
            </TabPanel>
            <TabPanel>
              <TrainingPanel />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
      <HStack
        maxW={'1200px'}
        gap={[1.5, 1.5, 2, 4, 6, 8]}
        py={10}
        px={[5, 5, 5, 5, 0, 0]}
      >
        <PartnerModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
        <PartnerModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
        <PartnerModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
        <PartnerModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
      </HStack>
      <Box h={10} />
      <VStack
        maxW={'1360px'}
        px={['10px', '10px', '10px', '10px', '80px', '80px']}
        pb={10}
        gap={10}
        alignItems="start"
      >
        <HStack
          alignItems={'start'}
          gap={10}
          py={10}
          flexDir={['column', 'column', 'row ', 'row', 'row', 'row']}
        >
          <PrimaryTitle />
          <Box flex={1}>
            <Title />
          </Box>
        </HStack>
        <Flex
          w={'100%'}
          gap={10}
          flexDir={['column', 'column', 'column', 'column', 'row', 'row']}
        >
          <VStack
            w={['100%', '100%', '100%', '100%', '25%', '25%']}
            flexDir={['column', 'column', 'row', 'row', 'column', 'column']}
            gap={[2, 2, 4, 10, 0, 0]}
          >
            <MainCard />
            <Box h={4} />
            <MainCard />
            <Box h={4} />
            <MainCard />
          </VStack>
          <HStack
            w={['100%', '100%', '100%', '100%', '75%', '75%']}
            alignItems="start"
            flexDir={['column', 'column', 'row', 'row', 'row', 'row']}
          >
            <Box
              w={['100%', '100%', '55%', '50%', '67%', '67%']}
              pb={[8, 8, 0, 0, 0, 0]}
            >
              <HexagonCard />
            </Box>
            <VStack
              w={['100%', '100%', '45%', '50%', '33%', '33%']}
              flexDir={['row', 'row', 'column', 'column', 'column', 'column']}
            >
              <MethodCard />
              <Box h={4} />
              <MethodCard />
              <Box h={4} />
              <MethodCard />
            </VStack>
          </HStack>
        </Flex>
      </VStack>
      <Box maxW={'1360px'} py={10}>
        <BasicTitle />
        <HStack
          maxW={'1360px'}
          px={['10px', '52px', '10px', '10px', '80px', '80px']}
          py={10}
          justifyContent={'space-between'}
          gap={[2, 2, 8, 8, 10, 10]}
        >
          <Box flex={1}>
            <Heading>basic</Heading>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              odit cupiditate dicta voluptas nisi possimus mollitia officiis
              molestias consequuntur deleniti?
            </Text>
          </Box>
          <Box flex={1}>
            <Heading>basic</Heading>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              odit cupiditate dicta voluptas nisi possimus mollitia officiis
              molestias consequuntur deleniti?
            </Text>
          </Box>
        </HStack>
      </Box>
      <HStack
        maxW={'1340px'}
        w={'100%'}
        py={10}
        gap={10}
        pr={['10px', '10px', '43px', '43px', '80px', '80px']}
        alignItems="start"
        mr={['10px', '10px', '43px', '43px', '80px', '80px']}
        flexDir={['column', 'column', 'row', 'row', 'row', 'row']}
      >
        <Box
          w={[
            '100%',
            '100%',
            'calc(50% + 80px)',
            'calc(50% + 80px)',
            'calc(50% + 80px)',
            'calc(50% + 80px)',
          ]}
        >
          <PowerTitle />
        </Box>
        <Box w={['100%', '100%', '50%', '50%', '50%', '50%']}>
          <PowerAccordian />
        </Box>
      </HStack>
      <Box maxW={'1360px'} px={'80px'} py={10}>
        <Splide
          options={{
            type: 'loop',
            gap: '1rem',
            autoplay: true,
            perPage: 5,
            speed: 1500,
          }}
          style={{ padding: '3rem 5rem' }}
        >
          <AchievementSplide />
          <AchievementSplide />
          <AchievementSplide />
        </Splide>
      </Box>
      <Box maxW={'1200px'} py={10}>
        <Splide
          options={{
            type: 'loop',
            gap: '1rem',
            autoplay: true,
            perPage: 3,
            speed: 1500,
          }}
          style={{ padding: '3rem 5rem', width: '100%' }}
        >
          <MediaSplide />
          <MediaSplide />
          <MediaSplide />
          <MediaSplide />
        </Splide>
      </Box>
    </VStack>
  );
}
