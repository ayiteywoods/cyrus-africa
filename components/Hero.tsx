'use client'

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

const Hero = () => {
  const imageSequence = [
    {
      src: '/hero3.jpeg',
      startZoom: 1.0,  // Start zoomed out
      endZoom: 1.2,    // End zoomed in
      position: 'center center',
      overlay: 'from-green-900/20 to-blue-900/10',
      duration: 8000   // 8 seconds per image
    },
    {
      src: '/hero4.jpg',
      startZoom: 1.2,  // Start zoomed in
      endZoom: 1.0,    // End zoomed out
      position: '20% center',
      overlay: 'from-purple-900/15 to-amber-900/10',
      duration: 7500   // 7.5 seconds
    },
    {
      src: '/hero5.jpg',
      startZoom: 1.1,
      endZoom: 1.3,
      position: 'center 30%',
      overlay: 'from-blue-900/20 to-emerald-900/15',
      duration: 8500   // 8.5 seconds
    },
    {
      src: '/hero6.jpg',
      startZoom: 1.3,
      endZoom: 1.1,
      position: '80% center',
      overlay: 'from-amber-900/15 to-green-900/20',
      duration: 7000   // 7 seconds
    }
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const animationRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number>(0);

  // Cinematic animation with variable durations
  const animate = (timestamp: number) => {
    if (!lastTimeRef.current) lastTimeRef.current = timestamp;
    
    const elapsed = timestamp - lastTimeRef.current;
    const currentDuration = imageSequence[currentIndex].duration;
    
    const newProgress = Math.min(progress + (elapsed / currentDuration * 100), 100);
    setProgress(newProgress);

    if (newProgress >= 100) {
      setCurrentIndex((prev) => (prev + 1) % imageSequence.length);
      setProgress(0);
      lastTimeRef.current = timestamp;
    } else {
      lastTimeRef.current = timestamp;
    }

    animationRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [currentIndex, progress]);

  const currentImage = imageSequence[currentIndex];
  const nextIndex = (currentIndex + 1) % imageSequence.length;
  const nextImage = imageSequence[nextIndex];

  // Calculate smooth zoom effects
  const currentZoom = currentImage.startZoom + 
    (currentImage.endZoom - currentImage.startZoom) * (progress / 100);

  // Calculate crossfade opacity (starting at 90% progress)
  const currentOpacity = progress < 90 ? 1 : 1 - ((progress - 90) / 10);
  const nextOpacity = progress < 90 ? 0 : (progress - 90) / 10;

  return (
    <div className="relative bg-gray-900 overflow-hidden h-[600px] md:h-[700px]">
      {/* Cinematic background container */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Current image with dynamic zoom */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${currentImage.src})`,
            backgroundSize: `${currentZoom * 100}%`,
            backgroundPosition: currentImage.position,
            backgroundRepeat: 'no-repeat',
            opacity: currentOpacity,
            transition: 'none',
            willChange: 'transform, opacity' // Optimize for animation
          }}
        >
          <div className={`absolute inset-0 bg-gradient-to-b ${currentImage.overlay}`} />
        </div>

        {/* Next image ready to crossfade */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${nextImage.src})`,
            backgroundSize: `${nextImage.startZoom * 100}%`,
            backgroundPosition: nextImage.position,
            backgroundRepeat: 'no-repeat',
            opacity: nextOpacity,
            transition: 'none',
            willChange: 'transform, opacity'
          }}
        >
          <div className={`absolute inset-0 bg-gradient-to-b ${nextImage.overlay}`} />
        </div>

        {/* Cinematic overlays */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[url('/film-grain.png')] opacity-[3%] mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
      </div>

      {/* Time indicator (optional) */}
      <div className="absolute top-0 left-0 right-0 h-0.5 z-20 bg-black/20">
        <div 
          className="h-full bg-white/90 transition-all duration-100"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center">
        <div className="absolute bottom-0 right-0 w-full">
          <div className="flex justify-end">
            <div className="w-full md:w-1/2 text-right px-4 md:px-0">
              <div className="bg-green-700 bg-opacity-70 p-6 md:p-10 
                [clip-path:polygon(0_0,100%_0,100%_100%,20%_100%)]">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white whitespace-nowrap overflow-hidden">
                  Empowering Communities
                </h1>
                <p className="mt-4 md:mt-6 text-lg md:text-xl text-white pl-8 md:pl-8">
                  Empowering women through sustainable trade and economic resilience.
                </p>
                <div className="mt-6 md:mt-10">
                  <Link
                    href="/give"
                    className="inline-block bg-[#4db848] text-white px-6 py-2 md:px-8 md:py-3 rounded-md text-base md:text-lg font-medium hover:bg-[#d0952c] transition-colors"
                  >
                    Support Our Mission
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;