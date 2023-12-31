import React from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import banner_bg from '../../assets/images/banner_bg.png';
import Title from '../../assets/reusableStyles/Title';

const SaleBanner = () => {
  return (
    <Banner>
      <Container>
        <MainTitle>Final Sale</MainTitle>
        <CustomTitle>
          Up to <Span>20%</Span> off
        </CustomTitle>
        <Button to="/sales">Special Offers</Button>
      </Container>
    </Banner>
  );
};
// SCC ========== VARIABLES STYLED COMPONENTS ========== //
const clr_white = (props) => props.theme.colors.clr_white;
const clr_accent = (props) => props.theme.colors.clr_accent;
// SCC ========== STYLED COMPONENTS ========== //
const shimmer = keyframes`
  0% {
    background-position: -200%;
  }
  100% {
    background-position: 200%;
  }
`;
const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`;
const Banner = styled.section`
  background: url(${banner_bg}) no-repeat 100% 100% / contain, #a1e2eb;
`;
const Container = styled.div`
  ${(props) => props.theme.mixins.container};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  padding-top: clamp(3.75rem, calc(2.88rem + 4.38vw), 8.13rem);
  padding-bottom: clamp(3.75rem, calc(2.88rem + 4.38vw), 8.13rem);
`;
const MainTitle = styled.h1`
  font-size: ${(props) => props.theme.font_size.fs_80};
  font-weight: 700;
  line-height: ${(props) => props.theme.line_height.primary};
  background: linear-gradient(
    90deg,
    transparent 15%,
    rgba(51, 153, 51, 0.5) 50%,
    transparent 85%
  );
  background-size: 200% 100%;
  animation: ${shimmer} 10s linear infinite;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;
const CustomTitle = styled(Title)`
  color: ${clr_white};
  font-size: ${(props) => props.theme.font_size.fs_63};
  letter-spacing: normal;
  margin-bottom: 60px;
  text-align: center;
`;
const Span = styled.span`
  animation: ${pulse} 2s infinite;
  display: inline-block;
  color: ${(props) => props.theme.colors.clr_sale};
`;
const Button = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 13px;
  background: ${clr_white};
  padding: clamp(0.75rem, calc(0.59rem + 0.81vw), 1.56rem)
    clamp(1.56rem, calc(1.25rem + 1.56vw), 3.13rem);

  color: #2d2d2d;
  font-size: ${(props) => props.theme.font_size.fs_24};
  font-weight: 700;
  line-height: ${(props) => props.theme.line_height.primary};

  box-shadow: 0 0 40px 40px ${clr_white} inset, 0 0 0 0 ${clr_accent};
  transition: all 350ms ease-in-out;
  &:hover {
    color: ${clr_accent};
    background-color: ${clr_white};
    box-shadow: 0 0 10px 0 ${clr_accent} inset, 0 0 10px 4px ${clr_accent};
  }
`;

export default SaleBanner;
