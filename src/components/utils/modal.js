import { Box, Button, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/react"

export const PartnerModal = ({onOpen, isOpen, onClose}) => {
    return (
        <Box>
            <Button variant={'unstyled'} onClick={onOpen}><Image src='/assets/img/elf-next-door.jpg'/></Button>
      <Modal isOpen={isOpen} onClose={onClose} size='xl'>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A ad, quisquam et neque aliquid asperiores sunt blanditiis veritatis possimus suscipit?
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost'>Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
        </Box>
    )
}