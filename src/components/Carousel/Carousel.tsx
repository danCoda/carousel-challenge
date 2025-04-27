import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  CarouselTrack,
  CarouselItem,
  ErrorMessage,
  SkeletonItem,
} from "./Carousel.styles";
import { usePrograms } from "../../context/ProgramContext";

const VISIBLE_ITEMS = 6;

export const Carousel: React.FC = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const { items, isLoading, error } = usePrograms();

  const handleItemClick = (id: number) => {
    navigate(`/program/${id}`);
  };

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      switch (event.key) {
        case "ArrowLeft":
          setCurrentIndex((prev) => (prev > 0 ? prev - 1 : items.length - 1));
          break;
        case "ArrowRight":
          setCurrentIndex((prev) => (prev + 1) % items.length);
          break;
        case "Enter":
          if (items[currentIndex]) {
            navigate(`/program/${items[currentIndex].id}`);
          }
          break;
      }
    },
    [items.length, currentIndex, navigate]
  );

  React.useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  if (error) {
    return <ErrorMessage>{error}</ErrorMessage>;
  }

  if (isLoading) {
    return (
      <Container>
        <CarouselTrack>
          {Array.from({ length: VISIBLE_ITEMS }).map((_, index) => (
            <SkeletonItem key={index}>
              <div className="skeleton-image" />
            </SkeletonItem>
          ))}
        </CarouselTrack>
      </Container>
    );
  }

  const visibleItems = items.slice(
    Math.max(0, currentIndex - Math.floor(VISIBLE_ITEMS / 2)),
    Math.max(0, currentIndex - Math.floor(VISIBLE_ITEMS / 2)) + VISIBLE_ITEMS
  );

  return (
    <Container>
      <CarouselTrack>
        {visibleItems.map((item) => (
          <CarouselItem
            key={item.id}
            isCurrent={item.id === items[currentIndex]?.id}
            onClick={() => handleItemClick(item.id)}
          >
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
          </CarouselItem>
        ))}
      </CarouselTrack>
    </Container>
  );
};
