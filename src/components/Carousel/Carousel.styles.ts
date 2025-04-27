import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  padding: 0 40px;
`;

export const CarouselTrack = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 20px;
  padding: 20px 0;
`;

export const SkeletonItem = styled.div`
  .skeleton-image {
    width: 100%;
  }
`;

interface CarouselItemProps {
  $isCurrent: boolean;
}

export const CarouselItem = styled.div<CarouselItemProps>`
  img {
    width: 100%;
    object-fit: cover;
    border: ${({ $isCurrent, theme }) =>
      $isCurrent ? `2px solid ${theme.colors.primary}` : "none"};
  }
`;

export const ErrorMessage = styled.div`
  color: ${({ theme }) => theme.colors.text};
`;
