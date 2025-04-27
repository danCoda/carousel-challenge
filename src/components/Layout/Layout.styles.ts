import styled from "styled-components";
import { media } from "../../styles/media";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  padding: 20px;

  h1 {
    display: inline;
    font-size: ${({ theme }) => theme.typography.h1.hd};

    ${media.fullHd} {
      font-size: ${({ theme }) => theme.typography.h1.fullHd};
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.maxWidths.hd};
  margin: 0 auto;

  ${media.fullHd} {
    max-width: ${({ theme }) => theme.maxWidths.fullHd};
  }
`;
