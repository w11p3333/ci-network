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

```
// import 
import CINetwork from 'ci-network'
Vue.use(CINetwork)
```

## apis
- createApi(url, params)

```
// in global
CINetwork.createApi(url, params)
// in components createApi added in vue prototype

this.$createApi(url, params)
.then(res => {
	// res = {
	//		ret: 1
	//      data: []
	//	}
	// when return res and ret !== 1
})
.catch(error => {
	// error
})

```

- http(nature  [axios](https://github.com/mzabriskie/axios) added in vue prototype)

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


