<template>
  <div class="w-full">
    <div class="w-full hidden lg:flex flex-col items-center">
      <nav class="w-full flex justify-center mt-4">
        <ul class="w-full flex justify-center">
          <li><button ref="nav-0" style="background-image: url('/img/vue.png');" class="mx-6 w-40 h-40 bg-contain bg-no-repeat bg-center outline-none" @click="expand(0)"></button></li>
          <li><button ref="nav-1" style="background-image: url('/img/jamstack.png');" class="mx-6 w-40 h-40 bg-contain bg-no-repeat bg-center outline-none" @click="expand(1)"></button></li>
          <li><button ref="nav-2" style="background-image: url('/img/html5.png');" class="mx-6 w-40 h-40 bg-contain bg-no-repeat bg-center outline-none" @click="expand(2)"></button></li>
          <li><button ref="nav-3" style="background-image: url('/img/nodejs.png');" class="mx-6 w-40 h-40 bg-contain bg-no-repeat bg-center outline-none" @click="expand(3)"></button></li>
        </ul>
      </nav>
      <div ref="container" class="bg-gray-accent rounded-3xl w-full xl:w-3/4 mt-10 z-10 min-h-80 relative py-5">
        <div ref="arrow" class="absolute -top-6 bg-gray-accent h-12 w-12 -z-1 transform rotate-45 transition-all"></div>
        <div ref="content-0" class="w-full text-center">
          <h4 class="font-content-heading text-4xl mb-6">Vue</h4>
          <div class="flex justify-center items-center">
            <div class="flex-1">
              <p class="font-content text-4xl">Frameworks</p>
              <ul class="content-paragraph font-content list-inside text-xl">
                <li><a href="https://nuxtjs.org/" target="_blank">Nuxt</a></li>
                <li><a href="https://vuex.vuejs.org/" target="_blank">Vuex</a></li>
              </ul>
            </div>
            <div class="h-40 bg-accent-teal w-1 rounded-3xl"></div>
            <div class="mx-20">
              <p class="font-content text-6xl">3 months</p>
              <p class="font-content text-2xl">of experience</p>
            </div>
            <div class="h-40 bg-accent-teal w-1 rounded-3xl"></div>
            <div class="flex-1">
              <h4 class="font-content text-4xl">Proficiency</h4>
              <p class="font-content text-2xl">Proficient</p>
            </div>
          </div>
          <p class="content-paragraph"><NuxtLink to="/work/web">See my work</NuxtLink></p>
        </div>
        <div ref="content-1" style="display: none;" class="w-full text-center">
          <h4 class="font-content-heading text-4xl mb-6">Jamstack</h4>
          <div class="flex justify-center items-center">
            <div class="flex-1">
              <p class="font-content text-4xl">Services</p>
              <ul class="content-paragraph font-content list-inside text-xl">
                <li><a href="https://prismic.io/" target="_blank">Prismic</a></li>
                <li><a href="https://graphcms.com/" target="_blank">GraphCMS</a></li>
                <li><a href="https://www.formcake.com/" target="_blank">Formcake</a></li>
              </ul>
            </div>
            <div class="h-40 bg-accent-teal w-1 rounded-3xl"></div>
            <div class="mx-20">
              <p class="font-content text-6xl">3 months</p>
              <p class="font-content text-2xl">of experience</p>
            </div>
            <div class="h-40 bg-accent-teal w-1 rounded-3xl"></div>
            <div class="flex-1">
              <h4 class="font-content text-4xl">Proficiency</h4>
              <p class="font-content text-2xl">Proficient</p>
            </div>
          </div>
          <p class="content-paragraph"><NuxtLink to="/work/web">See my work</NuxtLink></p>
        </div>
        <div ref="content-2" style="display: none;" class="w-full text-center">
          <h4 class="font-content-heading text-4xl mb-6">HTML5 &amp; CSS3</h4>
          <div class="flex justify-center items-center">
            <div class="flex-1">
              <p class="font-content text-4xl">Frameworks</p>
              <ul class="content-paragraph font-content list-inside text-xl">
                <li><a href="https://sass-lang.com/" target="_blank">Sass/SCSS</a></li>
                <li><a href="https://pugjs.org/api/getting-started.html" target="_blank">Pug</a></li>
              </ul>
            </div>
            <div class="h-40 bg-accent-teal w-1 rounded-3xl"></div>
            <div class="mx-20">
              <p class="font-content text-6xl">1 year</p>
              <p class="font-content text-2xl">of experience</p>
            </div>
            <div class="h-40 bg-accent-teal w-1 rounded-3xl"></div>
            <div class="flex-1">
              <h4 class="font-content text-4xl">Proficiency</h4>
              <p class="font-content text-2xl">Proficient</p>
            </div>
          </div>
          <p class="content-paragraph"><NuxtLink to="/work/web">See my work</NuxtLink></p>
        </div>
        <div ref="content-3" style="display: none;" class="w-full text-center">
          <h4 class="font-content-heading text-4xl mb-6">Node.js</h4>
          <div class="flex justify-center items-center">
            <div class="flex-1">
              <p class="font-content text-4xl">Frameworks</p>
              <ul class="content-paragraph font-content list-inside text-xl">
                <li><a href="https://cli.vuejs.org/" target="_blank">Vue CLI</a></li>
                <li><a href="https://expressjs.com/" target="_blank">Express</a></li>
                <li><a href="https://discord.js.org/#/" target="_blank">discord.js</a></li>
              </ul>
            </div>
            <div class="h-40 bg-accent-teal w-1 rounded-3xl"></div>
            <div class="mx-20">
              <p class="font-content text-6xl">3 years</p>
              <p class="font-content text-2xl">of experience</p>
            </div>
            <div class="h-40 bg-accent-teal w-1 rounded-3xl"></div>
            <div class="flex-1">
              <h4 class="font-content text-4xl">Proficiency</h4>
              <p class="font-content text-2xl">Expert</p>
            </div>
          </div>
          <p class="content-paragraph"><NuxtLink to="/work/web">See my work</NuxtLink></p>
        </div>
      </div>
    </div>
    <ul class="w-full flex flex-wrap lg:hidden">
      <li class="full inline-flex flex-wrap min-h-20">
        <div class="mr-5 flex justify-center w-20 h-20 text-center"><img src="/img/vue.png" alt="Vue Logo" class="w-full object-contain"></div>
        <div class="flex-1">
          <h1 class="text-2xl">Vue</h1>
          <p class="my-2 font-content text-lg mr-3">3 months of experience</p>
          <p class="my-2 font-content text-lg mr-3">Framework proficiencies:</p>
          <ul class="content-paragraph font-content list-inside list-disc text-lg mr-3">
            <li><a href="https://nuxtjs.org/" target="_blank">Nuxt</a></li>
            <li><a href="https://vuex.vuejs.org/" target="_blank">Vuex</a></li>
          </ul>
        </div>
      </li>
      <li class="w-5/6 mx-auto my-8"><hr class="secondary-rule border-none"></li>
      <li class="full inline-flex flex-wrap min-h-20">
        <div class="mr-5 flex justify-center w-20 h-20 text-center"><img src="/img/jamstack.png" alt="Jamstack Logo" class="w-full object-contain"></div>
        <div class="flex-1">
          <h1 class="text-2xl">Jamstack</h1>
          <p class="my-2 font-content text-lg mr-3">3 months of experience</p>
          <p class="my-2 font-content text-lg mr-3">Service proficiencies:</p>
          <ul class="content-paragraph font-content list-inside list-disc text-lg mr-3">
            <li><a href="https://prismic.io/" target="_blank">Prismic</a></li>
            <li><a href="https://graphcms.com/" target="_blank">GraphCMS</a></li>
            <li><a href="https://www.formcake.com/" target="_blank">Formcake</a></li>
          </ul>
        </div>
      </li>
      <li class="w-5/6 mx-auto my-8"><hr class="secondary-rule border-none"></li>
      <li class="full inline-flex flex-wrap min-h-20">
        <div class="mr-5 flex justify-center w-20 h-20 text-center"><img src="/img/html5.png" alt="HTML5 Logo" class="w-full object-contain"></div>
        <div class="flex-1">
          <h1 class="text-2xl">HTML5 &amp; CSS3</h1>
          <p class="my-2 font-content text-lg mr-3">1 year of experience</p>
          <p class="my-2 font-content text-lg mr-3">Framework proficiencies:</p>
          <ul class="content-paragraph font-content list-inside list-disc text-lg mr-3">
            <li><a href="https://sass-lang.com/" target="_blank">Sass/SCSS</a></li>
            <li><a href="https://pugjs.org/api/getting-started.html" target="_blank">Pug</a></li>
          </ul>
        </div>
      </li>
      <li class="w-5/6 mx-auto my-8"><hr class="secondary-rule border-none"></li>
      <li class="full inline-flex flex-wrap min-h-20">
        <div class="mr-5 flex justify-center w-20 h-20 text-center"><img src="/img/nodejs.png" alt="Node.js Logo" class="w-full object-contain"></div>
        <div class="flex-1">
          <h1 class="text-2xl">Node.js</h1>
          <p class="my-2 font-content text-lg mr-3">3 years of experience</p>
          <p class="my-2 font-content text-lg mr-3">Framework proficiencies:</p>
          <ul class="content-paragraph font-content list-inside list-disc text-lg mr-3">
            <li><a href="https://cli.vuejs.org/" target="_blank">Vue CLI</a></li>
            <li><a href="https://expressjs.com/" target="_blank">Express</a></li>
            <li><a href="https://discord.js.org/#/" target="_blank">discord.js</a></li>
          </ul>
        </div>
      </li>
    </ul>
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
  beforeDestroy() {
    if(process.browser) window.removeEventListener("resize", this.updateArrow)
  },
  mounted() {
    this.expand(0)
    this.updateArrow()
    window.addEventListener("resize", this.updateArrow)
  },
  data() {
    return {
      index: 0
    }
  },
  methods: {
    expand(index: number) {
      if(this.index == index) return
      this.index = index
      this.updateArrow()
      for(let i = 1; i < this.$refs.container.children.length; i++) {
        console.log(this.$refs[`content-${i-1}`])
        this.$refs[`content-${i-1}`].style.display = (i-1 == index) ? "block" : "none"
      }
    },
    updateArrow() {
      const arrow = this.$refs.arrow
      if(arrow.offsetParent == null) return
      const button = this.$refs[`nav-${this.index}`]
      /* Explanation:
       * The first part of this expression finds the number of pixels from the left side of the screen for both the
       * button that was pressed and the arrow's parent (offsetParent). By finding the difference between these two values,
       * we can put this in terms of the arrow's parent and therefore move the arrow to the starting pixel of the button.
       *
       * Because we want the arrow to be centered, we simply need to add half of the button's width in pixels. Finally,
       * because we rotated the arrow by 45 degrees, we need to subtract half of its width in pixels (24px) for the vertex
       * to touch the center of the button.
       */
      arrow.style.left = `${(button.offsetLeft-arrow.offsetParent.offsetLeft)+(button.clientWidth/2)-24}px`
    }
  }
})
</script>

<style>
.-z-1 {
  z-index: -1;
}
.full {
  flex-basis: 100%;
}

.secondary-rule {
  border-bottom: 2px solid #00796f;
}
</style>
