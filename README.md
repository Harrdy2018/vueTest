# 这是我学习vue 搭建工程的项目 
```
配置信息
保留在github上 防止自己以后重新配置 浪费时间
```

***
### 运满满实习知识总结
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
```