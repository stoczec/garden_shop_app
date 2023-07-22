import React from 'react';
import { BASEURL } from '../../../assets/constants/URL';
import style from './productCard.module.scss';

export default function ProductCard({ image, title, price, discont_price }) {
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
}
