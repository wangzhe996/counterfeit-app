<!-- 注册页面 -->
<template>
  <div>
    <van-nav-bar
      title="注册"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <div style="margin-top: 20%;font-size: xx-large;font-weight: inherit;">欢迎登录</div>
  </div>
</template>

<script>
export default {
  // 如果子组件，这里放的是从父页面传递来的参数
  props: [],
  // 页面唯一标识
  name: 'registered',
  // 可观测值声明集合
  data () {
    return {}
  },
  // 组件集合
  components: {},
  // 页面变量监听方法集合
  watch: {},
  // 页面自定义方法集合
  methods: {
    // 返回
    onClickLeft () {
      window.history.back(-1)
    }
  },
  // 页面开始加载时候执行的方法
  created () {},
  // 页面文档加载完成后的方法
  mounted () {}
}
</script>

<style scoped>

</style>
