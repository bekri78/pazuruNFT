import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Image from "next/image";

export default function Carousele() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item interval={5000}>
        <video
          loop
          muted
          autoPlay={true}
          src={require("../public/video.webm")}
        />

        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
