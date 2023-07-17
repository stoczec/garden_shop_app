import React from 'react';
import errorImg from '../../assets/error.png';

export const NotFoundPage = ({ textError }) => {
  return (
    <div>
      <img src={errorImg} alt={textError} />
    </div>
  );
};
