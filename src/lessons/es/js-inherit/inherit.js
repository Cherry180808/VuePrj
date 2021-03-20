// //创建对象的方式
// //1.------------------------------------------------生命一个对象
// function createPerson(name) {
//   var obj = {};
//   obj.name = name;
//   obj.greeting = function() {
//     console.log("Hello, my name is " + name);
//   };
//   return obj;
// }

// let json1 = createPerson("json1");
// console.log(json1);
// json1.greeting();
// console.log("----------------------------------------------------\n");

// //2.------------------------------------------------构造函数
// function Person(name) {
//   this.name = name;
//   this.greeting = function() {
//     console.log("Hello, my name is " + this.name);
//   };
// }

// let json2_1 = new Person("json2_1");
// let json2_2 = new Person("json2_2");
// console.log(json2_1);
// json2_1.greeting();
// console.log(json2_2);
// json2_2.greeting();
// console.log("----------------------------------------------------\n");

// //3.------------------------------------------------语法糖(本质还是构造函数，只是看起来更形象)
// class Persons {
//   name = "";
//   constructor(name) {
//     this.name = name;
//   }
//   greeting() {
//     console.log("Hello, my name is " + this.name);
//   }
// }

// let json3 = new Persons("json3");
// console.log(json3);
// json3.greeting();
// console.log("----------------------------------------------------\n");

// //4.------------------------------------------------Object构造函数
// let json4_1 = new Object();
// json4_1.name = "json4_1";
// json4_1.greeting = function() {
//   console.log("Hello, my name is " + this.name);
// };
// console.log(json4_1);
// json4_1.greeting();

// let json4_2 = new Object({
//   name: "json4_2",
//   greeting: function() {
//     console.log("Hello, my name is " + this.name);
//   }
// });
// console.log(json4_2);
// json4_2.greeting();
// console.log("----------------------------------------------------\n");

// //5.------------------------------------------------Create(JavaScript有个内嵌的方法create(), 它允许您基于现有对象创建新的对象)
// let json5_1 = new Object();
// json5_1.name = "json5_1";
// json5_1.greeting = function() {
//   console.log("Hello, my name is " + this.name);
// };
// console.log(json5_1);

// let json5_2 = Object.create(json5_1);
// json5_2.name = "json5_2";
// json5_2.greeting();
// console.log(json5_2);
// console.log("----------------------------------------------------\n");