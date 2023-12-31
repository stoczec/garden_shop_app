import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { styled } from 'styled-components';
// IMP ========== REQUEST ========== //
import { delete_all_products } from '../../store/slice/cartSlice';
import { sendPhoneNumber } from '../../store/post/sendPhoneNumber';
import { sendOrder } from '../../store/post/sendOrder';
// IMP ========== COMPONENTS FROM LIBRARIES ========== //
import { ToastContainer } from 'react-toastify';
import { warningNotification } from '../../assets/reusableStyles/notifications';

const FormPost = ({ style_props, title, order }) => {
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
    const orderData = order ? [...order] : []; // true - разворачиваем элементы в массиве, иначе []
    if (order && orderData.length === 0) {
      warningNotification(
        'Please add products to your order before submitting.'
      );
    } else if (order && orderData.length > 0) {
      dispatch(sendOrder({ phone: data.tel, order: orderData }));
      dispatch(delete_all_products());
    } else {
      dispatch(sendPhoneNumber(data.tel));
    }
    reset();
  };
  return (
    <Form onSubmit={handleSubmit(submit)}>
      <ToastContainer
        style={{
          textAlign: 'center',
          lineHeight: '150%',
        }}
      />
      <Input
        $style_props={style_props}
        type="tel"
        placeholder={'+49'}
        name="tel"
        {...telRegister}
      />
      <Button $style_props={style_props}>{title}</Button>
      <ContainerError>
        {errors.tel && <Error>{errors.tel.message}</Error>}
      </ContainerError>
    </Form>
  );
};

// SCC ========== VARIABLES STYLED COMPONENTS ========== //
const clr_accent = (props) => props.theme.colors.clr_accent;
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
  border: ${(props) =>
    props.$style_props === 'cart'
      ? `1px solid ${props.theme.colors.clr_black}`
      : 'none'};
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
  @media (max-width: 660px) {
    width: ${(props) => (props.$style_props === 'cart' ? '100%' : '')};
  }
`;
const ContainerError = styled.div`
  width: clamp(17.5rem, calc(15.09rem + 12.06vw), 29.56rem);
  height: 28px;
`;
const Error = styled.p`
  color: #ff4d4f;
  font-size: 14px;
  text-align: center;
`;
const Button = styled.button`
  width: clamp(17.5rem, calc(15.09rem + 12.06vw), 29.56rem);
  height: clamp(2.81rem, calc(2.44rem + 1.88vw), 4.69rem);
  border-radius: 25.147px;
  border: 2.395px solid ${(props) => props.theme.colors.clr_white};
  background-color: ${(props) =>
    props.$style_props === 'cart' ? clr_accent : 'transparent'};
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
  @media (max-width: 660px) {
    width: ${(props) => (props.$style_props === 'cart' ? '100%' : '')};
  }
`;
export default FormPost;
