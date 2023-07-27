import React from 'react';
import { BASEURL } from '../../assets/constants/URL';
import { styled } from 'styled-components';
import Title from '../reusable/Title';

const CategoryCard = ({ image, title }) => {
  return (
    <Card>
      <Image src={`${BASEURL}${image}`} alt="" />
      <CustomTitle>{title}</CustomTitle>
    </Card>
  );
};

// VARIABLES STYLED COMPONENTS
const fs_18 = (props) => props.theme.font_size.fs_18;
// STYLED COMPONENTS
const Card = styled.article`
  ${(props) =>
    props.theme.mixins.flex({
      fd: 'column',
      ai: 'center',
      jc: 'center',
      gap: '20px',
    })};
`;
const Image = styled.img`
  width: clamp(10rem, calc(8rem + 10vw), 20rem);
  height: clamp(11.56rem, calc(9.25rem + 11.56vw), 23.13rem);
  object-fit: cover;
  @media (max-width: 376px) {
    width: 280px;
    height: 330px;
  }
`;
const CustomTitle = styled(Title)`
  ${(props) =>
    props.theme.mixins.flex({
      ai: 'center',
      jc: 'center',
    })};
  font-size: ${fs_18};
  line-height: ${(props) => props.theme.line_height.primary};
  letter-spacing: 0.54px;
`;

export default CategoryCard;
