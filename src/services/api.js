import axios from 'axios';

export const key = "d17ea661a42e82e9eb24fe24569b46adc5175e96";

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4',
    headers:{
        'Authorization': `Bearer ${key}`
    }
})

export default api;
