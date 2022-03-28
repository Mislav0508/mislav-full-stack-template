<template>
  <v-container class="dashboard">

    <v-row class="navbar pa-10">
      <v-col cols="0" xl="10" lg="10" md="10" sm="10"></v-col>
      <v-col cols="8" xl="2" lg="2" md="2" sm="2" class="d-flex align-center">
          <v-row class="d-flex align-center justify-space-around">
            <h4>{{this.$store.state.user}}</h4>
            <NuxtLink :to="localePath('/login')" @click.native="Logout" class="link-dashboard">Logout</NuxtLink>
          </v-row>
      </v-col>
    </v-row>

    <div class="sidebar">
      <v-container class="text-center">
        <h3 class="pb-10">DASHBOARD</h3>
        <h4 class="py-5">EDIT PAGES</h4>
        <v-row v-for="(page,i) in pages" :key="i" class="d-flex align-center justify-center py-2">
          <v-btn min-width="7vw">{{ page }}</v-btn>
        </v-row>
      </v-container>
      
    </div>


  </v-container>
</template>

<script>
export default {
  middleware: "auth",
  nuxtI18n: {
    paths: {
      en: '/dashboard',
      hr: '/kontrolna-ploca',
      de: '/Armaturenbrett'     
    }
  },
  data() {
    return {
      pages: ["home", "rooms", "about", "gallery", "explore", "contact"],
      components: []
    }
  },
  methods: {
    Logout() {
      console.log("logout");
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$store.dispatch('setIsAdmin', false)
    }
  },
  mounted() {
    console.log(this.$router);
  }
}
</script>

<style lang="scss" scoped>
.dashboard{
  background-image: linear-gradient( 135deg, #FEC163 10%, #e05930 100%);
  min-width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  position: fixed;
}
.navbar{
  z-index: 9999;
  overflow: hidden;
  position: fixed;
  top: 0;
  min-width: 100vw;
  max-width: 100vw;
}
.link-dashboard{
  text-decoration: none;
  color: var(--secondary);
  font-weight: 600;
  font-size: 13px;
  letter-spacing: 1px;
}
.sidebar {
  background: #e0593079;
  border-right: 1px solid #ff5f2f;
  position: fixed;
  top: 0;
  left: 0;
  width: 10vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
}
</style>