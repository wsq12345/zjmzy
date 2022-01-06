<template>
  <div class="main">
    <div class="content">
      <page-1 :content="pageContent"></page-1>
      <div class="page1">
        <div>
          <div class="big" v-html="content.article1"></div>
          <div class="big" v-html="content.article2"></div>
          <div class="link">
            <a href="javascript:void(0)">产品中心</a>
            <i class="iconfont icon-xiaoyuhao"></i>
            <a href="javascript:void(0)">选购</a>
            <i class="iconfont icon-xiaoyuhao"></i>
          </div>
        </div>
        <div>
          <div class="img" v-for="item in imgages" :key="item.index">
            <img v-lazy="item.src">
            <div class="header">{{ item.header }}</div>
            <div v-for="article in item.articles" :key="article.index" class="article">{{ article.name }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Page1 from "@/components/Page1.vue";
export default {
  components: { Page1 },
  name: "Service",
  data() {
    return {
      pageContent: {
        article1: "Technical  Team",
        article2: "铭之远研磨抛光技术团队",
        article3: "铸就完美品质，随时随地享受贵宾待遇。",
        article4: "24小时客服在线，严密的售前、售后体系，强大的技术支持团队，",
        article5: "丰富的研磨抛光经验，一举解决各种五金表面处理难题。",
        src: require("@/assets/imgae/banner.gif"),
        link: "产品中心",
      },
      content: {
        article1: "Customer  Feedback",
        article2: "铭之远研磨客户反馈",
        src: require("@/assets/imgae/banner.gif"),
      },
      imgages: [
        { id: 1, src: require("@/assets/imgae/service1.jpg"), header: '铭之远的产品帮我们节省了很多成本', articles: [
            { id: 1, name: '我们公司主要生产箱包扣配件，'},
            { id: 2, name: '出口品质，客户要求非常高，'},
            { id: 3, name: '原来全部采用手工抛光，和铭之远公司接触后，'},
            { id: 4, name: '他们向我推荐了三次元振动研磨机，'},
            { id: 5, name: '通过几次试用，'},
            { id: 6, name: '我逐渐了解并熟悉使用这款自动化研磨设备。'},
            { id: 7, name: '现在我们公司已经掌握此项研磨技术，'},
            { id: 8, name: '节省了几十个抛光工人，'},
            { id: 9, name: '客户要求标准也完全达到，'},
            { id: 10, name: '我公司已和另外几家客户合作洽谈中，'},
            { id: 11, name: '产量有望成倍增长。'}
          ]
        },
        { id: 2, src: require("@/assets/imgae/service2.jpg"), header: '铭之远的服务非常好', articles: [
            { id: 1, name: '铭之远的服务非常好，'},
            { id: 2, name: '给我留下很深刻的印象，'},
            { id: 3, name: '在和我公司的沟通服务中非常的积极认真，'},
            { id: 4, name: '在我们引进全自动研磨生产线的过程中，'},
            { id: 5, name: '他们不断给我们提出新建议，'},
            { id: 6, name: '许多建议都应用于我们目前的生产运营当中，'},
            { id: 7, name: '通过这次合作，'},
            { id: 8, name: '使我充分认识到卖产品就是卖服务。'}
          ]
        },
        { id: 3, src: require("@/assets/imgae/service3.jpg"), header: '铭之远帮我们提高了产品和效率', articles: [
            { id: 1, name: '我们在手机配件行业已经营多年，'},
            { id: 2, name: '主要服务于国内外几家知名品牌手机商，'},
            { id: 3, name: '可以制造各类型手机精密五金配件，'},
            { id: 4, name: '近年来手机行业的品质要求逐步升高，'},
            { id: 5, name: '公司在表面处理方面也投入了较多设备和材料，'},
            { id: 6, name: '其中一部份已随着市场需求遭到淘汰。'},
            { id: 7, name: '15年6月份，我公司联系了铭之远公司，'},
            { id: 8, name: '并使用了全自动磁力研磨线，'},
            { id: 9, name: '这条研磨线大大提升了我们的产量和效率，'},
            { id: 10, name: '每天几万件的出货完全由这台设备就可以处理。'}
          ]
        }
      ]
    };
  },
};
</script>

<style lang="scss" scoped>
.main {
  text-align: center;
  .content {
    min-width: 1000px;
    display: inline-block;
    margin-bottom: 100px;
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
      img {
        width: 1000px;
      }
      .img {
        width: 323px;
        height: auto;
        float: left;
        margin-left: 10px;
        margin-top: 10px;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        img {
          width: 100%;
          height: 240px;
          margin-bottom: 50px;
        }
        .header {
          font-size: 15px;
          font-weight: 600;
          margin-bottom: 10px;
        }
        .article {
          margin-bottom: 5px;
        }
      }
    }
  }
}
</style>
