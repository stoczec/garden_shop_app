import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASEURL } from '../../assets/constants/URL';

export const sendOrder = createAsyncThunk(
  'form/sendOrder',
  async (phone, order) => {
    try {
      const response = await axios.post(`${BASEURL}/order/send`, [
        phone,
        order,
      ]);
      console.log(response.config.data);
      alert('Your order has been sent!');
    } catch (error) {
      console.error('Error sending the POST request:', error);
      alert(error.message);
    }
  }
);
