<!-- 详情 -->
<template>
  <div class="head">
    <van-nav-bar :title="detail.title" left-text="返回" left-arrow @click-left="onClickLeft()">
      <template #right>
        <van-icon name="chat-o" size="22" color="#07c160" />
      </template>
    </van-nav-bar>
    <van-swipe class="my-swipe" height="300" @change="onChange" :autoplay="5000" indicator-color="white">
      <van-swipe-item @click="ImagePreview(1)">
        <van-image width="100%" height="300" src="../../static/images/timg(1).jpg" />
      </van-swipe-item>
      <van-swipe-item>
        <van-image width="100%" height="300" src="../../static/images/timg(2).jpg" />
      </van-swipe-item>
      <van-swipe-item>
        <van-image width="100%" height="300" src="../../static/images/timg(3).jpg" />
      </van-swipe-item>
      <van-swipe-item>
        <van-image width="100%" height="300" src="../../static/images/timg(4).jpg" />
      </van-swipe-item>
      <template #indicator>
        <div class="custom-indicator" style="color:#fff">
          {{ current + 1 }}/4
        </div>
      </template>
    </van-swipe>
    <div class="div">
      <div class="divPrice">
        <van-tag round type="primary"  color="#7232dd">{{detail.tag}}</van-tag>
        ￥{{detail.price}}
        <van-count-down :time="time" format="DD天HH:mm:ss" style="width: 94%;margin-top: -1.6rem;text-align: right" />
      </div>
      <van-cell :title="detail.title" title-style="text-align: left;margin: 0.2rem 0.9rem 0.2rem 0.2rem;">
        <!-- 使用 right-icon 插槽来自定义右侧图标 -->
        <template #right-icon>
          <van-icon @click="collect(iconTf)" :name="iconType" :color="iconColor" size="25" style="line-height: inherit;" ><br>
          <span style="font-size: 13px">收藏</span>
          </van-icon>
        </template>
      </van-cell>
    </div>
    <div class="div" style="height:3rem;width:100%;padding-top:0.5rem;">
      <div style="margin-left:0.5rem;width:11%;float:left;margin-left: 0.5rem;font-weight: 900;font-size: 15px;">优惠</div>
      <van-icon style="margin-right:0.5rem;width:10%;float:right;" size="25" name="ellipsis" />
      <div class="van-ellipsis" style="margin-left:2rem;width:65%;float:left;margin-left: 0.5rem;font-size: 13px;">
        <van-tag plain style="margin-bottom:0.3rem;" type="warning">白条</van-tag>
        <span> 6期内免息，随机立减最高99元</span><br>
        <van-tag plain type="warning">赠品</van-tag>
        <span> 送被狗啃过的鸡腿半个。</span>
      </div>
    </div>
    <div class="div">
      <div style="height:3rem;width:100%;padding-top:0.5rem;" @click="selectGoods()">
        <div style="margin-left:0.5rem;width:11%;float:left;margin-left: 0.5rem;font-weight: 900;font-size: 15px;">已选</div>
        <van-icon style="margin-right:0.5rem;width:10%;float:right;" size="25" name="ellipsis" />
        <!-- <div class="van-ellipsis" style="margin-left:2rem;width:65%;float:left;margin-left: 0.5rem;font-size: 13px;">
          <van-tag plain style="margin-bottom:0.3rem;" type="warning">白条</van-tag>
          <span> 6期内免息，随机立减最高99元</span><br>
          <van-tag plain type="warning">赠品</van-tag>
          <span> 购太平洋，送铅笔一直。</span>
        </div> -->
      </div>
      <div style="height:3rem;width:100%;padding-top:0.5rem;" @click="selectAddress()">
        <div style="margin-left:0.5rem;width:11%;float:left;margin-left: 0.5rem;font-weight: 900;font-size: 15px;">送至</div>
        <van-icon style="margin-right:0.5rem;width:10%;float:right;" size="25" name="ellipsis" />
        <div class="van-ellipsis" style="margin-left:2rem;width:65%;float:left;margin-left: 0.5rem;font-size: 13px;">
          <van-icon name="location-o" />
          <span>{{addressName}}</span>
        </div>
      </div>
    </div>
    <van-sku
      v-model="show"
      :sku="sku"
      :goods="goods"
    />
    <van-overlay :show="addressShow">
      <div class="wrapper" @click="addressShow = false">
        <div class="block" @click="addressShow = true">
          <div style=" margin-bottom: 1rem;text-align: center;">
            <div style="font-size: 20px;font-weight: 600;">配送至</div>
            <van-icon size="20" style="float: right;margin-top: -1.4rem;" name="close"  @click="addressShow = false"  />
          </div>
          <div style="overflow-y:auto;height: 19rem;">
            <div v-for="item in addressList" :key="item.value" :lable="item.name" :value="item.value" @click="queryAddressName(item)" style="height: 2rem;line-height: 2rem;font-size: 15px;">
              <van-icon v-show="item.value === '1'" color="red" name="success" />
              <span v-show="item.value === '1'" style="margin-left:0.5rem;font-weight: 900;">{{item.name}}</span>
              <van-icon v-show="item.value !== '1'" name="location-o" />
              <span v-show="item.value !== '1'" style="margin-left:0.5rem;">{{item.name}}</span>
            </div>
          </div>
          <van-button round style="margin-top: 2rem;" type="primary" block>选择其他地址</van-button>
        </div>
      </div>
    </van-overlay>
  </div>
</template>

<script>
// import { Toast } from 'vant'
export default {
  // 如果子组件，这里放的是从父页面传递来的参数
  props: [],
  // 页面唯一标识
  name: 'detail',
  // 可观测值声明集合
  data () {
    return {
      addressShow: false, // 选择地址页
      addressList: [{
        value: '1',
        name: '北京故宫'
      }, {
        value: '2',
        name: '天津天塔1'
      }, {
        value: '3',
        name: '上海东方明珠'
      }, {
        value: '4',
        name: '西安钟楼'
      }, {
        value: '2',
        name: '天津天塔2'
      }, {
        value: '3',
        name: '上海东方明珠'
      }, {
        value: '4',
        name: '西安钟楼'
      }, {
        value: '2',
        name: '天津天塔3'
      }, {
        value: '3',
        name: '上海东方明珠'
      }, {
        value: '4',
        name: '西安钟楼'
      }, {
        value: '2',
        name: '天津天塔4'
      }, {
        value: '3',
        name: '上海东方明珠'
      }, {
        value: '4',
        name: '西安钟楼'
      }],
      addressName: '北京故宫', // 已选择地址
      iconTf: true,
      time: '100000000',
      iconColor: '',
      iconType: 'like-o',
      detail: {},
      current: 0,

      show: false,
      sku: {
        // 所有sku规格类目与其值的从属关系，比如商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
        // 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
        tree: [
          {
            k: '颜色', // skuKeyName：规格类目名称
            v: [
              {
                id: '30349', // skuValueId：规格值 id
                name: '红色', // skuValueName：规格值名称
                imgUrl: '../../static/images/timg(1).jpg', // 规格类目图片，只有第一个规格类目可以定义图片
                previewImgUrl: '../../static/images/timg(2).jpg' // 用于预览显示的规格类目图片
              },
              {
                id: '1215',
                name: '蓝色',
                imgUrl: '../../static/images/timg(3).jpg',
                previewImgUrl: '../../static/images/timg(4).jpg'
              }
            ],
            k_s: 's1' // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
          }
        ],
        // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
        list: [
          {
            id: 2259, // skuId，下单时后端需要
            price: 100, // 价格（单位分）
            s1: '1215', // 规格类目 k_s 为 s1 的对应规格值 id
            s2: '1193', // 规格类目 k_s 为 s2 的对应规格值 id
            s3: '0', // 最多包含3个规格值，为0表示不存在该规格
            stock_num: 110 // 当前 sku 组合对应的库存
          }
        ],
        price: '1.00', // 默认价格（单位元）
        stock_num: 227, // 商品总库存
        collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
        none_sku: false, // 是否无规格商品
        messages: [
          {
            // 商品留言
            datetime: '0', // 留言类型为 time 时，是否含日期。'1' 表示包含
            multiple: '0', // 留言类型为 text 时，是否多行文本。'1' 表示多行
            name: '留言', // 留言名称
            type: 'text', // 留言类型，可选: id_no（身份证）, text, tel, date, time, email
            required: '1', // 是否必填 '1' 表示必填
            placeholder: '' // 可选值，占位文本
          }
        ],
        hide_stock: false // 是否隐藏剩余库存
      },
      goods: {
        // 默认商品 sku 缩略图
        picture: '../../static/images/timg(1).jpg'
      },
      messageConfig: {
        // 图片上传回调，需要返回一个promise，promise正确执行的结果需要是一个图片url
        uploadImg: () => {
          return new Promise((resolve) => {
            setTimeout(() => resolve('https://img.yzcdn.cn/upload_files/2017/02/21/FjKTOxjVgnUuPmHJRdunvYky9OHP.jpg!100x100.jpg'), 1000)
          })
        },
        // 最大上传体积 (MB)
        uploadMaxSize: 3,
        // placeholder 配置
        placeholderMap: {
          text: 'xxx',
          tel: 'xxx'
        },
        // 初始留言信息
        // 键：留言 name
        // 值：留言内容
        initialMessages: {
          留言: '留言信息'
        }
      },
      // customStepperConfig: {
      //   // 自定义限购文案
      //   quotaText: '每次限购xxx件',
      //   // 自定义步进器超过限制时的回调
      //   handleOverLimit: (data) => {
      //     const { action, limitType, quota, quotaUsed, startSaleNum } = data

      //     if (action === 'minus') {
      //       Toast(startSaleNum > 1 ? `${startSaleNum}件起售` : '至少选择一件商品')
      //     } else if (action === 'plus') {
      //       // const { LIMIT_TYPE } = Sku.skuConstants;
      //       if (limitType === LIMIT_TYPE.QUOTA_LIMIT) {
      //         let msg = `单次限购${quota}件`
      //         if (quotaUsed > 0) msg += `，你已购买${quotaUsed}`
      //         Toast(msg)
      //       } else {
      //         Toast('库存不够了')
      //       }
      //     }
      //   },
      //   // 步进器变化的回调
      //   handleStepperChange: currentValue => {},
      //   // 库存
      //   stockNum: 1999,
      //   // 格式化库存
      //   stockFormatter: stockNum => {}
      // },
      skuData: {
        // 商品 id
        goodsId: '946755',
        // 留言信息
        messages: {
          message_0: '12',
          message_1: ''
        },
        // 另一种格式的留言，key 不同
        cartMessages: {
          '留言1': 'xxxx'
        },
        // 选择的商品数量
        selectedNum: 1,
        // 选择的 sku 组合
        selectedSkuComb: {
          id: 2257,
          price: 100,
          s1: '30349',
          s2: '1193',
          s3: '0',
          stock_num: 111,
          properties: [
            {
              k_id: 123,
              k: '加料',
              is_multiple: true,
              v: [
                {
                  id: 1223,
                  name: '椰果',
                  price: 1
                }
              ]
            }
          ],
          property_price: 1
        }
      }
    }
  },
  // 组件集合
  components: {},
  // 页面变量监听方法集合
  watch: {},
  // 页面自定义方法集合
  methods: {
    // 选择地址
    queryAddressName (item) {
      this.addressName = item.name
      this.addressShow = false
    },
    // 选择地址
    selectAddress () {
      this.addressShow = true
    },
    // 预览图片
    ImagePreview (id) {
    },
    // 选择商品
    selectGoods () {
      this.show = true
    },
    // 收藏
    collect (code) {
      if (code === true) {
        this.iconType = 'like'
        this.iconColor = 'rgb(238, 10, 36)'
        this.iconTf = false
      } else {
        this.iconType = 'like-o'
        this.iconColor = ''
        this.iconTf = true
      }
    },
    // 轮播图
    onChange (index) {
      this.current = index
    },
    // 返回
    onClickLeft () {
      window.history.back(-1)
    }
  },
  // 页面开始加载时候执行的方法
  created () {
    this.detail = this.$route.query
  },
  // 页面文档加载完成后的方法
  mounted () {}
}
</script>

<style scoped>
  .wrapper {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    height: 100%;
  }

  .block {
    border-top-left-radius:15px;
    border-top-right-radius:15px;
    width: 100%;
    height: 50%;
    background-color: #fff;
    padding: 2rem;
  }
  .div{
    border-radius:10px;
    border-bottom-left-radius:15px;
    border-bottom-right-radius:15px;
    margin: 0.5rem 0.2rem;
    background-color: #fff;
  }
  .divTitle{
    background-color: #fff;
    margin: 0.5rem;
    width: 80%;
  }
  .divPrice{
    background-color: bisque;
    height: 3rem;
    margin: 0.5rem;
    border-radius:15px;
    line-height: 2.5rem;
    text-align: left;
    padding-left: 0.5rem;
    font-size: 25px;
  }

.van-nav-bar__title {
    max-width: 30%;
    margin: 0 auto;
    color: #323233;
    font-weight: 500;
    font-size: 16px;
}
  .van-nav-bar__title{
    max-width: 30%;
  }
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  }
  .custom-indicator {
    position: absolute;
    right: 5px;
    bottom: 5px;
    padding: 2px 5px;
    font-size: 12px;
    background: rgba(0, 0, 0, 0.1);
  }
</style>
