import React from 'react';
import { GalleryItem, ImageGalleryItemImg } from './ImageGalleryItem.css';

export const ImageGalleryItem = ({ image, onClick }) => {
  return (
    <>
      <GalleryItem onClick={() => onClick(image.largeImageURL)}>
        <ImageGalleryItemImg src={image.webformatURL} alt="" />
      </GalleryItem>
    </>
  );
};
