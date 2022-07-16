import { ColorModeScript } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { RecoilRoot } from 'recoil'

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
const client = new ApolloClient({
  uri: "http://localhost:3001/",
  cache: new InMemoryCache()
});

root.render(
  <StrictMode>
    <ColorModeScript />
    <RecoilRoot>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </RecoilRoot>
  </StrictMode>
);
