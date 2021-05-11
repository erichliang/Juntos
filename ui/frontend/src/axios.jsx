import oaxios from 'axios';

export const BASE_URL = 'https://juntos-api.verafy.me'

const axios = oaxios.create({
  baseURL: BASE_URL
});

export default axios;
