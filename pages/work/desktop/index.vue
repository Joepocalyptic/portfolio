<template>
  <div class="w-full">
    <div class="w-full flex flex-wrap justify-center mt-10">
      <NuxtLink to="/work/desktop/strut"
                class="relative bg-gray-accent project-block rounded-3xl my-3 lg:my-0 mx-3 mr-6 lg:mx-0 bg-cover bg-center bg-no-repeat flex items-center justify-center">
        WIP
        <div class="absolute bottom-0 left-0 w-full h-20 overflow-hidden rounded-b-3xl bg-gray-accent
                    text-3xl flex items-center justify-center font-content-heading">Strut</div>
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  head() {
    return {
      title: "My Work | Joey Pereira"
    }
  }
})
</script>

<style>
.project-block {
  width: 100%;
  height: 20rem;
}

@media only screen and (min-width: 1024px) {
  .project-block {
    width: 30%;
    height: 20rem;
  }
}
</style>
