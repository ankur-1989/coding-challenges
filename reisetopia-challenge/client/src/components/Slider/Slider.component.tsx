import "./slider.component.css";
import Carousel from "react-spring-3d-carousel";
import { config } from "react-spring";
import { GoTriangleRight } from "react-icons/go";
import { GoTriangleLeft } from "react-icons/go";
import IconButton from "../IconButton/IconButton.component";
import { useCurrentHotel } from "../../hooks/useCurrentHotel";
import { useBetween } from "use-between";

interface Slide {
  key: number;
  content: JSX.Element;
}

interface SliderProps {
  slides: Slide[];
}

export default function Slider({ slides }: SliderProps) {
  const { goToSlide, setGoToSlide, setHotelId } = useBetween(useCurrentHotel);

  const gotoPreviousSlide = () => {
    setGoToSlide(goToSlide === 0 ? slides.length - 1 : goToSlide - 1);
    setHotelId(slides[goToSlide - 1].key);
  };

  const gotoNextSlide = () => {
    setGoToSlide(goToSlide === slides.length - 1 ? 0 : goToSlide + 1);
    setHotelId(slides[goToSlide + 1].key);
  };

  return (
    <div
      style={{ width: "80%", height: "500px", margin: "0 auto" }}
      className="slider-container"
    >
      <Carousel
        slides={slides}
        goToSlide={goToSlide}
        offsetRadius={1}
        showNavigation={false}
        animationConfig={config.gentle}
      />
      <IconButton className="arrow-left-button" onClick={gotoPreviousSlide}>
        <GoTriangleLeft
          className="arrow-icon"
          size={70}
          color={"rgb(255, 255, 255, 0.9)"}
        />
      </IconButton>
      <IconButton className="arrow-right-button" onClick={gotoNextSlide}>
        <GoTriangleRight
          className="arrow-icon"
          size={70}
          color={"rgb(255, 255, 255, 0.9)"}
        />
      </IconButton>
    </div>
  );
}
