var createApi = require('../network/index'),
    axios = require('axios')

var install = function(Vue) {
  /* istanbul ignore if */
  if (install.installed) return
  Vue.prototype.$http = axios
  Vue.prototype.$createApi = createApi
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

module.exports = {
  install: install,
  createApi: createApi
}
