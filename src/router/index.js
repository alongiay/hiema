import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/Layout'
const Home = () => import('@/views/Home')
const Video = () => import('@/views/Video')
const Question = () => import('@/views/Question')
const My = () => import('@/views/My')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: 'home', component: Home
      },
      {
        path: 'video', component: Video
      },
      {
        path: 'question', component: Question
      },
      {
        path: 'my', component: My
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
