import React from 'react';
import styled from 'styled-components';
import image from '../../assets/images/banner_bg1.png';
import Title from '../../assets/reusableStyledComponents/Title';
import { useForm } from 'react-hook-form';

const GetDiscount = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: 'onBlur' });
  const telRegister = register('tel', {
    required: '*Phone number input is required',
    pattern: {
      value: /^\+49\d{11}$/,
      message: '*Phone number value does not correspond the required format',
    },
  });
  const submit = (data) => {
    console.log(data);
    reset();
  };
  return (
    <Wrapper>
      <Container>
        <Image src={image} alt="Image" />
        <article>
          <CustomTitle>
            <span>5% off </span>
            <p>on the first order</p>
          </CustomTitle>
          <Form onSubmit={handleSubmit(submit)}>
            <Input type="tel" placeholder={'+49'} name="tel" {...telRegister} />
            {errors.tel && <Error>{errors.tel.message}</Error>}
            <Button>Get a discount</Button>
          </Form>
        </article>
      </Container>
    </Wrapper>
  );
};
// SCC ========== VARIABLES STYLED COMPONENTS ========== //
const clr_accent = (props) => props.theme.colors.clr_accent;
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
const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 30px;
`;
const Input = styled.input`
  width: clamp(17.5rem, calc(15.09rem + 12.06vw), 29.56rem);
  height: clamp(2.81rem, calc(2.44rem + 1.88vw), 4.69rem);
  border-radius: 25.147px;
  padding-left: 50px;
  border: none;

  color: #6c6c6c;
  font-size: ${(props) => props.theme.font_size.fs_18};
  line-height: ${(props) => props.theme.line_height.secondary};
  letter-spacing: 0.54px;
`;
const Error = styled.p`
  color: red;
  font-size: 12px;
  text-align: end;
`;
const Button = styled.button`
  width: clamp(17.5rem, calc(15.09rem + 12.06vw), 29.56rem);
  height: clamp(2.81rem, calc(2.44rem + 1.88vw), 4.69rem);
  border-radius: 25.147px;
  border: 2.395px solid ${(props) => props.theme.colors.clr_white};
  background-color: transparent;
  color: ${(props) => props.theme.colors.clr_white};
  font-size: ${(props) => props.theme.font_size.fs_28};
  font-weight: 700;
  line-height: ${(props) => props.theme.line_height.secondary};
  letter-spacing: 0.862px;
  cursor: pointer;

  box-shadow: 0 0 40px 40px transparent inset, 0 0 0 0 ${clr_accent};
  transition: all 350ms ease-in-out;
  &:hover {
    color: ${clr_accent};
    background-color: ${(props) => props.theme.colors.clr_white};
    box-shadow: 0 0 10px 0 ${clr_accent} inset, 0 0 10px 4px ${clr_accent};
  }
`;

export default GetDiscount;
