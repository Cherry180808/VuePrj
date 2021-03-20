<template>
  <div>
    <ul>
      <li class="example" v-for="(item, index) in list1" :key="index">
        <!-- {{ item }} -->
      </li>
    </ul>
    <ul>
      <li class="example" v-for="(item, index) in list2" :key="index">
        <!-- {{ item }} -->
      </li>
    </ul>
    <ol>
      <li class="example" v-for="(item, index) in list3" :key="index">
        <!-- {{ item }} -->
      </li>
    </ol>
    <ol>
      <li class="example" v-for="(item, index) in list4" :key="index">
        <!-- {{ item }} -->
      </li>
    </ol>
    <ol>
      <li class="example" v-for="(item, index) in list5" :key="index">
        <!-- {{ item }} -->
      </li>
    </ol>
  </div>
</template>
<script type="text/javascript">
export default {
  data() {
    return {
      list1: [],
      list2: [],
      list3: [],
      list4: [],
      list5: []
    };
  },
  created() {
    this.composeList12();
    this.composeList34();
    this.composeList5();
    this.$nextTick(function() {
      // DOM 更新了
      console.log(
        "finished test " + new Date().toString(),
        document.querySelectorAll(".example").length
      );
    });
  },
  methods: {
    composeList12() {
      debugger;
      let count = 5;

      for (let i = 0; i < count; i++) {
        this.list1.push("I am a 测试信息～～啦啦啦" + i);
      }
      console.log(
        "finished list1 " + new Date().toString(),
        document.querySelectorAll(".example").length
      );

      for (let i = 0; i < count; i++) {
        this.list2.push("I am a 测试信息～～啦啦啦" + i);
      }
      console.log(
        "finished list2 " + new Date().toString(),
        document.querySelectorAll(".example").length
      );

      this.$nextTick(function() {
        debugger;
        // DOM 更新了
        console.log(
          "finished tick1&2 " + new Date().toString(),
          document.querySelectorAll(".example").length
        );
      });
    },
    composeList34() {
      debugger;
      let count = 5;

      for (let i = 0; i < count; i++) {
        this.list3.push("I am a 测试信息～～啦啦啦" + i);
      }
      console.log(
        "finished list3 " + new Date().toString(),
        document.querySelectorAll(".example").length
      );

      this.$nextTick(function() {
        debugger;
        // DOM 更新了
        console.log(
          "finished tick3 " + new Date().toString(),
          document.querySelectorAll(".example").length
        );
      });

      setTimeout(this.setTimeout1, 0);
    },
    setTimeout1() {
      debugger;
      let count = 5;

      for (let i = 0; i < count; i++) {
        this.list4.push("I am a 测试信息～～啦啦啦" + i);
      }
      console.log(
        "finished list4 " + new Date().toString(),
        document.querySelectorAll(".example").length
      );

      this.$nextTick(function() {
        debugger;
        // DOM 更新了
        console.log(
          "finished tick4 " + new Date().toString(),
          document.querySelectorAll(".example").length
        );
      });
    },
    composeList5() {
      debugger;
      this.$nextTick(function() {
        debugger;
        // DOM 更新了
        console.log(
          "finished tick5-1 " + new Date().toString(),
          document.querySelectorAll(".example").length
        );
      });

      setTimeout(this.setTimeout2, 0);
    },
    setTimeout2() {
      debugger;
      let count = 5;

      for (let i = 0; i < count; i++) {
        this.list5.push("I am a 测试信息～～啦啦啦" + i);
      }
      console.log(
        "finished list5 " + new Date().toString(),
        document.querySelectorAll(".example").length
      );

      this.$nextTick(function() {
        debugger;
        // DOM 更新了
        console.log(
          "finished tick5 " + new Date().toString(),
          document.querySelectorAll(".example").length
        );
      });
    }
  }
};
</script>
