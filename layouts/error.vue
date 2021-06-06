<template>
  <main class="absolute top-0 h-screen w-screen">
    <div ref="errorText" id="error-text" class="absolute select-none h-screen w-screen text-2xl sm:text-5xl md:text-6xl lg:text-7xl font-heading text-gray-title top-0 flex items-center justify-center">
      {{error.statusCode === 404 ? "PAGE NOT FOUND" : "SERVER ERROR" }}
    </div>
  </main>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
  head() {
    return {
      title: "Error | Joey Pereira"
    }
  },
  layout: 'index',
  props: ["error"],
})
</script>

<style>
</style>
