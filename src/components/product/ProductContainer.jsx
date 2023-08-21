import React, { useState } from 'react';
import { styled } from 'styled-components';
import ProductCard from './ProductCard';
import { Pagination } from 'antd';

const ProductContainer = ({ products_data }) => {
  const pageSizeOptions = [8, 16, 24, 32, 40]; // массив с количеством отображаемых товаров на странице
  const [currentPage, setCurrentPage] = useState(1); // номер текущей страницы
  const [pageSize, setPageSize] = useState(pageSizeOptions[0]); // количество отображаемых товаров на странице или размер страницы

  const visibleProducts = products_data.filter((el) => el.visible);
  const totalProducts = visibleProducts.length; // общее количество товаров

  const handlePageChange = (page) => {
    // функция, которая меняет номер текущей стариницы
    setCurrentPage(page);
  };

  const handlePageSizeChange = (current, size) => {
    setCurrentPage(1); // сбрасываем номер текущей страницы, при изменении размера страницы
    setPageSize(size); // изменяем размер страницы
  };

  const startIndex = (currentPage - 1) * pageSize; // стартовый индекс элемента, с которого должны отображаться элементы на текущей странице.
  const endIndex = startIndex + pageSize; // последний индекс элемента, до которого должны отображаться элементы на текущей странице.

  const productsToShow = visibleProducts.slice(startIndex, endIndex); // с помощью стартового и последнего элемента, формируем массив элементов

  return (
    <Container>
      <ContainerProduct>
        {productsToShow.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </ContainerProduct>
      <ContainerPagination>
        <Pagination
          current={currentPage} // текущая страница, передается номер текущей страницы
          total={totalProducts} // общее количество элементов, используется для вычисления количества страниц
          pageSize={pageSize} // количество элементов на одной странице
          pageSizeOptions={pageSizeOptions} // массив вариантов выбора количества элементов на странице
          showSizeChanger // опция отображения выпадающего списка для выбора количества элементов на странице
          showQuickJumper // опция отображения поля для быстрого перехода на определенную страницу
          showTotal={(total) => `Total ${total} items`} // функция для отображения общего количества элементов внизу пагинации
          onChange={handlePageChange} // Обработчик события при изменении текущей страницы
          onShowSizeChange={handlePageSizeChange} // Обработчик события при изменении размера страницы
        />
      </ContainerPagination>
    </Container>
  );
};

// SCC ========== STYLED COMPONENTS ========== //
const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;
const ContainerProduct = styled.div`
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
const ContainerPagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;
export default ProductContainer;
