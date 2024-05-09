import axios, { AxiosInstance, Canceler } from "axios";

interface AxiosParams {
  baseURL: string;
}

const axiosParams: AxiosParams = {
  baseURL:
    process.env.NODE_ENV === "development"
      ? "http://localhost:8000/"
      : "http://some-other.com",
};

const axiosInstance: AxiosInstance = axios.create(axiosParams);

export const didAbort = (error: any) =>
  axios.isCancel(error) && { aborted: true };

export const isApiError = (error: any): boolean => axios.isAxiosError(error);

const getCancelSource = () => axios.CancelToken.source();

const withAbort = (fn: any) => {
  const executor = async (...args: any[]) => {
    const originalConfig = args[args.length - 1];
    const { abort, ...config } = originalConfig;

    if (typeof abort === "function") {
      const { cancel, token } = getCancelSource();
      config.cancelToken = token;
      abort(cancel as Canceler);
    }

    try {
      if (args.length > 2) {
        const [url, body] = args;
        return await fn(url, body, config);
      } else {
        const [url] = args;
        return await fn(url, config);
      }
    } catch (error) {
      if (didAbort(error)) {
        // @ts-expect-error: some error is thrown
        error.aborted = true;
      }
      throw error;
    }
  };
  return executor;
};

const api = (instance: AxiosInstance) => {
  return {
    get: (url: string, config: any = {}) =>
      withAbort(instance.get)(url, config),
    delete: (url: string, config: any = {}) =>
      withAbort(instance.delete)(url, config),
    post: (url: string, body: any = {}, config: any = {}) =>
      withAbort(instance.post)(url, body, config),
    patch: (url: string, body: any = {}, config: any = {}) =>
      withAbort(instance.patch)(url, body, config),
    put: (url: string, body: any = {}, config: any = {}) =>
      withAbort(instance.put)(url, body, config),
  };
};

export default api(axiosInstance);
