<template>
  <div class="wrapper fbox">
    <div class="wrapper-box b" style="width: 140px;margin-right: 10px;height: fit-content;">

      <Menu theme="light" :active-name="activeNenu" width="auto"  class="menu-wrapper" @on-select="changeMenu">
        <MenuGroup title="财务管理">
          <template v-for="(item,i) in menuList">
            <MenuItem :name="item.path" :key="i"><Icon type="document-text"></Icon>{{item.title}}</MenuItem>
          </template>
        </MenuGroup>
      </Menu>

    </div>
    <div class="flex">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        activeNenu: this.$route.path,
        menuList: [
          {path: "/finance/myAccount", title: "我的账户"},
          {path: "/finance/incomeDetails", title: "收入明细"},
          {path: "/finance/withdrawalDetails", title: "提现明细"}
        ]
      }
    },
    created() {
      setTimeout(() => {

      }, 20)
    },
    watch: {
      '$route' (to, from) {
        this.activeNenu = to.path
      }
    },
    methods: {
      changeMenu(name){
        this.$router.push(name)
      }
    }
  }
</script>

<style scoped>

  .wrapper {
    margin: 10px;
  }

</style>
