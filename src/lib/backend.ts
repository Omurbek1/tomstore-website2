export function getBackendBaseUrl() {
  return String(
    process.env.NEXT_PUBLIC_BACKEND_URL ||
      process.env.BACKEND_URL ||
      process.env.NEXT_PUBLIC_API_URL ||
      "http://127.0.0.1:3000",
  )
    .trim()
    .replace(/\/+$/, "");
}
