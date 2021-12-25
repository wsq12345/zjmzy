<template>
  <div class="main">
    <div class="content">
      <div class="page1">
        <div>
          <div class="big">Mzy Equipment</div>
          <div class="big">铭之远研磨设备有限公司</div>
          <div class="small margin">专注于研磨设备代替传统手工，</div>
          <div class="small">持续对客户的需求进行满足和创新，</div>
          <div class="small">向客户提供各类工件研磨抛光更佳解决方案。</div>
          <div class="link">
            <a href="javascript:void(0)">进一步了解</a>
            <i  class="iconfont icon-xiaoyuhao"></i>
            <a href="javascript:void(0)">选购</a>
            <i  class="iconfont icon-xiaoyuhao"></i>
          </div>
        </div>
        <img v-lazy="src">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      src: require("@/assets/imgae/Nipic_02.gif"),
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
  text-align: center;
  .content {
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
        color: #0572ca;
        font-size: 20px;
        a {
          text-decoration: none;
          &:nth-child(3) {
            margin-left: 50px;
          }
        }
      }
      img {
        width: 1000px;
      }
    }
  }
}
</style>
