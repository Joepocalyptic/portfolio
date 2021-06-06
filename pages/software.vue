<template>
  <div class="flex flex-wrap justify-center w-5/6 mx-auto left-0 top-0 relative">
    <div ref="heading" id="heading" class="text-center font-heading mt-20 pt-11 py-7 text-gray-title
                                           text-2xl sm:text-5xl md:text-6xl lg:text-7xl">
      <NuxtLink to="/" class="w-7 absolute left-0">&lt;</NuxtLink>
      <h2 class="select-none">SOFTWARE DEVELOPER</h2>
    </div>
    <div ref="content" id="index-subpage-container" class="w-full bg-black bg-opacity-30 px-5 py-5 text-gray-title
                                             text-xl sm:text-3xl md:text-4xl lg:text-4xl md:px-7 lg:px-9 mb-20">
      <div class="flex">
        <div class="flex-1">
          <h2 class="font-content-heading">8 Years of JVM Experience</h2>
          <hr class="rule border-none my-4">
          <img src="img/java.png" alt="Java language logo" class="lg:hidden h-60 md:h-80 mx-auto">
          <p class="content-paragraph font-content text-xl lg:text-2xl mt-5 lg:mt-0 my-3">When I first started programming in 2013, the first
            (and only) language that I ever used was Java. I've always been fond of the JVM, and as such have transitioned to
            <a href="https://kotlinlang.org" target="_blank">Kotlin</a> for most of my projects.</p>
          <p class="content-paragraph font-content text-xl lg:text-2xl my-5">While the JVM is an extremely versatile ecosystem, I
            primarily specialize in desktop software development. I'm very familiar with design and UX concepts on the desktop, which
            allows me to develop functional, attractive applications on Windows, Mac, and Linux without the design feeling "out-of-place."</p>
          <p class="content-paragraph font-content text-xl lg:text-2xl my-5">Here are some of the Java and Kotlin frameworks
            I'm familiar with:</p>
          <ul class="content-paragraph font-content list-inside list-disc text-xl lg:text-2xl my-5">
            <li><a href="https://tornadofx.io/" target="_blank">TornadoFX</a></li>
            <li><a href="https://openjfx.io/" target="_blank">JavaFX</a> (OpenJFX)</li>
            <li><a href="https://www.jetbrains.com/lp/compose/" target="_blank">JetBrains Compose</a></li>
            <li><a href="https://spring.io/" target="_blank">Spring</a></li>
          </ul>
        </div>
        <img src="img/java.png" alt="Java language logo" class="hidden lg:block h-80">
      </div>
      <div class="flex lg:text-right mt-10">
        <img src="img/flutter.png" alt="Flutter framework logo" class="hidden lg:block h-80 mr-10">
        <div class="flex-1">
          <h2 class="font-content-heading">Dart & Flutter</h2>
          <hr class="rule border-none my-4">
          <img src="img/flutter.png" alt="Flutter framework logo" class="lg:hidden h-60 md:h-80 mx-auto">
          <p class="content-paragraph font-content text-xl lg:text-2xl mt-5 lg:mt-0 my-3">Despite my focus on the JVM,
            I've never been afraid of trying out new languages and frameworks. The latest framework I've been experimenting
            with is <a href="https://flutter.dev/" target="_blank">Flutter</a>, a cross-platform framework based on
            <a href="https://dart.dev/" target="_blank">Dart</a>.</p>
          <p class="content-paragraph font-content text-xl lg:text-2xl my-5">I don't have any Flutter projects to showcase at
            the moment, but the framework has been receiving a lot of my attention lately. Though I mostly focus on backend
            development, using a language focused on UI developers is quite a breath of fresh air.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  head() {
    return {
      title: "Software Developer | Joey Pereira"
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
