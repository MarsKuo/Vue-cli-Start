
import Vue from 'vue';
import VueRouter from "vue-router";


import App from './App.vue'
import Products from "./Products";
import About from "./About";
import AboutUs from "./AboutUs";
import AboutYou from "./AboutYou";
import AboutHome from "./AboutHome";

Vue.use(VueRouter);

export default new VueRouter({
  //mode: 'hash',
  mode: 'history',
  routes: [
    {
      path: '/',
      component: App,
      children: [
        {
          path: "about",
          alias: 'story',
          component: About,
          children: [
            { path: 'about', component: About },
            { path: 'courses', component: courses },
            { path: 'booking', component: booking },
          ],
        }
      ]
    },
  ]
})
