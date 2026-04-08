import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { MockEndPoints } from "__server__";

const apiBaseUrl = String(
  process.env.NEXT_PUBLIC_BACKEND_URL ||
    process.env.BACKEND_URL ||
    process.env.NEXT_PUBLIC_API_URL ||
    "http://127.0.0.1:3000",
)
  .trim()
  .replace(/\/+$/, "");

const useMockApi =
  String(process.env.NEXT_PUBLIC_USE_MOCK_API || "")
    .trim()
    .toLowerCase() === "true";

const axiosInstance = axios.create({
  baseURL: apiBaseUrl,
});

axiosInstance.interceptors.request.use((config) => {
  if (useMockApi) {
    return config;
  }

  const url = String(config.url || "").trim();
  if (url.startsWith("/api/")) {
    config.url = url.replace(/^\/api/, "");
  } else if (url === "/api") {
    config.url = "/";
  }

  return config;
});

if (useMockApi) {
  const Mock = new MockAdapter(axiosInstance);
  MockEndPoints(Mock);
}

export default axiosInstance;
