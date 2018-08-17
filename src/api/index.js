import axios from 'axios'

const baseURL = 'http://localhost:8888/api/private/v1/'
axios.defaults.baseURL = baseURL

// 拦截器
axios.interceptors.request.use(function (config) {
  console.log(11, config)
  let token = localStorage.getItem('myToken')
  if (token) {
    config.headers.Authorization = token
  }
  return config;
}, function (error) {
  return Promise.reject(error);
});

// 登录请求
export const loginPost = function (params) {
  return axios.post('/login', params).then(function (res) {
    return res.data
  })
}

// 用户列表
export const userList = params => {
  return axios.get('/users', params).then(res => res.data)
}
