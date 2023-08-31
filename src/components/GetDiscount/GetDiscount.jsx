import React from 'react';
import styled from 'styled-components';
import image from '../../assets/images/banner_bg1.png';
import Title from '../../assets/reusableStyledComponents/Title';
import FormPost from '../reusableComponents/FormPost';

const GetDiscount = () => {
  return (
    <Wrapper>
      <Container>
        <Image src={image} alt="Image" />
        <article>
          <CustomTitle>
            <span>5% off </span>
            <p>on the first order</p>
          </CustomTitle>
          <FormPost style_props={'getDiscount'} title={'Get a discount'} />
        </article>
      </Container>
    </Wrapper>
  );
};

// SCC ========== STYLED COMPONENTS ========== //
const Wrapper = styled.section`
  background: linear-gradient(223deg, #393 0%, #006300 100%);
  @media (max-width: 1100px) {
    display: flex;
    justify-content: center;
  }
`;
const Container = styled.div`
  ${(props) => props.theme.mixins.container}
  padding: 0 225px 0 60px;

  display: flex;
  align-items: center;
  gap: clamp(3.13rem, calc(1.25rem + 9.38vw), 12.5rem);
  @media (max-width: 1100px) {
    padding: 30px 0;
    justify-content: center;
  }
`;
const Image = styled.img`
  @media (max-width: 1100px) {
    display: none;
  }
`;
const CustomTitle = styled(Title)`
  color: ${(props) => props.theme.colors.clr_white};
  font-size: ${(props) => props.theme.font_size.fs_50};
  line-height: ${(props) => props.theme.line_height.secondary};
  letter-spacing: 1.5px;
  margin-bottom: 45px;
  span {
    font-size: ${(props) => props.theme.font_size.fs_90};
    letter-spacing: 2.7px;
  }
`;
export default GetDiscount;
