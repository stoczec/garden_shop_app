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
  transition: all 0.35s ease-in-out;
  filter: brightness(60%);
  &:hover {
    filter: brightness(100%);
    border-radius: 50%;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1), 0 8px 20px rgba(0, 0, 0, 0.15);
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
