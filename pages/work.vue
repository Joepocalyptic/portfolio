<template>
  <div class="w-screen" style="margin-top: 40vh; min-height: 60vh;">
    <h2 id="header" class="absolute flex items-center w-screen flex justify-center top-40 left-0 text-gray-title font-heading text-6xl font-extralight select-none">
      MY WORK
    </h2>
    <div class="w-screen bg-gray-background px-3 md:px-7 lg:px-10 py-5 text-gray-title
                text-xl sm:text-3xl md:text-4xl lg:text-4xl md:px-10 lg:px-20" style="min-height: 60vh;">
      <nav class="flex justify-center lg:justify-start ">
        <ul class="subnav flex bg-gray-background py-2">
          <li class="flex py-2">
            <NuxtLink to="/work/desktop" class="mx-2 text-center sm:text-left">
              <i class="fas fa-desktop mt-1 sm:mr-2 text-center sm:text-left"></i><span class="subnav-underline">Desktop</span>
            </NuxtLink>
          </li>
          <li class="flex py-2 mx-7">
            <NuxtLink to="/work/web" class="mx-2 text-center sm:text-left">
              <i class="fas fa-wifi mt-1 sm:mr-2 text-center sm:text-left"></i><span class="subnav-underline">Web</span>
            </NuxtLink>
          </li>
          <li class="flex py-2">
            <NuxtLink to="/work/design" class="mx-2 text-center sm:text-left">
              <i class="fas fa-paint-brush mt-1 sm:mr-2 text-center sm:text-left"></i><span class="subnav-underline">Design</span>
            </NuxtLink>
          </li>
        </ul>
      </nav>
      <hr class="rule border-none my-4 ">
      <NuxtChild />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  head() {
    return {
      title: "My Work | Joey Pereira"
    }
  },
  mounted() {
  },
})
</script>

<style>
#header {
  top: 20vh;
}

@media only screen and (max-height: 400px) {
  #header {
    top: 27vh;
    font-size: 1.5rem;
  }
}
.content-paragraph a {
  color: #FF6B35;
  text-decoration: underline;
}

.rule {
  border-bottom: 2px solid #FF6B35;
}

.subnav-underline {
  border: 2px solid transparent;
  position: relative;
}

.subnav li .nuxt-link-active span:after {
  width: 50%;
  left: 25%;
  opacity: 0.5;
}

.subnav-underline::after {
  width: 0;
  height: 2px;
  display: block;
  background-color: #EFF6EE;
  content: " ";
  opacity: 0;
  position: absolute;
  top: 1.5em;
  left: 50%;
  transition: 0.2s cubic-bezier(0.215, 0.61, 0.355, 1), width 0.2s cubic-bezier(0.215, 0.61, 0.355, 1);
}

.subnav-underline:hover::after {
  width: 100% !important;
  height: 2px;
  display: block;
  background-color: #EFF6EE;
  content: " ";
  opacity: 1 !important;
  position: absolute;
  top: 1.5em;
  left: 0 !important;
}
</style>
