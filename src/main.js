import Vue from "vue";
import ElementUI from "element-ui";
import {
    Button,
    Dialog,
    Form,
    FormItem,
    Input,
    Option,
    Radio,
    Row,
    Select,
} from 'element-ui';
import hello from "./hello.vue";
import Test1 from "./Test1.vue";
import Test3 from "./Test3.vue";
import Test2 from "./Test2.vue";
import Test4 from "./Test4.vue";
import "./css/body.css";
import "element-ui/lib/theme-chalk/index.css";

let app=new Vue({
    el: "#app",
    template: "<hello/>",
    components: {hello},
});

Vue.use(Button);
Vue.use(Dialog);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.use(Option);
Vue.use(Radio);
Vue.use(Row);
Vue.use(Select);
/*
Vue.component(Row.name,Row);
Vue.component(Select.name,Select);
let app3=new Vue({
    el: "#app-3",
    render: h=>h(App)
});
*/

let app1=new Vue({
    el: "#app-1",
    template: "<Test1/>",
    components: {Test1}
});
let app2=new Vue({
    el: "#app-2",
    template: "<Test2/>",
    components: {Test2}
});

let app3=new Vue({
    el: "#app-3",
    template: "<Test3/>",
    components: {Test3}
});
let app4=new Vue({
    el: "#app-4",
    template: "<Test4/>",
    components: {Test4}
});
console.log(ElementUI);