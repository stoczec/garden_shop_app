import React from 'react';
import errorImg from '../assets/images/error.png';

const NotFoundPage = ({ textError }) => {
  return (
    <div>
      <img src={errorImg} alt={textError} />
    </div>
  );
};
export default NotFoundPage;
