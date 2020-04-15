<!-- 购物车 -->
<template>
  <div>
    <van-card
      num="2"
      price="2.00"
      desc="描述信息"
      title="商品标题"
      thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
    >
      <template #tags>
        <van-tag plain type="danger">标签</van-tag>
        <van-tag plain type="danger">标签</van-tag>
      </template>
      <template #footer>
        <van-button size="mini">按钮</van-button>
        <van-button size="mini">按钮</van-button>
      </template>
    </van-card>
  </div>
</template>

<script>
export default {
  // 如果子组件，这里放的是从父页面传递来的参数
  props: [],
  // 页面唯一标识
  name: 'shoppingCart',
  // 可观测值声明集合
  data () {
    return {}
  },
  // 组件集合
  components: {},
  // 页面变量监听方法集合
  watch: {},
  // 页面自定义方法集合
  methods: {},
  // 页面开始加载时候执行的方法
  created () {},
  // 页面文档加载完成后的方法
  mounted: {}
}
</script>

<style scoped>

</style>
