### Vue 生命周期
Vue 应用是从创建一个 Vue 实例开始的，创建 Vue 实例会经过一系列初始化的过程，比如：数据的初始化，模板的编译，挂在实例到 DOM，数据变化是更新 DOM 等。

### 包含如下阶段

beforeCreate:new Vue()之后，data 属性和 el 属性初始化之前；
created:data 和 method 已经初始化，但是 el 还未初始化；
beforeMounted:完成了 el 的初始化，模板已经编译了，但是还没有挂载到页面上；
mounted:vue 实例已经创建完成；
beforeUpdate:数据发生了变化，但是视图还未更新；
updated:数据发生了变化，但是视图已经更新(在此阶段再改变数据会再执行 beforeUpdate 和 updated 造成死循环)；
beforeUnmount:Vue 实例从运行阶段进入了销毁阶段，这个时候所有的 data 和 methods，指令，过滤器…都是处于可用状态。还没有真正被销毁。
unmounted:这个时候所有的 data 和 methods，指令，过滤器…都是处于不可用状态。组件已经被销毁了

### 第一次页面加载的时候会触发 beforeCreate,created,beforeMounted,mounted

### created 和 mounted

获取数据可以在 created/beforeMounted/mounted 阶段，建议在 created 阶段，此时 DOM 还未初始化；如果是对 DOM 的操作，要放在 mounted 阶段

### 测试 log

父子组件(Contact.vue & Subcontact.vue)
undefined ----- beforeCreate
Contact.vue?b8fa:22 Contact ----- created
Contact.vue?b8fa:25 Contact ----- beforeMount
Subcontact.vue?731b:20 Contact/undefined 333----- beforeCreate
Subcontact.vue?731b:23 Contact/data 333----- created
Subcontact.vue?731b:26 Contact/data 333----- beforeMount
Subcontact.vue?731b:29 Contact/data 333----- mounted
Contact.vue?b8fa:28 Contact ----- mounted
