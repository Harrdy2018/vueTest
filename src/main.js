import Vue from "vue";
import Vuex from "vuex";
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
import "./css/body.css";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(Vuex);
Vue.use(Button);
Vue.use(Dialog);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.use(Option);
Vue.use(Radio);
Vue.use(Row);
Vue.use(Select);

import app1 from "./components/app1.vue";
new Vue({
    el:"#app-1",
    template: `<my-p/>`,
    components: {'my-p':app1}
})