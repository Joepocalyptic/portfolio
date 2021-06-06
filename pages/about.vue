<template>
  <div class="w-screen" style="margin-top: 40vh; min-height: 60vh;">
    <h2 id="header" class="absolute flex items-center w-screen flex justify-center top-40 left-0 text-gray-title font-heading text-6xl font-extralight select-none">
      ABOUT ME
    </h2>
    <div class="w-screen bg-gray-background px-3 md:px-7 lg:px-10 py-5 text-gray-title
                text-xl sm:text-3xl md:text-4xl lg:text-4xl md:px-10 lg:px-20" style="min-height: 60vh;">
      <div class="flex w-full">
        <div class="flex-1 mr-3 lg:mr-0">
          <h2 class="font-content-heading">Hello there!</h2>
          <hr class="rule border-none my-4">
          <img src="/img/logo-classic.png" alt="My Logo" class="lg:hidden float-right ml-7 h-40 md:h-80 mx-auto">
          <p class="content-paragraph font-content text-xl lg:text-2xl mt-5 lg:mt-0 my-3">I'm Joseph Pereira, but you can just
          call me Joey. I'm primarily a software developer, but I also work on Jamstack applications, full-stack projects, and online
            content in my freetime.</p>
          <p class="content-paragraph font-content text-xl lg:text-2xl my-5">I have 8 years of experience with Java, but I use Kotlin
          on the JVM for most of my new projects. I'm also very well-versed in Nuxt.js (Vue.js) for web development. Take a look at my
          <NuxtLink to="/work">portfolio</NuxtLink> for some examples of my work!</p>
          <p class="content-paragraph font-content text-xl lg:text-2xl my-5">Looking for a freelance desktop software developer? Need
          a website for your growing business? Want me to join your team for an open-source project? <NuxtLink to="/contact">Contact me</NuxtLink>
            and I'd be delighted to work with you.</p>
        </div>
        <img src="/img/logo-classic.png" alt="My Logo" class="hidden lg:block h-80 ml-10">
      </div>
      <h2 class="font-content-heading text-4xl md:text-6xl mt-16 mb-3">Skills</h2>
      <nav class="flex justify-center lg:justify-start mr-3 lg:mr-0">
        <ul class="subnav flex bg-gray-background py-2">
          <li class="flex py-2">
            <NuxtLink to="/about/desktop" class="mx-2 text-center sm:text-left">
              <i class="fas fa-desktop mt-1 sm:mr-2 text-center sm:text-left"></i><span class="subnav-underline">Desktop</span>
            </NuxtLink>
          </li>
          <li class="flex py-2 mx-7">
            <NuxtLink to="/about/web" class="mx-2 text-center sm:text-left">
              <i class="fas fa-wifi mt-1 sm:mr-2 text-center sm:text-left"></i><span class="subnav-underline">Web</span>
            </NuxtLink>
          </li>
          <li class="flex py-2">
            <NuxtLink to="/about/design" class="mx-2 text-center sm:text-left">
              <i class="fas fa-paint-brush mt-1 sm:mr-2 text-center sm:text-left"></i><span class="subnav-underline">Design</span>
            </NuxtLink>
          </li>
        </ul>
      </nav>
      <hr class="rule border-none my-4 mr-3 lg:mr-0">
      <NuxtChild class="mb-10"/>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  head() {
    return {
      title: "About Me | Joey Pereira"
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

.subnav li .nuxt-link-exact-active span:after {
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
