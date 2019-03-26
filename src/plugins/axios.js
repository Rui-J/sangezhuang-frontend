import axios from 'axios';
// import md5 from 'blueimp-md5';

// const baseURL = 'https://gateway.marvel.com';
// const publicKey = '5259e28f26643bb6c0eea20f6d14aa6f';
// const privateKey = '093244c68933723e1fa9fd495d6047b9b9a0d86d';

const instance = axios.create();

// 添加token
let token = localStorage.getItem('token') || undefined;
instance.defaults.headers.common.authorization = token;

// 添加响应拦截器
instance.interceptors.response.use((response) => {
  // 对响应数据做点什么
  if (response.status === 200) {
    // 刷新token
    const newToken = response.headers.authorization;
    if (newToken && newToken !== token) {
      localStorage.setItem('token', newToken);
      token = newToken;
    }
    return response.data;
  }
  return Promise.reject(response);
}, error => Promise.reject(error));

function install(Vue) {
  Vue.prototype.$http = Vue.$http = instance;
}

export default install;
