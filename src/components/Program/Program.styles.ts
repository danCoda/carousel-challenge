import styled from "styled-components";
import { media } from "../../styles/media";

export const ProgramContainer = styled.div`
  padding: 2rem;
  color: ${({ theme }) => theme.colors.text};
  max-width: ${({ theme }) => theme.maxWidths.hd};
  margin: 0 auto;

  ${media.fullHd} {
    max-width: ${({ theme }) => theme.maxWidths.fullHd};
  }
`;

export const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 2rem;
  margin-top: 2rem;

  ${media.fullHd} {
    grid-template-columns: 400px 1fr;
  }
`;

export const ImageContainer = styled.div`
  img {
    width: 100%;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

export const InfoContainer = styled.div`
  .metadata {
    display: flex;
    gap: 1rem;
    margin-bottom: 2rem;
    color: #ccc;

    span {
      white-space: nowrap;
    }
  }

  .description {
    line-height: 1.6;
    font-size: 1rem;

    ${media.fullHd} {
      font-size: 1.2rem;
    }
  }
`;
