import axios from 'axios';

const http = axios.create({
  baseURL: 'http://localhost:3000/customer-manager'
});

export default http;
