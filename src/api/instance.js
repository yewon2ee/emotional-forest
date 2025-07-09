import axios from 'axios';

const instance = axios.create({
  baseURL: "/api", // 이제 프록시가 대신 처리해줌
});

export default instance;