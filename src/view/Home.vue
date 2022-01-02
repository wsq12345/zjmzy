<template>
  <div class="main">
    <div class="content">
      <page-1 :content="page1Content"></page-1>
      <page-1 :content="page2Content"></page-1>
      <page-1 :content="page3Content"></page-1>
      <page-1 :content="page4Content"></page-1>
      <page-2></page-2>
      <scroll></scroll>
      <sale></sale>
      <service></service>
      <introduce></introduce>
      <article-content></article-content>
    </div>
  </div>
</template>

<script>
import Page1 from '@/components/Page1.vue'
import Scroll from '@/components/Scroll.vue'
import Sale from '@/components/Sale.vue'
import Service from '@/components/Service.vue'
import Introduce from '@/components/Introduce.vue'
import ArticleContent from '@/components/ArticleContent.vue'
import Page2 from '@/components/Page2.vue'
export default {
  components: { Page1, Scroll, Sale, Service, Introduce, ArticleContent, Page2},
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
      }
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
  }
}
</style>
