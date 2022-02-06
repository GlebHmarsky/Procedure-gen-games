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

const doGet = async <T>(address: string) => {
  try {
    const response = (await axiosInstance.get<T>(address)).data as T;
    return response;
  } catch (e) {
    console.log(e);
    throw e;
  }
};

const doPost = async <T = any>(address: string, data: any) => {
  const stringData = JSON.stringify(data);
  try {
    const response = (await axiosInstance({
      method: 'post',
      url: address,
      data: stringData,
    })).data as T;
    return response;
  } catch (e) {
    console.log(e);
    throw e;
  }
};

class API {
  public getGames = async () => {
    const response = await doGet<Components.IProfile[]>('/data');
    return response;
  };

  public addGame = async (object: Components.ICreateProfile) => {
    const response = await doPost('/data', object);
    return response;
  };
}

export const api = new API();
