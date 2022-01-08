<template>
  <div class="main">
    <div class="content">
      <div class="page1">
        <div>
          <div class="big" v-html="content.article1"></div>
          <div class="big" v-html="content.article2"></div>
          <div class="small margin" v-html="content.article3"></div>
          <div class="small" v-html="content.article4"></div>
          <div class="small" v-html="content.article5"></div>
          <div class="link">
            <a href="javascript:void(0)">{{ content.link || '进一步了解' }}</a>
            <i class="iconfont icon-xiaoyuhao"></i>
            <a href="javascript:void(0)">选购</a>
            <i class="iconfont icon-xiaoyuhao"></i>
          </div>
        </div>
        <div class="imageBox">
          <img v-for="item in images" :key="item.index" v-lazy="item.src">
        </div>
      </div>
      <page-2></page-2>
      <sale></sale>
    </div>
  </div>
</template>

<script>
import Page2 from '@/components/Page2.vue'
import Sale from '@/components/Sale.vue'
export default {
  name: 'Cases',
  components: { Page2, Sale },
  data() {
    return {
      content: {
        article1: 'Product  Cases',
        article2: '铭之远研磨抛光产品展示',
        article3: '研磨机、光饰机、磨料磨液，如何组合，',
        article4: '才能节能降耗，提高产量。研磨工艺顾问全天候免费咨询。',
        article5: '咨询热线：13776311077&nbsp;&nbsp;&nbsp;&nbsp;15205727279',
      },
      images: [
        { id: 1, src: require('@/assets/imgae/scroll3.jpg')},
        { id: 2, src: require('@/assets/imgae/scroll2.jpg')},
        { id: 3, src: require('@/assets/imgae/scroll8.jpg')},
        { id: 4, src: require('@/assets/imgae/scroll7.jpg')},
        { id: 5, src: require('@/assets/imgae/scroll6.jpg')},
        { id: 6, src: require('@/assets/imgae/scroll5.jpg')},
        { id: 7, src: require('@/assets/imgae/scroll4.jpg')},
        { id: 8, src: require('@/assets/imgae/scroll1.jpg')}
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
  text-align: center;
  .content {
    min-width: 1000px;
    display: inline-block;
    .page1 {
      margin-top: 100px;
      .big {
        font-size: 32px;
        &:first-child {
          font-size: 28px;
        }
      }
      .small {
        font-size: 16px;
        color: #848484;
      }
      .margin {
        margin-top: 10px;
      }
      .link {
        margin: 20px 0 50px 0;
        font-size: 20px;
        a {
          text-decoration: none;
          color: #0572ca;
          &:nth-child(3) {
            margin-left: 50px;
          }
        }
      }
      .imageBox {
        max-width: 1000px;
        img {
          width: 450px;
          margin: 0 10px 10px 0;
        }
      }
    }
  }
}
</style>
