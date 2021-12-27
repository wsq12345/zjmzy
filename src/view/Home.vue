<template>
  <div class="main">
    <div class="content">
      <page-1 :content="page1Content"></page-1>
      <page-1 :content="page2Content"></page-1>
      <page-1 :content="page3Content"></page-1>
      <page-1 :content="page4Content"></page-1>
      <div class="page2">
        <div class="left">
          <img v-lazy="leftContent.src">
          <div class="big" v-html="leftContent.article1"></div>
          <div v-html="leftContent.article2"></div>
          <div class="margin" v-html="leftContent.article3"></div>
          <a href="javascript:void(0)">{{ leftContent.article4 }}</a>
          <i class="iconfont icon-xiaoyuhao"></i>
        </div>
        <div class="right">
          <img v-lazy="rightContent.src">
          <div class="big" v-html="rightContent.article1"></div>
          <div v-html="rightContent.article2"></div>
          <div v-html="rightContent.article3"></div>
          <div v-html="rightContent.article4"></div>
          <div class="margin" v-html="rightContent.article5"></div>
          <a href="javascript:void(0)">{{ rightContent.article6 }}</a>
          <i class="iconfont icon-xiaoyuhao"></i>
        </div>
      </div>
      <scroll></scroll>
      <sale></sale>
    </div>
  </div>
</template>

<script>
import Page1 from '@/components/Page1.vue'
import Scroll from '@/components/Scroll.vue'
import Sale from '@/components/Sale.vue'
export default {
  components: { Page1, Scroll, Sale },
  name: 'Home',
  data() {
    return {
      page1Content: {
        article1: 'Mzy Equipment',
        article2: '铭之远研磨设备有限公司',
        article3: '专注于研磨设备代替传统手工，',
        article4: '持续对客户的需求进行满足和创新，',
        article5: '向客户提供各类工件研磨抛光更佳解决方案。',
        src: require("@/assets/imgae/Page1.gif")
      },
      page2Content: {
        article1: 'Product Center',
        article2: '铭之远研磨抛光设备中心',
        article3: '全自动振动研磨生产线、高速离心研磨机、',
        article4: '涡流式研磨机、振动研磨机、磁力抛光机、滚桶研磨机 ......',
        article5: '丰富全面的研磨设备，专业研磨抛光指导团队',
        src: require("@/assets/imgae/Page2.gif")
      },
      page3Content: {
        article1: 'Product  Cases',
        article2: '铭之远研磨抛光产品展示',
        article3: '研磨机、光饰机、磨料磨液，如何组合，',
        article4: '才能节能降耗，提高产量。研磨工艺顾问全天候免费咨询。',
        article5: '咨询热线：13776311077&nbsp;&nbsp;&nbsp;&nbsp;15205727279',
        src: require("@/assets/imgae/Page3.gif")
      },
      page4Content: {
        article1: 'Technical  Team',
        article2: '铭之远研磨抛光技术团队',
        article3: '铸就完美品质，随时随地享受贵宾待遇。',
        article4: '24小时客服在线，严密的售前、售后体系，强大的技术支持团队，',
        article5: '丰富的研磨抛光经验，一举解决各种五金表面处理难题。',
        src: require("@/assets/imgae/Page4.gif")
      },
      leftContent: {
        src: require('../assets/imgae/logo1.gif'),
        article1: '产品中心',
        article2: '小到对钟表机械配件，大到对航空发动机铸件的所有表面处理，',
        article3: '您所需要的研磨光饰设备，我们应有尽有。',
        article4: '点击进入'
      },
      rightContent: {
        src: require('../assets/imgae/phone.gif'),
        article1: '免费咨询',
        article2: '手工抛光时间长，效率低？年轻人嫌脏累，',
        article3: '不愿意操作？人力成本上升，增加企业运营成本？引进自动化设备时，',
        article4: '达不到客户要求标准？数十年丰富的研磨抛光经验，',
        article5: '协助客户及时处理在五金研磨抛光过程中碰到的各类问题。',
        article6: '点击咨询'
      },
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
  text-align: center;
  .content {
    display: inline-block;
    .page2 {
      font-size: 12px;
      padding: 40px 0;
      overflow: hidden;
      border-top: 1px solid #ccc;
      border-bottom: 1px solid #ccc;
      margin-top: 40px;
      .left {
        float: left;
        .big {
          font-size: 20px;
          margin-bottom: 10px;
        }
        .margin {
          margin-bottom: 10px;
        }
        a {
          color: #0572ca;
          text-decoration: none;
          font-size: 14px;
        }
      }
      .right {
        float: right;
        .big {
          font-size: 20px;
          margin-bottom: 10px;
        }
        .margin {
          margin-bottom: 10px;
        }
        a {
          color: #0572ca;
          text-decoration: none;
          font-size: 14px;
        }
      }
    }
  }
}
</style>
