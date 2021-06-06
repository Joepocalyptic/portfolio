<template>
  <div class="absolute h-screen w-screen top-0 flex items-center justify-center">
    <div>
      <h2 class="text-2xl sm:text-5xl md:text-6xl lg:text-7xl text-gray-title font-heading font-extralight select-none text-center">SUCCESS</h2>
      <h3 class="text-xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-title font-content-heading mt-5 font-extralight select-none text-center">Your form has been received.</h3>
    </div>
  </div>
</template>

<script lang="js">
import Vue from 'vue'

export default Vue.extend({
  head() {
    return {
      title: "Success | Joey Pereira"
    }
  },
  mounted() {
    setTimeout(function() {
      this.$nuxt.$options.router.push("/")
    }.bind(this), 3000)
  }
})
</script>
