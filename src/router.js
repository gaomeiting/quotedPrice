import Vue from "vue"
import Router from "vue-router"

Vue.use(Router);

const routes = [{
  path: '*',
  redirect: '/index'
},{
  path: "/index",
  meta: {
    title: '有声产品报价单'
  },
  component: () => import ('views/home/home')
},{
  path: "/index/:type",
  component: () => import ('views/project/project')
},{
  path: "/index/:type/:level/:audioId",
  meta: {
    title: '样音详情'
  },
  component: () => import ('views/audio-details/audio-details')
}];

// add route path
routes.forEach(route => {
  route.path = route.path || '/' + (route.name || '');
});

const router = new Router({
  /* mode: 'history', */
  routes,
  /* scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
     return savedPosition
    } else {
     return { x: 0, y: 0 }
    }
  } */
});



router.beforeEach((to, from, next) => {
  const title = to.meta && to.meta.title;
  if (title) {
    document.title = title;
    
  }
  next();
});

export default router