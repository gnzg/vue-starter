import Vue from 'vue';
Vue.use(VueRouter);

import VueRouter from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Home from '@/components/organisms/Home';
import NotFound from '@/components/organisms/NotFound';
import SliderPage from '@/components/organisms/SliderPage';

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/hello', name: 'Hello', component: HelloWorld },
    { path: '/slider-page', name: 'Slider Page', component: SliderPage },
    { path: "/:catchAll(.*)", component: NotFound },
]

export default new VueRouter({
    routes
})
