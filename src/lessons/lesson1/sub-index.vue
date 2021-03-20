<template>
  <div>lesson1-sub-index {{ comName }}</div>
</template>

<script>
export default {
  name: "SubIndex",
  props: {
    comName: {
      type: String,
      default: "SubIndex"
    }
  },
  data() {
    return {
      dataName: "subIndexData"
    };
  },
  beforeCreate() {
    console.log(this.comName + "/" + this.dataName + " 333----- beforeCreate");
  },
  created() {
    console.log(this.comName + "/" + this.dataName + " 333----- created");
  },
  beforeMount() {
    console.log(this.comName + "/" + this.dataName + " 333----- beforeMount");
  },
  mounted() {
    console.log(this.comName + "/" + this.dataName + " 333----- mounted");
  },
  beforeUpdate() {
    console.log(this.comName + "/" + this.dataName + " 333----- beforeUpdate");
  },
  updated() {
    console.log(this.comName + "/" + this.dataName + " 333----- updated");
  },
  beforeUnmount() {
    console.log(this.comName + "/" + this.dataName + " 333----- beforeUnmount");
  },
  unmounted() {
    console.log(this.comName + "/" + this.dataName + " 333----- unmounted");
  }
};
</script>
