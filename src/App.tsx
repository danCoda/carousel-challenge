import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './styles';
import { Layout } from './components/Layout/Layout';
import { Carousel } from './components/Carousel';
import { Program } from './components/Program/Program';
import { ProgramProvider } from './context/ProgramContext';

const App: React.FC = () => {
  return (
    <Router>
      <ProgramProvider>
        <GlobalStyle />
        <Layout>
          <Routes>
            <Route path="/" element={
              <>
                <h1>Movie & TV Show Collection</h1>
                <Carousel />
              </>
            } />
            <Route path="/program/:id" element={<Program />} />
          </Routes>
        </Layout>
      </ProgramProvider>
    </Router>
  );
};

export default App;