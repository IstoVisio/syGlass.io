import Vue from 'vue'
import App from './App.vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import VueSilentbox from 'vue-silentbox'
import {VueMasonryPlugin} from 'vue-masonry';
import WOW from 'wow.js/dist/wow.js';
import VueAnalytics from 'vue-analytics';

Vue.use(VueMasonryPlugin)
Vue.use(VueSilentbox)
Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(VueAwesomeSwiper)

import 'bootstrap/dist/css/bootstrap.css'
import '../src/assets/css/fontawesome-all.min.css'
import 'swiper/dist/css/swiper.css'
import 'animate.css/animate.min.css'
import '../src/assets/scss/style.scss'
import 'slick-carousel/slick/slick.css'

Vue.config.productionTip = false
Vue.config.productionSourceMap = false

import { routes } from './router/index'

const router = new VueRouter({
    routes,
    mode: 'history',
       scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        }
         if (to.hash) {
            return { selector: to.hash };
        }
    return { x: 0, y: 0 }
  },
});

Vue.use(VueAnalytics, {
    id: 'UA-100426131-1',
    router
  });

new Vue({
    render: h => h(App),
    router,
    mounted(){
        new WOW().init();
    }
}).$mount('#app')
