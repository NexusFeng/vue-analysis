import { initMixin } from './init'
import { stateMixin } from './state'
import { renderMixin } from './render'
import { eventsMixin } from './events'
import { lifecycleMixin } from './lifecycle'
import { warn } from '../util/index'

function Vue (options) { //vue构造函数
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  this._init(options)
}

initMixin(Vue) // Vue.prototype._init
stateMixin(Vue) // vm.$et vm.$delete $watch
eventsMixin(Vue) //  vm.$on $emit $once  发布订阅  组件的通信
lifecycleMixin(Vue) // Vue.prototype._update Vue.prototype.$destroy
renderMixin(Vue) // Vue.prototype._render

export default Vue
