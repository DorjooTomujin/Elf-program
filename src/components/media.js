import { Box, Divider, Grid, GridItem, Image, Stack, Text } from "@chakra-ui/react"

export const Media = ({items, bg}) => {
    return (
        <Stack maxW={'1200px'} bg={bg} px={[0, 0, 5, 3, 10, 10]} py={10}>
        {items && (
          <Grid gridTemplateColumns={[`repeat(${items.length > 3 ? 2: 2}, auto)`, `repeat(${items.length > 3 ? 3: 2}, auto)`,`repeat(${items.length > 3 ? 3: items.length}, auto)`, `repeat(${items.length > 3 ? 4: items.length}, auto)`, `repeat(${items.length}, auto)`, `repeat(${items.length}, auto)`]} alignItems='start' gap={[4,8,8,10,10]} >
          {items && items.map((i, index) => {
            return (
             <GridItem  key={index}>
            <Box  display={'flex'} alignItems='center' h={[items.length > 2 ? '120px': '50px',items.length > 2 ? '180px': 'auto',items.length > 2 ? '180px': 'auto',items.length > 2 ? '180px': 'auto',items.length > 2 ? '180px': 'auto',]} w={[items.length >= 2 ? 'auto' : '30vh' ,items.length >= 2 ? 'auto' : '25vh' ,items.length > 2 ? 'auto' : '30vh' ,items.length > 2 ? 'auto' : '30vh' ,items.length > 2 ? 'auto' : '30vh' ,items.length > 2 ? 'auto' : '30vh' ]}><Image src={`/assets/img/${i.img}`} w={'full'} /></Box>
            {
              i.text && (
                <>
                <Divider borderColor={'green.main'} my={4}/>
            <Text >{i.text}</Text>
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