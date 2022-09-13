import {
  VStack,
  Heading,
  Box,
  HStack,
  useDisclosure,
  Text,
  Image,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import {
  MainTitle,
  MediaTitle,
  PrimaryTitle,
  HomeTitle,
  Title,
  ColorTitle,
} from "../src/components/titles";
import {
  PartnerModal,
  PowerAccordian,
  FoundersModal,
  Accordions,
} from "../src/components/utils/";

import { HexagonCard, ProgramCard } from "../src/components/utils/card";
import { useRouter } from "next/router";
import { useState } from "react";
import i18next from "i18next";
import { useEffect } from "react";
import { Media } from "../src/components/media";

const awards = [
  {
    img: "bloomberg.png",
    text: "Bloomber Mongolia | Awarded as The Child Friendly, Innovative School Architecture",
  },
  {
    img: "bloomberg.png",
    text: "Bloomber Mongolia | Awarded as The Top Educational Institution",
  },
  {
    img: "forbesWomen.png",
    text: "Forbes Women Mongolia | Featuring ELF Co-Founder",
  },
  {
    img: "forbes30.png",
    text: "Forbes 30 under 30 Mongolia | Featuring ELF Co-Founder",
  },
  {
    img: "education.png",
    text: "Global Education Forum 2022 | Awarded as Best Curricilium",
  },
];

const partners = [
  {
    img: "riotinto.png",
  },
  {
    img: "NGLC.png",
  },
  {
    img: "PBLWorkslogo.png",
  },
];

const inMedia = [
  {
    img: "forbes.png",
  },
  {
    img: "bloomberg.png",
  },
];
const endorsedBy = [
  {
    img: "moeas.png",
  },
];

const guide = [
  {
    title: "Driving Question",
    text: "Students are given real-wolrd problems that are worth driving creative ideas. At the end of the inquiry process, solution groups are created for further development.",
  },
  {
    title: "Solution Design & Research",
    text: "Students are given real-wolrd problems that are worth driving creative ideas. At the end of the inquiry process, solution groups are created for further development.",

    text1:
      "Students are given real-wolrd problems that are worth driving creative ideas. At the end of the inquiry process, solution groups are created for further development.",
  },
  {
    title: "Create",
    text: "Students are given real-wolrd problems that are worth driving creative ideas. At the end of the inquiry process, solution groups are created for further development.",
  },
  {
    title: "Showcase",
    text: "Students are given real-wolrd problems that are worth driving creative ideas. At the end of the inquiry process, solution groups are created for further development.",
  },
  {
    title: "Feedback & Critique",
    text: "Students are given real-wolrd problems that are worth driving creative ideas. At the end of the inquiry process, solution groups are created for further development.",
  },
  {
    title: "Make Impact Last",
    text: "Students are given real-wolrd problems that are worth driving creative ideas. At the end of the inquiry process, solution groups are created for further development.",
  },
];
export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isFounderOpen, onFounderOpen, onFounderClose } = useDisclosure();

  return (
    i18next.t != undefined && (
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
        <Heading>{i18next.t("key")}</Heading>
        <Box maxW={"1200px"} py={10} w={"100%"} px={[5, 5, 5, 5, 3, 0]}>
          <Text color={"blue.main"} textAlign="center">
            Lorem ipsum dolor sit amet.
          </Text>
          <Box h={10} />
          <Grid
            templateColumns={[
              "repeat(2, 1fr)",
              "repeat(2, 1fr)",
              "repeat(4, 1fr)",
              "repeat(4, 1fr)",
              "repeat(4, 1fr)",
              "repeat(4, 1fr)",
            ]}
            gap={10}
          >
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
          gridTemplateColumns={[
            "repeat(2, auto)",
            "repeat(2, auto)",
            "repeat(4, auto)",
            "repeat(4, auto)",
            "repeat(4, auto)",
          ]}
        >
          <GridItem mx="auto">
            <PartnerModal
              isOpen={isOpen}
              onOpen={onOpen}
              onClose={onClose}
              imgsrc={"elf-next-door"}
            />
          </GridItem>
          <GridItem mx="auto">
            <PartnerModal
              isOpen={isOpen}
              onOpen={onOpen}
              onClose={onClose}
              imgsrc={"eco-kindergarden"}
            />
          </GridItem>
          <GridItem mx="auto">
            <PartnerModal
              isOpen={isOpen}
              onOpen={onOpen}
              onClose={onClose}
              imgsrc={"human-school"}
            />
          </GridItem>
          <GridItem mx="auto">
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
          <VStack
            maxW={"1200px"}
            w={"100%"}
            pb={10}
            gap={10}
            alignItems="start"
          >
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
          w="full"
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
        <Box w="full" bg="blue.main" my={10}>
          <HStack
            maxW={"1200px"}
            py={100}
            gap={10}
            w="100%"
            mx='auto'
            alignItems={"start"}
            flexDir={[
              "column-reverse",
              "column-reverse",
              "row",
              "row",
              "row",
              "row",
            ]}
          >
            <Box flex={1}>
              <Accordions items={guide} color='white' />
            </Box>
            <Box flex={1}>
              <ColorTitle title="no more" color={"green.main"} />
              <ColorTitle title="unengaged" color={"green.main"} />
              <ColorTitle title="lectures" color={"green.main"} />
              <ColorTitle title="it&#39;s time" color={"white"} />
              <ColorTitle title="for real" color={"white"} />
              <ColorTitle title="action." color={"white"} />
            </Box>
          </HStack>
        </Box>
        <VStack alignItems="start" py={10}>
          <MediaTitle title={"awards:"} />
          <Media items={awards} />
        </VStack>
        <VStack alignItems="start" py={10}>
          <MediaTitle title={"partners:"} />
          <Media items={partners} />
        </VStack>
        <VStack alignItems="start" py={10}>
          <MediaTitle title={"in media:"} />
          <Media items={inMedia} />
        </VStack>
        <VStack alignItems="start" py={10}>
          <MediaTitle title={"endorsed by:"} />
          <Media items={endorsedBy} />
        </VStack>

        <Box>
          <MediaTitle title={'Founders'}/>
        <Grid
          px={[5, 5, 5, 3, 0, 0]}
          maxW={"1200px"}
          py={10}
          gap={10}
          mx="auto"
          gridTemplateColumns={[
            "repeat(2, auto)",
            "repeat(6, auto)",
            "repeat(6, auto)",
            "repeat(5, auto)",
            "repeat(5, auto)",
          ]}
          alignItems="end"
          justifyContent={"center"}
        >
          <GridItem
            h={"100%"}
            gridColumnStart={[1]}
            gridColumnEnd={[3, 4, 3, 2, 2]}
          >
            <FoundersModal
              isOpen={isFounderOpen}
              onClose={onFounderClose}
              onOpen={onFounderOpen}
              imgsrc="batjin.jpg"
            />
          </GridItem>
          <GridItem
            h={"100%"}
            gridColumnStart={[3, 4, 3, 2, 2]}
            gridColumnEnd={[5, 7, 5, 3, 3, 3]}
          >
            <FoundersModal
              isOpen={isFounderOpen}
              onClose={onFounderClose}
              onOpen={onFounderOpen}
              imgsrc="founder1.png"
            />
          </GridItem>
          <GridItem
            h={"100%"}
            gridColumnStart={[5, 2, 5, 3, 3]}
            gridColumnEnd={[7, 6, 7, 4, 4]}
          >
            <FoundersModal
              isOpen={isFounderOpen}
              onClose={onFounderClose}
              onOpen={onFounderOpen}
              imgsrc="founder2.jpg"
            />
          </GridItem>
          <GridItem
            h={"100%"}
            gridColumnStart={[2, 1, 2, 4, 4]}
            gridColumnEnd={[4, 4, 4, 5, 5]}
          >
            <FoundersModal
              isOpen={isFounderOpen}
              onClose={onFounderClose}
              onOpen={onFounderOpen}
              imgsrc="founder3.png"
            />
          </GridItem>
          <GridItem
            h={"100%"}
            alignItems="end"
            mx="auto"
            gridColumnStart={[4, 4, 4, 5, 5]}
            gridColumnEnd={[6, 7, 6, 6, 6]}
          >
            <FoundersModal
              isOpen={isFounderOpen}
              onClose={onFounderClose}
              onOpen={onFounderOpen}
              imgsrc="anar-od.jpg"
            />
          </GridItem>
        </Grid>
        </Box>
      </VStack>
    )
  );
}
