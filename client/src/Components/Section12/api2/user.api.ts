import api from "./api";

export const fetchUsers = (config: any) => {
  return api.get("users-slow", {
    // baseURL: "https://jsonplaceholder.typicode.com/",
    ...config,
  });
};
