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
        <div class="article">
          <header>企业简介</header>
          <div>昆山市铭之远研磨机械有限公司专业研发制造各种研磨、抛光设备及研磨材料。</div>
          <div>公司延续台湾、德国、意大利的研磨、抛光技术，以更专业的精神服务五金行业。公司以苛求的工作态度，对客户的需求进行完美性的研发。</div>
          <div>在研磨、抛光设备方面，我们不馈余力的做得更好，生产的全自动研磨抛光生产线、三次元振动研磨机、高速离心式抛光机、</div>
          <div>高速脱水干燥机、各类六角、八角滚筒机以高性价比赢得五金行业的高度认可。</div>
          <div>研磨、抛光剂对五金的研磨抛光效果起至关重要的作用，公司对研磨、抛光剂的研发投入大量人力物力，尤其在不锈钢研磨、抛光方面取得突破性进展。</div>
          <div>公司的销售网络遍布长三角及周边各省，服务的行业有自行车、铝压铸件、手工具、锌压铸件、家私五金、服饰五金配件、箱包五金配件、电子五金、</div>
          <div>各类首饰、珠宝及粉末冶金、树脂等，产品主要运用于不锈铡、铁、铜、锌、铝、镁合金等材质经冲压、铸造、</div>
          <div>压铸成型后进行倒角、去毛边、抛光处理。专业、专心、专注，铸就完美品质，是铭之远公司品质方针，</div>
          <div>及时处理在五金研磨、抛光过程中碰到的各类问题，向客户提供五金、树脂研磨抛光更佳之解决方案，是铭之远公司的企业宗旨。</div>
          <div>铭之远公司以数十年的丰富研磨、抛光经验，以精益求精的精神，开拓研磨、抛光行业新篇章！ </div>
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
  components: { Page2, Sale },
  name: 'Service',
  data() {
    return {
      content: {
        article1: 'Mzy Equipment',
        article2: '铭之远研磨设备有限公司',
        article3: '专注于研磨设备代替传统手工，',
        article4: '持续对客户的需求进行满足和创新，',
        article5: '向客户提供各类工件研磨抛光更佳解决方案。',
        link: '产品中心'
      },
      images: [
        { id: 1, src: require('@/assets/imgae/首页.png')},
        { id: 2, src: require('@/assets/imgae/20160125051539924.jpg')},
        { id: 3, src: require('@/assets/imgae/20160125051555965.jpg')},
        { id: 4, src: require('@/assets/imgae/20160126093000848.jpg')},
        { id: 5, src: require('@/assets/imgae/20160126092904557.jpg')},
        { id: 6, src: require('@/assets/imgae/20160126092855227.jpg')},
        { id: 7, src: require('@/assets/imgae/20160126091340274.jpg')},
        { id: 8, src: require('@/assets/imgae/20160126091349802.jpg')},
        { id: 9, src: require('@/assets/imgae/Page1.gif')}
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
      .article {
        margin-bottom: 50px;
        header {
          font-size: 16px;
          font-weight: 600;
          margin-bottom: 10px;
        }
        div {
          font-size: 14px;
        }
      }
      .imageBox {
        max-width: 1000px;
        img {
          width: 450px;
          margin: 0 10px 10px 0;
          &:first-child {
            height: 310px;
          }
          &:last-child {
            width: 1000px;
            margin-top: 100px
          }
        }
      }
    }
  }
}
</style>
