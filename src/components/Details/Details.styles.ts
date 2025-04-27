import styled from 'styled-components';

export const DetailsContainer = styled.div`
  padding: 2rem;
  color: white;
  max-width: 1200px;
  margin: 0 auto;
`;

export const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 2rem;
  margin-top: 2rem;
`;

export const ImageContainer = styled.div`
  img {
    width: 100%;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

export const InfoContainer = styled.div`
  h1 {
    margin-bottom: 1rem;
  }

  .metadata {
    display: flex;
    gap: 1rem;
    margin-bottom: 1rem;
    color: #ccc;
  }

  .description {
    line-height: 1.6;
    margin-bottom: 2rem;
  }
`;

export const BackButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &:hover {
    color: #ccc;
  }
`;