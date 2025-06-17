'use client';

import Image from 'next/image';
import React from 'react';
import styles from './ScrollingGallery.module.css';


const images = [
  '/gallery/calhacks.png',
  '/gallery/img2.jpg',
  '/gallery/img3.jpg',
  '/gallery/img4.jpg',
  // add as many as you want
];

const ScrollingGallery: React.FC = () => {
  return (
    <div className={styles.slider}>
      <div className={styles.slideTrack}>
        {images.concat(images).map((src, index) => (
          <div className={styles.slide} key={index}>
            <Image src={src} alt={`Gallery image ${index}`} width={300} height={500} className='rounded-[10px]'/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollingGallery;