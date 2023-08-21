import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { styled } from 'styled-components';
import ItemContainer from '../components/reusableComponents/ItemContainer';
import Title from '../assets/reusableStyledComponents/Title';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchProductsByCategory,
  sortBy,
  filterByPrice,
  checkByDiscount,
} from '../store/slice/productsByCategorySlice';
import Loading from '../components/ui/Loading';
import NotFoundPage from './NotFoundPage';
import FiltersContainer from '../components/filters/FiltersContainer';
import BreadCrumbs from '../components/reusableComponents/BreadCrumbs';

const ProductsByCategoriesPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { category, productsByCategory, loading, error, maxValue } =
    useSelector((state) => state.productsByCategory);
  useEffect(() => {
    dispatch(fetchProductsByCategory(id));
  }, [id, dispatch]);
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <NotFoundPage textError={error} />;
  }
  return (
    <Container>
      <BreadCrumbs
        secondLink={'/categories'}
        secondTitle={'Categories'}
        thirdTitle={category.title}
      />
      <Title>{category.title}</Title>
      <FiltersContainer
        filter_select={sortBy}
        filter_form={filterByPrice}
        filter_checkbox={checkByDiscount}
        maxValue={maxValue}
      />
      <ItemContainer
        products_data={productsByCategory}
        customPageSizeOptions={[4, 8, 12, 16]}
      />
    </Container>
  );
};
const Container = styled.div`
  ${(props) => props.theme.mixins.container};
  display: flex;
  flex-direction: column;
  gap: clamp(2.5rem, calc(2rem + 2.5vw), 5rem);
  padding-bottom: 30px;
`;

export default ProductsByCategoriesPage;
