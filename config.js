// config.js
// ✅ Auto-detect environment (local or Vercel)

const isLocalhost = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1";

const BASE_URL = isLocalhost
  ? "http://localhost:5000"         // Local backend
  : "https://smartcart-backend.vercel.app";  // 🚀 REPLACE THIS WITH YOUR VERCEL BACKEND URL
