<!-- 地址编辑 -->
<template>
  <div class="head">
    <van-nav-bar title="地址编辑" left-text="返回" left-arrow @click-left="onClickLeft()">
      <template #right>
        <van-icon name="chat-o" size="22" color="#07c160" />
      </template>
    </van-nav-bar>
    <van-address-edit
      :area-list="areaList"
      show-postal
      show-delete
      show-set-default
      show-search-result
      :address-info="item"
      :search-result="searchResult"
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
      @delete="onDelete"
      @change-detail="onChangeDetail"
    />
  </div>
</template>

<script>
import area from '@/utils/area'
import { Toast } from 'vant'
export default {
  // 如果子组件，这里放的是从父页面传递来的参数
  props: [],
  // 页面唯一标识
  name: 'addressEdit',
  // 可观测值声明集合
  data () {
    return {
      id: '',
      item: '',
      areaList: [],
      searchResult: []
    }
  },
  // 组件集合
  components: {},
  // 页面变量监听方法集合
  watch: {},
  // 页面自定义方法集合
  methods: {
    onSave () {
      Toast('save')
    },
    onDelete () {
      Toast('delete')
    },
    onChangeDetail (val) {
      if (val) {
        this.searchResult = [
          {
            name: '黄龙万科中心',
            address: '杭州市西湖区'
          }
        ]
      } else {
        this.searchResult = []
      }
    },
    // 返回
    onClickLeft () {
      window.history.back(-1)
    }
  },
  // 页面开始加载时候执行的方法
  created () {
    this.areaList = area
    this.item = this.$route.query
    // this.item = this.$router.query.id
    console.log(JSON.stringify(this.item))
  },
  // 页面文档加载完成后的方法
  mounted () {}
}
</script>

<style scoped>

</style>
