import axios from 'axios';
import { api } from './environment';

const http = axios.create({
  baseURL: api.url
});

export default http;
