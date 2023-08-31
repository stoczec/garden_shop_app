import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASEURL } from '../../assets/constants/URL';

export const sendPhoneNumber = createAsyncThunk(
  'form/sendPhoneNumber',
  async (phone) => {
    try {
      const response = await axios.post(`${BASEURL}/sale/sendd`, { phone });
      console.log(response.config.data);
      alert('You got a 5% discount!');
    } catch (error) {
      console.error('Error sending the POST request:', error);
      alert(error.message);
    }
  }
);
