<template>
  <div class="login">
    <!-- 使用element-ui组件 -->
    <el-card class="login-card">
      <!-- 匿名插槽 -->
      <div class="title">
        <img src="../../assets/img/logo_index.png" alt="">
      </div>
      <!--  -->
      <!-- 数据校验=》el-form绑定 model还需绑定rule规则-->
      <el-form :model="loginForm" :rules="loginRules" ref="myForm" style="margin-top:20px">
        <!--form-item prop属性绑定下面表单组件的字段名  -->
        <el-form-item prop="mobile">
          <!-- 手机号 -->
          <el-input v-model="loginForm.mobile" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item prop="code">
          <!-- 验证码 -->
          <el-input v-model="loginForm.code" style="width:60%" placeholder="请输入验证码"></el-input>
          <el-button style="float:right">发送验证码</el-button>
        </el-form-item>
        <el-form-item prop="agree">
          <el-checkbox v-model="loginForm.agree">我已阅读并同意用户协议和隐私条款</el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" style="width:100%" @click="login">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loginForm: {
        mobile: '', // 手机号
        code: '', // 验证码
        agree: false// 是否同意协议
      },
      // 登录规则集合对象
      loginRules: {
        // 决定着校验规则 key(字段名)：value（对象数组）=》一个对象就是一个校验规则
        mobile: [{ required: true, message: '请输入正确的手机号' }, { pattern: /^1[3456789]\d{9}$/, message: '请输入正确的手机号' }],
        code: [{ required: true, message: '请输入正确的验证码' }, { pattern: /^\d{6}$/, message: '请输入正确的验证码' }],
        agree: [{ validator: function (rule, value, callback) {
          // 可以用三元表达式
          if (value) {
            // 正确，勾选了协议
            callback()
          } else {
            // 不正确，相当于没有勾选协议
            callback(new Error('你必须无条件同意'))
          }
        } }]
      }
    }
  },
  methods: {
    login () {
      // 校验整个表单的规则
      // validate 是一个方法=》方法中传入的一个函数，两个校验参数（是否校验成功/是否校验失败）
      this.$refs.myForm.validate((isOk) => {
        if (isOk) {
          this.$http({
            method: 'post',
            url: '/authorizations',
            data: this.loginForm
          }).then(result => {
            window.localStorage.setItem('user-token', result.data.data.token)
            this.$router.push('/home')
          }).catch(() => {
            this.$message({
              message: '手机号或者验证码错误',
              type: 'warning'

            })
          })
        }
      })
    }

  } }
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
