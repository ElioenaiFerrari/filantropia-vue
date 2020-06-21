import Vue from 'vue';
import VueRouter from 'vue-router';
import Candidate from '@/views/Candidate'
import Courses from '@/views/Courses'
import Questionnaire from '@/views/Questionnaire'

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
    }
  ],
});