<template>
  <div class="w-screen" style="margin-top: 40vh; min-height: 60vh;">
    <h2 id="header" class="absolute flex items-center w-screen flex justify-center top-40 left-0 text-gray-title font-heading text-6xl font-extralight select-none">
      BLOG
    </h2>
    <div class="w-screen bg-gray-background px-3 md:px-7 lg:px-10 py-5 text-gray-title
                text-xl sm:text-3xl md:text-4xl lg:text-4xl md:px-10 lg:px-20" style="min-height: 60vh;">
      <h2 class="font-content-heading">Recent Posts</h2>
      <hr class="rule border-none my-4 mb-10">
      <div class="flex items-center flex-col w-full mb-10">
        <div v-for="page in graphcms.pages" class="w-11/12 flex flex-col items-center">
          <NuxtLink :to="`/blog/${page.slug}`" class="block w-full py-4 px-5 lg:py-10 lg:px-8 min-h-40 bg-gray-accent rounded-3xl">
            <div class="flex justify-between">
              <div>
                <h2 class="font-content-heading text-3xl lg:text-4xl">{{page.title}}</h2>
                <h3 class="font-content-heading text-xl lg:text-2xl mt-2">{{page.subtitle}}</h3>
              </div>
              <div class="text-right">
                <h4>{{page.publishedAt}}</h4>
              </div>
            </div>
            <div class="my-5 bg-accent-teal h-0.5 mr-3 lg:mr-0 w-1/3"></div>
            <p class="font-content mt-6 text-lg lg:text-xl">{{page.excerpt}}</p>
          </NuxtLink>
          <div v-if="graphcms.pages.indexOf(page) !== graphcms.pages.length-1" class="my-10 bg-accent-orange h-0.5 mr-3 lg:mr-0 w-1/2"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="js">
import Vue from 'vue'
import { gql } from 'graphql-request'

function parseISOString(s) {
  const b = s.split(/\D+/)
  let date = new Date(Date.UTC(b[0], --b[1], b[2], b[3], b[4], b[5], b[6]));
  return `${(date.getMonth() + 1)}/${date.getDate()}/${date.getFullYear()}`
}

export default Vue.extend({
  head() {
    return {
      title: "My Work | Joey Pereira"
    }
  },
  async asyncData({ $graphcms }) {
    const graphcms = await $graphcms.request(
      gql`
        {
          pages {
            title
            subtitle
            excerpt
            publishedAt
            slug
          }
        }
      `
    )

    graphcms.pages.forEach(page => {
      page.publishedAt = parseISOString(page.publishedAt)
    })
    return {graphcms}
  }
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

.subnav li .nuxt-link-active span:after {
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
