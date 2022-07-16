import { gql, useQuery } from '@apollo/client';
import {
  Box, Button, Center, ChakraProvider, Flex, Grid, Heading, Spinner, theme
} from '@chakra-ui/react';
import { createContext, useState } from 'react';
import { useRecoilState } from 'recoil';
import { queryData } from './atom';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Items from './components/Items';


export const DataContext = createContext([])
function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl" w='100%'>
        <Grid p={[0,0,3]} mx='12px'>
          <ColorModeSwitcher justifySelf="flex-end" />
          <Heading color={"current"} fontFamily='Oswald'> HeliCarrier</Heading>
            <Items  />
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
