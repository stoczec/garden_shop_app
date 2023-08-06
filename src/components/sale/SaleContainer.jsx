import React from 'react';
import { styled } from 'styled-components';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../store/slice/productSlice';
import ProductCard from '../product/ProductCard';
import Loading from '../ui/Loading';
import { NotFoundPage } from '../../pages';

const SaleContainer = ({ showCount }) => {
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
  const filtredDiscountProduct = products.filter(
    (product) => product.discont_price
  );
  const visibleSaleProduct = filtredDiscountProduct.slice(0, showCount);

  return (
    <Container>
      {visibleSaleProduct.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </Container>
  );
};
// SCC ========== STYLED COMPONENTS ========== //
const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    clamp(12.5rem, calc(11rem + 7.5vw), 20rem)
  );
  justify-content: space-between;
  row-gap: 45px;
  @media (max-width: 957px) {
    justify-content: space-around;
  }
`;
export default SaleContainer;
