import axios, {AxiosRequestConfig, AxiosResponse} from 'axios';
import {firebase} from '@react-native-firebase/perf';

const instance = axios.create({
  baseURL: 'https://api.darksky.net/',
  timeout: 60000,
});

type TRequest = AxiosRequestConfig & {metadata?: any};
type TResponce = AxiosResponse & {config: TRequest};

instance.interceptors.request.use(async (config: TRequest) => {
  console.log('Starting Request', config.baseURL! + config.url!, config);

  const httpMetric = firebase.perf().newHttpMetric(config.url || '', 'GET');
  config.metadata = {httpMetric};
  await httpMetric.start();

  return config;
});

instance.interceptors.response.use(
  async (response: TResponce) => {
    const {httpMetric} = response.config.metadata;
    httpMetric.setHttpResponseCode(response.status);
    httpMetric.setResponseContentType(response.headers['content-type']);
    await httpMetric.stop();

    console.log('Response:', response);
    return response.data;
  },
  async (error: any) => {
    const {httpMetric} = error.config.metadata;
    httpMetric.setHttpResponseCode(error.response.status);
    httpMetric.setResponseContentType(error.response.headers['content-type']);
    await httpMetric.stop();
    console.error('Response:', error);
  },
);

export default instance;
