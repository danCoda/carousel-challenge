import { CarouselTrack, Container, SkeletonItem } from "./Carousel.styles";
import { MAX_ITEMS } from "./Carousel";

export const SkeletonCarousel = () => {
  return (
    <Container>
      <CarouselTrack>
        {Array.from({ length: MAX_ITEMS }).map((_, index) => (
          <SkeletonItem key={index}>
            <div className="skeleton-image" />
          </SkeletonItem>
        ))}
      </CarouselTrack>
    </Container>
  );
};
