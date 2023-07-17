import React from 'react';
import style from './CategoryCard.module.scss';
import { BASEURL } from '../../constants/URL';

export const CategoryCard = ({ image, title }) => {
  return (
    <article className={style.card}>
      <img src={`${BASEURL}${image}`} alt="" />
      <h2>{title}</h2>
    </article>
  );
};
