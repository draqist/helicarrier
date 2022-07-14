import { gql, useQuery } from '@apollo/client';
import {
  Box, Button, Center, ChakraProvider, Flex, Grid, Heading, Spinner, theme
} from '@chakra-ui/react';
import { useState } from 'react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Items from './components/Items';
import useQUERY from './'

function App() {
  const [theValue, setValue] = useState('')
  const FILTERQUERY = gql`
  {
      allDates {
        date
        Statuses{
          type
          title
          date_id
        }
      }
  }
  `;
  const { data, loading, refetch, error } = useQuery(FILTERQUERY,);
  if (loading) return (
    <Center h='100vh' w='100vw'>
      <Spinner w='60px' h='60px' color='white'/>
    </Center>
  )
  if (error) return <pre>{error.message}</pre>
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl" w='100%'>
        <Grid p={[0,0,3]} mx='12px'>
          <ColorModeSwitcher justifySelf="flex-end" />
          <Heading color={"current"} fontFamily='Oswald'> HeliCarrier</Heading>
          <Flex direction={['column', 'row', 'row']} justifyContent={'center'} gap={['6', '', '20']} mt='18px' alignItems='center'>
            <Button onClick={() => useQUERY()}>
              Completed
            </Button>
            <Button> Pending </Button>
            <Button> Awaiting Confirmation </Button>
          </Flex>
          {
            data.allDates.map((newdata, i) => <Items selectedValue={theValue} key={i} res={newdata} /> )
          }
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
