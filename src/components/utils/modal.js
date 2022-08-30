import {
  Box,
  Button,
  Center,
  Container,
  HStack,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Tr,
} from '@chakra-ui/react';

export const PartnerModal = ({ onOpen, isOpen, onClose }) => {
  return (
    <Box px={0}>
      <Button variant={'unstyled'} onClick={onOpen}>
        <Image src="/assets/img/elf-next-door.jpg" />
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} size="full">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader
            textTransform={'uppercase'}
            fontSize={'25px'}
            color={'blue.main'}
            fontWeight={'bold'}
          >
            ELF&ldquo;NEXT&ldquo;DOOR coworking space with childcare
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <HStack>
              <Box pos={'relative'} h="320px">
                <Image
                  src="https://images.unsplash.com/photo-1661435805015-37e730f47f9c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80s"
                  h={'100%'}
                />
                <Box
                  bg={
                    'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)'
                  }
                  pos="absolute"
                  inset={0}
                  opacity={0.3}
                />
                <Center>
                  <Image
                    src={'assets/img/elf-next-door.jpg'}
                    pos={'absolute'}
                    top={'50%'}
                    transform={'translateY(-50%)'}
                  />
                </Center>
              </Box>
              <Box
                w={'100%'}
                maxW="auto"
                px={0}
                mx={0}
                sx={{ marginInlineStart: '0 !important' }}
              >
                <TableContainer whiteSpace={'normal'} h={'320px'}>
                  <Table
                    variant="striped"
                    colorScheme="gray"
                    bg={'green.main'}
                    h={'100%'}
                  >
                    <Tbody>
                      <Tr>
                        <Td>Байгуулагдсан огноо:</Td>
                        <Td>2020</Td>
                      </Tr>
                      <Tr>
                        <Td>Нийт хүүхдийн тоо:</Td>
                        <Td>Өдөрт 30 хүүхэд</Td>
                      </Tr>
                      <Tr>
                        <Td>
                          2020-2021 сурагчдын хийсэн онцлох үйл ажиллагаа:
                        </Td>
                        <Td>
                          ЭЛФ Цэцэрлэгийн &quot; Life Tree &quot; хөтөлбөрийн 4
                          модулийг амжилттай хэрэгжүүлсэн
                        </Td>
                      </Tr>
                      <Tr>
                        <Td>Байршил:</Td>
                        <Td>
                          Монгол улс&rdquo; Улаанбаатар хот&rdquo; Баянзүрх
                          дүүрэг&rdquo; 25-р хороо&rdquo; 13-р хороолол-2&rdquo;
                          Нарны зам гудамж&rdquo; 165 тоот
                        </Td>
                      </Tr>
                    </Tbody>
                  </Table>
                </TableContainer>
              </Box>
            </HStack>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};
