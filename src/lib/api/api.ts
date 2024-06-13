import axios, {
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
const axiosParams = {
  baseURL: import.meta.env.VITE_API_URL,
};

function authRequestInterceptor(config: InternalAxiosRequestConfig) {
  config.withCredentials = true;
  return config;
}

export const axiosInstance = axios.create(axiosParams);
axiosInstance.interceptors.request.use(authRequestInterceptor);
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => response.data,
  (error) => {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        throw error.response.data;
      }
    }
    return Promise.reject(error);
  }
);

const api = <T>(axios: typeof axiosInstance) => {
  return {
    get: <T>(url: string, config: AxiosRequestConfig = {}): Promise<T> =>
      axios.get(url, config),
    post: (
      url: string,
      body: any,
      config: AxiosRequestConfig = {}
    ): Promise<AxiosResponse<T>> => axios.post(url, body, config),
    put: (
      url: string,
      body: any,
      config: AxiosRequestConfig = {}
    ): Promise<AxiosResponse<T>> => axios.put(url, body, config),
    patch: (
      url: string,
      body: any,
      config: AxiosRequestConfig = {}
    ): Promise<AxiosResponse<T>> => axios.patch(url, body, config),
    delete: (
      url: string,
      config: AxiosRequestConfig = {}
    ): Promise<AxiosResponse<T>> => axios.delete(url, config),
  };
};

export default api(axiosInstance);
