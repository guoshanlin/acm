<template>
  <div>
    <div>
      <Menu mode="horizontal" active-name="1" @on-select="menuSelect" class="menu-tab">
        <MenuItem name="1">待审核</MenuItem>
        <MenuItem name="2">已通过</MenuItem>
        <MenuItem name="3">未通过</MenuItem>
      </Menu>
    </div>
    <div class="list-wrapper">
      <ul class="list">
        <li class="list-item" v-for="item in [1,2,3,4,5]" :key="item">
           <activity-item :button="buttonName"></activity-item>
        </li>
      </ul>
    </div>
 </div>
</template>

<script>
  import activityItem from 'components/activity-item/index'

  export default {
    name: 'index',
    data () {
      return {
        buttonName: '审核'
      }
    },
    components: {
      activityItem
    },
    methods: {
      menuSelect (name) {
        this.$Message.warning(name)
      }
    }
  }
</script>

<style>
.menu-tab{ height: 30px !important; line-height: 30px;}
.list-wrapper{margin: 10px 0;}
.list-item{
  position: relative;
  border: 1px solid #e3e2e5;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
}
</style>
