import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #282c34;
  color: white;
  padding: 20px;
  
  h1 {
    font-size: 24px;
    text-align: center;
  }

  @media (min-width: 1280px) {
    padding: 30px;
    h1 {
      font-size: 32px;
    }
  }

  @media (min-width: 1920px) {
    padding: 40px;
    h1 {
      font-size: 48px;
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (min-width: 1280px) {
    max-width: 1024px;
  }
  
  @media (min-width: 1920px) {
    max-width: 1440px;
  }
`;