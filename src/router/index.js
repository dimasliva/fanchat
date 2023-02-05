import { createRouter, createWebHistory } from 'vue-router'
import Launch from '@/views/Launch.vue'
import SignUp from '@/views/Auth/SignUp.vue'
import SignIn from '@/views/Auth/SignIn.vue'
import Home from '@/views/Profile/Home.vue'
import Explore from '@/views/Profile/Explore.vue'
import Message from '@/views/Profile/Message.vue'
import Profile from '@/views/Profile/Profile.vue'
import Settings from '@/views/Profile/Settings.vue'
import ProfileEdit from '@/views/Profile/ProfileEdit.vue'
import Earning from '@/views/Profile/Earning.vue'
import Creator from '@/views/Profile/Creator.vue'
import Stripe from '@/views/Profile/Stripe.vue'

const routes = [
  {
    path: '/',
    name: 'Launch',
    component: Launch
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/signin',
    name: 'SignIn',
    component: SignIn
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/explore',
    name: 'Explore',
    component: Explore
  },
  {
    path: '/message',
    name: 'Message',
    component: Message
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings
  },
  {
    path: '/profile/edit',
    name: 'ProfileEdit',
    component: ProfileEdit
  },
  {
    path: '/earn',
    name: 'Earning',
    component: Earning
  },
  {
    path: '/creator',
    name: 'Creator',
    component: Creator
  },
  {
    path: '/stripe',
    name: 'Stripe',
    component: Stripe
  },
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
