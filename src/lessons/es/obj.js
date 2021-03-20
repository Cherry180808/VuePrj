var arr = [1, 2, 3];
//给arr新增一个元素
// Object.defineProperty(arr, "3", {
//   set(val) {
//     console.log("set");
//     this.val0 = val;
//   },
//   get() {
//     console.log("get");
//     return this.val0;
//   }
// });
// arr[3] = 333;
// console.log(arr[3]);

arr.push(4);
Array.prototype.newPush = function(val) {
  console.log("newPush");
  this.push(val);
};
arr.newPush(4);
console.log(arr[3]);
