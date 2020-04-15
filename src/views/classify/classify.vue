<!-- 分类 -->
<template>
  <div class="head">
    <van-nav-bar title="ღvc庄园ღ">
      <template #left>
        <van-image width="25" height="25" src="../../../static/images/logo.png" />
      </template>
      <template #right>
        <van-icon name="chat-o" size="22" color="#07c160" />
      </template>
    </van-nav-bar>
    <van-search
      v-model="searchValue"
      shape="round"
      placeholder="请输入搜索关键词"
    />
    <van-sidebar v-model="activeKey" @change="onChange">
    <van-sidebar-item title="标签名1" />
    <van-sidebar-item title="标签名2" />
    <van-sidebar-item title="标签名3" />
  </van-sidebar>
  </div>
</template>

<script>
export default {
  // 如果子组件，这里放的是从父页面传递来的参数
  props: [],
  // 页面唯一标识
  name: 'classify',
  // 可观测值声明集合
  data () {
    return {
      searchValue: '', // 搜索输入框
      activeKey: 0
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
