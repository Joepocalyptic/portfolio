<template>
  <div class="relative w-full mt-10">
    <div class="w-full lg:w-2/3 mx-auto">
      <div class="h-full absolute top-0 left-0 hidden lg:block">
        <NuxtLink to="/work/design" class="block sticky top-10 left-0 text-6xl font-heading text-accent-orange">&lt;</NuxtLink>
      </div>
      <a href="https://www.youtube.com/watch?v=n3ug7IL4JTY" target="_blank" class="block w-2/3 mx-auto">
        <img class="w-full rounded-3xl" src="/work-img/outro.jpg" alt="YouTube Outro">
      </a>
      <h2 class="mt-10 font-content-heading text-center text-3xl sm:text-3xl md:text-4xl lg:text-7xl">YouTube Outro</h2>
      <div class="my-10 flex-1 bg-accent-teal h-0.5 mr-3 lg:mr-0"></div>
      <h2 class="font-content-heading">Intense & Active</h2>
      <p class="content-paragraph font-content text-xl lg:text-2xl mt-5 my-3 mr-3 lg:mr-0">In an attempt to learn Adobe After Effects,
      I decided that my first project should be a unique outro for my <a href="https://joepocalyp.se/youtube">YouTube channel</a>.</p>
      <p class="content-paragraph font-content text-xl lg:text-2xl my-5 mr-3 lg:mr-0">This outro perfectly represented my old branding,
      with strong colors and an abstract design that feels graphically intense but is still smooth rather than overwhelming.</p>
      <div class="my-10 flex-1 bg-accent-teal h-0.5 mr-3 lg:mr-0"></div>
      <h2 class="mt-10 font-content-heading text-center text-2xl sm:text-2xl md:text-3xl lg:text-5xl">Tools Used</h2>
      <ul class="content-paragraph font-content list-inside list-disc text-2xl lg:text-3xl my-5 text-center">
        <li>Adobe After Effects</li>
        <li>Adobe Photoshop</li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  head() {
    return {
      title: "Outro | Joey Pereira"
    }
  }
})
</script>

<style scoped>
</style>
