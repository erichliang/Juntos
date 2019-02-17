import oaxios from 'axios';

const axios = oaxios.create({
  baseURL: 'http://localhost:3000'
});

export default axios;
