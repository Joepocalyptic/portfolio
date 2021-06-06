<template>
  <div class="flex flex-wrap justify-center w-11/12 lg:w-5/6 mx-auto left-0 top-0 relative">
    <div ref="heading" id="heading" class="text-center font-heading mt-20 pt-11 py-7 text-gray-title
                                           text-2xl sm:text-5xl md:text-6xl lg:text-7xl">
      <NuxtLink to="/" class="w-7 absolute left-0">&lt;</NuxtLink>
      <h2 class=" select-none">CONTENT CREATOR</h2>
    </div>
    <div ref="content" id="index-subpage-container" class="w-full bg-black bg-opacity-30 px-5 py-5 text-gray-title
                                             text-xl sm:text-3xl md:text-4xl lg:text-4xl md:px-7 lg:px-9 mb-20">
      <div class="flex">
        <div class="flex-1">
          <h2 class="font-content-heading">Video Production</h2>
          <hr class="rule border-none my-4">
          <img src="img/after-effects.png" alt="Adobe After Effects logo" class="lg:hidden h-60 md:h-80 mx-auto">
          <p class="content-paragraph font-content text-xl lg:text-2xl mt-5 lg:mt-0 my-3">Outside of programming, one of my biggest hobbies
          is video production, with a focus on editing and creating computer-generated designs. By extending my skills in abstract/modern
          graphic design to video, I can create intriguing effects and seamlessly mix them into existing footage.</p>
          <p class="content-paragraph font-content text-xl lg:text-2xl my-5">Using these skills, I've been able to establish personal
            <a href="https://joepocalyp.se/youtube" target="_blank">YouTube</a> and <a href="https://joepocalyp.se/twitch" target="_blank">Twitch</a>
            channels that bring these skills to their fullest using industry-standard tools.</p>
          <p class="content-paragraph font-content text-xl lg:text-2xl my-5">Here are some of the tools I'm familiar with for video creation:</p>
          <ul class="content-paragraph font-content list-inside list-disc text-xl lg:text-2xl my-5">
            <li><a href="https://www.adobe.com/products/aftereffects.html" target="_blank">Adobe After Effects</a></li>
            <li><a href="https://www.adobe.com/products/premiere.html" target="_blank">Adobe Premiere Pro</a></li>
            <li><a href="https://www.adobe.com/products/audition.html" target="_blank">Adobe Audition</a></li>
          </ul>
        </div>
        <img src="img/after-effects.png" alt="Adobe After Effects logo" class="hidden lg:block ml-10 h-60">
      </div>
      <div class="flex lg:text-right mt-10">
        <img src="img/photoshop.png" alt="Adobe Photoshop logo" class="hidden lg:block h-60 mr-10">
        <div class="flex-1">
          <h2 class="font-content-heading">Graphic Design</h2>
          <hr class="rule border-none my-4">
          <img src="img/photoshop.png" alt="Adobe Photoshop logo" class="lg:hidden h-60 md:h-80 mx-auto">
          <p class="content-paragraph font-content text-xl lg:text-2xl mt-5 lg:mt-0 my-3">Tying into my experience with UI design,
          I'm also proficient in Photoshop, Illustrator, and XD for wireframe and mockup design. This allows me to efficiently
          produce high-quality application and website designs through planning.</p>
          <p class="content-paragraph font-content text-xl lg:text-2xl my-5">In addition to mockups, I also use Photoshop and GIMP
          to produce graphical designs for my online content. One example of this is my logo located on the top of this page, which
          reflects my abstract online branding.</p>
          <p class="content-paragraph font-content text-xl lg:text-2xl my-5">Here are some of the graphic design tools I use:</p>
          <ul class="content-paragraph rtl font-content list-inside list-disc text-xl lg:text-2xl my-5">
            <li><a href="https://www.adobe.com/products/photoshop.html" target="_blank">Adobe Photoshop</a></li>
            <li><a href="https://www.adobe.com/products/xd.html" target="_blank">Adobe XD</a></li>
            <li><a href="https://www.gimp.org/" target="_blank">GIMP</a></li>
            <li><a href="https://www.adobe.com/products/illustrator.html" target="_blank">Adobe Illustrator</a></li>
          </ul>
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
      title: "Content Creator | Joey Pereira"
    }
  },
  mounted() {
  },
})
</script>

<style>
.rtl {
  direction: rtl;
}
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
