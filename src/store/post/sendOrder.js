import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASEURL } from '../../assets/constants/URL';
import {
  errorNotification,
  successNotification,
} from '../../assets/reusableStyles/notifications';

export const sendOrder = createAsyncThunk(
  'form/sendOrder',
  async (phone, order) => {
    try {
      const response = await axios.post(`${BASEURL}/order/send`, [
        phone,
        order,
      ]);
      console.log(response.config.data);
      successNotification('Your order has been sent!');
    } catch (error) {
      console.error('Error sending the POST request:', error);
      errorNotification(error.message);
    }
  }
);
