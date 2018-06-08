export default {
  install (Vue, options) {
    /**
     * 公用请求方法 以params形式提交参数
     * @param type
     * @param url
     * @param params
     * @param urlId
     * @returns {Promise<any>}
     */
    Vue.prototype.requestAjax = function (type, url, params, urlId) {
      // 分页开始
      let newParams = {}
      Object.assign(newParams, params)
      // 添加rr时间戳参数值清除缓存用
      if (type != 'post' && type != 'POST') {
        newParams.rr = parseInt(new Date().getTime())
      }
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
     * 公用请求方法以data方式提交参数
     * @param type
     * @param url
     * @param data
     * @param urlId
     * @returns {Promise<any>}
     */
    Vue.prototype.requestFile = function (type, url, data, urlId) {
      return new Promise((resolve, reject) => {
        this.axios({
          method: type,
          url: this.getWbkUrl(url, urlId),
          data: data
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
     * 创建用户渠道转义
     * @param number
     * @returns {string}
     */
    Vue.prototype.getChecked = function (number) {
       switch ('' + number) {
         case '0': return '待审核'
         case '1': return '已通过'
         case '2': return '未通过'
         default: return number
       }
    }
    /**
     * 转义状态
     * @param number
     * @returns {string}
     */
    Vue.prototype.getUserChannel = function (number) {
       switch ('' + number) {
         case '0': return '人工创建'
         case '1': return 'EXCEL导入'
         case '2': return '微信生成'
         case '3': return '邀请生成'
         default: return number
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
    Vue.prototype.routePush = function (url, id) {
        if (id) {
          this.$router.push({path: url, query: {id: id}})
        } else {
          this.$router.push(url)
        }
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
        if (time === undefined || time === null || time === '') {
          return ''
        }
        return Date.formatByTimes(time.getTime(), 'yyyy-MM-dd hh:mm:ss')
      }
     /**
     * 转义时间戳
     * @param time
     * @returns {*}
     */
    Vue.prototype.formatterObjTime = function (time) {
        if (time === undefined || time === null || time === '') {
          return ''
        }
        return Date.formatByTimes(time.time, 'yyyy-MM-dd hh:mm:ss')
      }
    /**
     * 验证图片格式大小
     * @param file
     * @returns {*}
     */
    Vue.prototype.testImg = function (file) {
        const maxSize = 1024 * 1000 * 2 // 2M
  /*      const imgWith = 1080
        const imgHeight = 640*/
        let arr = file.name.split('.')
        if (['bmp', 'jpg', 'jpeg', 'png', 'gif'].indexOf(arr[arr.length - 1]) === -1) {
          this.$Message.error(file.name + '不是图片，不能导入')
          return false
        }
        if (file.size > maxSize) {
          this.$Message.error('图片大小不能超过2M')
          return false
        }
        let path
    /*    let img = new Image()*/
        if (document.all) {
          file.select()
          path = document.selection.createRange().text
        } else {
          path = window.URL.createObjectURL(file) // FF 7.0以上
        }
     /*   img.src = path
        console.log(img)
        console.log(img.width, img.height)*/
   /*     if (img.width !== imgWith || img.height !== imgHeight) {
          this.$Message.error('图片规格必须为1080 * 640')
          return false
        }*/
        return path
      }
  }
}
