// src/components/Carousel.tsx

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    title: "📝 Hire a Ghost Writer for Your Exams! 🎉",
    subtitle: "— Only a Fantasy!",
    bgImage: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&w=1600&h=400&q=80",
  },
  {
    title: "🎓 Skip All Your Lectures and Still Graduate! 📚",
    subtitle: "— Only in Your Imagination!",
    bgImage: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&w=1600&h=400&q=80",
  },
  {
    title: "🎉 Hire guys to mark attendance on your behalf 😂",
    subtitle: "— Just Kidding!",
    bgImage: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&w=1600&h=400&q=80",
  },
];

const Carousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () => setCurrent((curr) => (curr + 1) % slides.length);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-8 mt-8 mb-12">
      <h3 className="text-xl font-semibold text-gray-800 mb-4 md:text-2xl">Trending Features</h3>
      
      <div className="relative h-[200px] sm:h-[300px] rounded-xl overflow-hidden shadow-lg">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`${
              index === current ? 'opacity-100' : 'opacity-0'
            } transition-opacity duration-500 absolute w-full h-full`}
            style={{ display: index === current ? 'block' : 'none' }}
          >
            <div 
              className="w-full h-full bg-cover bg-center relative"
              style={{ backgroundImage: `url(${slide.bgImage})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-12">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2">
                  {slide.title}
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-white/90">
                  {slide.subtitle}
                </p>
              </div>
            </div>
          </div>
        ))}

        <button
          onClick={prev}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 p-2 rounded-full shadow-md hover:bg-white transition"
        >
          <ChevronLeft className="h-6 w-6 text-gray-800" />
        </button>

        <button
          onClick={next}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 p-2 rounded-full shadow-md hover:bg-white transition"
        >
          <ChevronRight className="h-6 w-6 text-gray-800" />
        </button>

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full transition-colors ${
                index === current ? 'bg-white' : 'bg-white/50'
              }`}
              onClick={() => setCurrent(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
