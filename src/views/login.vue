<!-- 登录页 -->
<template>
  <div>
    <van-nav-bar
    class="head"
    right-text="注册"
    @click-right="onClickRight"
  />
    <div style="margin-top: 20%;font-size: xx-large;font-weight: inherit;">欢迎登录</div>
    <div style="margin-top: 27%;">
      <van-form @submit="onSubmit">
        <van-field
          v-model="username"
          maxlength="20"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="password"
          :type="inputType"
          label="密码"
          maxlength="20"
          placeholder="密码"
          :right-icon="eye"
          @click-right-icon="visible()"
          :rules="[{ required: true, message: '请填写密码' }]"

        />
        <div style="margin: 16px;">
          <van-button round block type="info" native-type="submit">
            提交
          </van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
import { Toast } from 'vant'
export default {
  // 如果子组件，这里放的是从父页面传递来的参数
  props: [],
  // 页面唯一标识
  name: 'login',
  // 可观测值声明集合
  data () {
    return {
      Base64: '',
      inputType: 'password', // 密码输入框格式
      eye: 'closed-eye', // 眼睛图标格式
      username: 'admin',
      password: '123456'
    }
  },
  // 组件集合
  components: {},
  // 页面变量监听方法集合
  watch: {},
  // 页面自定义方法集合
  methods: {
    // 登录
    onSubmit () {
      if (this.Base64.encode(this.password) === 'MTIzNDU2') {
        this.$router.push({path: '/appPubic/home'})
      } else {
        Toast.fail('密码错误')
      }
    },
    // 图标点击事件
    visible () {
      if (this.eye === 'closed-eye') {
        this.eye = 'eye-o'
        this.inputType = ''
      } else {
        this.eye = 'closed-eye'
        this.inputType = 'password'
      }
    },
    // 注册
    onClickRight () {
      this.$router.push({path: '/registered'})
    }
  },
  // 页面开始加载时候执行的方法
  created () {
    this.Base64 = require('js-base64').Base64
    // Base64.encode(this.password) // 加密
    // Base64.decode('5r2Y6auY') // 解密
  },
  // 页面文档加载完成后的方法
  mounted () {}
}
</script>

<style scoped>

</style>
