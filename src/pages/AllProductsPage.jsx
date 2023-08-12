import React, { useEffect } from 'react';
import ProductContainer from '../components/product/ProductContainer';
import Title from '../components/reusable/Title';
import { styled } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../store/slice/productSlice';
import Loading from '../components/ui/Loading';
import NotFoundPage from './NotFoundPage';

const AllProductsPage = () => {
  const dispatch = useDispatch();

  const { products, loading, error } = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <NotFoundPage textError={error} />;
  }
  return (
    <Container>
      <Title>All products</Title>
      <ProductContainer products_data={products} />
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
export default AllProductsPage;