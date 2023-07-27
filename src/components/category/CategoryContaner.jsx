import React from 'react';
import { styled } from 'styled-components';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../../store/slice/categorySlice';
import CategoryCard from './CategoryCard';
import Loading from '../ui/Loading/Loading';
import { NotFoundPage } from '../../pages';

const CategoryContaner = ({ className, showCount }) => {
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
        <CategoryCard key={category.id} {...category} />
      ))}
    </Categories>
  );
};

// VARIABLES STYLED COMPONENTS
// STYLED COMPONENTS
const Categories = styled.section`
  ${(props) =>
    props.theme.mixins.grid({
      width: 'clamp(10rem, calc(8rem + 10vw), 20rem)',
      ji: 'center',
      gap: '30px',
    })};
  @media (max-width: 376px) {
    ${(props) =>
      props.theme.mixins.grid({
        ji: 'center',
        jc: 'center',
        gap: '30px',
      })}
  }
`;
export default CategoryContaner;
