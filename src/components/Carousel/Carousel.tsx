import React, { useEffect, useState, useCallback } from "react";
import {
  Container,
  CarouselTrack,
  CarouselItem,
  ErrorMessage,
  SkeletonItem,
} from "./Carousel.styles";
import type { Movie } from "../../types";

const VISIBLE_ITEMS = 6;

export const Carousel: React.FC = () => {
  const [items, setItems] = useState<Movie[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await fetch("/data.json");
      if (!response.ok)
        throw new Error("An unknown error occured. Please try again laterrr");
      const data = await response.json();
      setItems(data);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        console.log("Unknown error:", err);
      }
    } finally {
      setIsLoading(false);
    }
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
            console.log("Selected:", items[currentIndex].title);
          }
          break;
      }
    },
    [items.length, currentIndex]
  );

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
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
          >
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
          </CarouselItem>
        ))}
      </CarouselTrack>
    </Container>
  );
};
