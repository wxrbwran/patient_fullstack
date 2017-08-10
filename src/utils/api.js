import axios from 'axios';
import { API_URL,
  API_NAMESPACE,
  API_AUTH_NAMESPACE } from '../config/dev';
// TODO move these to env based config

export const api = axios.create({
  baseURL: API_URL + API_NAMESPACE,
  timeout: 5000,
});

export const authApi = axios.create({
  baseURL: API_URL + API_AUTH_NAMESPACE,
  timeout: 10000,
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
});

export function setAuthorizationToken(token) {
  if (token) {
    api.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common.Authorization;
  }
}
