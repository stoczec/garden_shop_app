import React from 'react';
import style from './categoryCatalog.module.scss';
import { Link } from 'react-router-dom';
import CategoryContaner from '../CategoryContaner/CategoryContaner';

const CategoryCatalog = () => {
  return (
    <section className={`${style.category_catalog} ${style.container}`}>
      <header>
        <h2>Catalog</h2>
        <Link to="/categories">All categories</Link>
      </header>
      <CategoryContaner className={style.category_container} showCount={4} />
    </section>
  );
};
export default CategoryCatalog;
