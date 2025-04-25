import React from 'react';
import { GlobalStyle } from './styles';
import { Layout } from './components/Layout/Layout';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <h1>React TypeScript App</h1>
      </Layout>
    </>
  );
};

export default App;