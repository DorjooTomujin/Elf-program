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
} from '@chakra-ui/react';
import {
  BasicTitle,
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
import { TriangleDownIcon } from '@chakra-ui/icons';
export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <VStack>
      <MainTitle />
      <Box maxW={'1200px'} py={10} w={'100%'}>
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
      <HStack maxW={'1200px'} gap={10} py={10}>
        <PartnerModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
        <PartnerModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
        <PartnerModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
        <PartnerModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
      </HStack>
      <VStack maxW={'1200px'} py={10} gap={10} alignItems="start">
        <HStack alignItems={'start'} gap={10}>
          <PrimaryTitle />
          <Box>
            <Title />
          </Box>
        </HStack>
        <Flex>
          <VStack w={'10%'}>
            <Box>
              <TriangleDownIcon />
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur, deleniti.
              </Text>
            </Box>
            <Box>
              <TriangleDownIcon />
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur, deleniti.
              </Text>
            </Box>
            <Box>
              <TriangleDownIcon />
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur, deleniti.
              </Text>
            </Box>
          </VStack>
          <Box></Box>
        </Flex>
      </VStack>
      <Box w={'1360px'}>
        <BasicTitle />
        <HStack
          maxW={'1200px'}
          px={'80px'}
          py={10}
          justifyContent={'space-between'}
        >
          <Box>
            <Heading>basic</Heading>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              odit cupiditate dicta voluptas nisi possimus mollitia officiis
              molestias consequuntur deleniti?
            </Text>
          </Box>
          <Box>
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
        maxW={'1360px'}
        w={'100%'}
        py={10}
        gap={10}
        pr={'80px'}
        alignItems="start"
        mr={'80px'}
      >
        <Box flex={1}>
          <PowerTitle />
        </Box>
        <Box flex={1}>
          <PowerAccordian />
        </Box>
      </HStack>
    </VStack>
  );
}
