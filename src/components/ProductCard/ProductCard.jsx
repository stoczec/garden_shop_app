import React from 'react';
import { BASEURL } from '../../constants/URL';
import style from './ProductCard.module.scss';

export const ProductCard = ({ image, title, price, discont_price }) => {
  const discount = Math.round(((price - discont_price) / price) * 100);
  return (
    <article className={style.card}>
      <img src={`${BASEURL}${image}`} alt={title} />
      <div>
        <p>{`${price}$`}</p>
        <p>{discont_price ? `${discont_price}$` : ''}</p>
        <p>{discont_price ? `-${discount}%` : ''}</p>
      </div>
      <h2>{title}</h2>
    </article>
  );
};
