import axios from 'axios';

import { API_URL } from '../constants';

const token = window.localStorage.getItem('accessToken');

const config = {
  baseURL: API_URL,
};

if (token) {
  config.headers = {
    Authorization: `${token}`,
  };
}

export default axios.create(config);
