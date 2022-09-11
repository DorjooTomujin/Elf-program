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
  Stack,
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
  FoundersModal,
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
import i18next from "i18next";
import { useEffect } from "react";




export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isFounderOpen, onFounderOpen, onFounderClose } = useDisclosure();

  const router = useRouter();
  
 
 return  i18next.t != undefined &&  (
    <VStack overflowX={"hidden"}>
      <Box
        px={0}
        w={"100vw"}
        overflow="hidden"
        mb={10}
        bg={"blue.main"}
        display={"flex"}
        alignItems="center"
        justifyContent={"start"}
        flexDir={[
          "column-reverse",
          "column-reverse",
          "row",
          "row",
          "row",
          "row",
        ]}
      >
        <Box
          w={["90%", "90%", "40%", "40%", "40%", "40%"]}
          pl={[0, 0, 8, 0, 0, 0]}
        >
          <HomeTitle />
        </Box>
        <Box
          w={["100%", "80vw", "60%", "60%", "60%", "60%"]}
          mb={["-15vw", "-15vw", 0, 0, 0, 0]}
        >
          <Image src="/assets/img/Merit1.png" />
        </Box>
      </Box>
      <MainTitle />
      <Box h={10} />
      <Heading>{i18next.t('key')}</Heading>
      <Box maxW={"1200px"} py={10} w={"100%"} px={[5, 5, 5, 5, 3, 0]}>
        <Text color={"blue.main"} textAlign="center">
          Lorem ipsum dolor sit amet.
        </Text>
        <Box h={10} />
        <Grid templateColumns={["repeat(2, 1fr)", "repeat(2, 1fr)", "repeat(4, 1fr)", "repeat(4, 1fr)", "repeat(4, 1fr)", "repeat(4, 1fr)"]} gap={10}>
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
      <Grid
        maxW={"1200px"}
        gap={[4, 10, 4, 4, 6, 8]}
        py={10}
        px={[10, 10, 10, 10, 0, 0]}
        flexDir={["column", "column", "row", "row", "row", "row"]}
        w="100%"
        gridTemplateColumns={['repeat(2, auto)', 'repeat(2, auto)', 'repeat(4, auto)', 'repeat(4, auto)', 'repeat(4, auto)']}
      >
        <GridItem mx='auto'>
          <PartnerModal
            isOpen={isOpen}
            onOpen={onOpen}
            onClose={onClose}
            imgsrc={"elf-next-door"}
          />
        </GridItem>
        <GridItem mx='auto'>
          <PartnerModal
            isOpen={isOpen}
            onOpen={onOpen}
            onClose={onClose}
            imgsrc={"eco-kindergarden"}
          />
        </GridItem>
        <GridItem mx='auto'>
          <PartnerModal
            isOpen={isOpen}
            onOpen={onOpen}
            onClose={onClose}
            imgsrc={"human-school"}
          />
        </GridItem>
        <GridItem mx='auto' >
          <PartnerModal
            isOpen={isOpen}
            onOpen={onOpen}
            onClose={onClose}
            imgsrc="tas"
          />
        </GridItem>
      </Grid>
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
      <HStack
        maxW={"1200px"}
        py={100}
        flexDir={[
          "column-reverse",
          "column-reverse",
          "row",
          "row",
          "row",
          "row",
        ]}
      >
        <Box
          w={["100%", "100%", "55%", "50%", "67%", "67%"]}
          pt={[10, 10, 0, 0, 0, 0]}
          flex={1}
        >
          <HexagonCard />
        </Box>
        <Box flex={1}>
          <PowerAccordian />
        </Box>
      </HStack>
      <Box maxW={"1360px"} w={"100%"} py={10}>
        <Box w={"100%"}>
          <BasicTitle />
        </Box>
        <Box h={10} />
        {/* <HStack
          w={"100%"}
          maxW="1200px"
          mx="auto"
          gap={[4, 4, 6, 6, 8, 10]}
          px={[5, 5, 5, 5, 0, 3]}
        >
          <VStack w={"100%"} alignItems={"start"}>
            <Heading color={"blue.main"} textTransform="uppercase">
              Lorem.
            </Heading>
            <Box h={4} />
            <BasicCard l="green" />
            <Box h={[4, 4, 6, 6, 8, 10]} />
            <BasicCard />
          </VStack>
          <VStack w={"100%"} alignItems={"start"}>
            <Heading color={"blue.main"} textTransform="uppercase">
              Lorem.
            </Heading>
            <Box h={4} />
            <BasicCard l="green" />
            <Box h={[4, 4, 6, 6, 8, 10]} />
            <BasicCard />
          </VStack>
        </HStack>
        <Box h={10} /> */}
        <HStack
          maxW={"1200px"}
          mx="auto"
          py={10}
          justifyContent={"space-between"}
          gap={[2, 2, 8, 8, 10, 10]}
          px={[5, 5, 5, 5, 0, 0]}
        >
          <Box flex={1}>
            <Heading
              fontSize={[33, 33, 33, 40, 40, 40]}
              textTransform="uppercase"
              color={"blue.main"}
            >
              basic
            </Heading>
            <Box h={4} />
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              odit cupiditate dicta voluptas nisi possimus mollitia officiis
              molestias consequuntur deleniti?
            </Text>
          </Box>
          <Box flex={1}>
            <Heading
              fontSize={[33, 33, 33, 40, 40, 40]}
              textTransform="uppercase"
              color={"blue.main"}
            >
              basic
            </Heading>
            <Box h={4} />
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              odit cupiditate dicta voluptas nisi possimus mollitia officiis
              molestias consequuntur deleniti?
            </Text>
          </Box>
        </HStack>
      </Box>
      <Stack maxW={'1200px'} bg={'blue.main'} px={[5, 5, 5, 3, 10, 10]} py={10}>
        <Grid gridTemplateColumns={'repeat(5, auto)'} alignItems='center' gap={10} >
          <GridItem>
            <Image src="/assets/img/forbes.png"/>
          </GridItem>
          <GridItem>
            <Image src="/assets/img/ikon.png"/>
          </GridItem>
          <GridItem>
            <Image src="/assets/img/bloomberg.png"/>
          </GridItem>
          <GridItem >
            <Image src="/assets/img/media.png" w={'60%'} mx='auto'/>
          </GridItem>
          <GridItem>
            <Image src="/assets/img/tenger.png"/>
          </GridItem>
        </Grid>
      </Stack>

      <Grid px={[5, 5, 5, 3, 10, 10]} maxW={'1200px'} py={10} gap={10} mx='auto' gridTemplateColumns={['repeat(2, auto)', 'repeat(6, auto)', 'repeat(6, auto)', 'repeat(5, auto)', 'repeat(5, auto)']} alignItems='end' justifyContent={'center'}>
        <GridItem h={'100%'} gridColumnStart={[1]} gridColumnEnd={[3, 4, 3 , 2,2 ]}>
          <FoundersModal isOpen={isFounderOpen} onClose={onFounderClose} onOpen={onFounderOpen} imgsrc='batjin.jpg'/>
        </GridItem>
        <GridItem h={'100%'} gridColumnStart={[3,4, 3,2, 2]} gridColumnEnd={[5, 7,5 , 3, 3, 3]}>
          <FoundersModal isOpen={isFounderOpen} onClose={onFounderClose} onOpen={onFounderOpen} imgsrc='founder1.png'/>
        </GridItem>
        <GridItem h={'100%'} gridColumnStart={[5, 2,5, 3,3]} gridColumnEnd={[7, 6, 7, 4, 4]}>
          <FoundersModal isOpen={isFounderOpen} onClose={onFounderClose} onOpen={onFounderOpen} imgsrc='founder2.jpg'/>
        </GridItem>
        <GridItem h={'100%'} gridColumnStart={[2, 1,2 ,4 ,4]} gridColumnEnd={[4,4,4, 5, 5]}>
          <FoundersModal isOpen={isFounderOpen} onClose={onFounderClose} onOpen={onFounderOpen} imgsrc='founder3.png'/>
        </GridItem>
        <GridItem h={'100%'} alignItems='end' mx='auto' gridColumnStart={[4,4,4,5,5]} gridColumnEnd={[6,7,6,6,6]}>
          <FoundersModal isOpen={isFounderOpen} onClose={onFounderClose} onOpen={onFounderOpen} imgsrc='anar-od.jpg'/>
        </GridItem>
      </Grid>

    </VStack>
  );
}
