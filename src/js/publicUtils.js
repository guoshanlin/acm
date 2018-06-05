export default {
  install (Vue, options) {
    /**
     * 公用请求方法
     * @param type  请求类型get post
     * @param url 请求url
     * @param params 请求参数
     * @param fn 请求回调方法
     */
    Vue.prototype.requestAjax = function (type, url, params, urlId) {
      // 分页开始
      let newParams = {}
      Object.assign(newParams, params)
      // 添加rr时间戳参数值清除缓存用
      if (type != 'post') newParams.rr = parseInt(new Date().getTime())
      // 分页计算开始
      if (newParams.offset && newParams.offset > 0) {
        newParams.offset = parseInt(newParams.offset - 1) * newParams.limit
      }
      // 分页计算结束
      return new Promise((resolve, reject) => {
        this.axios({
          method: type,
          url: this.getWbkUrl(url, urlId),
          params: newParams
        }).then((data) => {
              resolve(data.data)
          }).catch((error) => {
          reject(error)
        })
      })
    }
    /**
     * 超出部分隐藏
     * @param h
     * @param params
     * @returns {*}
     */
    Vue.prototype.tdRender = function (h, params) {
        return h('div', {
          'class': 'td-render',
          domProps: {
            title: params.row[params.column.key]
          },
          style: {
            cursor: 'pointer'
          }
        }, params.row[params.column.key])
      }
    /**
     * 转义用户状态
     * @param number
     * @returns {string}
     */
    Vue.prototype.getUserStatus = function (number) {
       switch ('' + number) {
         case '0': return '不可用'
         case '1': return '可用'
         default: return number
       }
    }
    /**
     * 转义用户类型
     * @param number
     * @returns {string}
     */
    Vue.prototype.getUserType = function (number) {
      switch ('' + number) {
        case '1': return 'CMDB'
        case '2': return 'EMS'
        default: return number
      }
    }
    /**
     *
     * 转义用户职责
     * @param number
     * @returns {*}
     */
    Vue.prototype.getUserRole = function (number) {
      switch (number + '') {
        case '1': return '一线'
        case '2': return '二线'
        case '3': return '开发'
        case '4': return '普通用户'
        case '5': return '服务台'
        case '6': return '事件经理'
        case '100': return '管理员'
        default : return number
      }
      }
    /**
     * 设置定时器
     * @param func
     * @param delay
     * @returns {Function}
     */
    Vue.prototype.debounce = function (func, delay) {
        let timer
        return function (...args) {
          if (timer) {
            clearTimeout(timer)
          }
          timer = setTimeout(() => {
            func.apply(this, args)
          }, delay)
        }
      }
    /**
     * 公用页面跳转
     * @param url
     */
    Vue.prototype.routePush = function (url) {
        this.$router.push(url)
      }
    /**
     * 验证非空
     * @param val
     * @returns {boolean}
     */
    Vue.prototype.isEmpty = function (val) {
      if (val === null) return true
      if (val === undefined || val === 'undefined') return true
      if (val === '') return true
      if (val.length === 0) return true
      if (!/[^(^\s*)|(\s*$)]/.test(val)) return true
      return false
      }
    /**
     * 验证非空
     * @param params
     * @param verification
     * @returns {boolean}
     */
    Vue.prototype.verification = function (params, verification) {
         let mark = true
          for (let key in verification) {
             if (this.isEmpty(params[key])) {
               mark = false
               this.$Message.error(verification[key].msg)
               break
             }
          }
          return mark
      }
    /**
     * 转义时间
     * @param time
     * @returns {*}
     */
    Vue.prototype.formatterTime = function (time) {
      console.log(time)
        if (time === undefined || time === null || time === '') {
          return ''
        }
        return Date.formatByTimes(time.getTime(), 'yyyy-MM-dd hh:mm:ss')
      }
  }
}
