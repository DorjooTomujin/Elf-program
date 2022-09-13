import { Box, Divider, Grid, GridItem, Image, Stack, Text } from "@chakra-ui/react"

export const Media = ({items}) => {
    return (
        <Stack maxW={'1200px'} bg={'blue.main'} px={[5, 5, 5, 3, 10, 10]} py={10}>
        {items && (
          <Grid gridTemplateColumns={`repeat(${items.length}, auto)`} alignItems='start' gap={10} >
          {items && items.map((i, index) => {
            return (
             <GridItem  key={index}>
            <Box  display={'flex'} alignItems='center' h={items.length > 2 ? '180px': 'auto'} w={items.length > 2 ? 'auto' : items.length == 2 ? '50%' : '30%'}><Image src={`/assets/img/${i.img}`} /></Box>
            {
              i.text && (
                <>
                <Divider borderColor={'green.main'} my={4}/>
            <Text color={'white'}>{i.text}</Text>
                </>
              )
            }
            </GridItem>
            )
            
          })}
        </Grid>
        )}
      </Stack>
    )
}