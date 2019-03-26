import Vue from 'vue';

const axios = Vue.$http;

function signup(data) {
  return axios.post('/users/signup', data);
}

function signin(data) {
  return axios.post('/users/signin', data);
}

function getValiCode(phone) {
  return axios.post('/users/getValiCode', {
    phone,
  });
}


export {
  signup,
  signin,
  getValiCode,
};
