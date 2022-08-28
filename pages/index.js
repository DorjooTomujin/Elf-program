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
} from "@chakra-ui/react";
import {
  BasicTitle,
  HomeTitle,
  MainTitle,
  PowerTitle,
  PrimaryTitle,
  Title,
} from "../src/components/titles";
import {
  TrainingPanel,
  PartnerModal,
  PowerAccordian,
} from "../src/components/utils/";
import { TriangleDownIcon } from "@chakra-ui/icons";
import {HexagonCard, MainCard, MethodCard} from '../src/components/utils/card'
export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <VStack overflowX={'hidden'}>
      <Box px={0}  w={'100vw'} h={'100vh'} pos={'relative'} overflow='hidden'  mb={10}>
        <Image src={'https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'} pos={'absolute'} top={'50%'} transform={'translateY(-50%)'} w={'100vw'}/>
        <HomeTitle/>
      </Box>
      <MainTitle /> 
      <Box h={10}/>
      <Box maxW={"1200px"} py={10} w={"100%"}>
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
      <HStack maxW={"1200px"} gap={10} py={10}>
        <PartnerModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
        <PartnerModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
        <PartnerModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
        <PartnerModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
      </HStack>
      <Box h={10}/>
      <VStack maxW={"1360px"} px={"80px"} py={10} gap={10} alignItems="start">
        <HStack alignItems={"start"} gap={10} p={10}>
          <PrimaryTitle />
          <Box flex={1}>
            <Title />
          </Box>
        </HStack>
        <Flex w={"100%"} gap={10}>
          <VStack w={'25%'}>
            <MainCard/>
            <Box h={4}/>
            <MainCard/>
            <Box h={4}/>
            <MainCard/>
          </VStack>
          <Box w={'50%'}>
            <HexagonCard/>
          </Box>
          <VStack w={'25%'}>
          <MethodCard/>
          <Box h={4}/>
          <MethodCard/>
          <Box h={4}/>
          <MethodCard/>
          </VStack>

        </Flex>
      </VStack>
      <Box w={"1360px"}  py={10}>
        <BasicTitle />
        <HStack
          maxW={"1360px"}
          px={"80px"}
          py={10}
          justifyContent={"space-between"}
          gap={10}
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
        maxW={"1360px"}
        w={"100%"}
        py={10}
        gap={10}
        pr={"80px"}
        alignItems="start"
        mr={"80px"}
      >
        <Box w={'calc(50% + 80px)'}>
          <PowerTitle />
        </Box>
        <Box w={'50%'}>
          <PowerAccordian />
        </Box>
      </HStack>
    </VStack>
  );
}
