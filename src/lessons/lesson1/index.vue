<template>
  <div>
    Lesson1 {{ comName }}
    <sub-index :comName="comName"></sub-index>
  </div>
</template>

<script>
import SubIndex from "./sub-index";
export default {
  components: { SubIndex },
  name: "Lesson1",
  data() {
    return {
      comName: "Lesson1"
    };
  },
  beforeCreate() {
    console.log(this.comName + " ----- beforeCreate");
  },
  created() {
    console.log(this.comName + " ----- created");
  },
  beforeMount() {
    console.log(this.comName + " ----- beforeMount");
  },
  mounted() {
    console.log(this.comName + " ----- mounted");
  },
  beforeUpdate() {
    console.log(this.comName + " ----- beforeUpdate");
  },
  updated() {
    console.log(this.comName + " ----- updated");
  },
  beforeUnmount() {
    console.log(this.comName + " ----- beforeUnmount");
  },
  unmounted() {
    console.log(this.comName + " ----- unmounted");
  }
};
</script>
