import axios, { AxiosRequestConfig } from 'axios';

const baseURL = process.env.NEXT_BASE_URL;

type AxiosData = AxiosRequestConfig['data'];
type AxiosParams = AxiosRequestConfig['params'];

export interface ApiResponse<T> {
  statusCode: number;
  message: string[];
  data: T;
  total?: number;
  successCode?: string;
  status?: number;
}

const API = {
  get(url: string, params?: AxiosParams) {
    return this.request({
      url,
      method: 'GET',
      params,
    });
  },
  post(url: string, data?: AxiosData, isFormData?: boolean) {
    return this.request({
      url,
      method: 'POST',
      data,
      isFormData,
    });
  },
  put(url: string, data: AxiosData, isFormData?: boolean) {
    return this.request({
      url,
      method: 'PUT',
      data,
      isFormData,
    });
  },
  patch(url: string, data: AxiosData) {
    return this.request({
      url,
      method: 'PATCH',
      data,
    });
  },
  delete(url: string) {
    return this.request({
      url,
      method: 'DELETE',
    });
  },

  request<T = never, R = ApiResponse<T>>(config: {
    url: string;
    method: string;
    params?: AxiosParams;
    data?: AxiosData;
    isFormData?: boolean;
  }): Promise<R> {
    return new Promise((resolve, reject) => {
      let jwt = '';

      const headers = {
        'Content-Type': config.isFormData ? 'multipart/form-data' : 'application/json',
        // Authorization: `Bearer ${jwt}`,
      };

      return axios({ baseURL, headers, ...config, withCredentials: true })
        .then((response) => resolve(response.data))
        .catch((error) => {
          if (!error.response) {
            return reject(error);
          }
          // const { status } = error.response;
          // if (status === 401) {
          //   useAuth.getState().setAuth('');
          // }
          reject(error?.response?.data);
        });
    });
  },
};

export default API;
