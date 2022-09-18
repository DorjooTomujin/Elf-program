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
import { DefaultText } from "../src/components/utils/text";

const awards = [
  {
    img: "bAward2020.PNG",
    text: "Bloomber Mongolia | Awarded as The Child Friendly, Innovative School Architecture",
  },
  {
    img: "bAward2021.PNG",
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
    text: "Students start developing their ideas in their solution group. Research is heavily incorporated into shaping their idea to become an implementable solution.",

    text1:
      "To better grasp the context, students are given helpfil resources containing the required academic knowledge. The resources come in various forms such as video lessons, case studies, and articles prepared by the school. While students are encouraged to learn from the resources provided at home, they are expected to work in their solution group, consult with their ciaches, and master the skills and knowledge at school.",
  },
  {
    title: "Create",
    text: "Students are challenged to create a prototype and test their solution to outsiders. The creation spins in cycles of iteration to make the final product. Throughout this process, feedback and critique comes systematically from their peers, coaches, as well as their parents.",
  },
  {
    title: "Showcase",
    text: "The final product is presented and showcased to stakeholders as well as to the public.",
  },
  {
    title: "Feedback & Critique",
    text: "Feedback & Critique is given from stakeholders throughout the entire process.",
    text1: "Stakeholders Peers, couches, and parents."
  },
  {
    title: "Make Impact Last",
    text: "The final products stay as a sustainable solution and continue to serve the society.",
  },
];
export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isFounderOpen, onFounderOpen, onFounderClose } = useDisclosure();

  return (
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
      <VStack
        maxW={"1200px"}
        py={20}
        alignItems="start"
        width={"full"}
        bgImage={"/assets/img/hello1.png"}
        bgSize="contain"
        bgRepeat={"no-repeat"}
        px={[5, 5, 5, 5, 0, 0]}
        bgPos={[
          "left bottom ",
          "left bottom ",
          "bottom",
          "bottom",
          "bottom",
          "bottom",
        ]}
      >
        <ColorTitle
          title={"The world is changing,"}
          color="blue.main"
          size={["20px", "6vw", "55px", "70px", "90px", "90px"]}
          align={"start"}
        />
        <Box pl={["0", "0", "0", "70px", "90px", "90px"]}>
          <ColorTitle
            title={"so should education."}
            size={["20px", "6vw", "55px", "70px", "90px", "90px"]}
            color="blue.main"
            align={"start"}
          />
        </Box>
        <HStack justifyContent={"end"} py={10} w={"100%"}>
          <Box w={4} />
          <VStack w={["100%", "80%", "40%", "40%", "40%", "40%"]}>
            <Text>
              We are facing completely different and more complex challenges
              than of the past, and this is not only today&#39;s problem. To
              thrive in this world of rapid change, school graduates need the
              ability to become anything they want at any given time and
              circumstances.
            </Text>
            <Box h={2} />
            <Text>
              Elf Curriculum is here to transform how students are taught and
              introduce a new way of learning to everyone, everywhere. As our
              name Elf stands for Empowering Lives Forever, we are committed to
              make lasting impact on people&#39;s lives through education.
            </Text>
          </VStack>
        </HStack>
      </VStack>
      <Box h={10} />

      {/* <Box maxW={"1200px"} py={10} w={"100%"} px={[5, 5, 5, 5, 3, 0]}>
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
        </Box> */}
        <Box maxW={"1200px"} px={[4, 4, 10, 10, 0, 0]} pt={10}><MediaTitle title={"OUR SCHOOLS:"} /></Box>
      <Grid
        maxW={"1200px"}
        gap={[4, 10, 4, 4, 6, 8]}
        py={10}
        px={[4, 4, 10, 10, 0, 0]}
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
      <HStack
        px={[5, 5, 10, 10, 10, 10]}
        mx="auto"
        py={20}
        bgImage={"/assets/img/pathImg.png"}
        bgPos="right"
        bgSize={"contain"}
        w={"100%"}
        bgRepeat="no-repeat"
      >
        <VStack alignItems={"start"} w={"100%"}>
          <ColorTitle
            title={"reinventing"}
            color="blue.main"
            size={["30px", "40px", "55px", "70px", "90px", "90px"]}
          />
          <ColorTitle
            title={"the student's"}
            color="blue.main"
            size={[["30px", "40px", "55px", "70px", "90px", "90px"]]}
          />
          <ColorTitle
            title={"learning"}
            color="blue.main"
            size={[["30px", "40px", "55px", "70px", "90px", "90px"]]}
          />
          <ColorTitle
            title={"path"}
            color="blue.main"
            size={[["30px", "40px", "55px", "70px", "90px", "90px"]]}
          />
          <Box h={10} />
          <HStack
            gap={10}
            alignItems="start"
            w={'60%'}
            display={["none", "none", "none", "flex", "flex", "flex"]}
          >
            <DefaultText
              title={
                "It's not about what you know, It's about what you can do with it."
              }
              text={
                "All of our classes are taught in Project based learning (PBL) method. Students are divided into teams and collaboratively work on solving real-life problems. While using the knowledge acquired from the resouces provided from the schools, students continue on making lasting impact to society while mastering the skills and habits that are of demand in the real-world."
              }
              tColor={"green.main"}
            />
            <DefaultText
              title={"Community is a driving force of the quality of learning."}
              text={
                "We build our student body with driven students, and we want to create alumni that create, innovate, and improve wherever they are. For that we exercise an admissions process to find self-driven students regardless of their parents financial capabilities."
              }
              tColor={"green.main"}
            />
          </HStack>
        </VStack>
      </HStack>

    
      <HStack
        gap={10}
        px={[5, 5, 10, 10, 10, 10]}
        pt={20}
        alignItems="start"
        flexDir={["column", "column", "row", "", "", ""]}
        display={["flex", "flex", "flex", "none", "none", "none"]}
      >
        <DefaultText
          title={
            "It's not about what you know, It's about what you can do with it."
          }
          text={
            "All of our classes are taught in Project based learning (PBL) method. Students are divided into teams and collaboratively work on solving real-life problems. While using the knowledge acquired from the resouces provided from the schools, students continue on making lasting impact to society while mastering the skills and habits that are of demand in the real-world."
          }
          tColor={"green.main"}
        />
        <DefaultText
          title={"Community is a driving force of the quality of learning."}
          text={
            "We build our student body with driven students, and we want to create alumni that create, innovate, and improve wherever they are. For that we exercise an admissions process to find self-driven students regardless of their parents financial capabilities."
          }
          tColor={"green.main"}
        />
      </HStack>
      
      {/* <Box
          w={"100%"}
          py={100}
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
        </Box> */}
      {/* <HStack
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
        </HStack> */}
      <Box w="full" my={10}>
        <HStack
          maxW={"1200px"}
          py={100}
          gap={10}
          w="100%"
          mx="auto"
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
            <Accordions items={guide} />
          </Box>
          <Box flex={1}>
            <ColorTitle title="no more" color={"green.main"} />
            <ColorTitle title="unengaged" color={"green.main"} />
            <ColorTitle title="lectures" color={"green.main"} />
            <ColorTitle title="it&#39;s time" color={"blue.main"} />
            <ColorTitle title="for real" color={"blue.main"} />
            <ColorTitle title="action." color={"blue.main"} />
          </Box>
        </HStack>
      </Box>
      <VStack  mx='auto' px={[5,5,5,10,10,10]}  py={20} bg='blue.main'>
            <Heading textTransform={'uppercase'} fontSize={["40px", "50px", "55px", "70px", "90px", "90px"]} color='white'>we touch every life.</Heading>
            <Box h={10}/>
            <Grid gridTemplateColumns={['repeat(1, 1fr)','repeat(1, 1fr)','repeat(2, 1fr)','repeat(4, 1fr)','repeat(4, 1fr)','repeat(4, 1fr)']} gap={10}>
              <GridItem color={'white'}>
                <Heading color={'white'} textTransform='capitalize' fontSize={24}>our schools can be 100% free</Heading>
                <Box h={6}/>
                <Text>Most schools in the world, and almost all schools in Mongolia enroll students solely based on their financial status. We believe that education must be accessible regardless of their financial situation. Most importantly, education must be accessible to those who really want it.</Text>
                <Box h={4}/>
                <Text>We work with students based on their inner drive. If a student gets accepted to our school buy can&#39;t afford our tuition, we do whatever it takes to give them financial aid. In the past 7 years of our history, we have given <b>52 billion tugrik</b> of financial aid of students. From 1st grade to already graduated gap year students, almost 100% of our students were able to recieve quality education BECAUSE of our financial aid policy.</Text>
              </GridItem>
              <GridItem color={'white'}>
                <Heading color={'white'} textTransform='capitalize' fontSize={24}>scaling our curriculum</Heading>
                <Box h={6}/>
                <Text>We are expanding our impact and enabling other schools (especially public schools) to join our movement. For this mission, we are licensing our curriculum with scale supported by.</Text>
                <Text>- A teacher training program provided to public schools</Text>
                <Text>- R&D into the most efficient forms of teaching and learning and experience sharing with public schools.</Text>
                <Text>- A digital learning platform to reach kids from all over the world</Text>
                <Text>- Partnerships on long-term projects with overarching schools</Text>
                <Text>- Certification and standardizations</Text>
                <Box h={4}/>
                <Text>So far, we have successfully licensed our early education programmes to <b>10 public kindergartens,</b> K12 education curriculum to <b>2 public schools</b> in Mongolia at affordable rates.</Text>
              </GridItem>
              <GridItem color={'white'}>
                <Heading color={'white'} textTransform='capitalize' fontSize={24}>driving digital revolution</Heading>
                <Box h={6}/>
                <Text>We have an in-house technology startup with the mission to revolutionize how people are taught and make education accessible to all. Using technology to collect and leverage data, the compony is in the forefront of empowering teachers and students alike to allow each student to reach theri maximum potential.</Text>
                <Box h={4}/>
                <Text>As our pilot projects, we have built an educational hyper-casual P2E mobile game that contains dissected bits of guant curriculums. Through this mobile game, we are planning to reach millions of students from all over the world. Making education fun and accessible at the same time.</Text>
              </GridItem>
              <GridItem color={'white'}>
                <Heading color={'white'} textTransform='capitalize' fontSize={24}>edu-box at every home</Heading>
                <Box h={6}/>
                <Text>The COVID 19 pandemic brought immense damage to education sectors from all around the world. During the pandemic, we started an Anti-COVID movement, to help the most endangered group - early childhood to receive quality education through Project Based Learning kits. Our kits offered viable solutions to traditional schooling:</Text>
                <Text>- Engaging, toy-like products</Text>
                <Text>- Online classes</Text>
                <Text>- Easy-to-follow instructions</Text>
                <Text>- Community of like-minded learners</Text>
              </GridItem>
            </Grid>
      </VStack>
      <VStack alignItems="start" py={10} px={[5, 5, 5, 5, 0]}>
        <MediaTitle title={"awards:"} />
        <Media items={awards} />
      </VStack>
      <VStack alignItems="start" py={10} w="full" maxW={'1200px'} px={[5, 5, 5, 5, 0]}>
        <MediaTitle title={"partners:"} />
        <Media items={partners} />
      </VStack>
      <VStack alignItems="start" py={10} w="full" maxW={'1200px'} px={[5, 5, 5, 5, 0]}>
        <MediaTitle title={"in media:"} />
        <Media items={inMedia} />
      </VStack>
      <VStack alignItems="start" py={10} w="full" maxW={'1200px'} px={[5, 5, 5, 5, 0]}>
        <MediaTitle title={"endorsed by:"} />
        <Media items={endorsedBy} />
      </VStack>

      <Box px={[5, 5, 5, 5, 0]}>
        <MediaTitle title={"Founders"} />
        <Grid

          maxW={"1200px"}
          py={10}
          gap={[4,10,10,10,10,10]}
          mx="auto"
          gridTemplateColumns={[
            "repeat(2, 1fr)",
            "repeat(2, 1fr)",
            "repeat(4, 1fr)",
            "repeat(4, 1fr)",
            "repeat(4, 1fr)",
          ]}
          alignItems="end"
          justifyContent={"center"}
        >
          <GridItem h={"100%"}>
            <FoundersModal
              isOpen={isFounderOpen}
              onClose={onFounderClose}
              onOpen={onFounderOpen}
              imgsrc="batjin.jpg"
              title={"Batjin Boldbat"}
              text={"Co-Founder & Board Member "}
            />
          </GridItem>
          <GridItem h={"100%"}>
            <FoundersModal
              isOpen={isFounderOpen}
              onClose={onFounderClose}
              onOpen={onFounderOpen}
              imgsrc="founder2.jpg"
              title={"Nyamaa Buyantogtokh "}
              text={"Co-Founder & Chairman of The Board"}
            />
          </GridItem>
          <GridItem h={"100%"}>
            <FoundersModal
              isOpen={isFounderOpen}
              onClose={onFounderClose}
              onOpen={onFounderOpen}
              imgsrc="founder1.png"
              title={" Solongo Batsuuri"}
              text={"Co-Founder & Board Member "}
            />
          </GridItem>
          {/* <GridItem
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
          </GridItem> */}
          <GridItem h={"100%"} alignItems="end" mx="auto">
            <FoundersModal
              isOpen={isFounderOpen}
              onClose={onFounderClose}
              onOpen={onFounderOpen}
              imgsrc="anar-od.png"
              title={"Anar-Od Odgerel"}
              text={"Co-Founder & Board Member"}
            />
          </GridItem>
        </Grid>
      </Box>
    </VStack>
  );
}
