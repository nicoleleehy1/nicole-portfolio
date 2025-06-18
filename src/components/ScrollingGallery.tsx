'use client';

import Image from 'next/image';
import React from 'react';
import styles from './ScrollingGallery.module.css';

const images = [
  '/gallery/calhacks-1.png',
  '/gallery/calhacks-2.jpg',
  '/gallery/calhacks-3.jpg',
  '/gallery/sdg-circuit.png',
];

const ScrollingGallery: React.FC = () => {
  return (
    <div className={styles.slider}>
      <div className={styles.slideTrack}>
        {images.concat(images).map((src, index) => (
          <div className={styles.slide} key={index}>
            <Image
              src={src}
              alt={`Gallery image ${index}`}
              width={1000} // a big number, doesn't matter
              height={300} // fixed height
              className="h-[300px] w-auto object-contain rounded-[10px]"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollingGallery;
