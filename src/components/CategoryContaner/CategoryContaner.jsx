import React from 'react';
import style from './categoryContaner.module.scss';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../../store/slice/categorySlice';
import { CategoryCard } from '../CategoryCard/CategoryCard';
import { Loading } from '../Loading/Loading';
import { NotFoundPage } from '../../pages';

export const CategoryContaner = () => {
  const dispatch = useDispatch();
  const { categories, loading, error } = useSelector(
    (state) => state.categories
  );
  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <NotFoundPage textError={error} />;
  }
  return (
    <section className={style.category_container}>
      {categories.map((category) => (
        <CategoryCard key={category.id} {...category} />
      ))}
    </section>
  );
};
