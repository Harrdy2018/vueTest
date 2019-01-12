# 这是我学习vue 搭建工程的项目 
```
配置信息
保留在github上 防止自己以后重新配置 浪费时间
```

***
### 运满满实习知识总结
*** js相关知识
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
*** git相关知识
```git
本地删除了文件，怎么提交
本地必须用 git rm file 格式删除文件，如果直接鼠标点击之类的方式，则会提交不成功！
如果开始是用鼠标点击之类的方式删除的 则 git status -s 查看 然后 git rm files再删除一遍 直接commit即可
```
*** vue相关知识
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