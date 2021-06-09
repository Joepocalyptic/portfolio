<template>
  <div class="w-screen" style="margin-top: 40vh; min-height: 60vh;">
    <h2 id="header" class="absolute flex items-center w-screen flex justify-center top-40 left-0 text-gray-title font-heading text-6xl font-extralight select-none">
      CONTACT
    </h2>
    <div class="w-screen bg-gray-background px-3 md:px-7 lg:px-10 py-5 text-gray-title
                text-xl sm:text-3xl md:text-4xl lg:text-4xl md:px-10 lg:px-20
                flex flex-col lg:flex-row" style="min-height: 60vh;">
      <div class="flex-1 flex flex-col justify-center items-center">
        <a class="block w-2/3 h-20 bg-gray-accent rounded-3xl flex items-center"
           href="mailto:contact@joeypereira.dev">
          <i class="fa fa-envelope text-accent-teal text-5xl lg:text-6xl h-full w-20 flex items-center lg:ml-5 justify-center xl:mr-3" />
          <h4 class="text-lg md:text-xl xl:text-2xl font-content mt-2">contact@joeypereira.dev</h4>
        </a>
        <div class="border-b-2 w-1/3 border-accent-teal my-5"></div>
        <a class="block w-2/3 h-20 bg-gray-accent rounded-3xl flex items-center"
           href="tel:6173837756">
          <i class="fa fa-phone text-accent-teal text-5xl lg:text-6xl h-full w-20 flex items-center lg:ml-5 justify-center xl:mr-3" />
          <h4 class="text-lg md:text-xl xl:text-2xl font-content mt-2">(617) 383-7756</h4>
        </a>
        <div class="border-b-2 w-1/3 border-accent-teal my-5"></div>
        <a class="block w-2/3 h-20 bg-gray-accent rounded-3xl flex items-center"
           href="#">
          <i class="fab fa-discord text-accent-teal text-5xl lg:text-6xl h-full w-20 flex items-center lg:ml-5 justify-center xl:mr-3" />
          <h4 class="text-lg md:text-xl xl:text-2xl font-content mt-2">Joepocalypse#0001</h4>
        </a>
      </div>
      <div class="flex h-0.5 my-16 lg:my-0 lg:mx-10 items-center lg:flex-col lg:h-auto lg:w-0.5">
        <div class="flex-1 bg-accent-orange h-full lg:h-auto lg:w-full">
        </div>
        <span class="mx-5 lg:mx-0 lg:my-5 font-heading text-gray-title select-none">OR</span>
        <div class="flex-1 bg-accent-orange h-full lg:h-auto lg:w-full"></div>
      </div>
      <div class="flex-1 flex justify-center items-center">
        <div class="w-5/6">
          <form class="w-full" method="POST" action="https://api.formcake.com/api/form/2e3f75cb-3956-464c-b897-22fc9e8d2df2/submission">
            <label for="email" class="block text-left text-3xl font-content-heading">Email</label>
            <input class="block text-white text-xl h-16 w-full bg-gray-accent px-7 rounded-3xl font-content mt-2" id="email" type="email" name="email" placeholder="contact@example.com"/>
            <label for="subject" class="block text-left text-3xl font-content-heading mt-4">Subject</label>
            <input class="block text-white text-xl h-16 w-full bg-gray-accent px-7 rounded-3xl font-content mt-2" id="subject" type="text" name="subject" placeholder="Subject..."/>
            <label for="content" class="block text-left text-3xl font-content-heading mt-4">Content</label>
            <textarea class="block text-white text-xl min-h-20 w-full bg-gray-accent px-7 py-7 rounded-3xl font-content mt-2" id="content" name="content" placeholder="Content..."/>
            <button class="block rounded-3xl px-7 py-3 bg-accent-teal font-content-heading mt-6" id="submit" type="submit">Send</button>
          </form>
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
      title: "About Me | Joey Pereira"
    }
  },
  mounted() {
  },
})
</script>

<style>
#submit {
  transition: 0.1s all;
}

#submit:hover {
  transform: scale(1.02);
  transition: 0.1s all;
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

.subnav-underline {
  border: 2px solid transparent;
  position: relative;
}

.subnav li .nuxt-link-exact-active span:after {
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
