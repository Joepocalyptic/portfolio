<template>
  <div class="relative w-full mt-10">
    <div class="w-full lg:w-2/3 mx-auto">
      <div class="h-full absolute top-0 left-0 hidden lg:block">
        <NuxtLink to="/work/web" class="block sticky top-10 left-0 text-6xl font-heading text-accent-orange">&lt;</NuxtLink>
      </div>
      <a href="https://dirtyfilthycu.lt/" class="block w-5/6 mx-auto" target="_blank">
        <img class="w-full rounded-3xl" src="/work-img/dfc.jpg" alt="Screenshot of DFC website">
      </a>
      <h2 class="mt-10 font-content-heading text-center text-3xl sm:text-3xl md:text-4xl lg:text-7xl">DirtyFilthyCult</h2>
      <div class="my-10 flex-1 bg-accent-teal h-0.5 "></div>
      <h2 class="font-content-heading">Gaming Community</h2>
      <p class="content-paragraph font-content text-xl lg:text-2xl mt-5 my-3 ">As the DFC - a gaming community
        centered around <a class="https://store.steampowered.com/app/410900/Forts">Forts</a> - started increasing the
        complexity of their Discord bot, it soon became evident that a web application would be perfect for the community.</p>
      <p class="content-paragraph font-content text-xl lg:text-2xl my-5 ">I built a <b>full-stack application</b>
      with a Vue frontend and Kotlin backend using Ktor, which seamlessly integrates with Discord's OAuth2 implementation.
      The website is currently being rebuilt using Jamstack principles and Nuxt.js, at which point it will migrate its backend
      to an Express.js server.</p>
      <div class="my-10 flex-1 bg-accent-teal h-0.5 "></div>
      <h2 class="mt-10 font-content-heading text-center text-2xl sm:text-2xl md:text-3xl lg:text-5xl">Features</h2>
      <ul class="content-paragraph font-content list-inside list-disc text-2xl lg:text-3xl my-5 text-center">
        <li>Linked to Discord Bot with <a href="https://github.com/DV8FromTheWorld/JDA" target="_blank">JDA</a> (Kotlin)</li>
        <li class="mt-2">Backend integrates with Discord for OAuth2 authentication</li>
        <li class="mt-2">Headless CMS-powered news section</li>
        <li class="mt-2">Privacy/legal pages & social media redirects</li>
      </ul>
      <div class="my-10 flex-1 bg-accent-teal h-0.5 "></div>
      <h2 class="mt-10 font-content-heading text-center text-2xl sm:text-2xl md:text-3xl lg:text-5xl">Technologies</h2>
      <ul class="content-paragraph font-content list-inside list-disc text-2xl lg:text-3xl my-5 text-center">
        <li><a href="https://vuejs.org/" target="_blank">Vue.js</a></li>
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
      title: "DFC | Joey Pereira"
    }
  }
})
</script>

<style scoped>
</style>
