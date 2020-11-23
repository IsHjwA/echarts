<template>
  <div>
    <div style="width: 400px; height: 300px" ref="chart"></div>
  </div>
</template>
<script>
// const echarts = require("echarts");

export default {
  mounted() {
    this.initCharts();
  },
  data() {
    return {
      option: {
        title: { text: "在Vue中使用echarts" },
        tooltip: {},
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            // type: "line",
            // type: "pie",

            data: [5, 20, 36, 10, 10, 20],
            markPoint: {
              data: [
                {
                  type: "max",
                  name: "最大值",
                },
                {
                  type: "min",
                  name: "最小值",
                },
              ],
            },
            markLine: {
              data: [
                {
                  type: "average",
                  name: "平均值",
                },
              ],
            },
          },
        ],
        label: {
          show: true,
          rotate: 60,
          position: "inside",
          fontStyle: "italic",
          fontWeight: "lighter",
          // offset:[30, 40]   //文字便宜
          // position:'top'
        },
        barWidth: "30%", //柱子宽度
      },
    };
  },
  methods: {
    initCharts() {
      let myChart = this.echarts.init(this.$refs.chart);
      // 绘制图表  canvas画布
      myChart.setOption(this.option);
    },
  },
};
</script>