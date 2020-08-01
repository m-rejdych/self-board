import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://self-board-4a97c.firebaseio.com/',
});

export default instance;
