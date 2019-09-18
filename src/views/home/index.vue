<template>
  <!-- container布局 -->
  <!-- 只能是 <el-container>包裹 -->
  <el-container>
    <!-- 左侧导航 -->
    <el-aside width="200px">
      <layout-aside ></layout-aside>
    </el-aside>
    <!-- 右侧内容 -->
  <el-container>
    <!-- 头部 -->
    <el-header>头部</el-header>
    <router-view>zhongjian </router-view>
  </el-container>
  </el-container>
</template>

<script>
// 引入左侧导航栏组件
import layoutAside from '../../components/layoutAside/layout-aside'
export default {
  // 注册组件
  components: {
    'layout-aside': layoutAside
  }
}
</script>

<style>

</style>
