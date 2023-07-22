import React from 'react';
import style from './categoryCard.module.scss';
import { BASEURL } from '../../../assets/constants/URL';

export default function CategoryCard({ image, title }) {
  return (
    <article className={style.card}>
      <img src={`${BASEURL}${image}`} alt="" />
      <h2>{title}</h2>
    </article>
  );
}
