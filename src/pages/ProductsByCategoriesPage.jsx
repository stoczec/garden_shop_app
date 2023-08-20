import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { styled } from 'styled-components';
import ProductContainer from '../components/product/ProductContainer';
import Title from '../components/reusable/Title';
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
      <CustomTitle>{category.title}</CustomTitle>
      <FiltersContainer
        filter_select={sortBy}
        filter_form={filterByPrice}
        filter_checkbox={checkByDiscount}
        maxValue={maxValue}
      />
      <ProductContainer products_data={productsByCategory} />
    </Container>
  );
};
const Container = styled.div`
  ${(props) => props.theme.mixins.container};
`;
const CustomTitle = styled(Title)`
  margin-bottom: 80px;
`;

export default ProductsByCategoriesPage;
