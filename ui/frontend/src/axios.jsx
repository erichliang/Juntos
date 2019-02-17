import oaxios from 'axios';

export const BASE_URL = 'http://localhost:3000'

const axios = oaxios.create({
  baseURL: BASE_URL
});

export default axios;
