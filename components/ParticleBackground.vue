<template>
  <Particles
    id="tsparticles"
    :particlesInit="particlesInit"
    :particlesLoaded="particlesLoaded"
    url="/particlesjs-config.json"
  />
</template>

<style>
#tsparticles {
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  height: 100%;
  z-index: -20;
}
</style>
