<!-- 底部公共页 -->
<template>
  <div>
    <router-view/>
    <van-tabbar
      v-model="active"
      @change="onChange"
      active-color="#07c160"
      inactive-color="#000"
    >
      <van-tabbar-item  icon="wap-home-o">
        <router-link :to="{path:'home'}">首页</router-link>
      </van-tabbar-item>
      <van-tabbar-item icon="apps-o">
        <router-link :to="{path:'classify'}">分类</router-link>
      </van-tabbar-item>
      <van-tabbar-item icon="shopping-cart-o">
        <router-link :to="{path:'shoppingCart'}">购物车</router-link>
      </van-tabbar-item>
      <van-tabbar-item icon="friends-o">
        <router-link :to="{path:'personalCenter'}">我</router-link>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  // 如果子组件，这里放的是从父页面传递来的参数
  props: [],
  // 页面唯一标识
  name: 'appPubic',
  // 可观测值声明集合
  data () {
    return {
      active: 0
    }
  },
  // 组件集合
  components: {},
  // 页面变量监听方法集合
  watch: {},
  // 页面自定义方法集合
  methods: {
    onChange (index) {
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
