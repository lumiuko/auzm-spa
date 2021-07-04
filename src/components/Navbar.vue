<template>
  <nav class="nav">
    <input type="checkbox" id="menu-toggle" v-model="navOpened" />
    <label class="menu-btn" for="menu-toggle">
      <span></span>
    </label>
    <div class="nav-logo">
      <router-link to="/">
        <img :src="require('@/assets/images/logo.png')" alt="" />
        <div class="nav-brand">{{ navText }}</div>
      </router-link>
    </div>
    <div class="nav-links" :class="{ expanded: navOpened }">
      <router-link to="/projects" @click.native="hideMenu()">Projects</router-link>
      <router-link to="/members" @click.native="hideMenu()">Members</router-link>
      <router-link to="/about" @click.native="hideMenu()">About</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      navOpened: false,
      navText: 'AUZM STUDIO'
    };
  },
  created() {
    window.addEventListener('resize', this.refreshNavSize);
    this.refreshNavSize();
  },
  destroyed() {
    window.removeEventListener('resize', this.refreshNavSize);
  },
  methods: {
    refreshNavSize() {
      if (window.innerWidth >= 1200) this.navText = 'AUZM STUDIO';
      else this.navText = 'AUZM';
    },
    hideMenu() {
      if (!this.navOpened) return;
      setTimeout(() => {
        this.navOpened = false;
      }, 100);
    }
  }
};
</script>

<style>
.nav {
  display: flex;
  position: fixed;
  align-items: center;
  width: 100%;
  height: 75px;
  z-index: 1;
  border-bottom: 1px solid #ffffff1c;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
}
.nav-logo,
.nav-links {
  display: flex;
  flex-basis: 33%;
}
.nav-logo {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-weight: bold;
  height: 100%;
}
.nav-logo img {
  width: 55px;
  height: auto;
  cursor: pointer;
}
.nav-brand {
  margin-left: 15px;
  font-size: 18px;
}
.nav-links {
  justify-content: space-between;
}
.nav a {
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;
  line-height: 46px;
  padding: 0 5px;
  color: #fff;
  font-size: 17px;
  font-weight: bold;
  transition: background 0.3s, color 0.3s;
}
.nav .nav-links a::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #fff;
  visibility: hidden;
  transform: scaleX(0);
  transition: all 0.3s ease-in-out 0s;
}
.nav .nav-links a:hover::before,
.nav .nav-links a.active::before {
  visibility: visible;
  transform: scaleX(1);
}
#menu-toggle {
  height: 50px;
}
#menu-toggle:checked ~ .menu-btn > span {
  transform: rotate(45deg);
}
#menu-toggle:checked ~ .menu-btn > span::before {
  top: 0;
  transform: rotate(0);
}
#menu-toggle:checked ~ .menu-btn > span::after {
  top: 0;
  transform: rotate(90deg);
}
#menu-toggle:checked ~ .menu__box {
  visibility: visible;
  left: 0;
}
.menu-btn {
  align-items: flex-start;
  position: fixed;
  top: 38px;
  right: 30px;
  width: 26px;
  cursor: pointer;
  z-index: 1;
}
.menu-btn > span,
.menu-btn > span::before,
.menu-btn > span::after {
  display: block;
  position: absolute;
  width: 100%;
  height: 2px;
  background-color: #ffffff;
  transition-duration: 0.25s;
}
.menu-btn > span::before {
  content: '';
  top: -8px;
}
.menu-btn > span::after {
  content: '';
  top: 8px;
}
@media (min-width: 768px) {
  #menu-toggle,
  .menu-btn {
    display: none;
  }
  .nav-links {
    height: 100%;
  }
}
@media (max-width: 768px) {
  .nav {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    height: auto;
  }
  .nav-links {
    max-height: 0;
    flex-direction: column;
    width: 100%;
    overflow: hidden;
    transition: max-height 0.3s ease;
  }
  .nav-links.expanded {
    max-height: 135px;
  }
  .nav-logo {
    margin: 10px 20px;
  }
  .nav a {
    margin: 0 0%;
    border: none;
    display: flex;
    justify-content: center;
  }
  .nav .nav-links a:hover::before,
  .nav .nav-links a.active::before {
    visibility: hidden;
  }
  .menu-btn {
    display: flex;
  }
  #menu-toggle {
    display: none;
    visibility: hidden;
  }
}
</style>
