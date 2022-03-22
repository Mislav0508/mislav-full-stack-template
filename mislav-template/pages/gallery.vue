<template>
  <div >
    <v-container class="block-1-rooms d-flex align-center pt-lg-15 mt-lg-10 mt-sm-7" >

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
    <v-container class="grid-container">
      <GalleryItem v-for="(img, i) in images" :key="i"
      :image="images[i]"
      :index="i"
      :tags="tags[i]"
      :title="titles[i]"
      :date="dates[i]"
      :class="cardClasses[i]"
      @modal-true="modal_true"
      @current-index="setIndex"
      />

      <div class="modal" v-if="modal" >
        <div class="overlay" @click="modal = false"></div>
        <img :src="images[index]" alt="" class="modal-img" @click="next">
        <div class="arrow-container-left" @click="prev">
          <i class="arrow left"></i>      
        </div>
        <div class="arrow-container-right"  @click="next">
          <i class="arrow right"></i>
        </div>
      </div>

    </v-container>


  </div>
</template>

<script>
import GalleryItem from "../components/GalleryItem.vue"
export default {
  head() {
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true })
    return {
      title: this.$t('seo.seo_gallery_title'),
      meta: [ // Each object in this array is its own meta tag
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial scale=1' },
        { hid: 'description', name: 'description', content: this.$t('seo.seo_gallery_description') },
        ...i18nHead.meta
      ]
    }      
  },
  nuxtI18n: {
  paths: {
    en: '/gallery',
    hr: '/galerija',
    de: '/galerie'     
  }
  },
  components: { GalleryItem },
  data() {
    return {
      modal: false,
      index: 0,
      images: [
        "/images/gallery/horizontal/kuhinja_1.jpg",
        "/images/gallery/vertical/spavaca_5.jpg",
        "/images/gallery/horizontal/resort_1.jpg",
        "/images/gallery/vertical/terasa_1.jpg",
        "/images/gallery/horizontal/resort_2.jpg",
        "/images/gallery/vertical/terasa_5.jpg",
        "/images/gallery/horizontal/resort_3.jpg",
        "/images/gallery/horizontal/resort_5.jpg",
        "/images/gallery/horizontal/resort_8.jpg",
      ],
      tags: [
        [ "luxury", "travel", "vacation" ],
        [ "interios design", "luxury", "vacation" ],
        [ "interios design", "travel", "vacation" ],
        [ "interios design", "luxury", "travel" ],
        [ "interios design", "luxury", "vacation" ],
        [ "interios design", "travel", "vacation" ],
        [ "interios design", "luxury", "travel" ],
        [ "luxury", "travel", "vacation" ],
        [ "luxury", "travel", "vacation" ],
      ],
      titles: [
        "Disclosing the Secrets of Success in Luxury Hospitality",
        "Online Hotel Marketing — A Hotelier’s Guide to Inbound Marketing",
        "Disclosing the Secrets of Success in Luxury Hospitality",
        "How an Independent Hotel Won Back Its Direct Bookings",
        "10 Ways to Market Your Hotel for the Summer Season",
        "Are Hotel Star Categories the Same in All Countries?",
        "luxury hotel room Disclosing the Secrets of Success in Luxury Hospitality",
        "The Top Hotel Trends to Watch in 2018, According to the Industry",
        "The Inexpensive Hotel Amenities That Luxury Guests Now Want Most"
      ],
      dates: [
        "June 14, 2018",
        "June 7, 2018",
        "June 12, 2018",
        "June 15, 2018",
        "June 22, 2018",
        "June 24, 2018",
        "June 27, 2018",
        "June 29, 2018",
        "June 30, 2018",
      ],
      cardClasses: [ 
        "card1", "card2", "card3", "card4", "card5", "card6", "card7", "card8", "card9",
      ]
    }
  },
  methods: {
    setIndex: function (val) {
      this.index = val
    },
    modal_true: function (val) {
      this.modal = val
    },
    next: function () {
      if (this.index >= this.images.length - 1) {
        this.setIndex(0)
      } else {
        this.setIndex(this.index + 1)
      }
    },
    prev: function () {
      if (this.index <= 0) {
        this.setIndex(this.images.length - 1)
      } else {
        this.setIndex(this.index - 1)
      }
    },
  }

}
</script>

<style lang="scss" scoped>
.block-1-rooms{
  min-height: 30vh;
}
.card1 { grid-area: 1 / 1 / 2 / 2; }
.card2 { grid-area: 1 / 2 / 3 / 3; }
.card3 { grid-area: 1 / 3 / 2 / 4; }
.card4 { grid-area: 2 / 1 / 4 / 2; }
.card5 { grid-area: 3 / 2 / 4 / 3; }
.card6 { grid-area: 2 / 3 / 4 / 4; }
.card7 { grid-area: 4 / 1 / 5 / 2; }
.card8 { grid-area: 4 / 2 / 5 / 3; }
.card9 { grid-area: 4 / 3 / 5 / 4; }

.grid-container{
  display: grid;
  max-width: 60vw;
  gap: 0vw 1vw;
}
@media screen and (max-width: 1264px) {
  .grid-container {
    max-width: 80vw;
  }
}
@media screen and (max-width: 960px) {
  .grid-container {
    @include flexCenter;
    flex-direction: column;
    max-width: 90vw;
  }
}
// MODAL
.modal{
  position: fixed;
  z-index: 99999999999999999;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  @include flexCenter;
}
.modal-img{
  width: 100%;
  height: auto;
  max-width: 70vw;
  max-height: 70vh;
  border: 3px solid white;
  object-fit: cover;
}
@media only screen and (max-width: 960px) {
  .modal-img {
    min-width: 80vw;
    min-height: 90vh;
  }
}
.overlay{
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  background: rgba(0,0,0,0.7);
  overflow: hidden;
}
// ARROWS
.arrow-container-left{
  @include arrow-container-left
}
.arrow-container-right{
  @include arrow-container-right
}
.arrow {
  @include arrow
}
.right {
  @include right 
}
.left {
  @include left
}
</style>