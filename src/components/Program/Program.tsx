import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  ProgramContainer,
  ContentWrapper,
  ImageContainer,
  InfoContainer,
} from "./Program.styles";
import { usePrograms } from "../../context/ProgramContext";
import MetadataProgram from "./MetadataProgram";

export const Program = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { items, isLoading, error } = usePrograms();

  const item = items.find((item) => item.id === Number(id));

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Backspace") {
      navigate("/");
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  if (isLoading) {
    return <ProgramContainer>Loading...</ProgramContainer>;
  }

  if (error || !item) {
    return <ProgramContainer>{error || "Program not found"}</ProgramContainer>;
  }

  return (
    <ProgramContainer>
      <ContentWrapper>
        <ImageContainer>
          <img src={item.image} alt={item.title} />
        </ImageContainer>
        <InfoContainer>
          <h1>{item.title}</h1>
          <MetadataProgram metadata={item}/>
          <p className="description">{item.description}</p>
        </InfoContainer>
      </ContentWrapper>
    </ProgramContainer>
  );
};
