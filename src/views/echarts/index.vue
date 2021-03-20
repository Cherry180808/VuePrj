<template>
  <div class="fillcontain withdrawNotes">
    <div class="anicommon">
      <div ref="demo" id="demo"></div>
    </div>
  </div>
</template>
<script>
import * as echarts from "echarts";

var data = [];
data.push({ name: "1", value: [0, 0, 120, 1, 4] });
data.push({
  itemStyle: { normal: { color: "#1bbcf3" } },
  name: "2",
  value: [0, 120, 220, 1, 4]
});
data.push({
  itemStyle: { normal: { color: "lightgreen" } },
  name: "3",
  value: [0, 0, 150, 2, 4]
});

data.push({
  itemStyle: { normal: { color: "#61a0a8" } },
  name: "4",
  value: [0, 0, 200, 3, 4]
});

data.push({
  itemStyle: { normal: { color: "#715881" } },
  name: "5",
  value: [0, 0, 200, 4, 4]
});
// data.push({ itemStyle: { normal: { color: '#715881' } }, name: '2011', value: [0, 0, 200, 5, 5] })
data.push({ name: "6", value: [1, 0, 250, 1, 3] });
data.push({ name: "7", value: [1, 0, 280, 2, 3] });
data.push({
  itemStyle: { normal: { color: "#91c7ae" } },
  name: "8",
  value: [1, 0, 280, 3, 3]
});
// data.push({ itemStyle: { normal: { color: 'lightgreen' } }, name: '2012', value: [0, 150, 350, 200] })
// data.push({ itemStyle: { normal: { color: 'lightgreen' } }, name: '2012', value: [1, 250, 320, 200] })
data.push({ name: "9", value: [2, 0, 330, 1, 1] });
data.push({
  itemStyle: { normal: { color: "#2f4554" } },
  name: "10",
  value: [3, 0, 430, 1, 2]
});
data.push({
  itemStyle: { normal: { color: "lightgreen" } },
  name: "11",
  value: [3, 0, 230, 2, 2]
});
console.log(data);
export default {
  name: "echarts",
  data() {
    return {
      option: {
        tooltip: {
          trigger: "item"
        },
        xAxis: {
          type: "category",
          data: ["系列1", "系列2", "系列3", "系列4"]
        },
        yAxis: { type: "value" },
        series: [
          {
            type: "custom",
            renderItem: this.renderItem,
            itemStyle: { normal: { opacity: 0.8 } },
            encode: { y: [1, 2], x: 0 },
            data: data
          }
        ]
      }
    };
  },
  methods: {
    lineRender: function() {
      var myChart = echarts.init(this.$refs.demo);
      myChart.setOption(this.option);
    },
    renderItem: function(params, api) {
      let categoryIndex = api.value(0);
      let start = api.coord([categoryIndex, api.value(1)]);
      let end = api.coord([categoryIndex, api.value(2)]);
      let width = api.size([0, api.value(2)])[0] * 0.8;

      const num = api.value(4); // 每个系列柱子数
      const currentIndex = api.value(3);
      const isOdd = num % 2 === 0;
      const midN = isOdd ? num / 2 : (num + 1) / 2;

      var rect = "";

      // width = width / num;
      width = 20;

      let rectX = start[0] - width / 2;

      const FIXED_WIDTH = 10; // 柱子间距

      // 数据处理，结构为 { itemStyle: { normal: { color: 'lightgreen' } }, name: '2011', value: [0, 0, 150, 2, 5] }
      // 其中value 分为五个维度，分别为{系列项}（从0开始）、y轴起始值(均为0)、实际值、同系列中索引值（从1开始）、同系列数据项总数

      if (num > 1) {
        if (isOdd) {
          if (currentIndex <= midN) {
            // 中位数左侧
            rectX =
              start[0] -
              width / 2 -
              width / 2 +
              (currentIndex - midN) * width -
              FIXED_WIDTH * (midN + 1 - currentIndex);
          } else {
            // 中位数右侧
            rectX =
              start[0] -
              width / 2 +
              width / 2 +
              (currentIndex - midN - 1) * width +
              FIXED_WIDTH * (currentIndex - midN);
          }
        } else {
          rectX =
            start[0] -
            width / 2 +
            (currentIndex - midN) * (width + FIXED_WIDTH);
        }
      }

      rect = {
        type: "rect",
        shape: echarts.graphic.clipRectByRect(
          { x: rectX, y: end[1], width: width, height: start[1] - end[1] },
          {
            x: params.coordSys.x,
            y: params.coordSys.y,
            width: params.coordSys.width,
            height: params.coordSys.height
          }
        ),
        style: api.style()
      };

      return rect;
    }
  },
  mounted() {
    this.lineRender();
  }
};
</script>
<style lang="scss">
#demo {
  width: 800px;
  height: 400px;
  border: 1px solid #000;
}
</style>
