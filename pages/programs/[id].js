import {
  Box,
  Center,
  Grid,
  GridItem,
  Heading,
  Highlight,
  Image,
  List,
  ListIcon,
  ListItem,
  Text,
  VStack,
} from '@chakra-ui/react';
import { AdvantageTitle, ProgramTitle } from '../../src/components/titles';
import { IconGrid } from '../../src/components/utils/grid';
import { TriangleDownIcon } from '@chakra-ui/icons';
import { AdvantageAccordian } from '../../src/components/utils/accordian';
export default function Program() {
  return (
    <VStack>
      <Box maxW={'1360px'} w={'100%'} px={'0'} mx={'auto'} py={10}>
        <ProgramTitle />
        <Text px={'70px'} mt={4} textAlign={'justify'}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. A velit
          culpa reiciendis sit nesciunt ea ipsam possimus veniam harum corporis
          distinctio illum repudiandae maxime tempore voluptas exercitationem
          aspernatur architecto magni rerum esse suscipit iusto impedit,
          cupiditate quos? Dolore mollitia sit, culpa impedit id, consequuntur
          numquam provident, iusto laboriosam aspernatur ducimus.
        </Text>
      </Box>

      <Grid templateColumns={'repeat(5, 1fr)'} w={'100%'} px={'70px'}>
        <IconGrid />
        <IconGrid />
        <IconGrid />
        <IconGrid />
        <IconGrid />
        <IconGrid />
        <IconGrid />
      </Grid>
      <Box px={'80px'} py={10} mx="auto" maxW={'1340px'}>
        <Heading color={'green.main'} fontSize="4xl">
          ТА ҮҮНИЙГ МЭДСЭН ҮҮ?
        </Heading>
        <Box bg={'green.main'} px={6} py={4}>
          <Highlight query="21 ХОНОГ" styles={{ fontWeight: 'bold' }}>
            ДАДАЛ СУУХАД дор хаяж 21 ХОНОГ шаардлагатай байдаг.
          </Highlight>
        </Box>
      </Box>
      <Box px={'70px'} py={10} mx={'auto'}>
        <Heading
          color={'purple.main'}
          fontSize="4xl"
          textTransform={'uppercase'}
        >
          гараа сайн бол
        </Heading>
        <Heading
          color={'purple.main'}
          fontSize="60px"
          textTransform={'uppercase'}
        >
          бариа сайн
        </Heading>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
          accusamus eaque modi voluptatem cum inventore aperiam porro vel
          architecto, optio cumque reiciendis cupiditate expedita itaque eius
          quod labore quibusdam tempora. Unde quos animi nobis voluptates
          similique reiciendis non ab atque?
        </Text>
      </Box>
      <Box w={'100%'} px={'80px'} py={10}>
        <Box>
          <Heading>Хөтөлбөрийн агуулга</Heading>
          <List>
            <ListItem display={'flex'} alignItems="center">
              <ListIcon
                as={TriangleDownIcon}
                transform="rotate(-90deg)"
                fontSize={'12px'}
              />
              Математик
            </ListItem>
            <ListItem display={'flex'} alignItems="center">
              <ListIcon
                as={TriangleDownIcon}
                transform="rotate(-90deg)"
                fontSize={'12px'}
              />
              Математик
            </ListItem>
          </List>
        </Box>
        <Image
          src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          mt={4}
        />
      </Box>
      <Box py={10} maxW={'1360px'} w={'100%'} color="purple.main" pb={20}>
        <AdvantageTitle />
        <Box px={'80px'} mt={4}>
          <AdvantageAccordian />
        </Box>
      </Box>
    </VStack>
  );
}
