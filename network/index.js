var axios = require('axios'),
    qs = require('qs'),
    filter = require('./utils')

var createApi = function (url, params) {
    return new Promise(function(resolve, reject) {
    axios.post(url, qs.stringify(filter(params)), {
      timeout: 10000 // set request timeout
    })
    .then(function(response) {
      const res = response.data
      if (!res) {
        reject({ message: '请求结果为空' })
      } else if (typeof res !== 'object') {
        reject({ message: '服务端返回异常' })
      } else if (res.ret === -1) {
        res.message = res.msg
        reject(res)
      } else {
        resolve(res) // request success
      }
    })
    .catch(function(error) {
      reject({ message: '网络请求失败' })
    })
  })
}

module.exports = createApi
