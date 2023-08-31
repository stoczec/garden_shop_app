import React, { useState } from 'react';
import { styled } from 'styled-components';
import ProductCard from '../product/ProductCard';
import { Pagination } from 'antd';

const ItemContainer = ({ products_data, customPageSizeOptions, showCount }) => {
  const pageSizeOptions = customPageSizeOptions; // массив с количеством отображаемых товаров на странице
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
      {!showCount && (
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
      )}
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
    clamp(12.5rem, calc(11rem + 7vw), 20rem)
  );
  justify-content: space-evenly;
  row-gap: 45px;
  column-gap: clamp(1.25rem, calc(0.73rem + 1.74vw), 2.81rem);
`;
const ContainerPagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;
export default ItemContainer;
