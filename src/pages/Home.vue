<template>
  <div id="china-map" style="width: 500px; height: 500px"></div>
</template>

<script>
export default {
  mounted() {
    this.initCharts();
  },
  methods: {
    initCharts() {
      let chinaMap = document.getElementById("china-map");
      let myChart = this.echarts.init(chinaMap);
      // 绘制图表  canvas画布
      myChart.setOption(this.option);
    },
  },
  data() {
    return {
      option: {
        title: { text: "中国地图" },
        geo: {
          show: true,
          map: "china",
          emphasis: {
            label: {
              show: false,
            },
          },
          // regions:{
          //   label:{
          //     show:false
          //   }
          // },
          // zoom:1,
          label: {
            emphasis: {
              show: false,
            },
            show: false,  //地图文字显示
          },

          itemStyle: {
            areaColor: "#eee",
            borderColor: "#fdc000",
            shadowBlur: 4,
            shadowColor: "#fdc000",
            // shadowOffsetX: 5,
            shadowOffsetY: 10,
          },
        },

        series: [
          {
            type: "map",
            map: "china",
            emphasis: {
              label: false,
            },
            // center: [115.97, 29.71],
            // itemStyle:{ areaColor:'#aaa' },
            itemStyle: {
              areaColor: "#433400",
              //   color: "green",
              borderColor: "#fdc000",
              borderWidth: 1,
              borderType: "solid",
              //   shadowBlur: 200,
              //   shadowColor: "orange",
              //   shadowOffsetX: 10,
              //   shadowOffsetY: 10,
              opacity: 1,
              //   color: "pink",
            },
            // zlevel: {
            //   z: 2,
            // },
          },
          {
            type: "lines",
            lineStyle: {
              width: 1,
              color: "yellow",
              curveness: -0.2,
              opacity: 1,
            },
            effect: {
              show: true,
              period: 10, //动画时间
              symbol: "triangle",
              // symbol:'image:https://image.baidu.com/search/detail?ct=503316480&z=0&ipn=d&word=%E6%88%91%E5%A6%BB%E5%96%84%E9%80%B8%E5%A4%B4%E5%83%8F%E9%AB%98%E6%B8%85%E5%B8%85%E6%B0%94&hs=2&pn=0&spn=0&di=8250&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&ie=utf-8&oe=utf-8&cl=2&lm=-1&cs=4105505596%2C2367194922&os=2806596012%2C760377740&simid=4267118748%2C588883083&adpicid=0&lpn=0&ln=30&fr=ala&fm=&sme=&cg=&bdtype=0&oriquery=%E6%88%91%E5%A6%BB%E5%96%84%E9%80%B8%E5%A4%B4%E5%83%8F%E9%AB%98%E6%B8%85%E5%B8%85%E6%B0%94&objurl=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2F03853b5ea67ab4d9269acbb0b35a1c88b8ad4446.jpg&fromurl=ippr_z2C%24qAzdH3FAzdH3Fooo_z%26e3Bktstktst_z%26e3Bv54AzdH3F6jw1AzdH3FvendddlamAzdH3F&gsm=1&islist=&querylist=',
              symbolSize: 10, //动画图片大小
              trailLength: 1,
            },
            data: [
              {
                coords: [
                  [121.48, 31.22],
                  [115.89, 28.68],
                ],
              },
              {
                coords: [
                  [117.2, 39.13],
                  [115.89, 28.68],
                ],
              },
              {
                coords: [
                  [104.06, 30.67],
                  [115.89, 28.68],
                ],
              },
              {
                coords: [
                  [106.54, 29.59],
                  [115.89, 28.68],
                ],
              },
              {
                coords: [
                  [111.65, 40.82],
                  [115.89, 28.68],
                ],
              },
              {
                coords: [
                  [91.11, 29.97],
                  [115.89, 28.68],
                ],
              },
              {
                coords: [
                  [110.35, 20.02],
                  [115.89, 28.68],
                ],
              },
              {
                coords: [
                  [87.68, 43.77],
                  [115.89, 28.68],
                ],
              },
              {
                coords: [
                  [126.63, 45.75],
                  [115.89, 28.68],
                ],
              },
            ],
          },
          {
            name: "city",
            type: "effectScatter",
            coordinateSystem: "geo",
            data: [
              {
                name: "三炮2",
                value: [115.89, 28.68],
              },
              {
                name: "三炮2",
                value: [121.48, 31.22],
              },
              {
                name: "三炮2",
                value: [117.2, 39.13],
              },
              {
                name: "三炮2",
                value: [104.06, 30.67],
              },
              {
                name: "山东",
                value: [106.54, 29.59],
              },
              {
                name: "内蒙古",
                value: [111.65, 40.82],
              },
              {
                name: "西藏",
                value: [91.11, 29.97],
              },
              {
                name: "海南",
                value: [110.35, 20.02],
              },
              {
                name: "新疆",
                value: [87.68, 43.77],
              },
              {
                name: "黑龙江",
                value: [126.63, 45.75],
              },
            ],
            label: {
              show: true,
              formatter: "{b}",
              position: "right",
              color: "#fff",
              fontStyle: "italic",
              // fontWeight: "bold",
            },
            itemStyle: {
              color: "red",
            },
          },
        ],
      },
    };
  },
};
</script>

<style>
#china-map {
  transform: rotateX(45deg);
  background: #ccc;
}
</style>