import { Button, Flex, FormControl, FormLabel, IconButton, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Textarea, useDisclosure } from "@chakra-ui/react"
import { BiEditAlt } from "react-icons/bi"

const EditModal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
    <IconButton onClick={onOpen}
        variant='ghost'
        colorScheme='blue'
        aria-label='See Menu'
        size={"sm"}
        icon={<BiEditAlt size={20} />} />

    <Modal 
      isOpen={isOpen} onClose={onClose}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>My new BFF</ModalHeader>
        <ModalCloseButton />

        <ModalBody pb={6}>
          <Flex alignItems={"center"} gap={4}>
            {/* Left */}
            <FormControl>
              <FormLabel>Full Name</FormLabel>
              <Input placeholder="John Doe" />
            </FormControl>
            {/* Right */}
            <FormControl>
              <FormLabel>Role</FormLabel>
              <Input placeholder="Software Engineer" />
            </FormControl>
          </Flex>

          <FormControl mt={4}>
            <FormLabel>Description</FormLabel>
            <Textarea resize={"none"}
              overflow={"hidden"}
              placeholder="He's a software engineer who loves to code and build things" />
          </FormControl>
          
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3}>Update</Button>
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  </>
  )
}

export default EditModal