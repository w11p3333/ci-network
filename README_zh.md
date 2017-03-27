# ci-network
> 基于vue2.0的中台网络库

## 语言

[Enligsh](./README.md)

## 安装

```bash
$ npm install ci-network --save-dev
```

## 更新

```bash
$ npm update ci-network --save-dev
```


## 依赖库 
- [axios](https://github.com/mzabriskie/axios): 0.15.3
- [qs](): 6.4.0

## 使用

```js
// import 
import CINetwork from 'ci-network'
Vue.use(CINetwork)
```
## Apis
- `createApi(url, params)`: 
	- `post`请求
	- 可使用vue prototype 调用 组件内使用`this.$createApi`
	- 对params进行了过滤 过滤掉 `空字符串` `null` `undefind`
	- 封装了一层`promise` 当以下情况时`reject`
	  - 返回值为空
	  - 返回值不是一个`json`对象
	  - 返回值中`ret`标示不为1
	  - 网络请求超时 默认为`10`秒
	  - 网络请求失败

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
  - [axios](https://github.com/mzabriskie/axios)对象 可使用vue prototype调用 组件内使用`this.$http`
  - api参照[axios](https://github.com/mzabriskie/axios)

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


