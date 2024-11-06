import slide from "@/public/images/slider.jpg";
import slide1 from "@/public/images/slider1.jpg";
import slide2 from "@/public/images/slider2.jpg";
import slide3 from "@/public/images/slider3.jpg";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Image from "next/image";

const carouselImages = [slide, slide1, slide2, slide3];

const HeroCarousel = () => {
  return (
    <div className="hidden lg:block">
      <Carousel className="w-full max-w-xs">
        <CarouselContent>
          {carouselImages.map((slide, index) => (
            <CarouselItem key={index}>
              <Image
                src={slide}
                alt="hero"
                className="w-full h-[24rem] rounded-md object-cover"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};
export default HeroCarousel;
