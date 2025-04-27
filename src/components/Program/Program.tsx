import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { 
  ProgramContainer, 
  ContentWrapper, 
  ImageContainer, 
  InfoContainer,
} from './Program.styles';
import { usePrograms } from '../../context/ProgramContext';

export const Program: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { items, isLoading, error } = usePrograms();

  const item = items.find(item => item.id === Number(id));

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Backspace') {
      navigate('/');
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  if (isLoading) {
    return <ProgramContainer>Loading...</ProgramContainer>;
  }

  if (error || !item) {
    return <ProgramContainer>{error || 'Program not found'}</ProgramContainer>;
  }

  return (
    <ProgramContainer>
      <ContentWrapper>
        <ImageContainer>
          <img src={item.image} alt={item.title} />
        </ImageContainer>
        <InfoContainer>
          <h1>{item.title}</h1>
          <div className="metadata">
            <span>{item.year}</span>
            <span>•</span>
            <span>{item.rating}</span>
            <span>•</span>
            <span>{item.genre}</span>
          </div>
          <p className="description">{item.description}</p>
          <div className="metadata">
            <span>Type: {item.type}</span>
            <span>•</span>
            <span>Language: {item.language}</span>
          </div>
        </InfoContainer>
      </ContentWrapper>
    </ProgramContainer>
  );
};