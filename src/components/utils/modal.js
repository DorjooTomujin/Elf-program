import {
  Box,
  Button,
  Center,
  Heading,
  HStack,
  Image,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tr,
  VStack,
} from "@chakra-ui/react";
import { BsInstagram } from "react-icons/bs";

export const PartnerModal = ({ onOpen, isOpen, onClose, imgsrc }) => {
  return (
    <Box px={0} mx="auto">
      <Button
        variant={"unstyled"}
        h={['60px', '60px', '70px', '80px', '100px', '100px']}
        onClick={onOpen}
        _hover={{ transform: "scale(1.1)" }}
      >
        <Image src={`/assets/img/${imgsrc}.png`} h={"100%"} />
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader
            textTransform={"uppercase"}
            fontSize={"25px"}
            color={"blue.main"}
            fontWeight={"bold"}
            mr={4}
          >
            ELF&ldquo;NEXT&ldquo;DOOR coworking space with childcare
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack alignItems={"start"}>
              <Text fontSize={20}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error,
                nostrum.
              </Text>
              <Text>Founded: 2020</Text>
              <Text>Founded: 2020</Text>
              <Text>Location: Lorem ipsum dolor sit amet.</Text>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. At ex
                eligendi id ducimus placeat, tempora voluptas adipisci tenetur
                nobis maxime! Praesentium, eaque dicta perferendis atque maxime
                non necessitatibus quod asperiores inventore explicabo aliquid
                suscipit quaerat provident in amet voluptas delectus. Beatae,
                quidem animi vel voluptatum culpa excepturi minus ratione
                tenetur.
              </Text>
            </VStack>
          </ModalBody>

          <ModalFooter justifyContent={"space-between"}>
            <HStack>
              <Link href="/">
                <BsInstagram />
              </Link>
              <Link href="/">
                <BsInstagram />
              </Link>
            </HStack>
            <HStack>
              <Link href="/">
                <BsInstagram />
              </Link>
              <Link href="/">
                <BsInstagram />
              </Link>
            </HStack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};
export const FoundersModal = ({ onOpen, isOpen, onClose, imgsrc }) => {
  return (
    <Box px={0} h={"100%"}>
      <Box
        overflow={"hidden"}
        pos="relative"
        h={"100%"}
        _hover={{
          button: { transform: "scale(1.1)" },
          div: { opacity: "0.1", transition: 0.3 },
          span: {transform: 'translateY(0)', transition: 0.3}
        }}
      >
        <Box
          pos={"absolute"}
          inset={0}
          bg={"blue.main"}
          zIndex={100}
          opacity="0"
          transition={0.3}
        />
        <Button
          variant={"unstyled"}
          h={"full"}
          onClick={onOpen}
          alignItems="end"
          display={"flex"}
        >
          <Box>
            <Image src={`/assets/img/${imgsrc}`} />
          </Box>
        </Button>
        <Box w={'100%'} pos='absolute' as={'span'} transform={'translateY(100%)'}  bottom={0} transition='0.3s' bg={'blue.main'} py={2} px={4} color={'white'}>
          <Heading fontSize={'24px'}>Batjin</Heading>
          <Text>ceo</Text>
        </Box>
      </Box>
      {/* <Heading fontSize={'2xl'}>{imgsrc}</Heading> */}
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader
            textTransform={"uppercase"}
            fontSize={"25px"}
            color={"blue.main"}
            fontWeight={"bold"}
            mr={4}
          >
            ELF&ldquo;NEXT&ldquo;DOOR coworking space with childcare
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack alignItems={"start"}>
              <Text fontSize={20}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error,
                nostrum.
              </Text>
              <Text>Founded: 2020</Text>
              <Text>Founded: 2020</Text>
              <Text>Location: Lorem ipsum dolor sit amet.</Text>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. At ex
                eligendi id ducimus placeat, tempora voluptas adipisci tenetur
                nobis maxime! Praesentium, eaque dicta perferendis atque maxime
                non necessitatibus quod asperiores inventore explicabo aliquid
                suscipit quaerat provident in amet voluptas delectus. Beatae,
                quidem animi vel voluptatum culpa excepturi minus ratione
                tenetur.
              </Text>
            </VStack>
          </ModalBody>

          <ModalFooter justifyContent={"space-between"}>
            <HStack>
              <Link href="/">
                <BsInstagram />
              </Link>
              <Link href="/">
                <BsInstagram />
              </Link>
            </HStack>
            <HStack>
              <Link href="/">
                <BsInstagram />
              </Link>
              <Link href="/">
                <BsInstagram />
              </Link>
            </HStack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};
