import React from 'react';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryUl } from './ImageGallery.css';

export const ImageGallery = ({ images, onClick }) => {
  return (
    <ImageGalleryUl>
      {images.map(image => (
        <ImageGalleryItem key={image.id} image={image} onClick={onClick} />
      ))}
    </ImageGalleryUl>
  );
};
