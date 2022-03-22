<template>
  <v-container class="dashboard">
    
  </v-container>
</template>

<script>
export default {
  nuxtI18n: {
    paths: {
      en: '/dashboard',
      hr: '/kontrolna-ploca',
      de: '/Armaturenbrett'     
    }
  },
  data() {
    return {
      
    }
  },
  mounted() {

  }
}
</script>

<style lang="scss" scoped>
.dashboard{
  background: gray;
  min-width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  position: fixed;
}

</style>