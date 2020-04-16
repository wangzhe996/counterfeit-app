<!-- 地址列表 -->
<template>
  <div class="head">
    <van-nav-bar title="地址列表" left-text="返回" left-arrow @click-left="onClickLeft()">
      <template #right>
        <van-icon name="chat-o" size="22" color="#07c160" />
      </template>
    </van-nav-bar>
    <van-address-list
      v-model="chosenAddressId"
      :list="list"
      :disabled-list="disabledList"
      disabled-text="以下地址超出配送范围"
      default-tag-text="默认"
      @add="onAdd"
      @edit="onEdit"
    />
  </div>
</template>

<script>
import { Toast } from 'vant'
export default {
  // 如果子组件，这里放的是从父页面传递来的参数
  props: [],
  // 页面唯一标识
  name: 'addressList',
  // 可观测值声明集合
  data () {
    return {
      chosenAddressId: '1',
      list: [
        {
          id: '1',
          name: '张三',
          tel: '13000000000',
          address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室'
        },
        {
          id: '2',
          name: '李四',
          tel: '1310000000',
          address: '浙江省杭州市拱墅区莫干山路 50 号'
        }
      ],
      disabledList: [
        {
          id: '3',
          name: '王五',
          tel: '1320000000',
          address: '浙江省杭州市滨江区江南大道 15 号'
        }
      ]
    }
  },
  // 组件集合
  components: {},
  // 页面变量监听方法集合
  watch: {},
  // 页面自定义方法集合
  methods: {
    onAdd () {
      this.$router.push({path: 'addressEdit'})
    },
    onEdit (item, index) {
      this.$router.push({path: 'addressEdit', query: item})
      Toast('编辑地址:' + index)
    },
    // 返回
    onClickLeft () {
      window.history.back(-1)
    }
  },
  // 页面开始加载时候执行的方法
  created () {
  },
  // 页面文档加载完成后的方法
  mounted () {}
}
</script>

<style scoped>

  .wrapper {
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  .block {
    background-color: #fff;
  }
</style>
