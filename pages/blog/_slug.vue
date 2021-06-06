<template>
  <div class="w-screen" style="margin-top: 40vh; min-height: 60vh;">
    <h2 id="header" class="absolute flex items-center text-center w-screen flex justify-center top-40 left-0 text-gray-title font-heading text-6xl font-extralight select-none">
      {{graphcms.page.title.toUpperCase()}}
    </h2>
    <div class="w-screen bg-gray-background px-3 md:px-7 lg:px-10 py-5 text-gray-title
                text-xl sm:text-3xl md:text-4xl lg:text-4xl md:px-10 lg:px-20 relative" style="min-height: 60vh;">
                <div class="h-5/6 absolute top-3 lg:left-7 hidden lg:block">
                  <NuxtLink to="/blog" class="block sticky top-10 left-0 text-6xl font-heading text-accent-orange">&lt;</NuxtLink>
                </div>
      <div class="flex justify-between">
        <h2 class="font-content-heading">{{graphcms.page.subtitle}}</h2>
        <h3>{{graphcms.page.publishedAt}}</h3>
      </div>
      <hr class="rule border-none mt-4 mb-10">
      <div id="blog-content" class="content-paragraph font-content text-lg lg:text-2xl" v-html="graphcms.page.content.html" />
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { gql } from 'graphql-request';

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
  async asyncData({ $graphcms, params, error}) {
    const { slug } = params;
    const graphcms = await $graphcms.request(
      gql`
        query BlogPost($slug: String) {
          page(where: {slug: $slug}) {
            title
            subtitle
            excerpt
            publishedAt
            content {
              html
            }
          }
        }
      `,
      {
        slug,
      }
    )
    if(graphcms.page === null) {
      error({statusCode: 404})
      return
    }
    graphcms.page.publishedAt = parseISOString(graphcms.page.publishedAt)
    return {graphcms}
  },
})
</script>

<style>
#blog-content > *:not(:first-child) {
  margin-top: 1rem;
}

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
</style>
