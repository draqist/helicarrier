import { gql, useQuery } from '@apollo/client';
import {
  Box, Button, Center, ChakraProvider, Flex, Grid, Heading, Select, Spinner, theme
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Items from './components/Items';

function App() {
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
  const { data, loading, error } = useQuery(FILTERQUERY);
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
            <Select placeholder='Sort By'>
              <option value={'option 1'}> Date (Ascending) </option>
              <option value={'option 2'}> Date (Descending) </option>
              <option value='type 1'> Type </option>
            </Select>
            <Button>Select</Button>
            <Button>Select</Button>
            <Button>Select</Button>
          </Flex>
          {
            data.allDates.map((newdata, i) => <Items key={i} res={newdata} /> )
          }
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
