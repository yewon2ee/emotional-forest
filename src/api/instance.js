import axios from 'axios';

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // .env로 설정
});

// 요청 인터셉터
instance.interceptors.request.use(
  (config) => {
    const userId = localStorage.getItem("userId");
    if (userId) {
      config.headers["X-USER-ID"] = userId;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
