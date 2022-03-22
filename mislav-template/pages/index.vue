<template>
  <div>
    <Slider />
      
    <v-row class="d-flex align-center justify-space-around py-lg-15" >

      <v-col cols="12" xl="2" lg="2" md="0"></v-col>

      <v-col cols="12" xl="3" lg="3" md="6" sm="" class="d-flex align-start justify-start flex-wrap flex-column px-10 py-15">
        <p class="font-weight-bold">ABOUT RENATAS APARTMENTS</p>
        <h2 class="pb-5" data-aos="fade-left" 
        data-aos-duration="600"
        data-aos-easing="ease-out"
        data-aos-once="true">Renatas Apartments, More than a stay</h2>
        <p class="font-weight-light" data-aos="fade-left" 
        data-aos-duration="700"
        data-aos-easing="ease-out"
        data-aos-delay="500"
        data-aos-once="true">Pitchfork selfies master cleanse Kickstarter seitan retro. Drinking vinegar stumptown yr pop-up artisan sunt. Deep v cliche lomo biodiesel Neutra selfies. Shorts fixie consequat flexitarian four loko tempor duis single-origin coffee. Banksy, elit small batch freegan sed.</p>
        <v-img src="/images/home/signature2.png" class="signature pt-7"
        data-aos="fade-left" 
        data-aos-duration="800"
        data-aos-easing="ease-out"
        data-aos-delay="1000"
        data-aos-once="true"></v-img>
        <p class="font-weight-medium" data-aos="fade-left" 
        data-aos-duration="900"
        data-aos-easing="ease-out"
        data-aos-delay="1500"
        data-aos-once="true"
        >RENATA CRNKOVIĆ - GENERAL MANAGER</p>
      </v-col>

      <v-col cols="12" xl="3" lg="3" md="6" sm="">
        <div class="img-container d-flex align-center justify-center">
          <v-img
            class="square-img-small-wide"
            lazy-src="https://picsum.photos/id/11/10/6"
            src="/images/home/home_pic2.jpeg"
          ></v-img>
        </div>
      </v-col>

      <v-col cols="12" xl="2" lg="2" md="0"></v-col>

    </v-row>
      

    <MidSlider 
    data-aos="slide-up" 
    data-aos-duration="1200"
    data-aos-easing="ease-out"
    data-aos-once="true"
    :id="ids"
    :type="types"
    :price="prices"
    :bed="beds"
    :capacity="capacities"
    :room_size="room_sizes"
    :view="views"
    :recommend="recommends"
    :image="images"
    :translate="translateX"
    :imageSize="imgSizes"/>

      <!-- BLOCK - 2 -->

    <v-row>

      <v-col cols="12" xl="2" lg="2" md="1" sm="12" class="py-10"></v-col>

      <v-col cols="12" xl="4" lg="4" md="5" sm="6" 
      data-aos="fade-right" 
      data-aos-duration="1000"
      data-aos-easing="ease-out"
      data-aos-delay="400"
      data-aos-once="true">
        <div class="img-container d-flex align-center justify-center pa-md-15">
          <v-img
            class="square-img-small"
            lazy-src="https://picsum.photos/id/11/10/6"
            src="/images/home/home_pic3.jpg"
          ></v-img>
        </div>
      </v-col>

      <v-col cols="12" xl="4" lg="4" md="5" sm="6" class="d-flex align-start justify-center flex-column pa-15">
        <p class="font-weight-bold">5 STARS MICHALIN</p>
        <h2 class="pb-3" data-aos="fade-left" 
        data-aos-duration="1000"
        data-aos-easing="ease-out"
        data-aos-delay="200"
        data-aos-once="true">Experience Deliciously from Our Chefs</h2>
        <p data-aos="fade-left" 
        data-aos-duration="1000"
        data-aos-easing="ease-out"
        data-aos-delay="500"
        data-aos-once="true"
        class="font-weight-regular">Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache fanny pack nostrud. Photo booth anim 8-bit hella, PBR 3 wolf moon beard Helvetica.</p>
      </v-col>

      <v-col cols="12" xl="2" lg="2" md="1" sm="12"></v-col>

    </v-row>

    <!-- BLOCK - 3 -->

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

    <!-- BLOCK - 4 -->

    <v-container fluid style="position: relative;
  text-align: center;
  color: white;" class="py-10">
      <v-row >

        <v-img
          class="block-img-margin-left"
          lazy-src="https://picsum.photos/id/11/10/6"
          src="/images/home/home_pic5.jpg"
          style="transform:translateX(3%)"
          data-aos="fade-in" 
          data-aos-duration="1000"
          data-aos-easing="ease-out"
          data-aos-delay="200"
          data-aos-once="true"
        ></v-img>

      <div class="text-container d-flex align-start flex-column pr-15">

        <h2 class="white--text font-weight-bold" data-aos="fade-right" 
        data-aos-duration="1000"
        data-aos-easing="ease-out"
        data-aos-delay="500"
        data-aos-once="true">Signature, Simply Delicious</h2>
        <p class="white--text text-left font-weight-normal py-3" data-aos="fade-right" 
        data-aos-duration="1000"
        data-aos-easing="ease-out"
        data-aos-delay="1000"
        data-aos-once="true">Awarded 14 Gault-Millau points, our cuisine focuses on locally sourced, seasonal ingredients.</p>
        <v-btn outlined tile large color="white" width="250" type="button" class="no-uppercase font-weight-bold" data-aos="fade-right" 
        data-aos-duration="1000"
        data-aos-easing="ease-out"
        data-aos-delay="1500"
        data-aos-once="true">
          discover our restaurant
        </v-btn>

      </div>

      </v-row>
    </v-container>

    <!-- BLOCK - 5 -->
      
      <v-row class="d-flex align-center justify-space-around py-lg-15">

        <v-col cols="12" xl="2" lg="2" md="0"></v-col>

        <v-col cols="12" xl="3" lg="5" md="6" sm="" class="d-flex align-start justify-start flex-wrap flex-column px-10 py-15" >
          <p class="font-weight-bold"
          >ABOUT RENATAS APARTMENTS</p>
          <h2 class="pb-3" data-aos="fade-left" 
          data-aos-duration="600"
          data-aos-easing="ease-out"
          data-aos-delay="500"
          data-aos-once="true">Explore Renata's Hotel</h2>
          <p data-aos="fade-left" 
          data-aos-duration="600"
          data-aos-easing="ease-out"
          data-aos-delay="1000"
          data-aos-once="true"
          class="font-weight-regular">Pitchfork selfies master cleanse Kickstarter seitan retro. Drinking vinegar stumptown yr pop-up artisan sunt. Deep v cliche lomo biodiesel Neutra selfies. Shorts fixie consequat flexitarian four loko tempor duis single-origin coffee. Banksy, elit small batch freegan sed.</p>
          <NuxtLink :to="localePath('/about')" style="text-decoration:none;color:#222222;">
            <p class="font-weight-bold" 
            data-aos="fade-left" 
            data-aos-duration="600"
            data-aos-easing="ease-out"
            data-aos-delay="1500"
            data-aos-once="true"
            style="border-bottom:1px solid #222222;">Discover More</p>
          </NuxtLink>
        </v-col>

        <v-col cols="12" xl="3" lg="3" md="6" sm="">
          <div class="img-container d-flex align-center justify-center">
            <v-img
              class="square-img-small"
              lazy-src="https://picsum.photos/id/11/10/6"
              src="/images/home/home_pic1.jpeg"
            ></v-img>
          </div>
        </v-col>

        <v-col cols="12" xl="2" lg="2" md="0"></v-col>

      </v-row>    

  </div>

</template>
<script>
import Slider from "../components/Slider.vue"
import MidSlider from "../components/MidSlider.vue"
import aosMixin from "../mixins/aos"
export default {
  head() {
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true })
    return {
      title: this.$t('seo.seo_home_title'),
      meta: [ // Each object in this array is its own meta tag
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial scale=1' },
        { hid: 'description', name: 'description', content: this.$t('seo.seo_home_description') },
        ...i18nHead.meta
      ]
    }      
  },
  mixins: [aosMixin],
  data () {
      return {   
        ids: 1,
        types: "Deluxe Room",
        prices: "$250",
        beds: "king bed",
        capacities: "3 adults 1 children",
        room_sizes: "55",
        views: "sea view",
        recommends: "great for business trip",
        images: [
          "/images/home/midSlider/midSlider-1.jpg",
          "/images/home/midSlider/midSlider-2.jpg",
          "/images/home/midSlider/midSlider-3.jpeg",
          "/images/home/midSlider/midSlider-4.jpg",
          "/images/home/midSlider/midSlider-5.jpg",
        ],
        imgSizes: [ 2, 1, 1, 2, 2 ],
        translateX: 50,
      }
    }
}
</script>
<style lang="scss" scoped>
.signature{
  max-width: clamp(17rem, 5vw, 20rem);
}
.square-img-small-wide{
  min-height: 45vh;
  max-height: 45vh;
  min-width: 35vw;
  max-width: 35vw;
}
.square-img-small{
  @include square-img-small;
}
.block-img-margin-left{
  @include block-img-margin-left;
}
.text-container{
  @include text-container;
}
@media only screen and (max-width: 960px) {
  .square-img-small, .square-img-small-wide{
    min-height: 60vh;
    max-height: 60vh;
    min-width: 40vw;
    max-width: 40vw;
  }
  .text-container{
    top: 40%;
    left: 15%;
  }
}
@media only screen and (max-width: 600px) {
  .square-img-small, .square-img-small-wide{
    min-width: 100vw;
    max-width: 100vw;
  }
  .text-container{
    top: 20%;
  }
}
@media only screen and (min-width: 1600px) {
  .square-img-small{
  min-height: 45vh;
  max-height: 45vh;
  min-width: 25vw;
  max-width: 25vw;
}
}
@media only screen and (min-width: 2560px) {
  .square-img-small, .square-img-small-wide{
  min-height: 45vh;
  max-height: 45vh;
  min-width: 35vw;
  max-width: 35vw;
} 
}


</style>