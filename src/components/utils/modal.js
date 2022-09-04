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
} from '@chakra-ui/react';
import { BsInstagram } from 'react-icons/bs';

export const PartnerModal = ({ onOpen, isOpen, onClose, imgsrc }) => {
  return (
    <Box px={0}>
      <Button variant={'unstyled'} onClick={onOpen} h='auto' _hover={{transform: 'scale(1.1)'}}>
        <Image src={`/assets/img/${imgsrc}.png`} />
      </Button>
      {/* <Heading fontSize={'2xl'}>{imgsrc}</Heading> */}
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader
            textTransform={'uppercase'}
            fontSize={'25px'}
            color={'blue.main'}
            fontWeight={'bold'}
            mr={4}
          >
            ELF&ldquo;NEXT&ldquo;DOOR coworking space with childcare
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack alignItems={'start'}>
              <Text fontSize={20}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, nostrum.</Text>
              <Text>Founded: 2020</Text>
              <Text>Founded: 2020</Text>
              <Text>Location: Lorem ipsum dolor sit amet.</Text>
              <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At ex eligendi id ducimus placeat, tempora voluptas adipisci tenetur nobis maxime! Praesentium, eaque dicta perferendis atque maxime non necessitatibus quod asperiores inventore explicabo aliquid suscipit quaerat provident in amet voluptas delectus. Beatae, quidem animi vel voluptatum culpa excepturi minus ratione tenetur.</Text>
            </VStack>
          </ModalBody>

          <ModalFooter justifyContent={'space-between'}>
            <HStack><Link href='/'><BsInstagram/></Link><Link href='/'><BsInstagram/></Link></HStack>
            <HStack><Link href='/'><BsInstagram/></Link><Link href='/'><BsInstagram/></Link></HStack>

          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};
