import axios, { AxiosInstance } from "axios";

const axiosParams = {
  baseURL:
    process.env.NODE_ENV === "development"
      ? "http://localhost:8000/"
      : "http://some-other.com",
};

const axiosInstance = axios.create(axiosParams);

const api = (instance: AxiosInstance) => {
  return {
    get: (url: string, config = {}) => instance.get(url, config),
    delete: (url: string, config = {}) => instance.delete(url, config),
    post: (url: string, body = {}, config = {}) =>
      instance.post(url, body, config),
    patch: (url: string, body = {}, config = {}) =>
      instance.patch(url, body, config),
    put: (url: string, body = {}, config = {}) =>
      instance.put(url, body, config),
  };
};

export default api(axiosInstance);
