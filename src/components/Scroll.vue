<template>
  <div class="scroll">
    <div class="play">
      <i class="iconfont icon-play-square-fill"></i>
      <span class="big">研磨设备展示 </span>
      <span>MACHINES CENTER</span>
    </div>
    <vue-seamless-scroll
      :data="listData"
      :class-option="classOption"
      class="warp"
    >
    <ul class="ul-item">
      <li class="li-item" v-for="(item, index) in listData" :key="index">
        <img :src="item.src">
        <span>{{ item.name }}</span>
      </li>
    </ul>
  </vue-seamless-scroll>
  </div>
</template>

<script>
import vueSeamlessScroll from 'vue-seamless-scroll'
export default {
  name: 'Scroll',
  components: { vueSeamlessScroll },
  data() {
    return {
      listData: [
        { id: 1, src: require("@/assets/imgae/scroll1.jpg"), name: '全自动振动研磨生产线' },
        { id: 2, src: require("@/assets/imgae/scroll2.jpg"), name: '全自动振动研磨生产线' },
        { id: 3, src: require("@/assets/imgae/scroll3.jpg"), name: '全自动振动研磨生产线' },
        { id: 4, src: require("@/assets/imgae/scroll4.jpg"), name: '全自动振动研磨生产线' },
        { id: 5, src: require("@/assets/imgae/scroll5.jpg"), name: '全自动振动研磨生产线' },
        { id: 6, src: require("@/assets/imgae/scroll6.jpg"), name: '全自动振动研磨生产线' },
        { id: 7, src: require("@/assets/imgae/scroll7.jpg"), name: '全自动振动研磨生产线' },
      ],
      classOption: {
        limitMoveNum: 2,
        direction: 3,
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.scroll {
  padding: 40px 0;
  .play {
    text-align: left;
    margin-bottom: 10px;
    i {
      font-size: 22px;
    }
    .big {
      font-weight: 800;
      font-size: 16px;
    }
  }
  .warp {
    width: 240px * 4;
    height: 220px;
    margin: 0 auto;
    overflow: hidden;
    ul {
      list-style: none;
      padding: 0;
      margin: 0 auto;
      &.ul-item {
        display: flex;
        .li-item {
          width: 240px;
          height: 220px;
          margin-right: 10px;
          img {
            width: 240px;
            height: 200px;
          }
        }
      }
    }
  }
}
</style>
