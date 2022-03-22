<template>
  <div>
    <v-container class="block-1-rooms d-flex align-center pt-15 mt-lg-10 mt-sm-7">

      <v-col cols="0" xl="2" lg="2" md="1" sm="1"></v-col>

      <v-col cols="12" xl="10" lg="10" md="11" sm="11" class="mt-15 mt-sm-0 pr-10 pr-sm-0">
        <h2 data-aos="fade-up" 
        data-aos-duration="1000"
        data-aos-easing="ease-out"
        data-aos-delay="500"
        data-aos-once="true">Apartments in Novi Vinodolski</h2>
        <p data-aos="fade-up" 
        data-aos-duration="1000"
        data-aos-easing="ease-out"
        data-aos-delay="1000"
        data-aos-once="true">Unwind the clock of modern life. Unlock the door to a wonder of the world.</p>
      </v-col>      

    </v-container>

    <v-container fluid style="position: relative;
    text-align: center;
    color: white;" class="pb-10">
      <v-row >

        <v-img
          class="block-img-margin-left"
          lazy-src="https://picsum.photos/id/11/10/6"
          src="/images/home/home_pic4.jpg"
          style="transform:translateX(-3%)"
          data-aos="fade-in" 
          data-aos-duration="1000"
          data-aos-easing="ease-out"
          data-aos-delay="200"
          data-aos-once="true"
        ></v-img>

      <div class="text-container d-flex align-start flex-column pr-15" >

        <h2 class="white--text font-weight-bold" data-aos="fade-up" 
        data-aos-duration="1000"
        data-aos-easing="ease-out"
        data-aos-delay="500"
        data-aos-once="true">Visit Our fantastic villas</h2>
        <p class="white--text text-left font-weight-normal py-3" data-aos="fade-up" 
        data-aos-duration="1000"
        data-aos-easing="ease-out"
        data-aos-delay="1000"
        data-aos-once="true">Featuring a pleasant blend of natural materials and elegance, the decor and furnishings <br> create an inviting ambience fostering relaxation and a sense of well-being.</p>
        <v-btn outlined tile large color="white" width="250" type="button" class="no-uppercase font-weight-bold" data-aos="fade-up" 
        data-aos-duration="1000"
        data-aos-easing="ease-out"
        data-aos-delay="1500"
        data-aos-once="true">
          discover our rooms
        </v-btn>

      </div>

      </v-row>
    </v-container>

    <v-container class="block-1-rooms d-flex align-center">

      <v-col cols="1" xl="2" lg="2" md="1" sm="1"></v-col>

      <v-col cols="10" xl="10" lg="10" md="10" sm="10">
        <h2 data-aos="fade-up" 
        data-aos-duration="1000"
        data-aos-easing="ease-out"
        data-aos-delay="500"
        data-aos-once="true">In harmony with nature</h2>
        <p data-aos="fade-up" 
        data-aos-duration="1000"
        data-aos-easing="ease-out"
        data-aos-delay="1000"
        data-aos-once="true">Unwind the clock of modern life. Unlock the door to a wonder of the world.</p>
      </v-col>      

    </v-container>

    <MidSlider v-for="(type, i) in types" :key="i" 
      :id="ids[i]"
      :type="types[i]"
      :price="prices[i]"
      :bed="beds[i]"
      :capacity="capacities[i]"
      :room_size="room_sizes[i]"
      :view="views[i]"
      :recommend="recommends[i]"
      :image="images[i]"
      :translate="translateX[i]"
      :imageSize="imgSizes[i]"
      data-aos="slide-up" 
      data-aos-duration="1200"
      data-aos-easing="ease-out"
      data-aos-once="true"
      />

      <v-container class="block-1-rooms d-flex align-center">

        <v-col cols="1" xl="2" lg="2" md="1" sm="1"></v-col>

        <v-col cols="10" xl="10" lg="10" md="10" sm="10">
          <h2 data-aos="fade-up" 
          data-aos-duration="1000"
          data-aos-easing="ease-out"
          data-aos-delay="500"
          data-aos-once="true">The Retreat Spa</h2>
          <p data-aos="fade-up" 
          data-aos-duration="1000"
          data-aos-easing="ease-out"
          data-aos-delay="1000"
          data-aos-once="true">A hallmark of the Retreat Hotel experience, the Retreat Spa transports your mind and body to new dimensions of peace and rejuvenation.</p>
        </v-col>      

      </v-container>

  </div>
</template>

<script>
import MidSlider from "../../components/MidSlider.vue"
import aosMixin from "../../mixins/aos"
export default {
  head() {
  const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true })
  return {
    title: this.$t('seo.seo_rooms_title'),
    meta: [ // Each object in this array is its own meta tag
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial scale=1' },
      { hid: 'description', name: 'description', content: this.$t('seo.seo_rooms_description') },
      ...i18nHead.meta
    ]
  }      
  },
  nuxtI18n: {
    paths: {
      en: '/our-rooms',
      hr: '/sobe',
      de: '/unsere-zimmer'     
    }
  },
  mixins: [aosMixin],
  data () {
    return {
      ids: [ 1, 2, 3, 4 ],
      types: [ "Superior Room", "Deluxe Room", "Signature Room", "Luxury Suite Room" ],
      prices: [ "$199", "$249", "$299", "$399" ],
      beds: [ "twin bed", "king bed", "king bed", "king bed" ],
      capacities: [ "2 adults 1 children", "3 adults 1 children", "3 adults 2 children", "4 adults 2 children" ],
      room_sizes: [ "30", "55", "70", "120" ],
      views: [ "sea view", "sea view", "sea view", "sea view"],
      recommends: [ "great for business trip", "great for business trip", "great for families", "great for families" ],
      images:  [
        [
        "/images/home/midSlider/midSlider-1.jpg",
        "/images/home/midSlider/midSlider-2.jpg",
        "/images/home/midSlider/midSlider-3.jpeg",
        "/images/home/midSlider/midSlider-4.jpg",
        "/images/home/midSlider/midSlider-5.jpg",
        ],
        [
        "/images/home/midSlider/midSlider-1.jpg",
        "/images/home/midSlider/midSlider-2.jpg",
        "/images/home/midSlider/midSlider-3.jpeg",
        "/images/home/midSlider/midSlider-4.jpg",
        "/images/home/midSlider/midSlider-5.jpg",
        ],
        [
        "/images/home/midSlider/midSlider-1.jpg",
        "/images/home/midSlider/midSlider-2.jpg",
        "/images/home/midSlider/midSlider-3.jpeg",
        "/images/home/midSlider/midSlider-4.jpg",
        "/images/home/midSlider/midSlider-5.jpg",
        ],
        [
        "/images/home/midSlider/midSlider-1.jpg",
        "/images/home/midSlider/midSlider-2.jpg",
        "/images/home/midSlider/midSlider-3.jpeg",
        "/images/home/midSlider/midSlider-4.jpg",
        "/images/home/midSlider/midSlider-5.jpg",
        ],
      ],
      imgSizes: [[ 2, 1, 1, 2, 2 ], [ 2, 1, 1, 2, 2 ], [ 2, 1, 1, 2, 2 ], [ 2, 1, 1, 2, 2 ]],
      translateX: [ 50, 50, 50, 50 ]

      }
  }

}
</script>

<style lang="scss" scoped>
.block-1-rooms{
  min-height: 30vh;
}
.block-img-margin-left{
  @include block-img-margin-left;
}
.text-container{
  @include text-container;
}
@media only screen and (max-width: 960px) {
  .text-container{
    top: 40%;
    left: 15%;
  }
}
@media only screen and (max-width: 600px) {
  .text-container{
    top: 20%;
  }
}
</style>