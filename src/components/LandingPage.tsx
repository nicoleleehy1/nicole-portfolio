'use client';

import React, { useState, useRef, useEffect } from 'react';

interface Position {
  x: number;
  y: number;
}

interface DraggableItem {
  id: string;
  emoji: string;
  position: Position;
  size: number;
}

const LandingPage: React.FC = () => {
  const [stickers, setStickers] = useState<DraggableItem[]>([
    { id: 'kitty', emoji: '🐱', position: { x: 100, y: 100 }, size: 60 },
    { id: 'ice-cream', emoji: '🍦', position: { x: 200, y: 300 }, size: 50 },
    { id: 'cat', emoji: '😸', position: { x: 150, y: 450 }, size: 55 },
    { id: 'sparkle', emoji: '✨', position: { x: 80, y: 200 }, size: 40 },
    { id: 'heart', emoji: '💖', position: { x: 250, y: 150 }, size: 45 },
  ]);

  const [draggedItem, setDraggedItem] = useState<string | null>(null);
  const [dragOffset, setDragOffset] = useState<Position>({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const rect = e.currentTarget.getBoundingClientRect();
    setDraggedItem(id);
    setDragOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!draggedItem || !containerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const newX = e.clientX - containerRect.left - dragOffset.x;
    const newY = e.clientY - containerRect.top - dragOffset.y;

    setStickers(prev =>
      prev.map(sticker =>
        sticker.id === draggedItem
          ? { ...sticker, position: { x: newX, y: newY } }
          : sticker
      )
    );
  };

  const handleMouseUp = () => {
    setDraggedItem(null);
  };

  useEffect(() => {
    if (draggedItem) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [draggedItem, dragOffset]);

  const photos = [
    { id: 1, color: 'from-pink-300 to-rose-400', style: { top: '10%', left: '5%', transform: 'rotate(-5deg)', zIndex: 3 } },
    { id: 2, color: 'from-purple-300 to-indigo-400', style: { top: '25%', left: '15%', transform: 'rotate(3deg)', zIndex: 2 } },
    { id: 3, color: 'from-blue-300 to-cyan-400', style: { top: '45%', left: '8%', transform: 'rotate(-2deg)', zIndex: 4 } },
    { id: 4, color: 'from-yellow-300 to-orange-400', style: { top: '20%', left: '25%', transform: 'rotate(7deg)', zIndex: 1 } },
  ];

  return (
    <div 
      ref={containerRef}
      className="min-h-screen bg-white relative overflow-hidden"
      style={{ cursor: draggedItem ? 'grabbing' : 'default' }}
    >
      {/* Photo Grid */}
      <div className="absolute left-16 top-1/2 transform -translate-y-1/2 w-96 h-96">
        {photos.map((photo) => (
          <div
            key={photo.id}
            className="absolute rounded-3xl shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl overflow-hidden"
            style={{
              ...photo.style,
              width: '280px',
              height: '200px',
            }}
          >
            <div 
              className={`w-full h-full bg-gradient-to-br ${photo.color} flex items-center justify-center`}
            >
              <div className="text-white text-6xl opacity-20">📸</div>
            </div>
          </div>
        ))}
      </div>

      {/* Hero Text */}
      <div className="absolute right-20 top-1/2 transform -translate-y-1/2 max-w-lg z-10">
        <h1 className="text-7xl font-light text-gray-800 mb-6 italic leading-tight">
          Kaylene Son
        </h1>
        <div className="text-4xl font-bold text-pink-500 mb-8 uppercase tracking-wider leading-tight">
          <div>Bold, Colorful,</div>
          <div>Playful, & Curious.</div>
        </div>
        <p className="text-lg leading-relaxed text-gray-600 font-light">
          I'm an undergraduate student at UC Berkeley with interests in digital illustration and graphic design. 
          Lover of cats, true crime documentaries, and art books, this site was also created to supplement my love for 
          storytelling by sharing my cluttered thoughts and doodles. I'm constantly learning more about life 
          through art and art through life – I hope to continue and share my journey as a young, aspiring creator.
        </p>
      </div>

      {/* Draggable Stickers */}
      {stickers.map((sticker) => (
        <div
          key={sticker.id}
          className={`absolute select-none transition-all duration-200 hover:scale-110 ${
            draggedItem === sticker.id ? 'scale-110 z-50' : 'z-20'
          }`}
          style={{
            left: `${sticker.position.x}px`,
            top: `${sticker.position.y}px`,
            fontSize: `${sticker.size}px`,
            cursor: draggedItem === sticker.id ? 'grabbing' : 'grab',
            filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))',
          }}
          onMouseDown={(e) => handleMouseDown(e, sticker.id)}
          onDragStart={(e) => e.preventDefault()}
        >
          {sticker.emoji}
        </div>
      ))}

      {/* Floating Background Elements */}
      <div className="absolute top-20 right-40 w-4 h-4 bg-pink-300 rounded-full opacity-60 animate-pulse"></div>
      <div className="absolute bottom-32 left-20 w-6 h-6 bg-purple-300 rounded-full opacity-40 animate-bounce"></div>
      <div className="absolute top-40 left-1/3 w-3 h-3 bg-yellow-300 rounded-full opacity-50"></div>
    </div>
  );
};

export default LandingPage;