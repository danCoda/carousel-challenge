import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  CarouselTrack,
  CarouselItem,
  ErrorMessage,
} from "./Carousel.styles";
import { usePrograms } from "../../context/ProgramContext";
import { SkeletonCarousel } from "./SkeletonCarousel";

export const MAX_ITEMS = 6;
const ITEMS_PER_SIDE = 2;

export const Carousel = () => {
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
          setCurrentIndex((prev) => (prev > 0 ? prev - 1 : 0));
          break;
        case "ArrowRight":
          setCurrentIndex((prev) =>
            prev === items.length - 1 ? prev : prev + 1
          );
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

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  if (error) {
    return <ErrorMessage>{error}</ErrorMessage>;
  }

  if (isLoading) {
    return <SkeletonCarousel />;
  }

  const startIndex = Math.max(
    0,
    currentIndex - Math.floor(MAX_ITEMS / ITEMS_PER_SIDE)
  );
  const visibleItems = items.slice(startIndex, startIndex + MAX_ITEMS);

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
          </CarouselItem>
        ))}
      </CarouselTrack>
    </Container>
  );
};
