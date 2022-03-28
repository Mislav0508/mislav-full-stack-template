<template>
  <v-app style="overflow-y: scroll;overflow:hidden;" id="app">

    <Navbar 
    v-if="!$nuxt.$route.path.includes('login') 
    && !$nuxt.$route.path.includes('dashboard')"    
    :position="position" 
    @sidebar-navbar="sidebarHandler" 
    :sidebarComponent="sidebar"/>

    <Sidebar 
    :showSidebar="sidebar"
    @closeSidebar="sidebarHandler"/>

    <Nuxt />

    <Footer 
    v-if="!$nuxt.$route.path.includes('login') 
    && !$nuxt.$route.path.includes('dashboard')"/>

    <div v-if="position > 20" class="up-arrow-container" @click="scrollToTop">
      <i class="up-arrow "></i>      
    </div>
  </v-app>
</template>

<script>
import en from "../locales/en.json"
export default {
  head () {
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true })
    return {
      meta: [ // Each object in this array is its own meta tag
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial scale=1' },
        { hid: 'keywords', name: 'keywords', content: 'Novi Vinodolski, Croatia, Hrvatska, Kroatien, Adriatic sea, Renata, Adriatisches Meer, coast, vacation, Urlaub' },
        ...i18nHead.meta
      ]
    }
  },
  data () {
    return {
      position: 0,
      sidebar: false
    }
  },
  beforeMount  () {
    window.addEventListener('scroll', this.checkPosition);
    console.log(en);
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.checkPosition);
  },
  methods: {
    sidebarHandler(val) {
      this.sidebar = val
      if (!val) {
        document.body.style.position = '';
        document.body.style.top = '';
      } else {
        document.body.style.position = 'fixed';
        document.body.style.top = `-${window.scrollY}px`;
      }
    },
    checkPosition() {
      this.position = window.pageYOffset
    },
    scrollToTop() {
      window.scroll({
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
      });
    }
  },
  watch: {
    sidebar (val) {
      this.sidebar = val
    }
  }
}
</script>
<style lang="scss">
#app {
  font-family: $heading-font-family ;
}
p{
  font-size: clamp(13px, 0.5vw, 18px);
  font-weight: 400;
  line-height: 1.4rem;
  letter-spacing: 1.5px;
}
h1 {
  font-size: clamp(36px, 5vw, 100px);
  font-weight: 200;

}
h2{
  font-size: clamp(28px, 5vw, 42px);
  line-height: 1.2em;
  color: var(--secondary);
  font-weight: 400;
}
@media screen and (min-width: 2500px) {
  p {
    font-size: 20px;
    line-height: 1.6rem;
  }
}
/* ARROW UP */
.up-arrow-container{
  bottom: 1.5vh; 
  right: 1vw;
  position: fixed;
  padding: 1rem 1.7rem 1.4rem 1rem;  
  cursor: pointer;
  transition: all 0.3s linear;
  background: rgba(0, 0, 0, 0.4);
  z-index: 9999;
}
.up-arrow{
  border: solid var(--primary);
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 0.3rem;
  position: fixed;
  cursor: pointer;
  z-index: 5;
  transition: all 0.3s linear;
  transform: rotate(-135deg);
}
</style>
