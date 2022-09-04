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
  Grid,
  GridItem,
  Highlight,
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

import {
  BasicCard,
  HexagonCard,
  MainCard,
  MethodCard,
  ProgramCard,
} from "../src/components/utils/card";
import { Splide, SplideSlide } from "@splidejs/react-splide";

import { AchievementSplide, MediaSplide } from "../src/components/utils/splide";

import { useRouter } from "next/router";
import { useState } from "react";

export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const router = useRouter();

  return (
    <VStack overflowX={"hidden"}>
      <Box
        px={0}
        w={"100vw"}
        // h={['60vh', '100vw', '80vw', '50vw', '50vw']}
        overflow="hidden"
        mb={10}
        bg={"blue.main"}
        display={"flex"}
        alignItems="center"
        justifyContent={"start"}
        flexDir={['column-reverse', 'column-reverse', 'row', 'row', 'row', 'row']}
      >
        <Box w={['90%', '90%', '40%', '40%', '40%', '40%']} pl={[0,0,8,0,0,0]}>
          <HomeTitle />
        </Box>
        <Box w={['100%', '80vw', '60%', '60%', '60%', '60%']} mb={['-15vw', '-15vw', 0, 0, 0, 0]}>
          <Image src="/assets/img/Merit1.png" />
        </Box>
      </Box>
      <MainTitle />
      <Box h={10} />
      <Box maxW={"1200px"} py={10} w={"100%"} px={[5, 5, 5, 5, 0, 0]}>
        <Text color={"blue.main"} textAlign="center">
          Lorem ipsum dolor sit amet.
        </Text>
        <Box h={10} />
        <Grid templateColumns={"repeat(4, 1fr)"} gap={10}>
          <GridItem>
            <ProgramCard />
          </GridItem>
          <GridItem>
            <ProgramCard />
          </GridItem>
          <GridItem>
            <ProgramCard />
          </GridItem>
          <GridItem>
            <ProgramCard />
          </GridItem>
        </Grid>
      </Box>
      <HStack
        maxW={"1200px"}
        gap={[4,4,4, 4, 6, 8]}
        py={10}
        px={[10, 10, 10, 10, 0, 0]}
        flexDir={['column', 'column', 'row', 'row', 'row', 'row']}
      >
        <HStack gap={[8,8,6,6, 6, 8]}>

        <PartnerModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} imgsrc={'elf-next-door'}/>
        <PartnerModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} imgsrc={'eco-kindergarden'}/>
        </HStack>
        <HStack gap={[8,8,6,6, 6, 8]}>
          
        <PartnerModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} imgsrc={'human-school'}/>
        <PartnerModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} imgsrc='tas' />
        </HStack>
      </HStack>
      <Box h={10} />
      <Box
        w={"100%"}
        py={100}
        bg={"blue.main"}
        justifyContent={"center"}
        alignItems="center"
        display="flex"
      >
        <VStack maxW={"1200px"} w={"100%"} pb={10} gap={10} alignItems="start">
          <HStack
            w={"100%"}
            py={10}
            flexDir={["column", "column", "row ", "row", "row", "row"]}
          >
            <PrimaryTitle />
            <Box flexGrow={3}>
              <Title />
            </Box>
          </HStack>
        </VStack>
      </Box>
      {/* <Flex
        w={"100%"}
        gap={10}
        flexDir={["column", "column", "column", "column", "row", "row"]}
      >
        <VStack
          w={["100%", "100%", "100%", "100%", "25%", "25%"]}
          flexDir={["column", "column", "row", "row", "column", "column"]}
          gap={[2, 2, 4, 10, 0, 0]}
        >
          <MainCard />
          <Box h={4} />
          <MainCard />
          <Box h={4} />
          <MainCard />
        </VStack>
        <HStack
          w={["100%", "100%", "100%", "100%", "75%", "75%"]}
          alignItems="start"
          flexDir={["column", "column", "row", "row", "row", "row"]}
        >
          <Box
            w={["100%", "100%", "55%", "50%", "67%", "67%"]}
            pb={[8, 8, 0, 0, 0, 0]}
          >
            <HexagonCard />
          </Box>
          <VStack
            w={["100%", "100%", "45%", "50%", "33%", "33%"]}
            flexDir={["row", "row", "column", "column", "column", "column"]}
          >
            <MethodCard />
            <Box h={4} />
            <MethodCard />
            <Box h={4} />
            <MethodCard />
          </VStack>
        </HStack>
      </Flex> */}
      <HStack maxW={'1200px'} py={100} flexDir={['column-reverse', 'column-reverse', 'row', 'row', 'row', 'row']}>
          <Box
            w={["100%", "100%", "55%", "50%", "67%", "67%"]}
            pt={[10, 10, 0, 0, 0, 0]}
            flex={1}
          >
            <HexagonCard />
          </Box>
          <Box flex={1}><PowerAccordian /></Box>
      </HStack>
      <Box maxW={"1360px"} w={'100%'} py={10}>
        <Box w={'100%'}><BasicTitle /></Box>
        <Box h={10}/>
        <HStack w={'100%'} maxW="1200px" mx='auto' gap={[4,4,6,6,8,10]} px={[5,5,5,5,0,0]}>
          <VStack w={'100%'}  alignItems={'start'}>
            <Heading color={'blue.main'} textTransform='uppercase'>Lorem.</Heading>
            <Box h={4}/>
            <BasicCard l='green'/>
            <Box h={[4,4,6,6,8,10]}/>
            <BasicCard/>
          </VStack>
          <VStack w={'100%'}  alignItems={'start'}>
            <Heading color={'blue.main'} textTransform='uppercase'>Lorem.</Heading>
            <Box h={4}/>
            <BasicCard l='green'/>
            <Box h={[4,4,6,6,8,10]}/>
            <BasicCard/>
          </VStack>

        </HStack>
        <Box h={10}/>
        <HStack
          maxW={"1200px"}
          mx='auto'
          
          py={10}
          justifyContent={"space-between"}
          gap={[2, 2, 8, 8, 10, 10]}
        >
          <Box flex={1}>
          <Heading fontSize={'40px'} textTransform='uppercase' color={'blue.main'}>basic</Heading>
          <Box h={4}/>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              odit cupiditate dicta voluptas nisi possimus mollitia officiis
              molestias consequuntur deleniti?
            </Text>
          </Box>
          <Box flex={1}>
            <Heading fontSize={'40px'} textTransform='uppercase' color={'blue.main'}>basic</Heading>
            <Box h={4}/>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              odit cupiditate dicta voluptas nisi possimus mollitia officiis
              molestias consequuntur deleniti?
            </Text>
          </Box>
        </HStack>
      </Box>
      {/* <HStack
        maxW={"1340px"}
        w={"100%"}
        py={10}
        gap={10}
        pr={["10px", "10px", "43px", "43px", "80px", "80px"]}
        alignItems="start"
        mr={["10px", "10px", "43px", "43px", "80px", "80px"]}
        flexDir={["column", "column", "row", "row", "row", "row"]}
      >
        <Box
          w={[
            "100%",
            "100%",
            "calc(50% + 80px)",
            "calc(50% + 80px)",
            "calc(50% + 80px)",
            "calc(50% + 80px)",
          ]}
        >
          <PowerTitle />
        </Box>
        <Box w={["100%", "100%", "50%", "50%", "50%", "50%"]}>
          <PowerAccordian />
        </Box>
      </HStack> */}
      <Box maxW={"1360px"} px={"80px"} py={10}>
        <Splide
          options={{
            type: "loop",
            gap: "1rem",
            autoplay: true,
            perPage: 5,
            speed: 1500,
          }}
          style={{ padding: "3rem 5rem" }}
        >
          <AchievementSplide />
          <AchievementSplide />
          <AchievementSplide />
        </Splide>
      </Box>
      <Box maxW={"1200px"} py={10}>
        <Splide
          options={{
            type: "loop",
            gap: "1rem",
            autoplay: true,
            perPage: 3,
            speed: 1500,
          }}
          style={{ padding: "3rem 5rem", width: "100%" }}
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
