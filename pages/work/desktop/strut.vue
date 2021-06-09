<template>
  <div class="relative w-full mt-10">
    <div class="w-full lg:w-2/3 mx-auto">
      <div class="h-full absolute top-0 left-0 hidden lg:block">
        <NuxtLink to="/work/desktop" class="block sticky top-10 left-0 text-6xl font-heading text-accent-orange">&lt;</NuxtLink>
      </div>
      <h2 class="mt-10 font-content-heading text-center text-3xl sm:text-3xl md:text-4xl lg:text-7xl"></h2>
      <!-- <div class="my-10 flex-1 bg-accent-teal h-0.5 "></div> -->
      <h2 class="font-content-heading">Forts Modding IDE</h2>
      <p class="content-paragraph font-content text-xl lg:text-2xl mt-5 my-3 ">Strut is a work-in-progress modding IDE
      for Forts built in Kotlin using TornadoFX as a UI framework. It will provide a visual interpretation of the Lua code that powers
      Forts mods, and will compile this information directly into specialized Lua files. The project is currently under heavy development,
      and is being rewritten in JetBrains Compose.</p>
      <div class="my-10 flex-1 bg-accent-teal h-0.5 "></div>
      <h2 class="mt-10 font-content-heading text-center text-2xl sm:text-2xl md:text-3xl lg:text-5xl">Features</h2>
      <ul class="content-paragraph font-content list-inside list-disc text-2xl lg:text-3xl my-5 text-center">
        <li>Visual-to-Lua transpiler for Forts</li>
        <li class="mt-2">Cross-platform for Windows, macOS, and Linux</li>
        <li class="mt-2">Comfortable, beginner-friendly UI inspired by modern IDEs</li>
      </ul>
      <div class="my-10 flex-1 bg-accent-teal h-0.5 "></div>
      <h2 class="mt-10 font-content-heading text-center text-2xl sm:text-2xl md:text-3xl lg:text-5xl">Technologies</h2>
      <ul class="content-paragraph font-content list-inside list-disc text-2xl lg:text-3xl my-5 text-center">
        <li class="mt-2">Kotlin</li>
        <li class="mt-2"><a href="https://tornadofx.io" target="_blank">TornadoFX</a></li>
        <li class="mt-2"><a href="https://www.jetbrains.com/lp/compose/" target="_blank">JetBrains Compose</a></li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  head() {
    return {
      title: "Strut | Joey Pereira"
    }
  }
})
</script>

<style scoped>
</style>
