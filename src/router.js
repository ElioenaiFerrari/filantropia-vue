import Vue from 'vue';
import VueRouter from 'vue-router';
import Candidate from '@/views/Candidate';
import Courses from '@/views/Courses';
import Questionnaire from '@/views/Questionnaire';
import Family from '@/views/Family';
import Success from '@/views/Success';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [{
      path: '/',
      component: Candidate
    },
    {
      path: '/courses',
      component: Courses
    },
    {
      path: '/questionnaire',
      component: Questionnaire
    },
    {
      path: '/family',
      component: Family,
    },
    {
      path: '/success',
      component: Success,
    },
  ],
});