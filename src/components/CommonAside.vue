<template>

  <!-- 菜单 -->
  <el-menu
      default-active="2"
      :collapse="appStore.isCollapse"
      active-text-color="#409eff"
      background-color="#304156"
      text-color="#BFCBD9"
  >
    <div id="title">
      <img src="../assets/images/1.png" alt="">
      <span v-if="!appStore.isCollapse">欢迎你，管理员！</span>
    </div>
    <!--引入递给菜单组件-->
    <CommonMenu
        :menu-data="menuData"
        @menu-item-click="handleMenuItemClick"
    />

  </el-menu>
</template>

<script lang="ts" setup>
import {computed, ref} from 'vue'
import CommonMenu from "@/components/CommonMenu.vue";
import router from "@/router/index";


import { useAppStore } from '@/stores/app'

const appStore = useAppStore()

// 处理菜单项点击
const handleMenuItemClick = (item) => {
  // console.log(item.name + " " + item.id)
  router.push(item.path)
}

// 从localStorage获取数据或者app.ts
const menuData = computed(() =>{
  // appStore.menuList ||
  return JSON.parse(localStorage.getItem("menu"))
})


</script>

<style lang="less" scoped>
.el-menu:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;

}

.el-menu {
  height: 100vh;


  // 用户头像
  #title {
    display: flex;
    justify-content: center; // X 轴居中
    align-items: center;
    padding: 10px 5px;

    img {
      width: 45px;
      height: 45px;
      /*变圆型头像*/
      border-radius: 50%;
    }

    span {
      /*文字禁止换行*/
      color: #BFCBD9;
      white-space: nowrap;
      padding-left: 10px;
      /*先把文字隐藏*/
      //display: none;
    }
  }

}

</style>
