import React from 'react';
import { GlobalStyle } from './styles';
import { Layout } from './components/Layout/Layout';
import { Carousel } from './components/Carousel';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <h1>Movie & TV Show Collection</h1>
        <Carousel />
      </Layout>
    </>
  );
};

export default App;