<!-- 首页 -->
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
    <van-swipe class="my-swipe" height="210"  :autoplay="3000" indicator-color="hite">
      <van-swipe-item>
        <van-image width="100%"  src="../../static/images/timg(9).jpg" />
      </van-swipe-item>
      <van-swipe-item>
        <van-image width="100%" src="../../static/images/timg(8).jpg" />
      </van-swipe-item>
      <van-swipe-item>
        <van-image width="100%" src="../../static/images/timg(7).jpg" />
      </van-swipe-item>
      <van-swipe-item>
        <van-image width="100%" src="../../static/images/timg(4).jpg" />
      </van-swipe-item>
    </van-swipe>
    <van-tabs title-active-color="#ee0a24" v-model="classifyId" swipeable sticky @click="onClassify(classifyId)">
      <van-tab v-for="index in classifyList"
        :key="index.value"
        :lable="index.name"
        :value="index.value"
        :title='index.name'>

        <van-pull-refresh v-model="isLoading" :head-height="80" @refresh="onRefresh">
          <!-- 下拉提示，通过 scale 实现一个缩放效果 -->
          <template #pulling="props">
            <img
              class="doge"
              src="https://img.yzcdn.cn/vant/doge.png"
              :style="{ transform: `scale(${props.distance / 80})` }"
            />
          </template>

          <!-- 释放提示 -->
          <template #loosing>
            <img class="doge" src="https://img.yzcdn.cn/vant/doge.png" />
          </template>

          <!-- 加载提示 -->
          <template #loading>
            <img class="doge" src="https://img.yzcdn.cn/vant/doge-fire.jpg" />
          </template>
            <van-grid :gutter="10" :border="false" :column-num="2">
              <van-grid-item v-for="item in commodityList" :key="item.id" :lable='item.name' :value="index.value" @click="goDetail(item)">
                <van-image :src="item.image" />
                <div style="text-align: left;padding: 0.3rem; width:100%">
                  <van-tag style="margin-top: 0.5rem;" plain type="danger">{{item.tag}}</van-tag>
                  <div style="margin-top: 0.5rem;" class="van-multi-ellipsis--l2">{{item.title}}</div>
                  <div style="margin-top: 0.5rem;color: red;">￥{{item.price}}</div>
                </div>
              </van-grid-item>
              <van-empty
                style="margin: 44.5% 28%;"
                v-show="listEmpty"
                class="custom-image"
                image="https://img.yzcdn.cn/vant/custom-empty-image.png"
                description="暂无数据"
              />
            </van-grid>
        </van-pull-refresh>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { Toast } from 'vant'
export default {
  // 如果子组件，这里放的是从父页面传递来的参数
  props: [],
  // 页面唯一标识
  name: 'home',
  // 可观测值声明集合
  data () {
    return {
      listEmpty: false,
      searchValue: '', // 搜索输入框
      classifyId: '0', // 分类id
      classifyList: [{
        name: '首页',
        value: '0',
        path: 'homeList'
      }, {
        name: '国际品牌',
        value: '1',
        path: 'internationalBrand'
      }, {
        name: '男装',
        value: '2',
        path: 'mensWear'
      }, {
        name: '女装',
        value: '3',
        path: 'womensWear'
      }, {
        name: '美妆护肤',
        value: '4',
        path: 'homeList'
      }, {
        name: '手机数码',
        value: '5',
        path: 'homeList'
      }, {
        name: '医药保健',
        value: '6',
        path: 'homeList'
      }, {
        name: '宠物生活',
        value: '7',
        path: 'homeList'
      }],
      // 列表
      commodityList: [{
        id: 1,
        image: '../../../static/images/timg(1).jpg',
        tag: '汽车',
        title: 'F1赛车F1赛车F1赛车F1赛车F1赛车F1赛车F1赛车F1赛车F1赛车F1赛车F1赛车F1赛车F1赛车F1赛车',
        price: '5'
      }, {
        id: 2,
        image: '../../../static/images/timg(2).jpg',
        tag: '乡村',
        title: '原始森林深处别墅',
        price: '50000000'
      }, {
        id: 3,
        image: '../../../static/images/timg(3).jpg',
        tag: '星空',
        title: '二次元星空',
        price: '5'
      }, {
        id: 4,
        image: '../../../static/images/timg(4).jpg',
        tag: '城市',
        title: '夏威夷100平方米海景房',
        price: '5'
      }, {
        id: 5,
        image: '../../../static/images/timg(5).jpg',
        tag: '洞穴',
        title: '马尔代夫唯一洞穴',
        price: '5'
      }, {
        id: 6,
        image: '../../../static/images/timg(6).jpg',
        tag: '汽车',
        title: 'F1赛车F1赛车F1赛车F1赛车F1赛车F1赛车',
        price: '5'
      }, {
        id: 7,
        image: '../../../static/images/timg(7).jpg',
        tag: '汽车',
        title: 'F1赛车F1赛车F1赛车F1赛车F1赛车F1赛车',
        price: '5'
      }, {
        id: 8,
        image: '../../../static/images/timg(8).jpg',
        tag: '汽车',
        title: 'F1赛车F1赛车F1赛车F1赛车F1赛车F1赛车',
        price: '5'
      }, {
        id: 9,
        image: '../../../static/images/timg(9).jpg',
        tag: '汽车',
        title: 'F1赛车F1赛车F1赛车F1赛车F1赛车F1赛车',
        price: '5'
      }, {
        id: 10,
        image: '../../../static/images/timg(10).jpg',
        tag: '汽车',
        title: 'F1赛车F1赛车F1赛车F1赛车F1赛车F1赛车',
        price: '5'
      }, {
        id: 11,
        image: '../../../static/images/timg(11).jpg',
        tag: '汽车',
        title: 'F1赛车F1赛车F1赛车F1赛车F1赛车F1赛车',
        price: '5'
      }],
      count: 0,
      isLoading: false
    }
  },
  // 组件集合
  components: {},
  // 页面变量监听方法集合
  watch: {},
  // 页面自定义方法集合
  methods: {
    // 详情
    goDetail (item) {
      // console.log(item)
      this.$router.push({path: '/detail', query: item})
    },
    // 点击标签页
    onClassify (id) {
      this.commodityList = []
      console.log(id)
      if (id === 0) {
        this.commodityList = JSON.parse('[{"id":"1","image":"../../../static/images/timg(1).jpg","tag":"汽车","title":"F1赛车F1赛车F1赛车F1赛车F1赛车F1赛车F1赛车","price":"5"},{"id":"2","image":"../../../static/images/timg(2).jpg","tag":"乡村","title":"原始森林深处别墅","price":"50000000"},{"id":"3","image":"../../../static/images/timg(3).jpg","tag":"星空","title":"二次元星空","price":"5"},{"id":"4","image":"../../../static/images/timg(4).jpg","tag":"城市","title":"夏威夷100平方米海景房","price":"5"},{"id":"5","image":"../../../static/images/timg(5).jpg","tag":"洞穴","title":"马尔代夫唯一洞穴","price":"5"},{"id":"6","image":"../../../static/images/timg(6).jpg","tag":"汽车","title":"F1赛车F1赛车F1赛车F1赛车F1赛车F1赛车","price":"5"},{"id":"7","image":"../../../static/images/timg(7).jpg","tag":"汽车","title":"F1赛车F1赛车F1赛车F1赛车F1赛车F1赛车","price":"5"},{"id":"8","image":"../../../static/images/timg(8).jpg","tag":"汽车","title":"F1赛车F1赛车F1赛车F1赛车F1赛车F1赛车","price":"5"},{"id":"9","image":"../../../static/images/timg(9).jpg","tag":"汽车","title":"F1赛车F1赛车F1赛车F1赛车F1赛车F1赛车","price":"5"},{"id":"10","image":"../../../static/images/timg(10).jpg","tag":"汽车","title":"F1赛车F1赛车F1赛车F1赛车F1赛车F1赛车","price":"5"},{"id":"11","image":"../../../static/images/timg(11).jpg","tag":"汽车","title":"F1赛车F1赛车F1赛车F1赛车F1赛车F1赛车","price":"5"}]')
        this.listEmpty = false
      } else if (id === 1) {
        this.commodityList = JSON.parse('[{"id":"101","image":"../../../static/images/timg(1).jpg","tag":"汽车","title":"F1赛车F1赛车F1赛车F1赛车F1赛车F1赛车F1赛车","price":"5"},{"id":"102","image":"../../../static/images/timg(2).jpg","tag":"汽车","title":"F1赛车F1赛车F1赛车F1赛车F1赛车F1赛车F1赛车","price":"5"},{"id":"103","image":"../../../static/images/timg(4).jpg","tag":"汽车","title":"F1赛车F1赛车F1赛车F1赛车F1赛车F1赛车F1赛车","price":"5"},{"id":"104","image":"../../../static/images/timg(1).jpg","tag":"汽车","title":"F1赛车F1赛车F1赛车F1赛车F1赛车F1赛车F1赛车","price":"5"},{"id":"105","image":"../../../static/images/timg(2).jpg","tag":"汽车","title":"F1赛车F1赛车F1赛车F1赛车F1赛车F1赛车F1赛车","price":"5"},{"id":"106","image":"../../../static/images/timg(1).jpg","tag":"汽车","title":"F1赛车F1赛车F1赛车F1赛车F1赛车F1赛车F1赛车","price":"5"}]')
        this.listEmpty = false
      } else if (id === 2) {
        this.commodityList = JSON.parse('[{"id":"201","image":"../../../static/images/timg(2).jpg","tag":"男装","title":"F1赛车F1赛车F1赛车F1赛车F1赛车F1赛车F1赛车","price":"5"},{"id":"202","image":"../../../static/images/timg(3).jpg","tag":"男装","title":"F1赛车F1赛车F1赛车F1赛车F1赛车F1赛车F1赛车","price":"5"},{"id":"203","image":"../../../static/images/timg(5).jpg","tag":"男装","title":"F1赛车F1赛车F1赛车F1赛车F1赛车F1赛车F1赛车","price":"5"},{"id":"204","image":"../../../static/images/timg(1).jpg","tag":"男装","title":"F1赛车F1赛车F1赛车F1赛车F1赛车F1赛车F1赛车","price":"5"},{"id":"205","image":"../../../static/images/timg(3).jpg","tag":"男装","title":"F1赛车F1赛车F1赛车F1赛车F1赛车F1赛车F1赛车","price":"5"},{"id":"206","image":"../../../static/images/timg(1).jpg","tag":"男装","title":"F1赛车F1赛车F1赛车F1赛车F1赛车F1赛车F1赛车","price":"5"}]')
        this.listEmpty = false
      } else if (id === 3) {
        this.commodityList = JSON.parse('[{"id":"301","image":"../../../static/images/timg(3).jpg","tag":"女装","title":"F1赛车F1赛车F1赛车F1赛车F1赛车F1赛车F1赛车","price":"5"},{"id":"302","image":"../../../static/images/timg(4).jpg","tag":"女装","title":"F1赛车F1赛车F1赛车F1赛车F1赛车F1赛车F1赛车","price":"5"},{"id":"303","image":"../../../static/images/timg(7).jpg","tag":"女装","title":"F1赛车F1赛车F1赛车F1赛车F1赛车F1赛车F1赛车","price":"5"},{"id":"304","image":"../../../static/images/timg(1).jpg","tag":"女装","title":"F1赛车F1赛车F1赛车F1赛车F1赛车F1赛车F1赛车","price":"5"},{"id":"305","image":"../../../static/images/timg(5).jpg","tag":"女装","title":"F1赛车F1赛车F1赛车F1赛车F1赛车F1赛车F1赛车","price":"5"},{"id":"306","image":"../../../static/images/timg(1).jpg","tag":"女装","title":"F1赛车F1赛车F1赛车F1赛车F1赛车F1赛车F1赛车","price":"5"}]')
        this.listEmpty = false
      } else if (id === 4) {
        this.commodityList = JSON.parse('[{"id":"401","image":"../../../static/images/timg(4).jpg","tag":"美妆护肤","title":"F1赛车F1赛车F1赛车F1赛车F1赛车F1赛车F1赛车","price":"5"},{"id":"402","image":"../../../static/images/timg(5).jpg","tag":"美妆护肤","title":"F1赛车F1赛车F1赛车F1赛车F1赛车F1赛车F1赛车","price":"5"},{"id":"403","image":"../../../static/images/timg(9).jpg","tag":"美妆护肤","title":"F1赛车F1赛车F1赛车F1赛车F1赛车F1赛车F1赛车","price":"5"},{"id":"404","image":"../../../static/images/timg(1).jpg","tag":"美妆护肤","title":"F1赛车F1赛车F1赛车F1赛车F1赛车F1赛车F1赛车","price":"5"},{"id":"405","image":"../../../static/images/timg(4).jpg","tag":"美妆护肤","title":"F1赛车F1赛车F1赛车F1赛车F1赛车F1赛车F1赛车","price":"5"},{"id":"406","image":"../../../static/images/timg(1).jpg","tag":"美妆护肤","title":"F1赛车F1赛车F1赛车F1赛车F1赛车F1赛车F1赛车","price":"5"}]')
        this.listEmpty = false
      } else if (id === 5 || id === 6 || id === 7) {
        this.listEmpty = true
      }
    },
    // 下拉刷新
    onRefresh () {
      setTimeout(() => {
        Toast('刷新成功')
        this.isLoading = false
        this.count++
      }, 1000)
    }
  },
  // 页面开始加载时候执行的方法
  created () {
    // this.onClassify()
  },
  // 页面文档加载完成后的方法
  mounted () {}
}
</script>

<style scoped>

  .doge {
    width: 140px;
    height: 72px;
    margin-top: 8px;
    border-radius: 4px;
  }
  .custom-image .van-empty__image {
    width: 90px;
    height: 90px;
  }
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  }
</style>
