import { TriangleDownIcon } from "@chakra-ui/icons"
import { Box, Container, Flex, Heading, Highlight, Text, VStack } from "@chakra-ui/react"

export const MainTitle = () => {
    console.log(typeof text2)
    return (
        <Container w={'100%'} maxW={'800px'} p={0}>
            <Flex alignItems={'start'} w={'100%'}>
                <Box mr={4} transform={'rotate(-90deg)'} color={'green.main'} fontSize={60}><TriangleDownIcon /></Box>
                <VStack>
                    <Heading textTransform={'uppercase'} color={'blue.main'}>өөрийнхөөрөө сэтгэл дүүрэн амьдрах потенциал хүн бүрт байдаг.</Heading>
                    <Text>өөрийнхөөрөө сэтгэл дүүрэн амьдрах потенциал хүн бүрт байдаг.өөрийнхөөрөө сэтгэл дүүрэн амьдрах потенциал хүн бүрт байдаг.</Text>
                    <Text/>
                    <Text>
                    <Highlight query={'өөрийнхөөрөө сэтгэл '} styles={{fontWeight: 'bold'}}>өөрийнхөөрөө сэтгэл дүүрэн амьдрах потенциал хүн бүрт байдаг.өөрийнхөөрөө сэтгэл дүүрэн амьдрах потенциал хүн бүрт байдаг.өөрийнхөөрөө сэтгэл дүүрэн амьдрах потенциал хүн бүрт байдаг. </Highlight>
                    </Text>
                </VStack>

            </Flex>
        </Container>
    )
}