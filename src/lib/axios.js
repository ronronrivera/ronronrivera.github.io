import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development"
    ? "http://localhost:8080/api" // local dev backend
    : "api.ronronrivera.tech",// production (Vercel)
  headers: {
    "Content-Type": "application/json", // ensure JSON is always sent
  },
});
