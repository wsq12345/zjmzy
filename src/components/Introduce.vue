<template>
  <div class="introduction">
    <img v-lazy="src">
    <div class="content">
      <div class="top"></div>
      <div class="bottom"></div>
      <h3 class="first">铭之远研磨设备有限公司</h3>
      <h1>国内知名研磨机械制造商</h1>
      <h1 class="yellow">Grinding Machinery Manufacturers</h1>
      <h3>走进铭之远研磨设备有限公司</h3>
      <div class="article">{{ article}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IntroduceContent',
  data() {
    return {
      src: require('@/assets/imgae/首页.png'),
      article: `铭之远研磨机械有限公司专业研发制造各种研磨、抛光设备及研磨材料。
      公司延续台湾、德国、意大利的研磨、抛光技术，以更专业的精神服务五金行业。
      公司以苛求的工作态度，对客户的需求进行完美性的研发。在研磨、抛光设备方
      面，我们不遗余力的做得更好，生产的全自动研磨抛光生产线、三次元振动研
      磨机、高速离心式抛光机、高速脱水干燥机、各类六角、八角滚筒机以高性价
      比赢得五金行业的高度认可。`
    }
  }
}
</script>

<style lang="scss" scoped>
.introduction {
  background: #444444;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 400px;
  }
  .content {
    margin-left: 50px;
    padding: 20px;
    height: 226px;
    width: 400px;
    color: white;
    text-align: left;
    font-family: Arial, Helvetica, sans-serif;
    .top {
      height: 30px;
      width: 30px;
      position: relative;
      left: -20px;
      top: -20px;
      border-top: 4px solid white;
      border-left: 4px solid white;
    }
    .bottom {
      height: 30px;
      width: 30px;
      position: relative;
      left: 386px;
      top: 178px;
      border-bottom: 4px solid white;
      border-right: 4px solid white;
    }
    .yellow {
      color: #feff00;
      margin-bottom: 5px;
    }
    .first {
      margin-top: -65px
    }
    .article {
      margin-top: 5px;
      line-height: 180%;
    }
  }
}
</style>
