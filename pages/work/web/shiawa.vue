<template>
  <div class="relative w-full mt-10">
    <div class="w-full lg:w-2/3 mx-auto">
      <div class="h-full absolute top-0 left-0 hidden lg:block">
        <NuxtLink to="/work/web" class="block sticky top-10 left-0 text-6xl font-heading text-accent-orange">&lt;</NuxtLink>
      </div>
      <a href="https://shiawa.vercel.app/" class="block w-5/6 mx-auto" target="_blank">
        <img class="w-full rounded-3xl" src="/work-img/shiawa.jpg" alt="Screenshot of Shiawa website">
      </a>
      <h2 class="mt-10 font-content-heading text-center text-3xl sm:text-3xl md:text-4xl lg:text-7xl">Shiawa</h2>
      <div class="my-10 flex-1 bg-accent-teal h-0.5 mr-3 lg:mr-0"></div>
      <h2 class="font-content-heading">Where Minimalist Meets Traditional</h2>
      <p class="content-paragraph font-content text-xl lg:text-2xl mt-5 my-3 mr-3 lg:mr-0">With seemingly every restaurant around the
      corner adopting a website for their business, the creativity of the website can be lost with traditional copy-and-paste
      templates. Every Asian restaurant's website, for instance, is more of the same: fancy serif fonts, dull colors, and an
      overly-complex page layout.</p>
      <p class="content-paragraph font-content text-xl lg:text-2xl my-5 mr-3 lg:mr-0">Shiawa (幸, meaning "happy"), a fictional
        Japanese restaurant created for a school project, was my attempt to stem away from this stereotype. With a smooth,
        minimalist design featuring sleek border rounding and bright colors that perfectly blend in with the food, Shiawa is
        one of the most unique websites I have made thus far.</p>
      <div class="my-10 flex-1 bg-accent-teal h-0.5 mr-3 lg:mr-0"></div>
      <h2 class="mt-10 font-content-heading text-center text-2xl sm:text-2xl md:text-3xl lg:text-5xl">Features</h2>
      <ul class="content-paragraph font-content list-inside list-disc text-2xl lg:text-3xl my-5 text-center">
        <li><b>Jamstack SPA w/ Nuxt & Vercel</b></li>
        <li class="mt-2">Fully-functional online ordering linked to Stripe Checkout</li>
        <li class="mt-2">Headless CMS-powered menu (dynamically self-building)</li>
        <li class="mt-2">Headless CMS-powered news section</li>
      </ul>
      <div class="my-10 flex-1 bg-accent-teal h-0.5 mr-3 lg:mr-0"></div>
      <h2 class="mt-10 font-content-heading text-center text-2xl sm:text-2xl md:text-3xl lg:text-5xl">Technologies</h2>
      <ul class="content-paragraph font-content list-inside list-disc text-2xl lg:text-3xl my-5 text-center">
        <li><a href="https://nuxtjs.org/" target="_blank">Nuxt.js</a></li>
        <li class="mt-2"><a href="https://graphcms.com/" target="_blank">GraphCMS</a></li>
        <li class="mt-2">HTML5 & CSS3</li>
        <li class="mt-2">JavaScript (Node.js & Babel)</li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  head() {
    return {
      title: "Shiawa | Joey Pereira"
    }
  }
})
</script>

<style scoped>
</style>
