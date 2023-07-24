import React from 'react';
import style from './categoryCarousel.module.scss';
import { Link } from 'react-router-dom';
import CategoryContaner from '../CategoryContaner/CategoryContaner';

const CategoryCarousel = () => {
  return (
    <section className={`${style.category_carousel} container`}>
      <header>
        <h2>Catalog</h2>
        <Link to="/categories">All categories</Link>
      </header>
      <div>
        <CategoryContaner classname={style.category_contaner} />
      </div>
    </section>
  );
};
export default CategoryCarousel;
