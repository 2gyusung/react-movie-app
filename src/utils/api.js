import axios from "axios";

// ✅ .env에서 API 키 불러오기 (변수명 수정)
const API_KEY = process.env.REACT_APP_API_KEY;
const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    "Content-type": "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
});


// // ✅ 요청 인터셉터 (axios가 아니라 api 인스턴스에 적용)
// api.interceptors.request.use(
//   (config) => {
//     console.log("📡 요청 전송:", config);
//     return config;
//   },
//   (error) => {
//     console.error("🚨 요청 오류:", error);
//     return Promise.reject(error);
//   }
// );

// // ✅ 응답 인터셉터 (axios가 아니라 api 인스턴스에 적용)
// api.interceptors.response.use(
//   (response) => {
//     console.log("✅ 응답 성공:", response);
//     return response;
//   },
//   (error) => {
//     console.error("❌ 응답 오류:", error.response);
//     return Promise.reject(error);
//   }
// );

export default api;
