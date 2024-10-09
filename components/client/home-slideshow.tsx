"use client";

import Image from "next/image";
import { Carousel } from "@/components/carousel";

const sliders = [
  {
    text: "Restaurant",
    src: require("@/public/img/slider/restaurant.jpg"),
    alt: "Illustration d'un projet de restaurant",
  },
  {
    text: "Architecture",
    src: require("@/public/img/slider/architecture.jpg"),
    alt: "Illustration d'un projet d'architecture",
  },
  {
    text: "Architecture d'intérieure",
    src: require("@/public/img/slider/architecture-interieure.jpg"),
    alt: "Illustration d'un projet d'architecture d'intérieure",
  },
  {
    text: "Agencement",
    src: require("@/public/img/slider/agencement.jpg"),
    alt: "Illustration d'un projet d'agencement",
  },
  {
    text: "Piscine",
    src: require("@/public/img/slider/piscine.jpg"),
    alt: "Illustration d'un projet de piscine",
  },
  {
    text: "Boutique",
    src: require("@/public/img/slider/boutique.jpg"),
    alt: "Illustration d'un projet de boutique",
  },
];

export function HomeSlideshow() {
  return (
    <div className="absolute top-0 left-0 w-screen h-screen overflow-hidden -z-10">
      <Carousel>
        {sliders.map((slide, index) => (
          <div
            key={index}
            className="w-full h-full flex justify-center items-center"
          >
            <div className="relative w-full h-full">
              <Image
                src={slide.src}
                alt={slide.alt}
                className="w-full h-full object-cover object-center"
                unoptimized
              />
              <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-35 flex flex-col justify-center items-center">
                <h1 className="w-full text-center text-4xl text-white font-bold">
                  {slide.text}
                </h1>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
