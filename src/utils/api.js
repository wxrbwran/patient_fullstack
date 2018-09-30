import axios from 'axios';
import { API_URL,
  API_NAMESPACE } from '../config/dev';

export const api = axios.create({
  baseURL: API_URL + API_NAMESPACE,
  timeout: 5000,
});

export const authApi = axios.create({
  baseURL: API_URL + API_NAMESPACE,
  timeout: 5000,
});

export function setAuthorizationToken(token) {
  if (token) {
    api.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common.Authorization;
  }
}
