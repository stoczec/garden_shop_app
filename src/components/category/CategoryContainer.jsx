import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { styled } from 'styled-components';
// IMP ========== REQUEST ========== //
import { fetchCategories } from '../../store/slice/categorySlice';
// IMP ========== COMPONENTS ========== //
import CategoryCard from './CategoryCard';
import Loading from '../ui/Loading';
import { NotFoundPage } from '../../pages';

const CategoryContainer = ({ showCount }) => {
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
  // Для отрисовки нужного количества элементов
  const visibleCategories = categories.slice(0, showCount);
  return (
    <Categories>
      {visibleCategories.map((category) => (
        <CategoryCard key={category.id} {...category} id={category.id} />
      ))}
    </Categories>
  );
};

// SCC ========== STYLED COMPONENTS ========== //
const Categories = styled.section`
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    clamp(10rem, calc(8rem + 10vw), 20rem)
  );
  justify-items: center;
  justify-content: space-between;
  gap: 30px;

  @media (max-width: 1074px) {
    justify-content: space-around;
  }

  @media (max-width: 376px) {
    justify-content: center;
  }
`;
export default CategoryContainer;
