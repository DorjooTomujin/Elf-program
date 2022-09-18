import { SearchIcon } from "@chakra-ui/icons";
import { Box, HStack, Link, Text, VStack } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import {ImArrowRight} from 'react-icons/im'

export default function Footer() {
    return (
        <HStack bg={'blue.main'} pos='relative' h={['30vh','30vh','40vh','40vh','40vh']} mt={10} flexDir={['column', 'column', 'row', 'row', 'row']}>
            <Box bgImage='/assets/img/footerBg.svg' objectFit={'cover'} bgPos='center' bg bgRepeat='repeat' opacity={0.1} pos={'absolute'} display='inline-block' h='full' w='full' zIndex={1}/>
            <VStack flex={1} pos='relative' zIndex={2} px={10} h='full'>
                <HStack pos={'relative'} h={'80%'} pt={'10%'}>
                <Box bg='white' pb={1} pl={1.5} pt={2} pr={2}>
                <Box transform={'rotate(90deg)'}>
                    <BsSearch fontSize={24}/>
                </Box>
                <Box w={1}/>
                </Box>
                <Box pl={4} pr={6} bg={'white'} py={1.5}>
                    <Text color={'blue.main'}>www.elfcurriculum.org</Text>
                </Box>
                <Box transform={'translate(200%, 80%) rotate(-45deg)'} pos='absolute' >
                    <ImArrowRight fill="#a2cc39" fontSize={32}/>
                </Box>
                </HStack>
                <HStack justifyContent={'space-between'} w='full' h={'20%'}>
                    <Link color={'white'} href={'mailto:curriculum@elf.mn'} target={'_blank'}>curriculum@elf.mn</Link>
                    <Link color={'white'} href={'tel:+97672222777'} target={'_blank'}>(976) 72222777</Link>
                </HStack>
            </VStack>
            <VStack flex={[0,0,0,1,1,1]}>

            </VStack>
        </HStack>

    )
}