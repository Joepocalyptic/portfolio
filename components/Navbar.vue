<template>
  <nav class="absolute top-0 left-0 w-screen h-20 bg-black bg-opacity-30 flex justify-between font-heading text-gray-title px-7 lg:px-10 z-30">
    <div class="nav-left h-full">
      <NuxtLink to="/" class="h-full flex items-center inline">
        <svg xmlns="http://www.w3.org/2000/svg" id="logo" class="mr-5" viewBox="0 0 562.75 416.93">
          <defs><style>.a{fill:#eff6ee;}</style></defs>
          <polygon class="a" points="327.43 333.39 0 333.39 80.28 199.46 98.82 236.61 61.79 298.39 270.61 298.39 138.15 35.51 159.44 0 327.43 333.39"/>
          <polygon class="a" points="235.32 83.54 562.75 83.54 482.47 217.47 463.93 180.32 500.96 118.54 292.14 118.54 424.6 381.42 403.31 416.93 235.32 83.54"/>
        </svg>
        <h1 class="h-full link-underline flex items-center text-2xl whitespace-nowrap">JOEY PEREIRA</h1>
      </NuxtLink>
    </div>
    <div class="nav-right text-2xl items-center hidden md:flex">
      <NuxtLink to="/about" class="link-underline inline-block relative flex items-center mr-2">ABOUT</NuxtLink>
      <NuxtLink to="/work" class="link-underline inline-block relative flex items-center mx-2">WORK</NuxtLink>
      <NuxtLink to="/contact" class="link-underline inline-block relative flex items-center ml-2">CONTACT</NuxtLink>
      <div class="divider mx-4 bg-gray-title"></div>
      <NuxtLink to="/blog" class="link-underline inline-block relative flex items-center">BLOG</NuxtLink>
    </div>
    <div class="nav-right text-2xl items-center flex md:hidden">
      <button class="fas fa-bars fa-2x" @click="expand()"></button>
      <div id="nav-mobile" :class="{'nav-active': expanded}"
           class="opacity-0 absolute top-20 left-0 bg-black bg-opacity-50 w-screen hidden flex-col py-4 items-center px-7 lg:px-10">
        <NuxtLink to="/about" class="inline-block relative flex items-center mt-2">ABOUT</NuxtLink>
        <NuxtLink to="/work" class="inline-block relative flex items-center mt-2">WORK</NuxtLink>
        <NuxtLink to="/contact" class="inline-block relative flex items-center mt-2">CONTACT</NuxtLink>
        <div class="border-none bg-gray-title w-1/6 h-0.5 mt-2"></div>
        <NuxtLink to="/blog" class="inline-block relative flex items-center mt-2">BLOG</NuxtLink>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
  data() {
    return {
      expanded: false,
    }
  },
  watch: {
    $route() {
      this.expanded = false;
    },
  },
  methods: {
    expand() {
      this.expanded = !this.expanded
    }
  }
})
</script>

<style>
#nav-mobile {
  transition: 0.2s all;
}

.nav-active {
  display: flex !important;
  opacity: 100;
  transition: 0.2s all;
}
.divider {
  width: 1px;
  height: 18px;
}

#logo {
  height: 60%;
}

.link-underline {
  border: 2px solid transparent;
  position: relative;
  height: 34px;
}

.nav-left .nuxt-link-exact-active h1:after, .nav-right .nuxt-link-active:after {
  width: 50%;
  left: 25%;
  opacity: 0.5;
}

.link-underline::after {
  width: 0;
  height: 2px;
  display: block;
  background-color: #EFF6EE;
  content: " ";
  opacity: 0;
  position: absolute;
  top: 34px;
  left: 50%;
  transition: 0.2s cubic-bezier(0.215, 0.61, 0.355, 1), width 0.2s cubic-bezier(0.215, 0.61, 0.355, 1);
}

.link-underline:hover::after {
  width: 100% !important;
  height: 2px;
  display: block;
  background-color: #EFF6EE;
  content: " ";
  opacity: 1 !important;
  position: absolute;
  top: 34px;
  left: 0 !important;
}
</style>
