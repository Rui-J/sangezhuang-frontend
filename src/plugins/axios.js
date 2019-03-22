import axios from 'axios';
// import md5 from 'blueimp-md5';

// const baseURL = 'https://gateway.marvel.com';
// const publicKey = '5259e28f26643bb6c0eea20f6d14aa6f';
// const privateKey = '093244c68933723e1fa9fd495d6047b9b9a0d86d';

const instance = axios.create();

// instance.interceptors.request.use(function (config) {
//   // 在发送请求之前做些什么

//   config.url = `${config.url}`
//   return config;
// }, function (error) {
//   // 对请求错误做些什么
//   return Promise.reject(error);
// });

// 添加响应拦截器
instance.interceptors.response.use((response) => {
    console.log(response);
    // 对响应数据做点什么
    if (response.status === 200) {
      return response.data;
    }
    return Promise.reject(response);
  }, error =>
  // 对响应错误做点什么
  Promise.reject(error));

function install(Vue) {
  Vue.prototype.$http = Vue.$http = instance;
}

export default install
