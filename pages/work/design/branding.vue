<template>
  <div class="relative w-full mt-10">
    <div class="w-full lg:w-2/3 mx-auto">
      <div class="h-full absolute top-0 left-0 hidden lg:block">
        <NuxtLink to="/work/design" class="block sticky top-10 left-0 text-6xl font-heading text-accent-orange">&lt;</NuxtLink>
      </div>
      <NuxtLink to="/" class="block w-2/3 md:w-1/2 mx-auto">
        <img class="w-full rounded-3xl" src="/img/logo-classic.png" alt="My Logo">
      </NuxtLink>
      <h2 class="mt-10 font-content-heading text-center text-3xl sm:text-3xl md:text-4xl lg:text-7xl">My Branding</h2>
      <div class="my-10 flex-1 bg-accent-teal h-0.5 "></div>
      <h2 class="font-content-heading">Sharp & Clean</h2>
      <p class="content-paragraph font-content text-xl lg:text-2xl mt-5 my-3 ">After using the same logo for 5 years,
      I finally decided that it was time to rebrand. The result was this logo, consisting of two extended equilateral triangles
      representing my initials: "JP."</p>
      <p class="content-paragraph font-content text-xl lg:text-2xl my-5 ">By extending the open sides of the triangles,
      the logo is given an abstract, clean sense of movement. The design was intended to stand out, but not look too flashy as to
      distract from my website. This minimalistic design accomplishes exactly that, and represents my first foray into logo design.</p>
      <div class="my-10 flex-1 bg-accent-teal h-0.5 "></div>
      <h2 class="mt-10 font-content-heading text-center text-2xl sm:text-2xl md:text-3xl lg:text-5xl">Tools Used</h2>
      <ul class="content-paragraph font-content list-inside list-disc text-2xl lg:text-3xl my-5 text-center">
        <li>Adobe Illustrator</li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  head() {
    return {
      title: "Branding | Joey Pereira"
    }
  }
})
</script>

<style scoped>
</style>
