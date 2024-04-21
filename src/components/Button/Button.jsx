import React from 'react';
import { LoadMoreBtn } from './Button.css';

export const Button = ({ onClick, disabled }) => {
  return (
    <>
      <LoadMoreBtn onClick={onClick} disabled={disabled}>
        Load more
      </LoadMoreBtn>
    </>
  );
};
