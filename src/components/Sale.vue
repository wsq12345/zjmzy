<template>
  <div class="sale">
    <div class="left">
      <div v-html="leftContent.article1"></div>
      <div v-html="leftContent.article2"></div>
      <div class="link">
        <a href="javascript:void(0)">{{ leftContent.article3 }}</a>
        <i class="iconfont icon-xiaoyuhao"></i>
      </div>
      <img v-lazy="leftContent.src">
    </div>
    <div class="right">
      <div v-html="rightContent.article1"></div>
      <div v-html="rightContent.article2"></div>
      <div class="small" v-html="rightContent.article3"></div>
      <div class="small" v-html="rightContent.article4"></div>
      <div class="link">
        <a href="javascript:void(0)">{{ rightContent.article5 }}</a>
        <i class="iconfont icon-xiaoyuhao"></i>
      </div>
      <div><i class="iconfont icon-wechat"></i></div>
      <img v-lazy="rightContent.src">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sale',
  data() {
    return {
      leftContent: {
        article1: '分销点遍布',
        article2: '&nbsp;&nbsp;长三角经济区。',
        article3: '选择离你最近的销售点',
        src: require('@/assets/imgae/地图.gif')
      },
      rightContent: {
        article1: '添加微信',
        article2: '&nbsp;&nbsp;享受优惠活动。',
        article3: '搜索18861211355，13776311077',
        article4: '添加客服微信。',
        article5: '扫描二维码添加微信',
        src: require('@/assets/imgae/微信.gif')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.sale {
  font-size: 12px;
  padding: 40px 0;
  overflow: hidden;
  border-top: 1px solid #ccc;
  .left {
    float: left;
    font-size: 36px;
    font-weight: 600;
    .link {
      margin-bottom: 20px;
      a {
        color: #0572ca;
        text-decoration: none;
        font-size: 16px;
      }
    }
    img {
      height: 500px;
      width: 500px;
    }
  }
  .right {
    float: right;
    font-size: 36px;
    font-weight: 600;
    .small {
      font-size: 20px;
      font-weight: 500;
      font-family: STHeiti;
    }
    .link {
      margin-bottom: 20px;
      a {
        color: #0572ca;
        text-decoration: none;
        font-size: 16px;
      }
    }
    .icon-wechat {
      font-size: 60px;
    }
    img {
      margin-top: 35px;
      height: 350px;
      width: 350px;
    }
  }
}
</style>
