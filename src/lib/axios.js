import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development"
    ? "http://localhost:8080/api" // local dev backend
    : "https://my-portfolio-backend-five-zeta.vercel.app/api",// production (Vercel)
  headers: {
    "Content-Type": "application/json", // ensure JSON is always sent
  },
});
