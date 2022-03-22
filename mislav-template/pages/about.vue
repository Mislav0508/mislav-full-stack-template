<template>
  <div>
    
    <v-container class="block-1-rooms d-flex align-center pt-lg-15 mt-lg-10 mt-sm-7">

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
    color: white;" class="py-10">
      <v-row >

        <v-img
          class="block-img-margin-left"
          lazy-src="https://picsum.photos/id/11/10/6"
          src="/images/home/home_pic5.jpg"
          style="transform:translateX(3%)"
          data-aos="fade-right" 
          data-aos-duration="1000"
          data-aos-easing="ease-out"
          data-aos-delay="200"
          data-aos-once="true"
        ></v-img>

      </v-row>
    </v-container>

    <v-container class="block-1-rooms d-flex align-center justify-center">
      <v-row class="d-flex align-center justify-center">

        <v-col cols="12" xl="3" lg="3" md="3" sm="3"></v-col>

        <v-col cols="12" xl="5" lg="5" md="5" sm="5">
          <p data-aos="fade-right" 
          data-aos-duration="1000"
          data-aos-easing="ease-out"
          data-aos-delay="500"
          data-aos-once="true"
          class="pr-10">Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache fanny pack nostrud. Photo booth anim 8-bit hella, PBR 3 wolf moon beard Helvetica. Salvia esse nihil, flexitarian Truffaut synth art party deep v chillwave. Seitan High Life reprehenderit consectetur cupidatat kogi. Et leggings fanny pack.</p>
        </v-col>

        <v-col cols="12" xl="3" lg="3" md="3" sm="3">
          <v-img src="/images/home/signature.png" class="signature my-3"
          data-aos="fade-left" 
          data-aos-duration="600"
          data-aos-easing="ease-out"
          data-aos-delay="1500"
          data-aos-once="true"></v-img>
          <p class="font-weight-normal" data-aos="fade-left" 
          data-aos-easing="ease-out"
          data-aos-delay="1000"
          data-aos-once="true"
          >RENATA CRNKOVIĆ - GENERAL MANAGER</p>
        </v-col>

        <v-col cols="12" xl="1" lg="1" md="1" sm="1"></v-col>
      </v-row>
    </v-container>

    <v-container data-aos="fade-left" 
          data-aos-duration="600"
          data-aos-easing="ease-out"
          data-aos-once="true">
      <client-only>
        <carousel v-bind="options" >
          <slide v-for="(image, i) in images" :key="i" class="img-wrapper ">
            <img :src="image" />
          </slide>
        </carousel>
      </client-only>
    </v-container>

    <v-container>
      <v-row>
        <v-col cols="12" xl="2" lg="2" md="2" sm="2"></v-col>

        <v-col cols="12" xl="8" lg="8" md="8" sm="8">
          <h2 class="py-10" data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-easing="ease-out"
          data-aos-once="true">Everything Handy</h2>
          <p data-aos="fade-right" 
          data-aos-duration="1000"
          data-aos-easing="ease-out"
          data-aos-delay="500"
          data-aos-once="true"
          >Exercitation photo booth stumptown tote bag Banksy, elit small batch freegan sed. Craft beer elit seitan exercitation, photo booth et 8-bit kale chips proident chillwave deep v laborum. Aliquip veniam delectus, Marfa eiusmod Pinterest in do umami readymade swag. Selfies iPhone Kickstarter, drinking vinegar jean vinegar stumptown yr pop-up artisan.</p>
          <p class="my-10" data-aos="fade-left" 
          data-aos-duration="1000"
          data-aos-easing="ease-out"
          data-aos-delay="1000"
          data-aos-once="true">See-through delicate embroidered organza blue lining luxury acetate-mix stretch pleat detailing. Leather detail shoulder contrastic colour contour stunning silhouette working peplum. Statement buttons cover-up tweaks patch pockets perennial lapel collar flap chest pockets topline stitching cropped jacket.</p>
          <p class="pb-10" data-aos="fade-up" 
          data-aos-duration="1000"
          data-aos-easing="ease-out"
          data-aos-delay="1000"
          data-aos-once="true">Effortless comfortable full leather lining eye-catching unique detail to the toe low ‘cut-away’ sides clean and sleek. Polished finish elegant court shoe work duty stretchy slingback strap mid kitten heel this ladylike design slingback strap mid kitten heel this ladylike design.</p>
        </v-col>

        <v-col cols="12" xl="2" lg="2" md="2" sm="2"></v-col>
      </v-row>
    </v-container>

  </div>
</template>

<script>
import aosMixin from "../mixins/aos"
export default {
  head() {
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true })
    return {
      title: this.$t('seo.seo_about_title'),
      meta: [ // Each object in this array is its own meta tag
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial scale=1' },
        { hid: 'description', name: 'description', content: this.$t('seo.seo_about_description') },
        ...i18nHead.meta
      ]
    }      
  },
  nuxtI18n: {
    paths: {
      en: '/about',
      hr: '/o-nama',
      de: '/uber-uns'     
    }
  },
  mixins: [aosMixin],
  data() {
    return {
      options: {
        loop: true,
        perPage: 5,
        navigationEnabled: false,
        centerMode: true,
        navigationClickTargetSize: 16,
        navigationNextLabel: "❯",
        navigationPrevLabel: "❮",
        spacePaddingMaxOffsetFactor: 150
      },
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
      ]
    }
  },
  mounted() {
    if (window.screen.width < 960) this.options.perPage = 3
    if (window.screen.width < 600) this.options.perPage = 2

  }
}
</script>

<style lang="scss" scoped>
.signature{
  max-width: clamp(12rem, 20vw, 15rem);
}
.block-1-rooms{
  min-height: 30vh;
}
.block-img-margin-left{
  @include block-img-margin-left
}
.text-container{
  @include text-container;
}

.img-wrapper img {
  width: 100%;
  height: auto;
  max-width: 50vw;
  max-height: 40vh;
  min-height: 40vh;
  border: 3px solid white;
  object-fit: cover;
}
.VueCarousel > .VueCarousel-navigation {
  @include flexCenter
}

</style>