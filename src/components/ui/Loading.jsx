import React from 'react';
import loader from '../../assets/images/loading.gif';
import styled from 'styled-components';

const Loading = () => {
  return (
    <LoadingContainer>
      <img src={loader} alt="Loader" />
    </LoadingContainer>
  );
};
// SCC ========== VARIABLES STYLED COMPONENTS ========== //
// SCC ========== STYLED COMPONENTS ========== //
const LoadingContainer = styled.article`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default Loading;
