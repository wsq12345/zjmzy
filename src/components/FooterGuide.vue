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
                {{ menu.name }}
            </li>
          </ul>
          <ul class="menu_list">
            <li v-for="menu in menus2" :key="menu.index">
                {{ menu.name }}
            </li>
          </ul>
          <ul class="menu_list">
            <li v-for="menu in menus3" :key="menu.index">
                {{ menu.name }}
            </li>
          </ul>
          <ul class="menu_list">
            <li v-for="menu in menus4" :key="menu.index">
                {{ menu.name }}
            </li>
          </ul>
          <ul class="menu_list">
            <li v-for="menu in menus5" :key="menu.index">
                {{ menu.name }}
            </li>
          </ul>
          <ul class="menu_list">
            <li v-for="menu in menus6" :key="menu.index">
                {{ menu.name }}
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="paten2"></div>
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
        { id: 1, name: "首页" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  .paten1 {
    background: rgb(242, 242, 242);
    height: 400px;
    text-align: center;
    .content {
      display: inline-block;
      margin-top: 50px;
      .logo {
        display: flex;
        align-content: center;
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
          li {
            &:first-child {
              font-weight: 900;
            }
            height: 10px;
            font-size: 10px;
            text-align: left;
            margin-bottom: 8px;
            cursor: pointer;
            &:hover {
              color: red;
            }
          }
        }
      }
    }
  }
  .paten2 {
    background: rgb(68, 68, 68);
    height: 100px;
  }
}
</style>
