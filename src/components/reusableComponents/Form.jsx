import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { styled } from 'styled-components';
import { sendPhoneNumber } from '../../store/post/sendPhoneNumber';

const Form = () => {
  const dispatch = useDispatch();
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
    dispatch(sendPhoneNumber(data.tel));

    reset();
  };
  return (
    <Form onSubmit={handleSubmit(submit)}>
      <Input type="tel" placeholder={'+49'} name="tel" {...telRegister} />
      {errors.tel && <Error>{errors.tel.message}</Error>}
      <Button>Get a discount</Button>
    </Form>
  );
};

// SCC ========== VARIABLES STYLED COMPONENTS ========== //

// SCC ========== STYLED COMPONENTS ========== //
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

  outline: none;
  &:focus {
    border: 1px solid transparent;
    border-top: none;
    border-bottom: 1px solid #ddd;
    box-shadow: inset 0 3px 2px rgba(0, 0, 0, 0.39), 0 -1px 1px #fff,
      0 1px 0 #fff;
  }
`;
const Error = styled.p`
  color: #ff4d4f;
  font-size: 14px;
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
export default Form;
