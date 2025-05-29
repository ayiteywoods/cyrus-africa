'use client'

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';

const slides = [
  {
    image: '/hero2.jpg',
    title: 'Our Mission',
    description: 'To improve and expand sustainable Christ-centered education globally.',
  },
  {
    image: '/market.jpg',
    title: 'Making a Difference',
    description: 'Empowering communities through education and sustainable development.',
  },
  {
    image: '/hero1.jpg',
    title: 'Join Our Cause',
    description: 'Be part of the change you want to see in the world.',
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [progress, setProgress] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setProgress(0);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setProgress(0);
  }, []);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isAutoPlaying) {
      timer = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            nextSlide();
            return 0;
          }
          return prev + 0.5;
        });
      }, 25);
    }
    return () => clearInterval(timer);
  }, [isAutoPlaying, nextSlide]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!touchStart) return;
    
    const currentTouch = e.touches[0].clientX;
    const diff = touchStart - currentTouch;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
      setTouchStart(null);
    }
  };

  return (
    <div 
  className="relative bg-white overflow-hidden h-[600px]"
  onTouchStart={handleTouchStart}
  onTouchMove={handleTouchMove}
>
  {/* Slider */}
  <div className="absolute inset-0">
    {slides.map((slide, index) => (
      <div
        key={index}
        className={`absolute inset-0 transition-opacity duration-1000 ${
          index === currentSlide ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <img
          src={slide.image}
          alt={slide.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
    ))}
  </div>

  {/* Content - Modified for bottom positioning with bottom-origin slant */}
  <div className="relative h-full w-full">
    <div className="absolute bottom-0 right-0 w-full">
      <div className="flex justify-end">
        <div className="text-right max-w-2xl">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0 absolute'
              }`}
            >
              <div className="bg-green-600 bg-opacity-40 p-10 
                [clip-path:polygon(0_0,100%_0,100%_100%,10%_100%)]">
                <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                  {slide.title}
                </h1>
                <p className="mt-6 text-xl text-white">
                  {slide.description}
                </p>
                <div className="mt-10">
                  <Link
                    href="/give"
                    className="inline-block bg-[#4db848] text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-[#d0952c] transition-colors"
                  >
                    Give today
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>

  {/* Progress Bar */}
  <div className="absolute top-0 left-0 w-full h-1 bg-black/20">
    <div 
      className="h-full bg-[#4db848] transition-all duration-100"
      style={{ width: `${progress}%` }}
    />
  </div>
</div>
  );
};

export default Hero; 