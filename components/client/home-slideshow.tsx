"use client";

import Image, { StaticImageData } from "next/image";
import { useState, useEffect } from "react";
import { Carousel } from "@/components/carousel";

const sliders = [
  {
    text: "Rénovation",
    src: () => import("@/public/img/slider/bleu-haussmannien.jpg"),
    alt: "Rénovation d'un appartement haussmannien",
  },
  {
    text: "Conception",
    src: () => import("@/public/img/slider/boutique-bouton-noir.jpg"),
    alt: "Conception d'une boutique de luxe",
  },
  {
    text: "Agencement",
    src: () => import("@/public/img/slider/plans-de-vente.jpg"),
    alt: "Illustration d'un projet d'aménagement intérieur",
  },
  {
    text: "Décoration",
    src: () => import("@/public/img/slider/restaurant-madam.jpg"),
    alt: "Décoration d'un restaurant",
  },
  {
    text: "Aménagement",
    src: () => import("@/public/img/slider/travailler-autrement.jpg"),
    alt: "Aménagement de bureaux",
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
    <div className="relative w-screen h-screen overflow-hidden -z-10">
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
              <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col justify-center items-center">
                <h1 className="text-4xl text-white font-bold">{slide.text}</h1>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
