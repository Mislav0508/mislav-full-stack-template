<template >

  <div >
    <v-container :class="[ position > 0 || route !== 3 || $nuxt.$route.name.includes('privacy') ? 'navbar-scroll d-flex align-center' : 'navbar d-flex align-center']" :style=" position <= 0 ? 'box-shadow: none;' : ''">

    <v-row class="d-flex justify-md-space-around align-center">    

      <v-col cols="8" xl="3" lg="2" md="2" sm="1" class="d-flex justify-sm-end align-center">

        <NuxtLink :to="localePath('/')" style="text-decoration:none;border-bottom:none;">
        <div class="d-sm-none d-md-flex flex-md-column justify-center align-center text-center pt-1" >
          <div class="d-flex justify-center align-center">
            <font-awesome-icon v-for="i in 4" :key="i" icon="star" :class="[ position > 0 || route !== 3 ? 'star_scroll' : 'star' ]"/>
          </div>
          <h2 :class="[ position > 0 || route !== 3 ? 'logo_title_scroll' : 'logo_title' ]">Apartments</h2>
          <h3 :class="[ position > 0 || route !== 3 ? 'logo_subtitle_scroll' : 'logo_subtitle' ]">Renata</h3>
        </div>
        </NuxtLink>

      </v-col>  

      <v-col class="d-none d-sm-flex justify-space-between align-center" cols="1" xl="3" lg="4" md="5" sm="8">
        
        <!-- <NuxtLink :to="localePath('/')" :class="[ position > 0 || route !== 3 ? 'link-scroll' : 'link' ]" >
        <div v-html="rawLogo" :class="position > 0 || route !== '/index' ? 'logoSecondary' : 'logoPrimary'"/>          
        </NuxtLink> -->

        
        
        <NuxtLink :to="localePath('/')" :class="[ position > 0 || route !== 3 ? 'link-scroll' : 'link' ]" :id="this.$route.name.includes('index') && position > 0 ? 'active-link-secondary' : this.$route.name.includes('index') ? 'active-link-primary' : ''">
        {{ $t('navbar.home') }}</NuxtLink>

        <v-menu open-on-hover offset-y bottom >
          <template v-slot:activator="{ on, attrs }" >
            <div class="d-flex align-center">
              <p :class="[ position > 0 || route !== 3 ? 'link-scroll ma-0' : 'link ma-0' ]" 
                v-bind="attrs"
                v-on="on"
                style="cursor:pointer;"
              >
                {{ $t('navbar.our_rooms') }}
              </p>
              <i v-bind="attrs"
                v-on="on" :class="[ position > 0 || route !== 3 ? 'down-arrow-scroll' : 'down-arrow' ]"></i>      
            </div>
            
          </template>

          <v-list dense>
            <v-list-item dense nuxt>
              <NuxtLink :to="localePath('/rooms')" :class="[ position > 0 || route !== 3 ? 'link-scroll' : 'link' ]" :id="$nuxt.$route.name.includes('rooms_') ? 'active-link-secondary' : ''">
              <v-list-item-title class="link-scroll" style="font-size:12px; line-height:1rem;">{{ $t('navbar.rooms.rooms') }}</v-list-item-title>
              </NuxtLink>
            </v-list-item>
            <v-list-item
              v-for="(room, i) in rooms"
              :key="i"
            >
            <NuxtLink :to="localePath(`/rooms/${room.replace(/\s+/g, '')}Room`)" class="link-scroll" :id="$nuxt.$route.fullPath.includes(room) ? 'active-link-secondary' : ''">
              <v-list-item-title class="link-scroll" style="font-size:12px; line-height:1rem;">{{ $t(`navbar.rooms.${room}`) }}</v-list-item-title>
            </NuxtLink>
            </v-list-item>
          </v-list>

        </v-menu>

        <!-- <NuxtLink to="/rooms" :class="[ position > 0 || route !== 3 ? 'link-scroll' : 'link' ]">Our Rooms</NuxtLink> -->

        <NuxtLink :to="localePath('/about')" :class="[ position > 0 || route !== 3 ? 'link-scroll' : 'link' ]" :id="this.$route.name.includes('about') ? 'active-link-secondary': ''">{{ $t('navbar.about') }}</NuxtLink>
        <NuxtLink :to="localePath('/gallery')" :class="[ position > 0 || route !== 3 ? 'link-scroll' : 'link' ]" :id="this.$route.name.includes('gallery') ? 'active-link-secondary': ''">{{ $t('navbar.gallery') }}</NuxtLink>
        <NuxtLink :to="localePath('/explore')" :class="[ position > 0 || route !== 3 ? 'link-scroll' : 'link' ]" :id="this.$route.name.includes('explore') ? 'active-link-secondary': ''">{{ $t('navbar.explore') }}</NuxtLink>
        <NuxtLink :to="localePath('/contact')" :class="[ position > 0 || route !== 3 ? 'link-scroll' : 'link' ]" :id="this.$route.name.includes('contact') ? 'active-link-secondary': ''">{{ $t('navbar.contact') }}</NuxtLink>
      </v-col>

      <v-col cols="2" xl="2" lg="4" md="1" sm="1"></v-col>

      <v-col cols="1" xl="3" lg="1" md="1" sm="2" class="d-flex align-center justify-center">
        <div role="button" 
        :class="sidebar ? 'menu-btn open ' : 'menu-btn'" 
        @click="showSidebar">
          <div :class="position > 0 || route !== 3 ? 'menu-btn__burger_dark' : 'menu-btn__burger'" ></div>
        </div>
        <Picker class="d-none d-sm-flex"/>
      </v-col>

      </v-row>

      <Sidebar />
      <div :class="sidebar ? 'overlay' : 'd-none'" @click="showSidebar"></div>

    </v-container>
    <div>
      
    </div>
  </div>
</template>

<script>
import Sidebar from "./Sidebar.vue"
import rawLogo from "~/static/images/logo.svg?raw";
import Picker from "../components/LanguagePicker.vue"
export default {
  components: {
    Sidebar,
    Picker
  },
  props: { 
    position: Number,
    sidebarComponent: Boolean
  },
  data() {
    return {
      sidebar: false,
      rawLogo,
      route: 3,
      rooms: [ 'Superior', 'Deluxe', 'Signature', 'Luxury' ]
    }
  },
  methods: {
    showSidebar() {
      this.sidebar = !this.sidebar
      this.$emit("sidebar-navbar", this.sidebar)
    }
  },
  watch: {
    $route (to, from) {
      // console.log($nuxt.$route);
      this.route = $nuxt.$route.path.length
      this.sidebar = false
      this.$emit("sidebar-navbar", this.sidebar)
    },
    sidebarComponent(val){
      this.sidebar = val
    },
  },
  mounted() {
    this.route = $nuxt.$route.path.length
  }
}
</script>

<style lang="scss" scoped>
@media only screen and (max-width: 600px) {
  h2{
    font-size: 1px;
  }
  h3 {
    font-size: 1px;
  }
}
.navbar{
  z-index: 9999;
  overflow: hidden;
  position: fixed;
  top: 0;
  min-width: 100vw;
  max-width: 100vw;
  max-height: 74px;
  min-height: 74px;
  transition: all .5s ease; 
  font-family: $heading-font-family;
}
.navbar-scroll{
  z-index: 9999;
  overflow: hidden;
  position: fixed;
  top: 0;
  min-width: 100vw;
  max-height: 74px;
  min-height: 74px;
  background: var(--primary);
  color: var(--secondary);
  transition: all .5s ease;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}
::v-deep .v-application--wrap {
  min-height: fit-content;
}
/* ARROW UP */
.down-arrow{
  @include down-arrow
}
.down-arrow-scroll{
  border: solid var(--secondary);
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 0.15rem;
  cursor: pointer;
  z-index: 5;
  transition: all 0.2s linear;
  transform: rotate(45deg);
  margin: 0px 0px 5px 4px;
}
/* LOGOS */
.logo_title,.logo_subtitle {
  color: var(--primary);
}
.logo_title {
  letter-spacing: 2px;
  font-size: xx-large;
  font-weight: medium;
  
}
.logo_title_scroll{
  letter-spacing: 2px;
  font-size: xx-large;
  font-weight: medium;
}
.logo_title_scroll,.logo_subtitle_scroll {
  color: var(--secondary);
}
.logo_subtitle {
  letter-spacing: 8px;
  font-weight: 400;
  margin-top: -0.5rem;
}
.logo_subtitle_scroll {
  letter-spacing: 8px;
  font-weight: 400;
  margin-top: -0.5rem;
}
.star {
  color: gold;
  transform: scale(0.7);
  margin-bottom: -5px;
}
.star_scroll {
  color: gold;
  transform: scale(0.7);
  margin-bottom: -5px;
}
/* .logoSecondary{
  max-width: 0vw;
  max-height: 0vh;
  transform: scale(0.1) translateY(-8rem) translateX(-100vw);  
}
.logoSecondary >>> svg{
  max-width: 70vw;
  max-height: 25vh;
  transform: scale(2);
}
.logoSecondary >>> g{
  fill: var(--secondary);
}
.logoPrimary{
  max-width: 0vw;
  max-height: 0vh;
  transform: scale(0.1) translateY(-8rem) translateX(-100vw);  
}
.logoPrimary >>> svg{
  max-width: 70vw;
  max-height: 25vh;
  transform: scale(2);
}
.logoPrimary >>> g{
  fill: var(--primary);
}
@media only screen and (max-width: 600px) {
  .logoSecondary >>> svg,.logoPrimary >>> svg{
  transform: scale(5);
  }
}
@media only screen and (min-width: 1410px) {
  .logoSecondary >>> svg,.logoPrimary >>> svg{
  transform: scale(1.2);
  }
} */
/* LOGOS END */

/* LINKS NAVBAR */
#v-menu {
  padding-bottom: 1.5px;
}
.link{
  text-decoration: none;
  color: var(--primary);
  font-weight: 600;
  font-size: 13px;
  letter-spacing: 1px;
}
.link::after {
  content: '';
  display: block;
  width: 0;
  height: 1px;
  background: var(--primary);
  transition: width .3s;
}
.link:hover::after {
  width: 100%;
}
.link-scroll{
  text-decoration: none;
  color: var(--secondary);
  font-weight: 600;
  font-size: 13px;
  letter-spacing: 1px;
}
.link-scroll::after{
  content: '';
  display: block;
  width: 0;
  height: 1px;
  background: var(--secondary);
  transition: width .3s;
}
.link-scroll:hover::after{
  width: 100%;
}
#active-link-secondary::after {
  content: '';
  display: block;
  width: 100%;
  height: 1px;
  background: var(--secondary);
  transition: width .3s;
}
#active-link-primary::after {
  content: '';
  display: block;
  width: 100%;
  height: 1px;
  background: var(--primary);
  transition: width .3s;
}
/* ACTIVE LINK */
/* a.nuxt-link-exact-active::after {
  content: '';
  display: block;
  width: 100%;
  height: 1px;
  background: var(--secondary);
  transition: width .3s;
} */
// a.nuxt-link-exact-active[data-v-cfc91daa]::after {
//   content: '';
//   display: block;
//   width: 100%;
//   height: 1px;
//   background: var(--primary);
//   transition: width .3s;
// }
/* LINKS END */

/* BURGER MENU */
.menu-btn {
  padding: 1rem;
  opacity: 1;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 3rem;
  min-height: 3rem;
  cursor: pointer;
  border-radius: 5px;
  z-index: 9999;
}
.menu-btn__burger {
  min-width: 1.5rem;
  min-height: 2px;
  background: var(--primary);
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(255,101,47,.2);
  transition: all .3s ease-in-out;
}
.menu-btn__burger::before,
.menu-btn__burger::after {
  content: '';
  position: absolute;
  min-width: 1.5rem;
  height: 2px;
  background: var(--primary);  
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(255,101,47,.2);
  transition: all .5s ease-in-out;
}

.menu-btn__burger::before {
  transform: translateY(-7px);
}
.menu-btn__burger::after {
  transform: translateY(7px);
}
/* ANIMATION */
.menu-btn.open .menu-btn__burger {
  transform: translateX(-50px);
  background: transparent;
  box-shadow: none;
}
.menu-btn.open .menu-btn__burger::before {
  transform: rotate(45deg) translate(35px, -35px);
  /* background: var(--secondary); */
}
.menu-btn.open .menu-btn__burger::after {
  transform: rotate(-45deg) translate(35px, 35px);
  /* background: var(--secondary); */
}
/* menu-btn__burger_dark */
.menu-btn__burger_dark {
  min-width: 1.5rem;
  min-height: 2px;
  background: var(--secondary);
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(255,101,47,.2);
  transition: all .3s ease-in-out;
}
.menu-btn__burger_dark::before,
.menu-btn__burger_dark::after {
  content: '';
  position: absolute;
  min-width: 1.5rem;
  height: 2px;
  background: var(--secondary);  
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(255,101,47,.2);
  transition: all .5s ease-in-out;
}

.menu-btn__burger_dark::before {
  transform: translateY(-7px);  
}
.menu-btn__burger_dark::after {
  transform: translateY(7px);
}
/* ANIMATION */
.menu-btn.open .menu-btn__burger_dark {
  transform: translateX(-50px);
  background: transparent;
  box-shadow: none;
}
.menu-btn.open .menu-btn__burger_dark::before {
  transform: rotate(45deg) translate(35px, -35px);
  /* background: var(--primary); */
}
.menu-btn.open .menu-btn__burger_dark::after {
  transform: rotate(-45deg) translate(35px, 35px);
  /* background: var(--primary); */
}
/* SIDEBAR */
.overlay{
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 998;
  overflow: hidden;
}

</style>