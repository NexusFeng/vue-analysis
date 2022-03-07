/* @flow */

import { toArray } from '../util/index'
// Vue.use 使用插件
export function initUse (Vue: GlobalAPI) {
   // 为了给Vue扩展功能 希望扩展的时候使用的vue版本一致


  // plugin.install = function (Vue, options) {

  // }

  // plugin = function(Vue, options) {

  }
  // Vue.use(plugin,options)

  Vue.use = function (plugin: Function | Object) {
    const installedPlugins = (this._installedPlugins || (this._installedPlugins = []))
    if (installedPlugins.indexOf(plugin) > -1) {
      return this //如果插件安装过了,直接返回
    }

    // additional parameters
    const args = toArray(arguments, 1) // Array.from().slice(1)
    args.unshift(this) // 放入this [Vue, options]
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args)
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args)
    }
    installedPlugins.push(plugin)
    return this
  }
}
