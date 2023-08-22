import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../ui/Loading';
import { NotFoundPage } from '../../pages';
import ProductSingleCard from './ProductSingleCard';
import { fetchSingleProduct } from '../../store/slice/productSingleSlice';

const ProductSingleContainer = ({ id }) => {
  const dispatch = useDispatch();
  const { product, loading, error } = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(fetchSingleProduct(id));
  }, [dispatch, id]);
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <NotFoundPage textError={error} />;
  }
  return (
    <>
      {product.map((el) => (
        <ProductSingleCard key={el.id} {...el} />
      ))}
    </>
  );
};

// SCC ========== VARIABLES STYLED COMPONENTS ========== //
// SCC ========== STYLED COMPONENTS ========== //
export default ProductSingleContainer;
