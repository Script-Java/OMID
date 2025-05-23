"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import img1 from "../assets/img/1.jpg";
import img2 from "../assets/img/2.jpg";
import img3 from "../assets/img/3.jpg";
import img4 from "../assets/img/4.jpg";

const slides = [
  {
    image: img1,
    heading: "Trusted Auto Glass Repair in Dallas",
    description: "Professional, fast, and affordable glass solutions at your doorstep.",
  },
  {
    image: img2,
    heading: "Mobile Service – We Come to You",
    description: "Convenient repairs and replacements wherever you are.",
  },
  {
    image: img3,
    heading: "Residential Window Glass Replacement",
    description: "Secure and stylish glass replacements for your home.",
  },
  {
    image: img4,
    heading: "Fast, Affordable, and Reliable Service",
    description: "Experience quality service trusted by thousands across Texas.",
  },
];

const Slider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  const nextSlide = () =>
    setCurrent((prev) => (prev + 1) % slides.length);

  return (
    <div className="relative w-full overflow-hidden h-[600px]">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, i) => (
          <div key={i} className="min-w-full h-[600px] relative">
            <Image
              src={slide.image}
              alt={`Slide ${i + 1}`}
              fill
              className="object-cover"
              priority={i === 0}
            />
            <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center px-4">
              <h2 className="text-white text-4xl md:text-6xl font-bold mb-4">{slide.heading}</h2>
              <p className="text-white text-lg md:text-xl mb-6 max-w-2xl">
                {slide.description}
              </p>
              <Link
                href="/quote"
                className="btn btn-primary text-white text-lg px-6 py-3 rounded-md shadow-md"
              >
                Schedule an Appointment Now
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Arrows */}
      <div className="absolute top-1/2 left-0 right-0 flex justify-between px-4 -translate-y-1/2 z-10">
        <button onClick={prevSlide} className="btn btn-circle bg-black hover:bg-base-200">
          ❮
        </button>
        <button onClick={nextSlide} className="btn btn-circle bg-black hover:bg-base-200">
          ❯
        </button>
      </div>
    </div>
  );
};

export default Slider;
