<template>
  <div>
    <v-container class="block-1-rooms d-flex align-center pt-lg-15 mt-lg-10 mt-sm-7">

      <v-col cols="0" xl="2" lg="2" md="1" sm="1"></v-col>

      <v-col cols="12" xl="7" lg="7" md="11" sm="11" class="mt-15 mt-sm-0 pr-10 pr-sm-0">
        <h2 class="pt-10 pb-2" data-aos="fade-up" 
        data-aos-duration="1000"
        data-aos-easing="ease-out"
        data-aos-once="true">Apartments in Novi Vinodolski</h2>
        <p class="pb-5" data-aos="fade-up" 
        data-aos-duration="1000"
        data-aos-easing="ease-out"
        data-aos-delay="500"
        data-aos-once="true">Unwind the clock of modern life. Unlock the door to a wonder of the world.</p>
        <p data-aos="fade-up" 
        data-aos-duration="1000"
        data-aos-easing="ease-out"
        data-aos-delay="1000"
        data-aos-once="true">Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache fanny pack nostrud. Photo booth anim 8-bit hella, PBR 3 wolf moon beard Helvetica. Salvia esse nihil, flexitarian Truffaut synth art party deep v chillwave. Seitan High Life reprehenderit consectetur cupidatat kogi. Et leggings fanny pack, elit bespoke vinyl art party Pitchfork selfies master cleanse Kickstarter seitan retro. Drinking vinegar stumptown yr pop-up artisan sunt. Deep v cliche lomo biodiesel Neutra selfies.  Exercitation photo booth stumptown tote bag Banksy, elit small batch freegan sed. Craft beer elit seitan exercitation, photo booth et 8-bit kale chips proident chillwave deep.</p>

      </v-col>      

    </v-container>

    <v-container fluid style="position: relative;" class="py-10">
      <v-row >

        <v-img
          class="block-img-center"
          lazy-src="https://picsum.photos/id/11/10/6"
          src="/images/slider/slider-home-2.jpg"
          data-aos="fade-in" 
          data-aos-duration="1000"
          data-aos-easing="ease-out"
          data-aos-delay="200"
          data-aos-once="true"
        ></v-img>

      </v-row>
    </v-container>

    <v-container class="py-15">
      <v-row>
        <v-col cols="0" xl="2" lg="2" md="11" sm="11"></v-col>

        <v-col cols="12" xl="8" lg="8" md="11" sm="11">
          <p>What to See and Do Foam padding in the insoles leather finest quality staple flat slip-on design pointed toe off-duty shoe. Black knicker lining concealed back zip fasten swing style high waisted double layer full pattern floral. Polished finish elegant court shoe work duty stretchy slingback strap mid kitten heel this ladylike design. Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache fanny pack nostrud. Photo booth anim 8-bit hella, PBR 3 wolf moon beard Helvetica. Salvia esse nihil, flexitarian Truffaut synth art party deep v chillwave. Seitan High Life reprehenderit consectetur cupidatat kogi. Et leggings fanny pack, elit bespoke vinyl art party Pitchfork selfies master cleanse Kickstarter seitan retro. Drinking vinegar stumptown yr pop-up artisan sunt. Deep v cliche lomo biodiesel Neutra selfies. Where to Stay</p>
        </v-col>

        <v-col cols="4" xl="2" lg="2" md="11" sm="11"></v-col>
      </v-row>
    </v-container>

    <v-container fluid style="position: relative;" class="py-10">
      <v-row class="d-flex align-center justify-center ">

        <v-img
          class="block-img-square"
          lazy-src="https://picsum.photos/id/11/10/6"
          src="/images/slider/slider-home-3.jpg"
          data-aos="fade-up" 
          data-aos-duration="1000"
          data-aos-easing="ease-in"
          data-aos-delay="200"
          data-aos-once="true"
        ></v-img>

      </v-row>
    </v-container>

    <v-container fluid style="position: relative;" class="py-15">
      <v-row class="d-flex align-center justify-center ">

        <v-img
          class="block-img-square"
          lazy-src="https://picsum.photos/id/11/10/6"
          src="/images/slider/slider-home-4.jpg"
          data-aos="fade-up" 
          data-aos-duration="1000"
          data-aos-easing="ease-in"
          data-aos-delay="200"
          data-aos-once="true"
        ></v-img>

      </v-row>
    </v-container>

    <v-container class="block-1-rooms d-flex align-center pt-lg-5 mt-lg-5 mt-sm-7">

      <v-col cols="0" xl="3" lg="3" md="1" sm="1"></v-col>

      <v-col cols="12" xl="6" lg="6" md="11" sm="11" style="border-bottom: 1px solid #222222" class="px-10 pb-10">
        <p data-aos="fade-up" 
        data-aos-duration="1000"
        data-aos-easing="ease-out"
        data-aos-delay="300"
        data-aos-once="true">Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache fanny pack nostrud. Photo booth anim 8-bit hella, PBR 3 wolf moon beard Helvetica. Salvia esse nihil, flexitarian Truffaut synth art party deep v chillwave. Seitan High Life reprehenderit consectetur cupidatat kogi. Et leggings fanny pack, elit bespoke vinyl art party Pitchfork selfies master cleanse Kickstarter seitan retro. Drinking vinegar stumptown yr pop-up artisan sunt. Deep v cliche lomo biodiesel Neutra selfies.  Exercitation photo booth stumptown tote bag Banksy, elit small batch freegan sed. Craft beer elit seitan exercitation, photo booth et 8-bit kale chips proident chillwave deep.</p>
      </v-col>      

      <v-col cols="0" xl="3" lg="3" md="1" sm="1"></v-col>

    </v-container>

    <v-container class="text-center">
      <h2>Our Rooms</h2>
      <p class="pt-3">COULD ALSO BE OF INTEREST TO YOU</p>
    </v-container>

    <v-container class="d-flex align-center justify-center flex-wrap pb-15">

      
      
      <RoomCard v-for="(img, i) in images" :key="i"
      :image="images[i]"
      :type="types[i]"
      :size="sizes[i]"
      :adults="capacity.adults[i]"
      :children="capacity.children[i]"
      :price="prices[i]"/>
    
    </v-container>    

  </div>
</template>

<script>
import RoomCard from "../components/RoomCard.vue"
import aosMixin from "../mixins/aos"
export default {  
  head() {
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true })
    return {
      title: this.$t('seo.seo_explore_title'),
      meta: [ // Each object in this array is its own meta tag
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial scale=1' },
        { hid: 'description', name: 'description', content: this.$t('seo.seo_explore_description') },
        ...i18nHead.meta
      ]
    }      
  },
  nuxtI18n: {
    paths: {
      en: '/explore',
      hr: '/istrazi',
      de: '/entdecken'     
    }
  },
  mixins: [aosMixin],
  data () {
    return {
      images: [
        "/images/home/midSlider/midSlider-1.jpg",
        "/images/home/midSlider/midSlider-2.jpg",
        "/images/home/midSlider/midSlider-3.jpg",
        "/images/home/midSlider/midSlider-4.jpg"
      ],
      types: [ "Superior Room", "Deluxe Room", "Signature Room", "Luxury Suite Room" ],
      sizes: [ 30, 55, 70, 120 ],
      capacity: {
        adults: [ 2, 3, 3, 4 ],
        children: [ 1, 1, 2, 2]
      },
      prices: [ 199, 249, 299, 399 ]
        }
  }
}
</script>

<style lang="scss" scoped>
.block-1-rooms{
  min-height: 30vh;
}
.block-img-center {
  max-height: 70vh;
  min-width: 100vw;
}
.block-img-square {
  min-height: 100vh;
  max-width: 60vw;
}
@media only screen and (max-width: 600px) {
  .block-img-square {
    min-height: 100vh;
    max-width: 100vw;
  }
}

</style>