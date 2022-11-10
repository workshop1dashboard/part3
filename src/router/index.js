import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Quiz from '../views/InitQuiz.vue'

const routes = [
  {
    path: '/',
    name: 'LoginItem',
    component: Login
  },
  {
    path: '/init-quiz',
    name: 'Quiz',
    component: Quiz
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
