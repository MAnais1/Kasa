import { useState } from "react";
import arrowRight from "../assets/arrow-right.svg";
import arrowLeft from "../assets/arrow-left.svg";
import "../sass/Slideshow.scss";

function Slideshow({ pictures }) {
  const [slide, setSlide] = useState(0);
  const nextSlide = () => {
    setSlide(slide === pictures.length - 1 ? 0 : slide + 1);
  };
  const prevSlide = () => {
    setSlide(slide === 0 ? pictures.length - 1 : slide - 1);
  };

  return (
    <div className="carousel">
      {pictures.map((picture, index) => {
        return (
          <img
            src={picture}
            alt="logement"
            key={index}
            className={slide === index ? "picture" : "picture pictureHidden"}
          ></img>
        );
      })}
      <div className={pictures.length ===  1 ? "arrow-numberNone" : "arrow-number"}>
        <img
          src={arrowLeft}
          alt="flêche gauche"
          className="arrow arrowLeft"
          onClick={prevSlide}
        ></img>
        <p className="numbering">
          {slide + 1}/{pictures.length}
        </p>
        <img
          src={arrowRight}
          alt="flêche droite"
          className="arrow arrowRight"
          onClick={nextSlide}
        ></img>
      </div>
    </div>
  );
}
export default Slideshow;
