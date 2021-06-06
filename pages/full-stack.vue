<template>
  <div class="flex flex-wrap justify-center w-11/12 lg:w-5/6 mx-auto left-0 top-0 relative">
    <div ref="heading" id="heading" class="text-center font-heading mt-20 pt-11 py-7 text-gray-title
                                           text-2xl sm:text-5xl md:text-6xl lg:text-7xl">
      <NuxtLink to="/" class="w-7 absolute left-0">&lt;</NuxtLink>
      <h2 class=" select-none">FULL-STACK DEVELOPER</h2>
    </div>
    <div ref="content" id="index-subpage-container" class="w-full bg-black bg-opacity-30 px-5 py-5 text-gray-title
                                             text-xl sm:text-3xl md:text-4xl lg:text-4xl md:px-7 lg:px-9 mb-20">
      <div class="flex">
        <div class="flex-1">
          <h2 class="font-content-heading">Frontend</h2>
          <hr class="rule border-none my-4">
          <img src="img/nuxt.png" alt="Nuxt language logo" class="lg:hidden h-60 md:h-80 mx-auto">
          <p class="content-paragraph font-content text-xl lg:text-2xl mt-5 lg:mt-0 my-3">While most of my personal projects
          are native applications, I currently work as a web development freelancer. I'm able to extend my existing design
          knowledge and programming experience to the internet, combined with a strong understanding of SEO, layout design,
          and user interactivity.</p>
          <p class="content-paragraph font-content text-xl lg:text-2xl my-5">Above all, I'm a <a href="https://jamstack.org/" target="_blank">
            Jamstack developer</a>. Jamstack development allows for the creation of blazing-fast static websites while still retaining
            most of the power of a full-stack application. My framework of choice is <a href="https://nuxtjs.org/" target="_blank">Nuxt.js</a>,
            a static site framework built on top of <a href="https://vuejs.org/" target="_blank">Vue.js</a>. I use Nuxt because
            it's exceptionally efficient to develop for, and Vue is very powerful despite being a newer framework.</p>
        </div>
        <img src="img/nuxt.png" alt="Nuxt framework logo" class="hidden lg:block ml-10 h-60">
      </div>
      <div class="flex lg:text-right mt-10">
        <img src="img/ktor.png" alt="Ktor framework logo" class="hidden lg:block h-80 mr-10">
        <div class="flex-1">
          <h2 class="font-content-heading">Backend</h2>
          <hr class="rule border-none my-4">
          <img src="img/ktor.png" alt="Ktor framework logo" class="lg:hidden h-60 md:h-80 mx-auto">
          <p class="content-paragraph font-content text-xl lg:text-2xl mt-5 lg:mt-0 my-3">Stemming from my passion for software development and
            making things work behind-the-scenes, I'm also very familiar with web backend development. I've built many RESTful APIs from scratch,
            have experience with <NuxtLink to="/work/web">OAuth2 authentication</NuxtLink> flows, and have made custom Kotlin-based SSR (server-side rendering)
            implementations with Ktor.</p>
          <p class="content-paragraph font-content text-xl lg:text-2xl my-5">My backend server of choice is <a href="https://ktor.io" target="_blank">Ktor</a>,
            an asynchronous web framework that makes web application and microservice development a breeze and can use Apache as a backend.
            I'm also learning <a href="https://rubyonrails.org/" target="_blank">Ruby on Rails</a>, a server-side web framework that's very
            popular among professional developers.</p>
        </div>
      </div>
      <div class="flex mt-10">
        <div class="flex-1">
          <h2 class="font-content-heading">joeypereira.dev</h2>
          <hr class="rule border-none my-4">
          <img src="img/logo-classic.png" alt="Logo" class="lg:hidden h-60 md:h-80 mx-auto">
          <p class="content-paragraph font-content text-xl lg:text-2xl mt-5 lg:mt-0 my-3">This website, <NuxtLink to="/">joeypereira.dev</NuxtLink>,
            is a great example of my familiarity with web development. It's built from scratch with Nuxt.js in static mode, and employs numerous Jamstack
            concepts. For example, my <NuxtLink to="/blog">blog</NuxtLink> is completely serverless and instead uses
            <a href="https://graphcms.com/" target="_blank">GraphCMS</a> using GraphQL queries and dynamic builds on
            <a href="https://vercel.com" target="_blank">Vercel</a>.</p>
        </div>
        <img src="img/logo-classic.png" alt="Logo" class="hidden lg:block h-80 ml-10">
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  head() {
    return {
      title: "Full-Stack Developer | Joey Pereira"
    }
  },
  mounted() {
  },
})
</script>

<style>
.content-paragraph a {
  color: #FF6B35;
  text-decoration: underline;
}
.rule {
  border-bottom: 2px solid #FF6B35;
}
#index-subpage-container {
  border-radius: 1.5rem;
  transform: translateY(-20px);
  transition: 0.2s all ease;
}

#heading a {
  transform: translateY(-20px);
  transition: 0.2s all ease;
}

#heading h2 {
  transform: translateY(-20px);
  transition: 0.2s all ease;
}

.anim-top-visible {
  opacity: 1 !important;
  transform: translateY(0) !important;
}
</style>
