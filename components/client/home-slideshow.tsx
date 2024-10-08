"use client";

import Image, { StaticImageData } from "next/image";
import { useState, useEffect } from "react";
import { Carousel } from "@/components/carousel";

const sliders = [
  {
    text: "Architecture",
    src: () => import("@/public/img/slider/architecture.jpg"),
    alt: "Illustration d'un projet d'architecture",
  },
  {
    text: "Architecture d'intérieure",
    src: () => import("@/public/img/slider/architecture-interieure.jpg"),
    alt: "Illustration d'un projet d'architecture d'intérieure",
  },
  {
    text: "Agencement",
    src: () => import("@/public/img/slider/agencement.jpg"),
    alt: "Illustration d'un projet d'agencement",
  },
  {
    text: "Piscine",
    src: () => import("@/public/img/slider/piscine.jpg"),
    alt: "Illustration d'un projet de piscine",
  },
  {
    text: "Boutique",
    src: () => import("@/public/img/slider/boutique.jpg"),
    alt: "Illustration d'un projet de boutique",
  },
  {
    text: "Restaurant",
    src: () => import("@/public/img/slider/restaurant.jpg"),
    alt: "Illustration d'un projet de restaurant",
  },
];

export function HomeSlideshow() {
  const [slider, setSlider] = useState<
    { src: StaticImageData; text: string; alt: string }[]
  >([]);

  useEffect(() => {
    const fetchImages = async () => {
      const images = await Promise.all(
        sliders.map(async (slide) => {
          const image = await slide.src();
          return {
            ...slide,
            src: image.default,
          };
        })
      );

      setSlider(images);
    };

    fetchImages();
  }, []);

  if (slider.length === 0)
    return (
      <div className="h-full flex justify-center items-center">Loading...</div>
    );

  return (
    <div className="absolute top-0 left-0 w-screen h-screen overflow-hidden -z-10">
      <Carousel>
        {slider.map((slide, index) => (
          <div
            key={index}
            className="w-full h-full flex justify-center items-center"
          >
            <div className="relative w-full h-full">
              <Image
                src={slide.src}
                alt={slide.alt}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-35 flex flex-col justify-center items-center">
                <h1 className="text-4xl text-white font-bold">{slide.text}</h1>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
