import { defineAppSetup } from '@slidev/types'
import sharedSetup from '../../setup/main'
import ThankYouSlide from '../components/structure/ThankYouSlide.vue'
import TitleSlide from '../components/structure/TitleSlide.vue'

export default defineAppSetup((context) => {
  sharedSetup(context)
  const { app } = context
  app.component('ThankYouSlide', ThankYouSlide)
  app.component('TitleSlide', TitleSlide)
})
