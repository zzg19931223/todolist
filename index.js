import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import App from "./src/app.vue";
import "./index.css"

Vue.use(ElementUI);

new Vue({
    el: "#app",
    render: (h) => h(App),
});
