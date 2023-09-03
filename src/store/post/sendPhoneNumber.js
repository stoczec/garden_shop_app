import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASEURL } from '../../assets/constants/URL';
import {
  errorNotification,
  successNotification,
} from '../../assets/reusableStyles/notifications';

export const sendPhoneNumber = createAsyncThunk(
  'form/sendPhoneNumber',
  async (phone) => {
    try {
      const response = await axios.post(`${BASEURL}/sale/send`, { phone });
      console.log(response.config.data);
      successNotification('You got a 5% discount!');
    } catch (error) {
      console.error('Error sending the POST request:', error);
      errorNotification(error.message);
    }
  }
);
