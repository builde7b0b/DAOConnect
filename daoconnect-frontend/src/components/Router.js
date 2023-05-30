import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import RegistrationForm from './components/RegistrationForm.vue'
import ComposeIntegration from './components/ComposeIntegration.vue'
import Profile from './Profile.vue' // assuming you have a Profile.vue component

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: HelloWorld
    },
    {
      path: '/register',
      name: 'register',
      component: RegistrationForm
    },
    {
      path: '/compose',
      name: 'compose',
      component: ComposeIntegration
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    }
  ]
})
