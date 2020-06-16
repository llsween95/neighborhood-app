import axios from 'axios';

const baseUrl = process.env.NODE_ENV === 'production'
  ? 'https://neighborhood-app-api.herokuapp.com'
  : 'http://localhost:3000'

const api = axios.create({
  baseURL: baseUrl
})

export default api