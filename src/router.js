import Vue from 'vue';
import Router from 'vue-router';
import GameView from '@/views/GameView'

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '',
      name: 'game',
      component: GameView,
      props: true
    },
    // {
    //   path: '/result',
    //   name: 'result',
    //   component: ResultView,
    //   props: true
    // }
  ]
})

export default router;
