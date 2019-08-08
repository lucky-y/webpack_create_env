import axios from 'axios'
import QS from 'qs'
import { Toast } from 'vant'

axios.defaults.baseURL = process.env.BASE_ENV
axios.defaults.timeout = 10000

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'

// 封装get方法
export function get(url, params) {
  return new Promise( (resolve, reject) => {
    axios.get(url, {
      params: params
    }).then( res => {
      resolve(res.data)
    }).catch( error => {
      reject(error.data)
    })
  })
}

// 封装post方法
export function post(url, params) {
  return new Promise( (resolve, reject) => {
    axios.post(url, QS.stringify(params))
    .then(res => {
        resolve(res.data)
      })
      .catch(error => {
        reject(error.data)
      })
  })
}