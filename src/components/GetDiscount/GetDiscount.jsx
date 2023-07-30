import React from 'react';
import styled from 'styled-components';
// import style from './getDiscount.module.scss';
import gnome from '../../assets/images/gnome.png';

const GetDiscount = () => {
  return (
    <Wrapper>
      <Container>
        <img src={gnome} alt="Gnome" />
        <article>
          <h2>
            <span>5% off </span>
            <p>on the first order</p>
          </h2>
          <form>
            <input type="tel" required pattern="\+49\d{10}" placeholder="+49" />
            <button>Get a discount</button>
          </form>
        </article>
      </Container>
    </Wrapper>
  );
};
// SCC ========== VARIABLES STYLED COMPONENTS ========== //
const fs_80 = (props) => props.theme.font_size.fs_80;
const clr_white = (props) => props.theme.colors.clr_white;
const primary_lh = (props) => props.theme.line_height.primary;
// SCC ========== STYLED COMPONENTS ========== //
const Wrapper = styled.section`
  background: linear-gradient(223deg, #393 0%, #006300 100%);
`;
const Container = styled.div`
  padding: 30px 225px 30px 60px;
  display: flex;
  align-items: center;
  gap: 200px;
`;
const FormContainer = styled.img``;
export default GetDiscount;
