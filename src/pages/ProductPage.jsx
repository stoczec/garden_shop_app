import React, { useEffect } from 'react';
import ProductCard from '../components/product/ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchSingleProduct } from '../store/slice/productSingleSlice';
import { styled } from 'styled-components';

const ProductPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { product, loading, error } = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(fetchSingleProduct(id));
  }, [dispatch, id]);
  console.log(product);
  return (
    <Container>
      {product.map((el) => (
        <ProductCard key={el.id} {...el} />
      ))}
    </Container>
  );
};
const Container = styled.section`
  ${(props) => props.theme.mixins.container};
`;
export default ProductPage;
