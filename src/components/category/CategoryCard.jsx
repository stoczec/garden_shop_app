import React from 'react';
import { Link } from 'react-router-dom';
import { BASEURL } from '../../assets/constants/URL';
import { styled } from 'styled-components';
import Title from '../reusable/Title';

const CategoryCard = ({ image, title, category, id }) => {
  return (
    <Link to={`/categories/${category}/${id}`}>
      <Card>
        <Image src={`${BASEURL}${image}`} alt="" />
        <CustomTitle>{title}</CustomTitle>
      </Card>
    </Link>
  );
};
// SCC ========== STYLED COMPONENTS ========== //
const Card = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const Image = styled.img`
  width: clamp(10rem, calc(8rem + 10vw), 20rem);
  height: clamp(10rem, calc(8rem + 10vw), 20rem);
  object-fit: cover;
  cursor: pointer;
  transition: filter 0.2s ease-in-out;
  &:hover {
    filter: brightness(60%);
  }

  @media (max-width: 376px) {
    width: 280px;
    height: 280px;
  }
`;
const CustomTitle = styled(Title)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${(props) => props.theme.font_size.fs_18};
  line-height: ${(props) => props.theme.line_height.primary};
  letter-spacing: 0.54px;
  cursor: pointer;
`;

export default CategoryCard;
