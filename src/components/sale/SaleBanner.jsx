import React from 'react';
import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
import sale_banner from '../../assets/images/sale_banner.png';
import Title from '../reusable/Title';

const SaleBanner = () => {
  return (
    <Banner>
      <Container>
        <Content>
          <MainTitle>Sale</MainTitle>
          <CustomTitle>New season</CustomTitle>
          <Button to="/sales">Sale</Button>
        </Content>
        <Image src={sale_banner} alt="Sale banner" />
      </Container>
    </Banner>
  );
};
// SCC ========== VARIABLES STYLED COMPONENTS ========== //
const fs_24 = (props) => props.theme.font_size.fs_24;
const fs_63 = (props) => props.theme.font_size.fs_63;
const fs_80 = (props) => props.theme.font_size.fs_80;
const clr_white = (props) => props.theme.colors.clr_white;
const primary_lh = (props) => props.theme.line_height.primary;
// SCC ========== STYLED COMPONENTS ========== //
const Banner = styled.section`
  background-color: #a1e2eb;
`;
const Container = styled.div`
  ${(props) => props.theme.mixins.container};
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 830px) {
    justify-content: center;
  }
`;
const Content = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: clamp(5rem, calc(4.11rem + 4.46vw), 8.13rem);
  padding-bottom: clamp(5.63rem, calc(4.73rem + 4.46vw), 8.75rem);
  @media (max-width: 830px) {
    flex-direction: column;
  }
`;
const MainTitle = styled.h1`
  color: ${clr_white};
  font-size: ${fs_80};
  font-weight: 700;
  line-height: ${primary_lh};
`;
const CustomTitle = styled(Title)`
  color: ${clr_white};
  font-size: ${fs_63};
  letter-spacing: normal;
  margin-bottom: 60px;
  text-align: center;
`;
const Button = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: clamp(7.19rem, calc(6.47rem + 3.57vw), 9.69rem);
  border-radius: 13px;
  background: ${clr_white};
  padding: 25px 50px;

  color: #2d2d2d;
  font-size: ${fs_24};
  font-weight: 700;
  line-height: ${primary_lh};
`;
const Image = styled.img`
  width: clamp(18.75rem, calc(10rem + 30.36vw), 40rem);
  height: 600px;
  object-fit: contain;
  @media (max-width: 830px) {
    display: none;
  }
`;

export default SaleBanner;
