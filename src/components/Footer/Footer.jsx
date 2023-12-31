import React from 'react';
import { styled } from 'styled-components';
import Contact from '../contactDetails/Contact';
import Adress from '../contactDetails/Adress';
import Map from '../contactDetails/Map';

const Footer = () => {
  return (
    <FooterContainer>
      <ContactInfo>
        <Contact />
        <Adress />
      </ContactInfo>
      <Map />
    </FooterContainer>
  );
};
// SCC ========== STYLED COMPONENTS ========== //
const FooterContainer = styled.footer`
  ${(props) => props.theme.mixins.container}
  color: ${(props) => props.theme.colors.clr_black};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: clamp(1.56rem, calc(0.85rem + 3.57vw), 4.06rem);
  padding: 48px 0 38px 0;
`;
const ContactInfo = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  @media (max-width: 900px) {
    flex-direction: column;
    justify-content: center;
    gap: clamp(1rem, calc(-2.51rem + 17.56vw), 10rem);
  }
`;
export default Footer;
