// src/api/instance.js 예시
import axios from 'axios';

const instance = axios.create({
  baseURL: "http://emotioncrossing.p-e.kr",

});


export default instance;
