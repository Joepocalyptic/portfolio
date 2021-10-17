<template>
  <div class="relative w-full mt-10">
    <div class="w-full lg:w-2/3 mx-auto">
      <div class="h-full absolute top-0 left-0 hidden lg:block">
        <NuxtLink to="/work/web" class="block sticky top-10 left-0 text-6xl font-heading text-accent-orange">&lt;</NuxtLink>
      </div>
      <a href="https://tmsainc.org/" class="block w-5/6 mx-auto" target="_blank">
        <img class="w-full rounded-3xl" src="/work-img/montessori.jpg" alt="Screenshot of TMSA website">
      </a>
      <h2 class="mt-10 font-content-heading text-center text-3xl sm:text-3xl md:text-4xl lg:text-7xl">The Montessori School of the Angels</h2>
      <div class="my-10 flex-1 bg-accent-teal h-0.5 "></div>
      <h2 class="font-content-heading">Formal & Efficient</h2>
      <p class="content-paragraph font-content text-xl lg:text-2xl mt-5 my-3">The administration of The Montessori School of the Angels, a
        nonprofit Montessori school in Fall River, Massachusetts, contacted me to create a website for their school from the ground-up. Their
        existing site was built in XHTML and hadn't been updated with modern technologies, so I decided to start from scratch and add a CMS integration.
        The result was a clean, modern website that neatly organizes the plethora of content that needs to be provided to faculty, parents, and students.</p>
      <p class="content-paragraph font-content text-xl lg:text-2xl my-5">The custom design choices for this project had to be taken very seriously; due to the
        target demographic of the school, I had to make the website simple to navigate and comfortable to read without sacrificing style. To accomplish this,
        I grouped the site's content in bordered paragraphs to aid legibility and used it as a recurring design element. The site is also fully responsive
        and easy to navigate on mobile devices.</p>
      <p class="content-paragraph font-content text-xl lg:text-2xl my-5">As for the website's functionality, I incorporated a Google Maps widget which allows
        visitors to easily locate the address of the school. I also added a categorized calendar using vuecal which is both easy for TMSA's administration to update
        and visitors to navigate.</p>
      <div class="my-10 flex-1 bg-accent-teal h-0.5 "></div>
      <h2 class="mt-10 font-content-heading text-center text-2xl sm:text-2xl md:text-3xl lg:text-5xl">Features</h2>
      <ul class="content-paragraph font-content list-inside list-disc text-2xl lg:text-3xl my-5 text-center">
        <li><b>Static Jamstack site w/ Nuxt & Vercel</b></li>
        <li class="mt-2">Powerful, extensive CMS integration with Prismic</li>
        <li class="mt-2">Dynamic navigation</li>
        <li class="mt-2">Custom, attentive design</li>
        <li class="mt-2">Fast, free flat-file hosting with dynamic rebuilds</li>
      </ul>
      <div class="my-10 flex-1 bg-accent-teal h-0.5 "></div>
      <h2 class="mt-10 font-content-heading text-center text-2xl sm:text-2xl md:text-3xl lg:text-5xl">Technologies</h2>
      <ul class="content-paragraph font-content list-inside list-disc text-2xl lg:text-3xl my-5 text-center">
        <li><a href="https://nuxtjs.org/" target="_blank">Nuxt.js</a></li>
        <li class="mt-2"><a href="https://prismic.io/" target="_blank">Prismic</a></li>
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
