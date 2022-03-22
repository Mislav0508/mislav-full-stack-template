<template>
  <v-container fluid class="footer-container p-0 m-0 d-flex align-end">

    <img class="footer-img" src="/images/footer/wave.jpg" alt="">

    <!-- MIDDLE CONTAINER -->

    <v-col cols="12" xl="12" lg="12" md="12" sm="12" class="middle-footer-container d-flex flex-wrap text-center" >

      <v-col cols="12" xl="2" lg="2" md="2" sm="0"></v-col>

      <v-col cols="6" xl="2" lg="2" md="2" sm="6" style="border-bottom: 1px solid white">
        <h2>{{ $t('footer.address') }}</h2>
        <p class="font-weight-bold">Renata's Apartments</p>
        <p>Pod Sveti Mikulj 7</p>
        <p>Novi Vinodolski</p>
      </v-col>
      <v-col cols="6" xl="2" lg="2" md="2" sm="6" style="border-bottom: 1px solid white">
        <h2>{{ $t('footer.reservation') }}</h2>
        <p>Tel.: +41 (0)54 2344 00</p>
        <p>Fax: +41 (0)542344 99</p>
        <p>renata@gmail.com</p>
      </v-col>
      <v-col cols="6" xl="2" lg="2" md="2" sm="6" style="border-bottom: 1px solid white">
        <h2>Superior</h2>
        <p>{{ $t('footer.rating') }}</p>
        <font-awesome-icon v-for="i in 4" :key="i" icon="star" style="color:gold;" class="mx-1"/>
      </v-col>
      <v-col cols="6" xl="2" lg="2" md="2" sm="6" style="border-bottom: 1px solid white">
        <h2>{{ $t('footer.awards') }}</h2>
        <v-row class="d-flex align-center justify-center">
          <v-img
          lazy-src="https://picsum.photos/id/11/10/6"
          src="/images/footer/tripadvisor.png"
          max-width="70"
          ></v-img>
          <v-img
            class="mx-10"
            lazy-src="https://picsum.photos/id/11/10/6"
            src="/images/footer/asean_award-1.png"
            max-width="150"
            contain
          ></v-img>
        </v-row>
      </v-col>

      <v-col cols="12" xl="2" lg="2" md="2" sm="0"></v-col>

      <!-- BOTTOM CONTAINER -->
      <v-col cols="12" xl="12" lg="12" md="12" sm="12" class=" d-md-flex">

        <v-col cols="0" xl="2" lg="2" md="2" sm="0"></v-col>

        <v-col cols="12" xl="3" lg="3" md="3" sm="12">
          <p>© Copyright Media Dev - Mislav Crnković</p>
        </v-col>

        <v-col cols="12" xl="2" lg="1" md="0" sm="1"></v-col>

        <v-col cols="12" xl="3" lg="4" md="5" sm="12" class="d-flex justify-space-around flex-wrap">
          <NuxtLink :to="localePath('/')" class="footer-link">{{ $t('navbar.home') }}</NuxtLink>
          <NuxtLink :to="localePath('/rooms')" class="footer-link">{{ $t('navbar.our_rooms') }}</NuxtLink>
          <NuxtLink :to="localePath('/about')" class="footer-link">{{ $t('navbar.about') }}</NuxtLink>
          <NuxtLink :to="localePath('/gallery')" class="footer-link">{{ $t('navbar.gallery') }}</NuxtLink>
          <NuxtLink :to="localePath('/explore')" class="footer-link">{{ $t('navbar.explore') }}</NuxtLink>
          <NuxtLink :to="localePath('/contact')"  class="footer-link">{{ $t('navbar.contact') }}</NuxtLink>
        </v-col>

        <v-col cols="0" xl="2" lg="2" md="2" sm="0"></v-col>
        <!-- BOTTOM CONTAINER END -->

      </v-col>

    </v-col>


    
    
  </v-container>
</template>

<script>
export default {

}
</script>

<style scoped>
.footer-img{
  max-height: 50vh;
  min-width: 100vw;
}
.footer-container{
  position: relative;
  width: 100vw;
  min-height: 50vh;
  bottom: 0;
  overflow: hidden;
  z-index: 9998;
  color: var(--primary);
  padding: 0;
}
.middle-footer-container{
  position: absolute;
  z-index: 9998;
  color: var(--primary);
}

h2 {
  font-size: clamp(12px, 0.7vw, 16px);
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-style: normal;
  margin-bottom: 2rem;
  color: var(--primary);
}
p{
  font-size: clamp(12px, 0.5vw, 14px);
  font-weight: 400;
  letter-spacing: 2px;
  color: var(--primary);
}
.footer-link{
  text-decoration: none;
  color: var(--primary);

}
@media only screen and (max-width: 1396px) {
  .footer-img{
    max-height: 65vh;
    min-width: 100vw;
  }
  .footer-container{
    min-height: 65vh;
  }
}
@media only screen and (max-width: 1264px) {
  .footer-img{
    max-height: 75vh;
    min-width: 100vw;
  }
}
@media only screen and (max-width: 1150px) {
  .footer-img{
    min-height: 65vh;
    min-width: 100vw;
  }
}
@media only screen and (max-width: 960px) {
  .footer-img{
    min-height: 105vh;
    min-width: 100vw;
  }
}
@media only screen and (max-width: 450px) {
  .footer-img{
    min-height: 115vh;
    min-width: 100vw;
  }
}
@media only screen and (max-width: 390px) {
  .footer-img{
    min-height: 155vh;
    min-width: 100vw;
  }
}
</style>