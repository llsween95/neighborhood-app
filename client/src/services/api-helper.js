import api from './api-helper';

const baseUrl = 'http://localhost:3000'

const api = axios.create({
  baseURL: baseUrl
})

export default api