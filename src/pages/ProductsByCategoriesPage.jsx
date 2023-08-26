import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// IMP ========== REQUEST ========== //
import {
  fetchProductsByCategory,
  sortBy,
  filterByPrice,
  checkByDiscount,
} from '../store/slice/productsByCategorySlice';
// IMP ========== COMPONENTS ========== //
import Loading from '../components/ui/Loading';
import NotFoundPage from './NotFoundPage';
import PageContainer from '../components/reusableComponents/PageContainer';
import BreadCrumbs from '../components/reusableComponents/BreadCrumbs';
import Title from '../assets/reusableStyledComponents/Title';
import FiltersContainer from '../components/filters/FiltersContainer';
import ItemContainer from '../components/reusableComponents/ItemContainer';

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
    <PageContainer>
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
    </PageContainer>
  );
};

export default ProductsByCategoriesPage;
