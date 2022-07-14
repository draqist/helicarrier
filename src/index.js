import { ColorModeScript } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import { ApolloClient,ApolloProvider,InMemoryCache } from '@apollo/client';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
const client = new ApolloClient({
  uri: "http://localhost:3001/",
  cache: new InMemoryCache()
});

root.render(
  <StrictMode>
    <ColorModeScript />
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </StrictMode>
);
