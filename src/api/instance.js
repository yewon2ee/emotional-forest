import axios from "axios";

const instance = axios.create({
  baseURL: "http://emotioncrossing.p-e.kr/",  //여기를 실제로 배포된 백엔드 주소로 변경하면 됨
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
