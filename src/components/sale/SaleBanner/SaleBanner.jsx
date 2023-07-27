import React from 'react';
import style from './saleBanner.module.scss';
import { Link } from 'react-router-dom';
import sale_banner from '../../../assets/images/sale_banner.png';
import { styled } from 'styled-components';
import Title from '../../reusable/Title';

const SaleBanner = () => {
  return (
    <Banner className={style.sale_banner}>
      <Container className={style.container}>
        <Content>
          <MainTitle>Sale</MainTitle>
          <CustomTitle>New season</CustomTitle>
          <Link to="/sales">Sale</Link>
        </Content>
        <img src={sale_banner} alt="Sale banner" />
      </Container>
    </Banner>
  );
};
// VARIABLES STYLED COMPONENTS
const fs_80 = (props) => props.theme.font_size.fs_80;
const fs_63 = (props) => props.theme.font_size.fs_63;
const fs_24 = (props) => props.theme.font_size.fs_24;
const clr_white = (props) => props.theme.colors.clr_white;
// STYLED COMPONENTS
const Banner = styled.section`
  background-color: #a1e2eb;
`;
const Container = styled.div`
  ${(props) => props.theme.mixins.container};
  ${(props) =>
    props.theme.mixins.flex({
      ai: 'center',
      jc: 'space-between',
    })};
`;
const Content = styled.article`
  ${(props) =>
    props.theme.mixins.flex({
      fd: 'column',
      ai: 'center',
      jc: 'start',
    })};
  padding-top: clamp(5rem, calc(4.11rem + 4.46vw), 8.13rem);
  padding-bottom: clamp(5.63rem, calc(4.73rem + 4.46vw), 8.75rem);
`;
const MainTitle = styled.h1`
  color: ${clr_white};
  font-size: ${fs_80};
  font-weight: 700;
  line-height: ${(props) => props.theme.line_height.primary};
`;
const CustomTitle = styled(Title)`
  color: ${clr_white};
  font-size: ${fs_63};
  letter-spacing: normal;
  margin-bottom: 60px;
`;
const Button = styled(Link)`
  width: clamp(7.19rem, calc(6.47rem + 3.57vw), 9.69rem);
  border-radius: 13px;
  background: ${clr_white};
  padding: 25px 50px;
  ${(props) =>
    props.theme.mixins.flex({
      ai: 'center',
      jc: 'center',
    })};

  color: #2d2d2d;
  font-size: ${fs_24};
  font-weight: 700;
  line-height: $lh_accent;
`;

export default SaleBanner;
