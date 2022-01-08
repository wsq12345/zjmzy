<template>
  <footer class="footer">
    <div class="paten1">
      <div class="content">
        <div class="logo">
          <img src="../assets/imgae/铭logo2.gif">
          <i class="iconfont icon-xiaoyuhao"></i>
          铭之远研磨设备有限公司
        </div>
        <div class="body">
          <ul class="menu_list">
            <li v-for="menu in menus1" :key="menu.index">
              <a href="javascript:void(0)" @click="goTo(menu.path)">
                {{ menu.name }}
              </a>
            </li>
          </ul>
          <ul class="menu_list">
            <li v-for="menu in menus2" :key="menu.index">
              <a href="javascript:void(0)" @click="goTo(menu.path)">
                {{ menu.name }}
              </a>
            </li>
          </ul>
          <ul class="menu_list">
            <li v-for="menu in menus3" :key="menu.index">
              <a href="javascript:void(0)" @click="goTo(menu.path)">
                {{ menu.name }}
              </a>
            </li>
          </ul>
          <ul class="menu_list">
            <li v-for="menu in menus4" :key="menu.index">
              <a href="javascript:void(0)" @click="goTo(menu.path)">
                {{ menu.name }}
              </a>
            </li>
          </ul>
          <ul class="menu_list">
            <li v-for="menu in menus5" :key="menu.index">
              <a href="javascript:void(0)" @click="goTo(menu.path)">
                {{ menu.name }}
              </a>
            </li>
          </ul>
          <ul class="menu_list">
            <li v-for="menu in menus6" :key="menu.index">
              <a href="javascript:void(0)" @click="goTo(menu.path)">
                {{ menu.name }}
              </a>
            </li>
          </ul>
        </div>
        <div class="tip">更多选购方式：前往<span>铭之远研磨阿里巴巴店铺</span>，或致电<span>18861211355</span>，<span>13776311077</span>，或<span>添加微信</span>咨询离你最近的销售点。</div>
        <div class="home_info">
          <span>Copyright © 2017 Mzyym Inc保留所有权利。</span>
          <span>
            <a href="javascript:void(0)">隐私政策</a>
            <i>|</i>
            <a href="javascript:void(0)">使用条款</a>
            <i>|</i>
            <a href="javascript:void(0)">销售政策</a>
            <i>|</i>
            <a href="javascript:void(0)">法律信息</a>
            <i>|</i>
            <a href="javascript:void(0)">网站地图</a>
          </span>
          <span class="china">
            <span class="circle">中国</span>
            中国
          </span>
        </div>
      </div>
    </div>
    <div class="paten2">
      <div class="wechat">
        <i class="iconfont icon-wechat"></i>
        <i class="iconfont icon-qq"></i>
      </div>
      <div class="contact">
        <div>在线咨询，订单</div>
        <div class="phone">Please Contact us</div>
      </div>
      <div class="wechat">
        <i class="iconfont icon-telephone"></i>
      </div>
      <div class="contact">
        <div>Phone number</div>
        <div class="phone">18861211355   1377631077</div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterGuide",
  data() {
    return {
      menus1: [
        { id: 1, name: "研磨抛光设备" },
        { id: 2, name: "磁力研磨机" },
        { id: 3, name: "平底直口振动光饰机" },
        { id: 4, name: "圆弧带分选振动光饰机" },
        { id: 5, name: "直口带分选振动光饰机" },
        { id: 6, name: "平底圆弧振动光饰机" },
        { id: 7, name: "行星式滚抛机" },
        { id: 8, name: "滚筒式光饰机" },
        { id: 9, name: "全自动双联流动式光饰机" },
        { id: 10, name: "流动式光饰机" },
        { id: 11, name: "高精度流动式光饰机" },
        { id: 12, name: "直线通过式光饰机" },
        { id: 13, name: "直口边直线振动光饰机" }
      ],
      menus2: [
        { id: 1, name: "抛磨块抛光液" },
        { id: 2, name: "陶瓷抛磨块" },
        { id: 3, name: "树脂抛磨块" },
        { id: 4, name: "高比重磨块" },
        { id: 5, name: "特殊抛磨块" },
        { id: 6, name: "防锈剂" },
        { id: 7, name: "研磨液" },
        { id: 8, name: "清洗剂" },
        { id: 9, name: "钢光亮剂" },
        { id: 10, name: "中性光亮剂" },
        { id: 11, name: "不锈钢光亮剂" },
        { id: 12, name: "铝合金光亮剂" },
        { id: 13, name: "不锈钢磨液" },
        { id: 14, name: "中性研磨液" },
        { id: 15, name: "除油剂" }
      ],
      menus3: [
        { id: 1, name: "研磨设备分销点" },
        { id: 2, name: "昆山研磨抛光光饰机" },
        { id: 3, name: "太仓研磨抛光光饰机" },
        { id: 4, name: "苏州研磨抛光光饰机" },
        { id: 5, name: "无锡研磨抛光光饰机" },
        { id: 6, name: "南通研磨抛光光饰机" },
        { id: 7, name: "上海研磨抛光光饰机" },
        { id: 8, name: "常州研磨抛光光饰机" },
        { id: 9, name: "丹阳研磨抛光光饰机" },
        { id: 10, name: "镇江研磨抛光光饰机" },
        { id: 11, name: "南京研磨抛光光饰机" },
        { id: 12, name: "扬州研磨抛光光饰机" },
        { id: 13, name: "泰州研磨抛光光饰机" },
        { id: 14, name: "常熟研磨抛光光饰机" }
      ],
      menus4: [
        { id: 1, name: "研磨设备分销点" },
        { id: 2, name: "兴化研磨抛光光饰机" },
        { id: 3, name: "如皋研磨抛光光饰机" },
        { id: 4, name: "海门研磨抛光光饰机" },
        { id: 5, name: "启东研磨抛光光饰机" },
        { id: 6, name: "张家港研磨抛光光饰机" },
        { id: 7, name: "句容研磨抛光光饰机" },
        { id: 8, name: "溧阳研磨抛光光饰机" },
        { id: 9, name: "宜兴研磨抛光光饰机" },
        { id: 10, name: "湖州研磨抛光光饰机" },
        { id: 11, name: "杭州研磨抛光光饰机" },
        { id: 12, name: "嘉兴研磨抛光光饰机" }
      ],
      menus5: [
        { id: 1, name: "关于铭之远" },
        { id: 2, name: "公司简介" },
        { id: 3, name: "公司新闻" },
        { id: 4, name: "行业资讯" },
        { id: 5, name: "技术支持" },
        { id: 6, name: "售后服务" },
        { id: 8, name: "联系我们" },
      ],
      menus6: [
        { id: 1, name: "返回首页", path: '/home' },
      ],
    };
  },
  methods: {
    goTo(path) {
      if (path)
        this.$router.replace(path);
    }
  }
};
</script>

<style lang="scss" scoped>
.footer {
  width: 100%;
  min-width: 1000px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  .paten1 {
    background: rgb(242, 242, 242);
    height: 500px;
    text-align: center;
    .content {
      display: inline-block;
      margin-top: 50px;
      .logo {
        display: flex;
        align-content: center;
        color: #555555;
        img {
          width: 16px;
          height: 16px;
        }
        i {
          font-size: 16px;
          margin: 0 5px 0 10px;
        }
      }
      .body {
        margin-top: 20px;
        overflow: hidden;
        .menu_list,
        .menu_list li,
        .menu_list li a {
          width: auto;
          display: block;
        }
        .menu_list {
          float: left;
          margin-right: 80px;
          overflow: hidden;
          &:last-child {
            margin-right: 0;
          }
          li {
            &:first-child {
              font-weight: 900;
              color: #333333;
            }
            height: 10px;
            font-size: 10px;
            text-align: left;
            margin-bottom: 8px;
            a {
              text-decoration: none;
              color: #474646;
              &:hover {
                color: red;
              }
            }
          }
        }
      }
      .tip {
        font-size: 14px;
        text-align: left;
        margin-top: 20px;
        color: #888888;
        span {
          color: #1d7fce;
          &:hover {
            cursor: pointer;
          }
        }
        padding-bottom: 5px;
        border-bottom: 1px solid;
      }
      .home_info {
        text-align: left;
        padding: 5px;
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        color: #888888;
        a {
          text-decoration: none;
          color: #474646;
          margin: 0 10px;
        }
        i {
          font-size: 16px;
        }
        .china {
          float: right;
          .circle {
            display: inline-block;
            height: 30px;
            width: 30px;
            line-height: 30px;
            text-align: center;
            background: red;
            color: yellow;
            border-radius: 50%;
          }
        }
      }
    }
  }
  .paten2 {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    background: rgb(68, 68, 68);
    height: 100px;
    text-align: center;
    .wechat {
      &:nth-child(3) {
        margin-left: 100px;
        color: red;
      }
      height: 100px;
      line-height: 100px;
      display: inline-block;
      i {
        color: white;
        font-size: 48px;
      }
    }
    .contact {
      display: inline-block;
      color: white;
      font-size: 20px;
      text-align: left;
      .phone {
        font-size: 25px;
      }
    }
  }
}
</style>
