/*
路由器模塊
 */
import Vue from "vue";
import VueRouter from 'vue-router';

import About from "../views/About";
import Home from "../views/Home";
import News from "../views/News";
import Message from "../views/Message";

Vue.use(VueRouter);

export default new VueRouter({
  //多個路由
  routes: [
    {
      path: '/about',
      component: About
    },
    {
      path: '/home',
      component: Home,
      children: [
        {
          path: '/home/news',
          component: News
        },
        {
          path: 'message',
          component: Message
        },
        {
          path : '',
          redirect : '/home/news'
        }
      ]
    },
    {
      path: '/',
      redirect: '/about'
    }
  ]
})
