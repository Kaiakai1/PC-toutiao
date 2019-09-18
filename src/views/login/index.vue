<template>
  <div class="login">
    <!-- 使用element-ui组件 -->
    <el-card class="login-card">
      <!-- 匿名插槽 -->
      <div class="title">
        <img src="../../assets/img/logo_index.png" alt="">
      </div>
      <!--  -->
      <el-form style="margin-top:20px">
        <el-form-item>
          <!-- 手机号 -->
          <el-input></el-input>
        </el-form-item>
        <el-form-item>
          <!-- 验证码 -->
          <el-input style="width:60%"></el-input>
          <el-button style="float:right">发送验证码</el-button>
        </el-form-item>
        <el-form-item>
          <el-checkbox>我已阅读并同意用户协议和隐私条款</el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" style="width:100%">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
/* 如果要在组件的样式中写less，只需给style一个lang属性，设置为less即可，如果加了scoped属性，那么样式只对当前组件有效 */
  .login {
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url('../../assets/img/login_bg.jpg');
    /* vh:当前屏幕的100% */
    height:100vh;
    /* cover:屏幕自适应 */
    background-size: cover;
    .login-card {
      width: 440px;
      height: 340px;
      .title {
        text-align: center;
        img {
          height:45px;
        }
      }
    }
  }
</style>
