import Vue from 'vue'
import Router from 'vue-router'
import config from '../../config'

Vue.use(Router)

export default new Router({
  base: process.env.NODE_ENV === 'production'
    ? config.build.assetsPublicPath
    : config.dev.assetsPublicPath,
  mode: 'history',
  routes: [
    { path: '*', component: (resolve) => require(['../components/404'], resolve) },
    {
      path: '/',
      redirect: '/index/home'
    },
    {
      path: '/meeting',
      component: (resolve) => require(['../view/main-menu'], resolve),
      children: [
        {
          path: '/meeting',
          component: (resolve) => require(['../view/meeting'], resolve)
        },
        {
          path: '/marketing',
          component: (resolve) => require(['../view/marketing'], resolve)
        },
        {
          path: '/promotion',
          component: (resolve) => require(['../view/promotion'], resolve)
        },
        {
          path: '/finance',
          component: (resolve) => require(['../view/finance'], resolve),
          children: [
            {
              path: 'myAccount',
              component: (resolve) => require(['../view/my-account'], resolve)
            },
            {
              path: 'incomeDetails',
              component: (resolve) => require(['../view/income-details'], resolve)
            },
            {
              path: 'withdrawalDetails',
              component: (resolve) => require(['../view/withdrawal-details'], resolve)
            }
          ]
        },
        {
          path: '/role',
          name: '会员管理',
          component: (resolve) => require(['../view/table/role'], resolve)
        },
        {
          path: '/examine',
          name: '审批管理',
          component: (resolve) => require(['../view/examine'], resolve)
        },
        {
          path: '/examineDetails',
          name: '活动详情',
          component: (resolve) => require(['../view/examine-details'], resolve)
        },
        {
          path: '/base',
          component: (resolve) => require(['../view/base'], resolve),
          children: [
            {
              path: 'overview',
              component: (resolve) => require(['../view/overview'], resolve)
            },
            {
              path: 'info',
              component: (resolve) => require(['../view/info'], resolve)
            },
            {
              path: 'entrylist',
              component: (resolve) => require(['../view/entrylist'], resolve)
            },
            {
              path: 'invitelist',
              component: (resolve) => require(['../view/invitelist'], resolve)
            },
            {
              path: 'sign',
              component: (resolve) => require(['../view/sign'], resolve)
            },
            {
              path: 'walllist',
              component: (resolve) => require(['../view/walllist'], resolve)
            },
            {
              path: 'userlist',
              component: (resolve) => require(['../view/userlist'], resolve)
            },
            {
              path: 'orderlist',
              component: (resolve) => require(['../view/orderlist'], resolve)
            },
            {
              path: 'joinStatistics',
              component: (resolve) => require(['../view/join-statistics'], resolve)
            },
            {
              path: 'interactivityStatistics',
              component: (resolve) => require(['../view/interactivity-statistics'], resolve)
            },
            {
              path: 'flowedStatistics',
              component: (resolve) => require(['../view/flowed-statistics'], resolve)
            }
          ]
        }
      ]
    },
    {
      path: '/index',
      name: 'index',
      component: (resolve) => require(['../view/index'], resolve),
        children: [
          {
            path: '/index/home',
            name: '首页',
            component: (resolve) => require(['../view/home/index'], resolve)
          },
          {
            path: '/index/initiating',
            name: '发起活动',
            component: (resolve) => require(['../view/initiating/index'], resolve)
          },
          {
            path: '/index/activeManagement',
            name: '活动管理',
            component: (resolve) => require(['../view/activeManagement/index'], resolve),
            children: [
              {
                path: '/index/role',
                name: '会员管理',
                component: (resolve) => require(['../view/table/role'], resolve)
              },
              {
                path: '/index/examine',
                name: '审批管理',
                component: (resolve) => require(['../view/examine/index'], resolve),
                chilren: [
                  {
                    path: '/index/examine/examineDetails',
                    name: '活动详情',
                    component: (resolve) => require(['../view/examine-details/index'], resolve)
                  }
                ]
              },
              {
                path: '/index/examineDetails',
                name: '活动详情',
                component: (resolve) => require(['../view/examine-details/index'], resolve)
              }
            ]
          }
        ]
    }
  ]
})
