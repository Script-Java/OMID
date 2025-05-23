'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import img1 from '../assets/img/res/slider/1.jpg';
import img2 from '../assets/img/res/slider/2.jpg'; 
import img3 from '../assets/img/res/slider/3.jpg';
import img4 from '../assets/img/res/slider/4.jpg';
import img5 from '../assets/img/res/slider/5.jpg';
import img6 from '../assets/img/res/slider/6.jpg';

const slides = [
  { id: 1, image: img1 },
  { id: 2, image: img2 },
  { id: 3, image: img3 },
  { id: 4, image: img4 },
  { id: 5, image: img5 },
  { id: 6, image: img6 },
];

export default function ResSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[400px]">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={slide.image}
            alt={`Slide ${slide.id}`}
            fill
            className="object-cover"
            priority={index === 0}
          />
        </div>
      ))}
    </div>
  );
}
