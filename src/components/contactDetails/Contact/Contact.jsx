import React from 'react';
import { styled } from 'styled-components';
import SocialLinks from '../SocialLinks/SocialLinks';
import contacts_data from '../../../data/contacts';
import Title from '../../reusable/Title';

const Contact = () => {
  return (
    <ContactContainer>
      <CustomTitle>Contact</CustomTitle>
      <TelNumber>{contacts_data.tel}</TelNumber>
      <SocialLinks />
    </ContactContainer>
  );
};
// SCC ========== VARIABLES STYLED COMPONENTS ========== //
const fs_70 = (props) => props.theme.font_size.fs_70;
// SCC ========== STYLED COMPONENTS ========== //
const ContactContainer = styled.article`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  @media (max-width: $mq_900) {
    width: 100%;
    align-items: center;
  }
  
`;
const CustomTitle = styled(Title)`
  letter-spacing: normal;
  margin-bottom: clamp(0.94rem, calc(0.76rem + 0.89vw), 1.56rem);
`;
const TelNumber = styled.p`
  font-size: ${fs_70};
  margin-bottom: clamp(0.94rem, calc(0.67rem + 1.34vw), 1.88rem);
`;
export default Contact;
