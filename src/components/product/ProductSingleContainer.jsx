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
    <div>
      {product.map((el) => (
        <ProductSingleCard key={el.id} {...el} />
      ))}
    </div>
  );
};

// SCC ========== VARIABLES STYLED COMPONENTS ========== //
// const fs_80 = (props) => props.theme.font_size.fs_80;
// const clr_white = (props) => props.theme.colors.clr_white;
// const primary_lh = (props) => props.theme.line_height.primary;
// SCC ========== STYLED COMPONENTS ========== //
// const STYLED_COMPONENTS=styled.TAG``
export default ProductSingleContainer;
