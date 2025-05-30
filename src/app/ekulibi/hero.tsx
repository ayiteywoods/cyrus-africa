'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const heroSlides = [
  {
    image: '/ekulibiSlider1.jpg',
    title: 'Premium African Brands',
    subtitle: 'Curated selection of quality products',
    cta: 'Get in Touch',
    link: './contact'
  },
  {
    image: '/ekulibiSlider2.jpeg',
    title: 'Handcrafted Excellence',
    subtitle: 'Support local artisans and makers',
    cta: 'Learn More',
    link: './contact'
  },
 
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Manual navigation
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative w-full h-[70vh] max-h-screen overflow-hidden">
      {/* Slides container */}
      <div 
        className="flex h-full transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {heroSlides.map((slide, index) => (
          <div 
            key={index} 
            className="relative w-full h-full flex-shrink-0"
          >
            {/* Background image */}
            <Image
              src={slide.image}
              alt=""
              fill
              className="object-cover object-center"
              priority={index === 0}
            />
            
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/30" />
            
            {/* Content */}
            <div className="absolute inset-0 flex items-center justify-center text-center">
              <div className="px-4 text-white max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fadeIn">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl mb-8 animate-fadeIn delay-100">
                  {slide.subtitle}
                </p>
                <Link
                  href={slide.link}
                  className="inline-block bg-[#4db848] text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-[#d0952c] transition-colors animate-fadeIn delay-200"
                >
                  {slide.cta}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation dots */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${currentSlide === index ? 'bg-white w-6' : 'bg-white/50'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}