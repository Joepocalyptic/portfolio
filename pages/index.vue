<template>
  <div class="absolute h-screen w-screen top-0 flex items-center justify-center">
    <div ref="indexContainer" id="index-container" class="text-2xl sm:text-5xl md:text-6xl lg:text-7xl text-gray-title font-heading font-extralight select-none">
      <NuxtLink to="/software" class="block cursor-pointer px-8 flex items-center">
        <span class="mr-5">&gt; </span>
        <h2 class="inline">SOFTWARE DEVELOPER</h2>
      </NuxtLink>
      <NuxtLink to="/full-stack" class="block cursor-pointer y-10 my-10 md:my-5 lg:my-3 xl:my-0 px-8 flex items-center">
        <span class="mr-5">&gt; </span>
        <h2 class="inline">FULL-STACK DEVELOPER</h2>
      </NuxtLink>
      <NuxtLink to="/content" class="block cursor-pointer px-8 flex items-center">
        <span class="mr-5">&gt; </span>
        <h2 class="inline">CONTENT CREATOR</h2>
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  head() {
    return {
      title: "Home | Joey Pereira"
    }
  },
  mounted() {
    let duration: number = 120; // ms
    let indexContainer = this.$refs.indexContainer as Element
    Array.from(indexContainer.children).forEach((child: any, index: number): void => {
      child.firstChild!.style.opacity = 0
      child.lastChild!.style.opacity = 0
      setTimeout(function() {
        child.firstChild!.classList.add("anim-visible")
      }, duration*index)
      setTimeout(function() {
        child.lastChild!.classList.add("anim-visible")
      }, duration*index+(duration*child.parentNode.children.length*0.75))
    })
  }
})
</script>

<style>
#index-container a {
  transition: 0.2s all;
  border-radius: 1.5rem;
}

#index-container a:hover {
  transition: 0.2s all;
}

#index-container a:first-child:hover {
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 1.5rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
}

/* This is absolute jank and I love it */
#index-container a:not(:first-child):not(:last-child):hover {
  background-color: rgba(0, 0, 0, 0.3);
  padding-top: 1rem;
  padding-bottom: 1rem;
}

#index-container a:last-child:hover {
  background-color: rgba(0, 0, 0, 0.3);
  padding-top: 1rem;
  padding-bottom: 1rem;
}

#index-container a span {
  transform: translateX(-20px);
  transition: 0.2s all ease;
}

#index-container a h2 {
  transform: translateX(-20px);
  transition: 0.2s all ease;
}

.anim-visible {
  opacity: 1 !important;
  transform: translateX(0) !important;
}
</style>
