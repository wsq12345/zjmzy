<template>
  <div class="main">
    <div class="content">
      <div class="product">
        <div class="left">
          <div class="header">宝桢研磨产品类别</div>
          <ul><li v-for="item in types" :key="item.index"><a href="javascript:void(0)">{{ item.name }}</a></li></ul>
          <div class="header">联系我们</div>
          <div class="contact">
            <img v-lazy="picSrc">
            <p>东莞市宝桢研磨机械有限公司</p>
            <p>联系人：汪先生 13925813278</p>
            <p>黄先生 13926836182</p>
            <p>李先生 13857107586</p>
            <p>电话： 0769-82784982</p>
            <p>传真： 0769-82784981</p>
            <p>地址： 东莞市大岭山镇杨屋第三</p>
            <p>工业区大兴路148号</p>
          </div>
          <div class="header">新闻动态</div>
          <div class="news">
            <p>东莞市宝桢研磨机械有限公司</p>
            <p>联系人：汪先生 13925813278</p>
            <p>黄先生 13926836182</p>
            <p>李先生 13857107586</p>
            <p>电话： 0769-82784982</p>
            <p>传真： 0769-82784981</p>
            <p>地址： 东莞市大岭山镇杨屋第三</p>
            <p>工业区大兴路148号</p>
          </div>
        </div>
        <div class="right">
          <div class="header">
            <span>产品展示</span>
            <span class="path">您当前的位置是：网站首页&gt;&gt;流动式光饰机系列</span>
          </div>
        </div>
      </div>
      <sale></sale>
    </div>
  </div>
</template>

<script>
import Sale from '@/components/Sale.vue'
export default {
  components: { Sale },
  name: 'Product',
  data() {
    return {
      types: [
        { id:1, name: '全自动振动研磨生产线系列' },
        { id:2, name: '三次元振动研磨机系列' },
        { id:3, name: '高速离心式抛光机系列' },
        { id:4, name: '流动式光饰机系列' },
        { id:5, name: '磁力抛光机系列' },
        { id:6, name: '高效卧式振动研磨机系列' },
        { id:7, name: '滚筒研磨机系列' },
        { id:8, name: '振动筛选机系列' },
        { id:9, name: '工业用烘乾机系列' },
        { id:10, name: '工业用脱水机系列' },
        { id:11, name: '小型振动机系列' },
        { id:12, name: '研磨石抛光石系列' },
        { id:13, name: '研磨剂抛光剂系列' },
        { id:14, name: '多功能拖拽研磨抛光机' }
      ],
      picSrc: require('@/assets/imgae/ban3.jpg')
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
  text-align: center;
  margin-top: 50px;
  .content {
    min-width: 1000px;
    display: inline-block;
    .product {
      overflow: hidden;
      .left {
        text-align: left;
        float: left;
        .header {
          width: 200px;
          height: 40px;
          line-height: 40px;
          font-size: 15px;
          padding-left: 10px;
          font-weight: 600;
          background: #4e4e4e;
          color: white;
        }
        ul {
          list-style-type: none;
          margin-bottom: 10px;
          li {
            height: 30px;
            padding-left: 20px;
            line-height: 30px;
            font-size: 12px;
            border-bottom: 1px solid #ccc;
            border-left: 1px solid #ccc;
            border-right: 1px solid #ccc;
            background: #eeeeee;
            a {
              text-decoration: none;
              color: black;
              &:hover {
                color: red;
              }
            }
          }
        }
        .contact {
          border: 1px solid #ccc;
          padding: 10px;
          margin-bottom: 10px;
          img {
            width: 180px;
          }
          p {
            margin-top: 10px;
            &:nth-child(2) {
              font-weight: 800;
            }
          }
        }
        .news {
          border: 1px solid #ccc;
          padding: 10px;
          margin-bottom: 10px;
          p {
            margin-bottom: 10px;
            &:last-child {
              margin-bottom: 0;
            }
          }
        }
      }
      .right {
        float: left;
        border: 1px solid #ccc;
        height: 500px;
        width: 750px;
        margin-left: 10px;
        .header {
          text-align: left;
          background-image: linear-gradient( #ffffff, #e9e9e9);
          height: 35px;
          line-height: 35px;
          span {
            font-size: 14px;
            &:first-child {
              font-weight: 600;
              font-size: 15px;
              margin-left: 10px;
            }
          }
          .path {
            float: right;
            margin-right: 10px;
          }
        }
      }
    }
  }
}
</style>
