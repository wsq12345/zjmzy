<template>
  <div class="article">
    <div>
      <div class="big" v-html="content.article1"></div>
      <div class="big" v-html="content.article2"></div>
      <div class="small margin" v-html="content.article3"></div>
      <div class="link">
        <a href="javascript:void(0)">点击查看更多</a>
        <i class="iconfont icon-xiaoyuhao"></i>
      </div>
      <div class="body">
        <div class="child" v-for="item in articles" :key="item.index">
          <h2>{{ item.header }}</h2>
          <div class="content">{{ item.content }}</div>
          <div class="more">
            <span>more</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArticleContent',
  data() {
    return {
      content: {
        article1: 'Information',
        article2: '行业资讯及研磨知识',
        article3: '关于研磨抛光，金属表面处理',
      },
      articles: [
        {
          header: '昆山研磨抛光设备哪里买，光饰......',
          content: `在拍完婚纱照后，不知道婚纱照相框该怎么悬挂。下面启东拍婚纱照多少钱整理了婚纱照悬挂方法，供大家参......`
        },
        {
          header: '苏州研磨抛光设备哪里买，光饰......',
          content: `拍婚纱照，一件幸福事情，特别是新娘在这一天也是如此美艳动人，可是往往新人容易面对一个问题，新郎不......`
        },
        {
          header: '太仓研磨抛光设备哪里买，光饰......',
          content: `春天到来意味着夏季不远了，相信不少新人会在2017年夏季举行婚礼。今天我们讲的是夏季甜点，下面启东拍......`
        },
        {
          header: '常州研磨抛光设备哪里买，光饰......',
          content: `一双精致的婚鞋对于新娘来说举足轻重，虽然它有时会被婚纱遮住，但是它的光芒，婚纱裙不能挡住。不同......`
        },
        {
          header: '丹阳研磨抛光设备哪里买，光饰......',
          content: `婚礼上最注重造型装扮的是新娘没错，但新郎也不能随意，虽不能在妆容上下大功夫，但如果新郎佩戴有品质......`
        },
        {
          header: '镇江研磨抛光设备哪里买，光饰......',
          content: `1月19日下午Rain和金泰希于首尔某处教堂举办婚礼，两人进行了婚配弥撒仪式。新娘金泰希穿白色短款婚纱背......`
        },
        {
          header: '上海研磨抛光设备哪里买，光饰......',
          content: `面对婚纱摄影行业竞争激烈的市场，不免有些影楼和工作室会采取不正当的竞争方式，以低价占领市场，而设......`
        },
        {
          header: '杭州研磨抛光设备哪里买，光饰......',
          content: `近年来，日系少女感新娘妆深受人们喜欢，那么，如何打造日系少女新娘妆呢？今天，通州婚纱影楼来介绍下......`
        },
        {
          header: '南京研磨抛光设备哪里买，光饰......',
          content: `21世纪人们生活水平提高了，及工作性质变化，现在的年轻人百分之70为偏胖体型，然而想在拍婚纱照的当天......`
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.article {
  padding: 80px 0;
  margin-top: 80px;
  border-top: 1px solid #ccc;
  .big {
    font-size: 32px;
    &:first-child {
      font-size: 28px;
    }
  }
  .small {
    font-size: 20px;
    color: #848484;
  }
  .margin {
    margin-top: 10px;
  }
  .link {
    margin: 10px 0 80px 0;
    font-size: 20px;
    a {
      text-decoration: none;
      color: #0572ca;
      &:nth-child(3) {
        margin-left: 50px;
      }
    }
  }
  .body {
    text-align: left;
    overflow: hidden;
    max-width: 1000px;
    .child {
      width: 320px;
      float: left;
      margin-right: 20px;
      margin-bottom: 50px;
      &:nth-child(3n) {
        margin-right: 0;
      }
      h2 {
        color: #5b5e6f;
        margin-bottom: 5px;
      }
      .content {
        padding-top: 2px;
        border-top: 1px dashed #ccc;
      }
      .more {
        text-align: right;
        margin-top: 5px;
        span {
          display: inline-block;
          width: 50px;
          height: 16px;
          text-align: center;
          line-height: 16px;
          background: #ff6565;
          color: white;
          border-radius: 4px;
        }
      }
    }
  }
}
</style>
