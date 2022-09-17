import { Box, Heading, Text } from "@chakra-ui/react"

export const DefaultText = ({title, text, tColor}) => {
    return (
        <Box flex={1} sx={{marginLeft:'0 !important'}}>
            <Heading fontSize={[20,24,24,26,28,28]} color={tColor}>{title}</Heading>
            <Box h={4}/>
            <Text>{text}</Text>
        </Box>
    )
}