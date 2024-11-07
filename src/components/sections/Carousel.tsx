import React, { useEffect, useRef, useState } from 'react';

export function Carousel() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const landingPages = [
    'https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&w=2400&q=80',
    'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=2400&q=80',
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=2400&q=80',
    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2400&q=80',
    'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=2400&q=80',
    'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=2400&q=80',
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=2400&q=80',
    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2400&q=80',
    'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=2400&q=80',
    'https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&w=2400&q=80',
  ];

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel || isHovered) return;

    let animationFrameId: number;
    let lastTimestamp = 0;
    const speed = 0.15;

    const animate = (timestamp: number) => {
      if (!lastTimestamp) lastTimestamp = timestamp;
      const elapsed = timestamp - lastTimestamp;
      
      carousel.scrollLeft += speed * elapsed;
      
      if (carousel.scrollLeft >= (carousel.scrollWidth - carousel.clientWidth)) {
        carousel.scrollLeft = 0;
      }
      
      lastTimestamp = timestamp;
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isHovered]);

  return (
    <div className="w-full overflow-hidden py-12">
      <div
        ref={carouselRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="flex gap-6 overflow-x-hidden whitespace-nowrap"
      >
        {[...landingPages, ...landingPages].map((image, index) => (
          <div
            key={index}
            className="flex-none inline-block w-[600px]"
          >
            <img
              src={image}
              alt={`Landing page template ${index + 1}`}
              className="w-full h-[300px] object-cover rounded-lg shadow-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
}