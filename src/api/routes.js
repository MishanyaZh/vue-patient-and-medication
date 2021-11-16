/* eslint-disable prettier/prettier */
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://cerber.pixel.com.pl/api/',
});

export default axiosInstance;
