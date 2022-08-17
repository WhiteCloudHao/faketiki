import axios from "axios";

const AxiosClient = axios.create({
    baseURL:  'https://api.ezfrontend.com/',
    headers: {
        'Content-Type': 'application/json'
    },

})

// interceptors

// Add a request interceptor
AxiosClient.interceptors.request.use(function (config) {
  // Do something before request is sent
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
AxiosClient.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response.data;
}, function (error) {
const {config, data, status} = error.response;

console.log(error.response);
const URL = ['/auth/local', '/auth/local/register']
if( URL.includes(config.url) && status === 400) {
  const errorList = data.data;
  const firstError = errorList[0];
  const messageList = firstError.messages;
  const  messagefirst = messageList[0];
  throw new Error (messagefirst.message)
}
  return Promise.reject(error);
});

export default AxiosClient;