import React from 'react';
import styled from 'styled-components';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #282c34;
  color: white;
`;

const App: React.FC = () => {
  return (
    <AppContainer>
      <h1>React TypeScript App</h1>
    </AppContainer>
  );
};

export default App;