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
  transition: transform 0.3s ease-in-out;
`;

export const SkeletonItem = styled.div`
  flex: 0 0 200px;

  .skeleton-image {
    width: 100%;
    border-radius: 8px;
    background: gray;
    background-size: 200% 100%;
  }
`;

export const CarouselItem = styled.div<{ isCurrent: boolean }>`
  flex: 0 0 200px;
  transition: all 0.3s ease;
  transform: ${({ isCurrent }) => (isCurrent ? "scale(1.05)" : "scale(1)")};
  opacity: ${({ isCurrent }) => (isCurrent ? "1" : "0.7")};

  img {
    width: 100%;
    object-fit: cover;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    border: ${({ isCurrent }) => (isCurrent ? "2px solid #007bff" : "none")};
  }

  h3 {
    margin-top: 8px;
    font-size: 16px;
    text-align: center;
    color: ${({ isCurrent }) => (isCurrent ? "#ffffff" : "#cccccc")};
  }

  &:hover {
    transform: scale(1.05);
    opacity: 1;
    cursor: pointer;
  }
`;

export const ErrorMessage = styled.div`
  color: #ff6b6b;
  text-align: center;
  padding: 20px;
  background-color: rgba(255, 107, 107, 0.1);
  border-radius: 8px;
  margin: 20px;
`;
