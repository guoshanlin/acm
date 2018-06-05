export default {
  install (Vue, options) {
    const preuUrl = ''
    /**
     * 公用请求接口统一管理方法
     * @param key
     */
    const requestUrl = {
      // 登录
      login: {url: 'users/login', pre: preuUrl},
      // 退出登录
      logout: {url: 'users/logout', pre: preuUrl},
      // get查询用户 post添加或修改用户用信息
      members: {url: 'members', pre: preuUrl},
      // 删除用户
      deleteMembers: {url: 'members/{id}', pre: preuUrl},

      upload: {url: 'files/upload', pre: preuUrl},
      // 上传文件
      activitys: {url: 'activitys', pre: preuUrl}
    }
    /**
     * 获取url
     * @param key
     * @param id
     */
    Vue.prototype.getWbkUrl = function (key, id) {
      if (id && id !== undefined) {
     /*   return requestUrl[key].pre + requestUrl[key].url.replace('{id}', id)*/
        return requestUrl[key].url.replace('{id}', id)
      } else {
        // return requestUrl[key].pre + requestUrl[key].url
        return requestUrl[key].url
      }
    }
  }
}
