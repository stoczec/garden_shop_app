import React from 'react';
import { styled } from 'styled-components';
import contacts_data from '../../data/contacts';
import Title from '../reusable/Title';

const Adress = () => {
  const { country, city, post, street } = contacts_data;
  return (
    <AdressContainer>
      <CustomTitle>Address</CustomTitle>
      <AdressLink
        href="https://goo.gl/maps/6H2ts6D8QQnboeYcA"
        target="_blank"
        rel="noreferrer noopener"
      >
        {street}, {post}, {city}, {country}
      </AdressLink>
      <SubTitle>Working Hours:</SubTitle>
      <Span>24 hours a day</Span>
    </AdressContainer>
  );
};
// SCC ========== STYLED COMPONENTS ========== //
const AdressContainer = styled.article`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  @media (max-width: 900px) {
    width: 100%;
    align-items: center;
    a {
      text-align: center;
    }
  }
`;
const CustomTitle = styled(Title)`
  margin-bottom: clamp(0.94rem, calc(0.76rem + 0.89vw), 1.56rem);
`;
const AdressLink = styled.a`
  color: ${(props) => props.theme.colors.clr_black};
  font-size: ${(props) => props.theme.font_size.fs_40};
  text-decoration-line: underline;
  margin-bottom: clamp(0.63rem, calc(0.45rem + 0.89vw), 1.25rem);
  line-height: ${(props) => props.theme.line_height.primary};
  transition: all 0.5s ease;
  &:hover {
    transform: scale(1.03);
  }
`;
const SubTitle = styled.h6`
  font-size: ${(props) => props.theme.font_size.fs_18};
  font-weight: 500;
  margin-bottom: 2px;
`;
const Span = styled.span`
  font-size: ${(props) => props.theme.font_size.fs_24};
`;
export default Adress;
