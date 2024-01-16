console.log(process.env.NODE_ENV);
export const API_URI =
  process.env.NODE_ENV === "development"
    ? "http://localhost:8000"
    : "https://react-advanced-backend.onrender.com";
