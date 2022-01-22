import { config } from './config';
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

const axiosInstance: AxiosInstance = axios.create(getAxiosOptions());

function getAxiosOptions(
  authorization?: string,
  type?: string
): AxiosRequestConfig {
  const options: AxiosRequestConfig = {
    baseURL: config.apiHost,
    headers: {},
  };
  if (options.headers) {
    switch (type) {
      case 'file':
        options.headers['Content-Type'] = 'multipart/form-data';
        break;
      default:
        options.headers['Content-Type'] = 'application/json';
        break;
    }
    if (authorization) {
      options.headers['Authorization'] = authorization;
    }
  }

  return options;
}

const doGet = <T>(address: string) => {
  return axiosInstance.get<T>(address);
};

const doPost = (address: string, data: any) => {
  const stringData = JSON.stringify(data);
  return axiosInstance({
    method: 'post',
    url: address,
    data: stringData,
  });
};

class API {
  private async doGet<T = any>(...args: Parameters<typeof doGet>) {
    try {
      const response = (await doGet(...args)).data as T;
      return response;
    } catch (e) {
      console.log(e);
      throw e;
    }
  }

  private async doPost<T = any>(...args: Parameters<typeof doPost>) {
    try {
      const response = (await doPost(...args)).data as T;
      return response;
    } catch (e) {
      console.log(e);
      throw e;
    }
  }

  public getProfiles = async () => {
    const response = await this.doGet<Components.IProfile[]>('/data');
    return response;
  };

  public createUser = async (object: Components.ICreateProfile) => {
    const response = await this.doPost('/data', object);
    return response;
  };
}

export const api = new API();
