import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import HelloWorld from "@/components/HelloWorld";

Vue.config.productionTip = false;
Vue.use(VueRouter);

// Vue Router
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

const routes = [
  { path: '/', name: 'Hello', component: HelloWorld },
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

// VM
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

