import api from "./api";

export const fetchUsers = () => {
  return api.get("users", {
    baseURL: "https://jsonplaceholder.typicode.com/", // this will overrite the baseURL configured in ./api
  });
};
