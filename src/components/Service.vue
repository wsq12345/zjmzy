<template>
  <div class="service">
    <div class="child_left">
      <div class="imgae">
        <img :src="leftContent1.src">
      </div>
      <div class="arctile">
        <div class="circle">{{ leftContent1.number }}</div>
        <div class="title">
          <div class="head">{{ leftContent1.header }}</div>
          <img src="../assets/imgae/线条.gif">
          <div v-for="item in leftContent1.articles" :key="item.index" class="body" v-html="item.article"></div>
        </div>
      </div>
    </div>
    <div class="child_right">
      <div class="arctile">
        <div class="circle">{{ rightContent1.number }}</div>
        <div class="title">
          <div class="head">{{ rightContent1.header }}</div>
          <img src="../assets/imgae/线条.gif">
          <div v-for="item in rightContent1.articles" :key="item.index" class="body" v-html="item.article">
          </div>
        </div>
      </div>
      <div class="imgae">
        <img :src="rightContent1.src">
      </div>
    </div>
    <div class="child_left">
      <div class="imgae">
        <img :src="leftContent2.src">
      </div>
      <div class="arctile">
        <div class="circle">{{ leftContent2.number }}</div>
        <div class="title">
          <div class="head">{{ leftContent2.header }}</div>
          <img src="../assets/imgae/线条.gif">
          <div v-for="item in leftContent2.articles" :key="item.index" class="body" v-html="item.article"></div>
        </div>
      </div>
    </div>
    <div class="child_right">
      <div class="arctile">
        <div class="circle">{{ rightContent2.number }}</div>
        <div class="title">
          <div class="head">{{ rightContent2.header }}</div>
          <img src="../assets/imgae/线条.gif">
          <div v-for="item in rightContent2.articles" :key="item.index" class="body" v-html="item.article">
          </div>
        </div>
      </div>
      <div class="imgae">
        <img :src="rightContent2.src">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Service',
  data() {
    return {
      leftContent1: {
        number: '01',
        header: '高效的设备制造团队和经验丰富的研磨工业',
        articles: [
          { id: 1, article: '&gt;&nbsp;&nbsp;设备使用无故障，效率高。' },
          { id: 2, article: '&gt;&nbsp;&nbsp;多名资深专业技术人员，长期进行工艺更新实验。' },
          { id: 3, article: '&gt;&nbsp;&nbsp;设备和磨料的搭配，提高整体研磨效果，节约研磨成本。' }
        ],
        src: require('@/assets/imgae/service1.gif')
      },
      rightContent1: {
        number: '02',
        header: '改进、改造、研发先进研磨抛光设备',
        articles: [
          { id: 1, article: '&gt;&nbsp;&nbsp;吸取国外先进研磨设备，技术，主要配件采用进口。' },
          { id: 2, article: '&gt;&nbsp;&nbsp;专业设计人员根据不同类型工件，适当改进设备，及时跟进，解决客户后顾之忧。及时跟进，解决客户后顾之忧。' },
        ],
        src: require('@/assets/imgae/service2.gif')
      },
      leftContent2: {
        number: '03',
        header: '经验丰富 技术全面',
        articles: [
          { id: 1, article: '&gt;&nbsp;&nbsp;铭之远专业技术人员可根据您的工件表面需求进行合理设备、材料安排。' }
        ],
        src: require('@/assets/imgae/service3.gif')
      },
      rightContent2: {
        number: '04',
        header: '精益求精 服务完善',
        articles: [
          { id: 1, article: '&gt;&nbsp;&nbsp;售前精益求精、苛求完美' },
          { id: 2, article: '&gt;&nbsp;&nbsp;售中及时沟通，稳定高效' },
          { id: 3, article: '&gt;&nbsp;&nbsp;售后有求必应，上门服务' }
        ],
        src: require('@/assets/imgae/service4.gif')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.service {
  padding: 40px 0;
  border-top: 1px solid #ccc;
  text-align: left;
  .child_right {
    box-shadow:0 5px 10px -5px #dcdcdc;
    overflow: hidden;
    margin-top: 10px;
    .imgae {
      float: left;
      img {
        width: 400px;
      }
    }
    .arctile {
      float: left;
      position: relative;
      top: 70px;
      .circle {
        float: left;
        height: 60px;
        width: 60px;
        background: #282828;
        border-radius: 50%;
        color: white;
        text-align: center;
        font-size: 32px;
        line-height: 60px;
        font-family: 'Times New Roman', Times, serif;
      }
      .title {
        float: left;
        margin-left: 20px;
        max-width: 500px;
        .head {
          font-size: 26px;
          font-weight: 800;
        }
        img {
          width: 450px;
        }
        .body {
          font-size: 14px;
          font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        }
      }
    }
  }
  .child_left {
    box-shadow:0 5px 10px -5px #dcdcdc;
    overflow: hidden;
    margin-top: 10px;
    &:first-child {
      margin-top: 0;
    }
    .imgae {
      float: left;
      img {
        width: 400px;
      }
    }
    .arctile {
      float: left;
      position: relative;
      top: 70px;
      .circle {
        float: left;
        height: 60px;
        width: 60px;
        background: #282828;
        border-radius: 50%;
        color: white;
        text-align: center;
        font-size: 32px;
        line-height: 60px;
        font-family: 'Times New Roman', Times, serif;
      }
      .title {
        float: left;
        margin-left: 20px;
        max-width: 500px;
        .head {
          font-size: 26px;
          font-weight: 800;
        }
        img {
          width: 500px;
        }
        .body {
          font-size: 14px;
          font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        }
      }
    }
  }
}
</style>
