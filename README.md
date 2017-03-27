# ci-network
> a vue2.0 network library based on IDG

## Install

```bash
$ npm install ci-network --save-dev
```

## What's Library Included 
- axios 0.15.3
- qs 6.4.0

## Usage

```js
// import 
import CINetwork from 'ci-network'
Vue.use(CINetwork)
```

## Apis
- createApi(url, params)

```js
// in global
CINetwork.createApi(url, params)

// in components createApi added in vue prototype
this.$createApi(url, params)
.then(res => {
})
.catch(error => {
	// error
})

```

- source code

```js
var createApi = function (url, params) {
    return new Promise((resolve, reject) => {
    axios.post(url, qs.stringify(filter(params)), {
      timeout: 10000 // set request timeout
    })
    .then((response) => {
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
    .catch((error) => {
      reject({ message: '网络请求失败' })
    })
  })
}
```



- http (nature [axios](https://github.com/mzabriskie/axios)  function added in vue prototype)

```js
// example in components
this.$http.get(url, params, option)
.then(res => {
}) 
.catch(error => {
})

this.$http.post(url, params, option)
.then(res => {
})
.catch(error => {
})
```


