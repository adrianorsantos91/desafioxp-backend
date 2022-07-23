import axios from 'axios';

const instance = axios.create({
  baseURL: "http://localhost:3000",
});

instance.interceptors.request.use(
  (response) => resposeInterceptor(response),
  (error) => errorInterceptor(error),
  // const isToken = false;
  // if (isToken) {
  //   config.headers.Authorization = "Bearer " + isToken;
  // }
)

export const errorInterceptor = (error) => {
  if (error.message === 'Network Error') {
    return Promise.reject(new Error('Erro de conexão'))
  }

  return Promise.reject(error);
}

export const resposeInterceptor = (response) => {
  return response;
}




export default instance;
