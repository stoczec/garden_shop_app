import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { styled } from 'styled-components';
import ProductContainer from '../components/product/ProductContainer';
import Title from '../components/reusable/Title';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchProductsByCategory,
  sort_price_products_by_category,
  sort_product_by_category,
} from '../store/slice/productsByCategorySlice';
import Loading from '../components/ui/Loading';
import NotFoundPage from './NotFoundPage';
import FiltersContainer from '../components/filters/FiltersContainer';

const ProductsByCategoriesPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { category, productsByCategory, loading, error } = useSelector(
    (state) => state.productsByCategory
  );
  useEffect(() => {
    dispatch(fetchProductsByCategory(id));
  }, [id]);
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
        filter_select={sort_product_by_category}
        filter_form={sort_price_products_by_category}
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
