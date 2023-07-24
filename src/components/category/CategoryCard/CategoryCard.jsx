import React from 'react';
import style from './categoryCard.module.scss';
import { BASEURL } from '../../../assets/constants/URL';

const CategoryCard = ({ image, title }) => {
  return (
    <article className={style.card}>
      <img src={`${BASEURL}${image}`} alt="" />
      <h2>{title}</h2>
    </article>
  );
};
export default CategoryCard;
