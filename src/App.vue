<template>
  <div id="app">
    <video src="https://files.catbox.moe/txorm8.mp4" autoplay muted loop></video>
    <div id="page-overlay">
      <Navbar />
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
export default {
  name: 'App',
  components: {
    Navbar
  }
};
</script>

<style>
@import url('assets/global.css');
@media (min-width: 769px) {
  .nav .nav-links a.router-link-active::before {
    visibility: visible;
    transform: scaleX(1);
  }
}
.fade-enter-active {
  animation: fadeIn 0.2s ease-in;
}
.fade-leave-active {
  animation: fadeOut 0.1s ease-in;
}
.active {
  height: 75px !important;
  transition: height 0.4s ease;
}
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes slide {
  from {
    height: 0;
    opacity: 0;
  }
  to {
    height: 130px;
    opacity: 1;
  }
}
</style>
