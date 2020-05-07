import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 901b372e2eb92f1cb235b33e134432cea5b88c9ffa52eb47f0714c7139f98a4d' 
  }
});
