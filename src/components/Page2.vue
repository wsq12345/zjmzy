<template>
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
</template>

<script>
export default {
  name: "Page2",
  data() {
    return {
      leftContent: {
        src: require("../assets/imgae/logo1.gif"),
        article1: "产品中心",
        article2: "小到对钟表机械配件，大到对航空发动机铸件的所有表面处理，",
        article3: "您所需要的研磨光饰设备，我们应有尽有。",
        article4: "点击进入",
      },
      rightContent: {
        src: require("../assets/imgae/phone.gif"),
        article1: "免费咨询",
        article2: "手工抛光时间长，效率低？年轻人嫌脏累，",
        article3:
          "不愿意操作？人力成本上升，增加企业运营成本？引进自动化设备时，",
        article4: "达不到客户要求标准？数十年丰富的研磨抛光经验，",
        article5: "协助客户及时处理在五金研磨抛光过程中碰到的各类问题。",
        article6: "点击咨询",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
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
</style>
