export default{
  install (Vue, options) {
    /**
     * 滚动初始化
     */
    Vue.prototype.initScroll = function (damo, table) {
      if (damo != null && damo.length !== 0) {
        for (let i = 0; i < damo.length; i++) {
          this.Scrollbar.destroy(damo[i])
          let scrollbar = this.Scrollbar.init(damo[i], {alwaysShowTracks: true, continuousScrolling: true})
          if (table) {
            // let _clickType = false
            let srollLeft = {offset: {x: 0, y: 0}}
            // damo[i].onclick = (e) => {
            //   _clickType = true
            //   return false
            // }
            // damo[i].ondblclick = (e) => {
            //   _clickType = true
            //   return false
            // }
            scrollbar.addListener((status) => {
                // if (_clickType) {
                //   scrollbar.setMomentum(0, 0)
                //   _clickType = false
                // }
                if (srollLeft.offset.x !== status.offset.x && srollLeft.offset.y === status.offset.y) {
                  damo[i].previousElementSibling.scrollTo(status.offset.x, 0)
                }
                srollLeft = status
            })
             }
           }
      }
    }
    /**
     * 删除滚动
     */
    Vue.prototype.destroyScroll = function (damo) {
      if (damo != null && damo.length !== 0) {
        for (let i = 0; i < damo.length; i++) {
          this.Scrollbar.destroy(damo[i])
        }
      }
    }
    /**
     * 删除table滚动
     */
    Vue.prototype.destroyTableScroll = function () {
      this.destroyScroll(document.querySelectorAll('.ivu-table .ivu-table-body'))
    }
    /**
     * table滚动
     */
    Vue.prototype.initTableScroll = function () {
      this.initScroll(document.querySelectorAll('.ivu-table .ivu-table-body'), true)
    }
    /**
     * 评估下拉
     */
    Vue.prototype.initSelectScroll = function () {
      this.initScroll(document.querySelectorAll('.smoothScroll .ivu-select-dropdown'))
    }
    /**
     * 模态下拉
     */
    Vue.prototype.initModalSelectScroll = function () {
      this.initScroll(document.querySelectorAll('.inputForm .ivu-select-dropdown'))
    }
    /**
     * 模态遮罩层滚动
     */
    Vue.prototype.initModalScroll = function () {
      this.initScroll(document.querySelectorAll('.ivu-modal-wrap'))
    }
    /**
     *简单页面（未使用框架）滚动（传class）;
     * 例:this.initDamoScroll("class")
     */
    Vue.prototype.initDamoScroll = function (c) {
      this.initScroll(document.querySelectorAll('.' + c))
    }

    /**
     *简单页面（未使用框架）滚动（传id或class）；
     * 例： this.initDamoScrollAll("#id.class")
     */
    Vue.prototype.initDamoScrollAll = function (c) {
      this.initScroll(document.querySelectorAll(c))
    }

    /**
    *删除所有框架滚动
   */
    Vue.prototype.destroyALLScroll = function () {
      this.Scrollbar.destroyAll()
    }

    /**
    * 所有滚动初始化
    */
    Vue.prototype.initAllScroll = function () {
      this.destroyALLScroll()
      this.initDamoScroll('smoothScroll')
      this.initDamoScroll('menuScroll')
      this.destroyTableScroll()
      this.initTableScroll()
    }
    /**
    * 所有有左侧菜单页面滚动初始化
    */
    Vue.prototype.initAllTableScroll = function () {
      this.destroyALLScroll()
      this.initSelectScroll()
      this.initModalSelectScroll()
      this.initModalScroll()
      this.initDamoScroll('menuScroll')
      this.destroyTableScroll()
      this.initTableScroll()
    }
    /**
     * 所有没有左侧菜单滚动条初始化
     */
    Vue.prototype.initAllScrollNoMenu = function () {
      this.destroyALLScroll()
      this.initSelectScroll()
      this.initModalSelectScroll()
      this.initDamoScroll('smoothScroll')
      this.destroyTableScroll()
      this.initTableScroll()
    }
  }
}
