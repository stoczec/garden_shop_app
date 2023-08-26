import React from 'react';
import { styled } from 'styled-components';

const PageContainer = ({ children }) => {
  return <Container>{children}</Container>;
};

// SCC ========== VARIABLES STYLED COMPONENTS ========== //
// SCC ========== STYLED COMPONENTS ========== //
const Container = styled.section`
  ${(props) => props.theme.mixins.container}
  display: flex;
  flex-direction: column;
  gap: clamp(2.5rem, calc(2rem + 2.5vw), 5rem);
  padding-bottom: 30px;
`;
export default Container;
