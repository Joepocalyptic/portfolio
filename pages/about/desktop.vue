<template>
  <div class="w-full">
    <div class="w-full hidden lg:flex flex-col items-center">
      <nav class="w-full flex justify-center mt-4">
        <ul class="w-full flex justify-center">
          <li><button ref="nav-0" style="background-image: url('/img/kotlin.png');" class="mx-6 w-40 h-40 bg-contain bg-no-repeat bg-center outline-none" @click="expand(0)"></button></li>
          <li><button ref="nav-1" style="background-image: url('/img/nodejs.png');" class="mx-6 w-40 h-40 bg-contain bg-no-repeat bg-center outline-none" @click="expand(1)"></button></li>
          <li><button ref="nav-2" style="background-image: url('/img/c-sharp.png');" class="mx-6 w-40 h-40 bg-contain bg-no-repeat bg-center outline-none" @click="expand(2)"></button></li>
          <li><button ref="nav-3" style="background-image: url('/img/dart.png');" class="mx-6 w-40 h-40 bg-contain bg-no-repeat bg-center outline-none" @click="expand(3)"></button></li>
        </ul>
      </nav>
      <div ref="container" class="bg-gray-accent rounded-3xl w-full xl:w-3/4 z-10 mt-10 min-h-80 relative py-5">
        <div ref="arrow" class="absolute -top-6 bg-gray-accent h-12 w-12 -z-1 transform rotate-45 transition-all"></div>
        <div ref="content-0" class="w-full text-center">
          <h4 class="font-content-heading text-4xl mb-6">Kotlin & Java</h4>
          <div class="flex justify-center items-center">
            <div class="flex-1">
              <p class="font-content text-4xl">Frameworks</p>
              <ul class="content-paragraph font-content list-inside text-xl">
                <li><a href="https://tornadofx.io/" target="_blank">TornadoFX</a></li>
                <li><a href="https://openjfx.io/" target="_blank">JavaFX</a> (OpenJFX)</li>
                <li><a href="https://www.jetbrains.com/lp/compose/" target="_blank">JetBrains Compose</a></li>
                <li><a href="https://spring.io/" target="_blank">Spring</a></li>
              </ul>
            </div>
            <div class="h-40 bg-accent-teal w-1 rounded-3xl"></div>
            <div class="mx-20">
              <p class="font-content text-6xl">8 years</p>
              <p class="font-content text-2xl">of experience</p>
            </div>
            <div class="h-40 bg-accent-teal w-1 rounded-3xl"></div>
            <div class="flex-1">
              <h4 class="font-content text-4xl">Proficiency</h4>
              <p class="font-content text-2xl">Mastery</p>
            </div>
          </div>
          <p class="content-paragraph"><NuxtLink to="/work/desktop">See my work</NuxtLink></p>
        </div>
        <div ref="content-1" style="display: none;" class="w-full text-center">
          <h4 class="font-content-heading text-4xl mb-6">Node.js</h4>
          <div class="flex justify-center items-center">
            <div class="flex-1">
              <p class="font-content text-4xl">Frameworks</p>
              <ul class="content-paragraph font-content list-inside text-xl">
                <li><a href="https://expressjs.org/" target="_blank">Express</a></li>
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
              <p class="font-content text-2xl">Proficient</p>
            </div>
          </div>
          <p class="content-paragraph"><NuxtLink to="/work/desktop">See my work</NuxtLink></p>
        </div>
        <div ref="content-2" style="display: none;" class="w-full text-center">
          <h4 class="font-content-heading text-4xl mb-6">C#</h4>
          <div class="flex justify-center items-center">
            <div class="flex-1">
              <p class="font-content text-4xl">Frameworks</p>
              <ul class="content-paragraph font-content list-inside text-xl">
                <li><a href="https://dotnet.microsoft.com/" target="_blank">.NET</a></li>
                <li><a href="https://unity.com/" target="_blank">Unity</a></li>
              </ul>
            </div>
            <div class="h-40 bg-accent-teal w-1 rounded-3xl"></div>
            <div class="mx-20">
              <p class="font-content text-6xl">2 years</p>
              <p class="font-content text-2xl">of experience</p>
            </div>
            <div class="h-40 bg-accent-teal w-1 rounded-3xl"></div>
            <div class="flex-1">
              <h4 class="font-content text-4xl">Proficiency</h4>
              <p class="font-content text-2xl">Familiar</p>
            </div>
          </div>
          <p class="content-paragraph"><NuxtLink to="/work/desktop">See my work</NuxtLink></p>
        </div>
        <div ref="content-3" style="display: none;" class="w-full text-center">
          <h4 class="font-content-heading text-4xl mb-6">Dart</h4>
          <div class="flex justify-center items-center">
            <div class="flex-1">
              <p class="font-content text-4xl">Frameworks</p>
              <ul class="content-paragraph font-content list-inside text-xl">
                <li><a href="https://flutter.dev/" target="_blank">Flutter</a></li>
                <li><a href="https://material.io/develop/flutter" target="_blank">Material Components</a></li>
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
              <p class="font-content text-2xl">Beginner</p>
            </div>
          </div>
          <p class="content-paragraph"><NuxtLink to="/work/desktop">See my work</NuxtLink></p>
        </div>
      </div>
    </div>
    <ul class="w-full flex flex-wrap lg:hidden">
      <li class="full inline-flex flex-wrap min-h-20">
        <div class="mr-5 flex justify-center w-20 h-20 text-center"><img src="/img/kotlin.png" alt="Kotlin Logo" class="w-full object-contain"></div>
        <div class="flex-1">
          <h1 class="text-2xl">Java &amp; Kotlin</h1>
          <p class="my-2 font-content text-lg mr-3">8 years of experience</p>
          <p class="my-2 font-content text-lg mr-3">Framework proficiencies:</p>
          <ul class="content-paragraph font-content list-inside list-disc text-lg mr-3">
            <li><a href="https://tornadofx.io/" target="_blank">TornadoFX</a></li>
            <li><a href="https://openjfx.io/" target="_blank">JavaFX</a> (OpenJFX)</li>
            <li><a href="https://www.jetbrains.com/lp/compose/" target="_blank">JetBrains Compose</a></li>
            <li><a href="https://spring.io/" target="_blank">Spring</a></li>
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
            <li><a href="https://tornadofx.io/" target="_blank">Electron</a></li>
          </ul>
        </div>
      </li>
      <li class="w-5/6 mx-auto my-8"><hr class="secondary-rule border-none"></li>
      <li class="full inline-flex flex-wrap min-h-20">
        <div class="mr-5 flex justify-center w-20 h-20 text-center"><img src="/img/c-sharp.png" alt="C# Logo" class="w-full object-contain"></div>
        <div class="flex-1">
          <h1 class="text-2xl">C#</h1>
          <p class="my-2 font-content text-lg mr-3">2 years of experience</p>
          <p class="my-2 font-content text-lg mr-3">Proficient understanding of language concepts and general-purpose usage</p>
          <p class="my-2 font-content text-lg mr-3">Framework proficiencies:</p>
          <ul class="content-paragraph font-content list-inside list-disc text-lg mr-3">
            <li><a href="https://dotnet.microsoft.com" target="_blank">.NET</a></li>
            <li><a href="https://unity.com" target="_blank">Unity</a></li>
          </ul>
        </div>
      </li>
      <li class="w-5/6 mx-auto my-8"><hr class="secondary-rule border-none"></li>
      <li class="full inline-flex flex-wrap min-h-20">
        <div class="mr-5 flex justify-center w-20 h-20 text-center"><img src="/img/dart.png" alt="Dart Logo" class="w-full object-contain"></div>
        <div class="flex-1">
          <h1 class="text-2xl">Dart</h1>
          <p class="my-2 font-content text-lg mr-3">1 year of experience</p>
          <p class="my-2 font-content text-lg mr-3">Beginner's understanding of language concepts and general-purpose usage</p>
          <p class="my-2 font-content text-lg mr-3">Framework proficiencies:</p>
          <ul class="content-paragraph font-content list-inside list-disc text-lg mr-3">
            <li><a href="https://flutter.dev/" target="_blank">Flutter</a></li>
            <li><a href="https://material.io/develop/flutter" target="_blank">Material Components</a></li>
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
