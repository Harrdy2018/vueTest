# 这是我学习vue 搭建工程的项目 
```
配置信息
保留在github上 防止自己以后重新配置 浪费时间
```

***
### 运满满实习知识总结
*** 
#### js相关知识
```javascript
//结果返回json字符串
let obj=fetch("./data");   //返回promise对象
console.log(obj);
console.log(toString.call(obj));   //[object Promise]
obj.then(res=>{
    console.log(res)
    console.log(toString.call(res));  //[object Response]
    return res.text();
},e=>console.log(e))
.then(res=>console.log(res));   //{"name":"lukang","age":18,"sex":"nan"}

//结果返回json对象
let obj=fetch("./data");   //返回promise对象
console.log(obj);
console.log(toString.call(obj));   //[object Promise]
obj.then(res=>{
    console.log(res)
    console.log(toString.call(res));  //[object Response]
    return res.json();
},e=>console.log(e))
.then(res=>console.log(res));   //{"name":"lukang","age":18,"sex":"nan"}

//请求方式默认是get请求  如果你非要说明
fetch("./data",{method:"GET"})
.then(res=>res.text())
.then(res=>console.log(res))

//post请求初步
fetch("./data",{method:"POST"})
.then(res=>res.text())
.then(res=>console.log(res))
```
***
#### js模块化问题
```javascript
//es模块化
//最主要的有CommonJS和AMD两种。前者用于服务器，后者用于浏览器。
//ES6在语言规格的层面上，实现了模块功能，而且实现得相当简单，完全可以取代现有的CommonJS和AMD规范，成为浏览器和服务器通用的模块解决方案。
//现阶段 export和import浏览器端可以，node端需要babel插件转码
**************************************************************************************************************************************
//export 命令
// profile.js
//单一导出方法
export var firstName="lu";
export var lastName="kang";

//函数
export function multiply(x,y) {
  return x*y;
}

//一起导出 as 关键字重命名
let aa=1;
let bb=2;
export {
  aa,
  bb as variableBB
};

// main.js
import {firstName,lastName,year} from "./profile.js";
console.log(firstName);
console.log(lastName);
console.log(year);
**************************************************************************************************************************************
//import 命令
//as 关键字重命名
import {firstName as name} from "./profile.js";
console.log(name);

//import命令变量提升 既变量申明也赋值
console.log(firstName);  //lu
console.log(multiply(2,3)); //6
import {firstName,multiply} from "./profile.js";
console.log("***********");

//import 语句会执行所加载的模块，因此可以有下面的写法。下面代码仅仅执行 lodash 模块，但是不输入任何值。
import 'lodash';
import "./profile.js"
//这个先运行模块，然后导入值
import {firstName as name} from "./profile.js";

//模块的整体加载,除了指定加载某个输出值，还可以使用整体加载，即用星号（ * ）指定一个对象，所有输出值都加载在这个对象上
import * as info from "./profile.js";
console.log(info);
console.log(toString.call(info)); //[object Module]
**************************************************************************************************************************************
//export default 命令
// import 随便指定默认输出默认定义的函数 但是import后面不需要使用大括号
// 匿名情况下
export default function(x,y) {
  return x*y;
}
import myfunc from "./profile.js";
console.log(myfunc.name);  //没结果 因为是匿名函数
console.log(myfunc(2,6));  //12  但是有值

// 非匿名函数
export default function multiply(x,y) {
  return x*y;
}
import myfunc from "./profile.js";
console.log(myfunc.name);  //multiply
console.log(myfunc(2,6));  //12
**************************************************************************************************************************************
//模块继承
// testA.js
let width=10;
let height=20;
export default function() {
  console.log("i am at testA.js");
}
export {width,height};

//testB.js
// export * 命令会忽略testA.js模块 的 default 方法
export * from "./testA.js";
export let num=123; 
export default function(){  
  console.log("I am at testB.js");
}

//test.js
import myfunc from "./testB.js";
import * as all from "./testB.js";
console.log(myfunc());//I am at testB.js
console.log(all);
/*
default: ƒ ()  也就是testB.js的默认函数
height: 20
num: 123
width: 10
*/
**************************************************************************************************************************************
```
*** 
#### git相关知识
```git
本地删除了文件，怎么提交
本地必须用 git rm file 格式删除文件，如果直接鼠标点击之类的方式，则会提交不成功！
如果开始是用鼠标点击之类的方式删除的 则 git status -s 查看 然后 git rm files再删除一遍 直接commit即可

撤销修改 修改有两种情况
在工作区修改但没有add到暂存区,丢弃工作区的修改  git checkout -- <file>

在工作区修改了也add到暂存区 git reset命令既可以回退版本，也可以把暂存区的修改回退到工作区。当我们用HEAD时，表示最新的版本。
先撤销暂存区的修改 git reset HEAD <file>  现在暂存区是干净的，工作区有修改：
再撤销工作区的修改 git checkout -- <file>
注意当你用git rm file命令后，它直接就在暂存区！！！
```
*** 
#### vue相关知识
```js
data template render 优先级问题
//渲染结果data
let app2=new Vue({
    el: "#app-2",
    data: {message: "this is a message !!!"}
})
//template优先级高 渲染结果只有template
let app2=new Vue({
    el: "#app-2",
    data: {message: "this is a message !!!"},
    template: `<div><p>这是我template出来的{{message}}</p></div>`
})
//render优先级最高 渲染结果只有render render是让你发挥js的最大编程能力
let app2=new Vue({
    el: "#app-2",
    data: {message: "this is a message !!!"},
    template: `<div><p>这是我template出来的{{message}}</p></div>`,
    //注意如果引用message就不能用箭头函数，一旦使用箭头函数 this指向上一层 window
    render: function(h){
        return h('h1',`我是render出来的${this.message}`); 
    }
})
```