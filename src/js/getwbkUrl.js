export default {
  install (Vue, options) {
    const preuUrl = ''
    /**
     * 公用请求接口统一管理方法
     * @param key
     */
    const requestUrl = {
      // 登录
      login: {url: 'members/login', pre: preuUrl},
      // 退出登录
      logout: {url: 'members/logout', pre: preuUrl},
      // get查询用户 post添加或修改用户用信息
      members: {url: 'members', pre: preuUrl},
      // 删除用户
      deleteMembers: {url: 'members/{id}', pre: preuUrl},
      // 上传文件
      upload: {url: 'files/upload', pre: preuUrl},
      // 上传成员附件
      uploadNumber: {url: 'members/upload', pre: preuUrl},
      // 查询添加活动
      activitys: {url: 'activitys', pre: preuUrl},
      // 下载会员导入木本
      filesDown: {url: 'files/down', pre: preuUrl},
      // 查询票券信息
      ticket: {url: 'ticket', pre: preuUrl},
      // 查询活动信息
      report: {url: 'activitys/report', pre: preuUrl}
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
