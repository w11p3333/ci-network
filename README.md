# ci-network
> a vue2.0 network library based on IDG

## Language

[Chinese](./README_zh.md)

## Install

```bash
$ npm install ci-network --save-dev
```

## update

```bash
$ npm update ci-network --save-dev
```

## What's Library Included 
- [axios](https://github.com/mzabriskie/axios): 0.15.3
- [qs](https://github.com/ljharb/qs): 6.4.0

## Usage

```js
// import 
import CINetwork from 'ci-network'
Vue.use(CINetwork)
```

## Apis
- `createApi(url, params)`: 
	- `post` request
	- added in vue prototype, in components you can use `this.$createApi`
	- `empty string` `null` `undefind` will be filter
	- encapsulation by `promise`, it will `reject` in these cases:
	  - return null
	  - return value is not `json` object
	  - return `ret` in value is not `1`
	  - request timeout default time is `10s`
	  - request error

**example**

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

- `http`: 
  - [axios](https://github.com/mzabriskie/axios) Object, in components you can use `this.$http`
  - api same as [axios](https://github.com/mzabriskie/axios)

**example**

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


