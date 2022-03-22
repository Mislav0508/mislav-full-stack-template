<template>
  <v-container fluid id="wrapper" class="pa-0">

    <v-container fluid class="room-block-1 d-flex justify-center">

      <img src="/images/home/midSlider/midSlider-1.jpg" alt="">
      <v-row class="title-container flex-column">
        <h1>{{ title }}</h1>
        <p>{{ subtitle }}</p>
      </v-row>
      <v-row class="anchors" style="cursor:pointer">
        <p @click="handleScroll">DETAIL</p>
        <p class="px-10" @click="handleScroll">AMENITIES & SERVICES</p>
        <p @click="handleScroll">GALLERY</p>
      </v-row>

    </v-container>

    <v-container fluid class="card-wrapper pb-0">

      <v-container class="card py-15">
        <v-row>

          <v-col cols="12" xl="8" lg="8" md="8" sm="12" class="px-5">
            <h2 class="pb-10" ref="descriptionTitle">{{ description.title }}</h2>
            <p>{{ description.paragraph_1 }}</p>
            <p>{{ description.paragraph_2 }}</p>
            <p>{{ description.paragraph_3 }}</p>
          </v-col>

          <v-col cols="12" xl="4" lg="4" md="4" sm="12" class="d-flex flex-column justify-space-around px-10">

            <p>FROM</p>
            <h2>${{ description.price }}</h2>
            <v-btn tile outlined color="#222" class="my-10">Book Now</v-btn>

            <v-row>

              <v-col cols="3" xl="3" lg="3" md="3" sm="3" class="d-flex flex-column justify-space-between">
                <img src="/images/rooms/icons/icon_bed.png" alt="">
                <img src="/images/rooms/icons/icon_people.png" alt="">
                <img src="/images/rooms/icons/icon_size.png" alt="">
                <img src="/images/rooms/icons/icon_view.png" alt="">
              </v-col>

              <v-col cols="9" xl="9" lg="9" md="9" sm="9" class="d-flex flex-column justify-space-between">
                <p>{{ description.bed }}</p>
                <p>{{ description.capacity }}</p>
                <p>{{ description.size }}m<sup>2</sup></p>
                <p>{{ description.view }}</p>
              </v-col>

            </v-row>
            
          </v-col>

        </v-row>
      </v-container>

    </v-container>

    <v-container fluid class="amenities-container py-15" ref="amenities">
      <v-row class="py-15">

        <v-col cols="0" xl="2" lg="2" md="1" sm="1"></v-col>

        <v-col cols="12" xl="2" lg="2" md="2" sm="2">
          <v-row class="d-flex justify-center pb-5">
            <img src="/images/rooms/icons/icon_amenities.png" alt="" >
            <h3>Amenities</h3>
          </v-row>
        </v-col>

        <v-col cols="12" xl="2" lg="2" md="3" sm="3">
          <ul>
            <li v-for="(amenity,i) in amenities" :key=i>{{ amenity }}</li>
          </ul>
        </v-col>

        <v-col cols="12" xl="2" lg="2" md="2" sm="2">
          <v-row class="d-flex justify-center pb-5">
            <img src="/images/rooms/icons/icon_services.png" alt="" >
            <h3>Services</h3>
          </v-row>
        </v-col>

        <v-col cols="12" xl="2" lg="2" md="3" sm="3">
          <ul>
            <li v-for="(service,i) in services" :key=i>{{ service }}</li>
          </ul>
        </v-col>

        <v-col cols="0" xl="2" lg="2" md="1" sm="1"></v-col>

      </v-row>
    </v-container>

    <v-container class="d-flex align-center justify-center flex-wrap py-15" ref="gallery">
      <RoomCard v-for="(img, i) in images" :key="i"
      :image="images[i]"
      :type="types[i]"
      :size="sizes[i]"
      :adults="capacity.adults[i]"
      :children="capacity.children[i]"
      :price="prices[i]"/>  
    </v-container> 

  </v-container>
</template>

<style lang="scss" scoped>
// BLOCK 1
.room-block-1{
  position: relative;
  min-height: 75vh;
}
.room-block-1 > img{
  min-width: 100vw;
  min-height: 75vh;
  max-height: 75vh;
  object-fit: cover;
  filter: brightness(70%);
}
.title-container{
  position: absolute;
  top: 30%;
  color: var(--primary);  
  text-align: center;
}
.anchors{
  position: absolute;
  bottom: 20%;
  color: var(--primary);
}
// BLOCK 2 CARD
.card-wrapper {
  position: relative;
  @include flexCenter;
  min-height: 55vh;
}
.card{
  position: relative;
  min-height: 75vh;
  max-width: 70%;
  margin-top: -15vh;
  box-shadow: 0 20px 30px 0 rgb(1 1 1 / 10%);
  padding: 3rem 3rem 0 3rem;
  background: var(--primary);
}
img {
  max-width: 3rem;
  max-height: 3vh;
}
@media only screen and (max-width: 1264px) {
  .card {
    max-width: 90%;
  }
}
@media only screen and (max-width: 600px) {
  .card-wrapper{
    padding-left: 0;
    padding-right: 0;
  }
  .card {
    max-width: 100%;
    padding: 10px;
  }
  img {
    max-width: 7vw;
    max-height: 7vh;
  }
}

// BLOCK 3 AMENITIES
.amenities-container{
  position: relative;
  min-height: 55vh;
  min-width: 100vw;
  background: var(--secondary);
  h3,li {
    color: var(--primary);
    padding-bottom: 1rem;
    padding-left: 1rem;
  }
  li::before {
  content: '➤';
  position: absolute;
  left: 0;
  }
  img {
    min-height: 2vw;
  }
  ul {
  position: relative;
  list-style: none;
}
}
// BLOCK 4 ROOMS
h2{
  letter-spacing: 0px ;
}


</style>

<script>
import RoomCard from "../../components/RoomCard.vue"
import aosMixin from "../../mixins/aos"
export default {
  // IF ROOMS HAVE DIFFERENT TRANSLATED NAMES THEY CAN BE TRANSLATED LIKE THIS:
  // async asyncData ({ store }) {
  //   await store.dispatch('i18n/setRouteParams', {
  //     en: { room: 'my-post' },
  //     hr: { room: 'moja-soba' },
  //     de: { room: 'mein-zimmer' }
  //   }) 
  // },
  head() {
  const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true })
  return {
    title: this.$t('seo.seo_rooms_title'),
    meta: [ // Each object in this array is its own meta tag
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial scale=1' },
      { hid: 'description', name: 'description', content: this.$t('seo.seo_rooms_description') + ` - ${ this.params}` },
      ...i18nHead.meta
    ]
  }      
  },
  nuxtI18n: {
    paths: {
      en: '/our-rooms/:room',
      hr: '/sobe/:room',
      de: '/unsere-zimmer/:room'
    }
  },
  mixins: [aosMixin],
  data () {
    return {
      params: '',
      title: '',
      subtitle: '',
      description: {
        title: '',
        paragraph_1: '',
        paragraph_2: '',
        paragraph_3: '',
        price: '',
        bed: '',
        capacity: '',
        size: '',
        view: ''
      },
      amenities: {
        1: '',
        2: '',
        3: '',
        4: '',
        5: '',
        6: '',
        7: '',
        8: '',
        9: '',
      },
      services: {
        1: '',
        2: '',
        3: '',
        4: '',
        5: ''
      },
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
  },
  methods: {
    handleScroll: function(e) {
      if (e.target.innerHTML == 'DETAIL') {
        this.$refs.descriptionTitle.scrollIntoView({ behavior: 'smooth' });
      } else if(e.target.innerHTML == 'AMENITIES &amp; SERVICES') {
        this.$refs.amenities.scrollIntoView({ behavior: 'smooth' })
      } else if (e.target.innerHTML == 'GALLERY') {
        this.$refs.gallery.scrollIntoView({ behavior: 'smooth' })
      }
      
    }
  },
  mounted() {
    if (this.$route.params.room.includes('SuperiorRoom')) {
      this.title = 'Superior Room'
      this.subtitle = 'GREAT FOR SUPERIOR TRIP'
      this.description.title = 'Great choice for a relaxing vacation for families with children or a group of friends.'
      this.description.paragraph_1 = 'Exercitation photo booth stumptown tote bag Banksy, elit small batch freegan sed. Craft beer elit seitan exercitation, photo booth et 8-bit kale chips proident chillwave deep v laborum. Aliquip veniam delectus, Marfa eiusmod Pinterest in do umami readymade swag. Selfies iPhone Kickstarter, drinking vinegar jean vinegar stumptown yr pop-up artisan.'
      this.description.paragraph_2 = 'See-through delicate embroidered organza blue lining luxury acetate-mix stretch pleat detailing. Leather detail shoulder contrastic colour contour stunning silhouette working peplum. Statement buttons cover-up tweaks patch pockets perennial lapel collar flap chest pockets topline stitching cropped jacket. Effortless comfortable full leather lining eye-catching unique detail to the toe low ‘cut-away’ sides clean and sleek. Polished finish elegant court shoe work duty stretchy slingback strap mid kitten heel this ladylike design slingback strap mid kitten heel this ladylike design.'
      this.description.paragraph_3 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel molestie nisl. Duis ac mi leo. Mauris at convallis erat. Aliquam interdum semper luctus. Aenean ex tellus, gravida ut rutrum dignissim, malesuada vitae nulla. Sed viverra, nisl dapibus lobortis porttitor.'
      this.description.price = '249'
      this.description.bed = 'King Bed'
      this.description.capacity = '3 Adults  1 Children '
      this.description.size = '55'
      this.description.view = 'Sea view'
      this.amenities = {
        1: '40-inch Samsung® LED TV',
        2: 'Electronic safe with charging facility',
        3: 'iHome™ Bluetooth MP3 Player',
        4: 'Iron and ironing board',
        5: 'Mini bar',
        6: 'Non-smoking',
        7: 'USB charging station',
        8: 'Wired and wireless broadband Internet access',
        9: 'Work desk',
      },
      this.services = {
        1: 'Free-to-use smartphone (Free )',
        2: 'Safe-deposit box (Free )',
        3: 'Luggage storage (Free )',
        4: 'Childcare ($60 / Once / Per Accommodation )',
        5: 'Massage ($15 / Once / Per Guest )'
      },
      this.images = this.images.filter(img => img !== this.images[0])
      this.types = this.types.filter(x => x !== this.types[0])
      this.sizes = this.sizes.filter(x => x !== this.sizes[0])
      this.capacity.adults = this.capacity.adults.filter(x => x !== this.capacity.adults[0])
      this.capacity.children = this.capacity.children.filter(x => x !== this.capacity.children[0])
      this.prices = this.prices.filter(x => x !== this.prices[0])
    } else if (this.$route.params.room.includes('DeluxeRoom')) {
      this.title = 'Deluxe Room'
      this.subtitle = 'GREAT FOR DELUXE TRIP'
      this.description.title = 'Great choice for a relaxing vacation for families with children or a group of friends.'
      this.description.paragraph_1 = 'Exercitation photo booth stumptown tote bag Banksy, elit small batch freegan sed. Craft beer elit seitan exercitation, photo booth et 8-bit kale chips proident chillwave deep v laborum. Aliquip veniam delectus, Marfa eiusmod Pinterest in do umami readymade swag. Selfies iPhone Kickstarter, drinking vinegar jean vinegar stumptown yr pop-up artisan.'
      this.description.paragraph_2 = 'See-through delicate embroidered organza blue lining luxury acetate-mix stretch pleat detailing. Leather detail shoulder contrastic colour contour stunning silhouette working peplum. Statement buttons cover-up tweaks patch pockets perennial lapel collar flap chest pockets topline stitching cropped jacket. Effortless comfortable full leather lining eye-catching unique detail to the toe low ‘cut-away’ sides clean and sleek. Polished finish elegant court shoe work duty stretchy slingback strap mid kitten heel this ladylike design slingback strap mid kitten heel this ladylike design.'
      this.description.paragraph_3 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel molestie nisl. Duis ac mi leo. Mauris at convallis erat. Aliquam interdum semper luctus. Aenean ex tellus, gravida ut rutrum dignissim, malesuada vitae nulla. Sed viverra, nisl dapibus lobortis porttitor.'
      this.description.price = '249'
      this.description.bed = 'King Bed'
      this.description.capacity = '3 Adults  1 Children '
      this.description.size = '55'
      this.description.view = 'Sea view'
      this.amenities = {
        1: '40-inch Samsung® LED TV',
        2: 'Electronic safe with charging facility',
        3: 'iHome™ Bluetooth MP3 Player',
        4: 'Iron and ironing board',
        5: 'Mini bar',
        6: 'Non-smoking',
        7: 'USB charging station',
        8: 'Wired and wireless broadband Internet access',
        9: 'Work desk',
      },
      this.services = {
        1: 'Free-to-use smartphone (Free )',
        2: 'Safe-deposit box (Free )',
        3: 'Luggage storage (Free )',
        4: 'Childcare ($60 / Once / Per Accommodation )',
        5: 'Massage ($15 / Once / Per Guest )'
      },
      this.images = this.images.filter(img => img !== this.images[1])
      this.types = this.types.filter(x => x !== this.types[1])
      this.sizes = this.sizes.filter(x => x !== this.sizes[1])
      this.capacity.adults = this.capacity.adults.filter(x => x !== this.capacity.adults[1])
      this.capacity.children = this.capacity.children.filter(x => x !== this.capacity.children[1])
      this.prices = this.prices.filter(x => x !== this.prices[1])
    } else if (this.$route.params.room.includes('SignatureRoom')) {
      this.title = 'Signature Room'
      this.subtitle = 'GREAT FOR SIGNATURE TRIP'
      this.description.title = 'Great choice for a relaxing vacation for families with children or a group of friends.'
      this.description.paragraph_1 = 'Exercitation photo booth stumptown tote bag Banksy, elit small batch freegan sed. Craft beer elit seitan exercitation, photo booth et 8-bit kale chips proident chillwave deep v laborum. Aliquip veniam delectus, Marfa eiusmod Pinterest in do umami readymade swag. Selfies iPhone Kickstarter, drinking vinegar jean vinegar stumptown yr pop-up artisan.'
      this.description.paragraph_2 = 'See-through delicate embroidered organza blue lining luxury acetate-mix stretch pleat detailing. Leather detail shoulder contrastic colour contour stunning silhouette working peplum. Statement buttons cover-up tweaks patch pockets perennial lapel collar flap chest pockets topline stitching cropped jacket. Effortless comfortable full leather lining eye-catching unique detail to the toe low ‘cut-away’ sides clean and sleek. Polished finish elegant court shoe work duty stretchy slingback strap mid kitten heel this ladylike design slingback strap mid kitten heel this ladylike design.'
      this.description.paragraph_3 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel molestie nisl. Duis ac mi leo. Mauris at convallis erat. Aliquam interdum semper luctus. Aenean ex tellus, gravida ut rutrum dignissim, malesuada vitae nulla. Sed viverra, nisl dapibus lobortis porttitor.'
      this.description.price = '249'
      this.description.bed = 'King Bed'
      this.description.capacity = '3 Adults  1 Children '
      this.description.size = '55'
      this.description.view = 'Sea view'
      this.amenities = {
        1: '40-inch Samsung® LED TV',
        2: 'Electronic safe with charging facility',
        3: 'iHome™ Bluetooth MP3 Player',
        4: 'Iron and ironing board',
        5: 'Mini bar',
        6: 'Non-smoking',
        7: 'USB charging station',
        8: 'Wired and wireless broadband Internet access',
        9: 'Work desk',
      },
      this.services = {
        1: 'Free-to-use smartphone (Free )',
        2: 'Safe-deposit box (Free )',
        3: 'Luggage storage (Free )',
        4: 'Childcare ($60 / Once / Per Accommodation )',
        5: 'Massage ($15 / Once / Per Guest )'
      },
      this.images = this.images.filter(img => img !== this.images[2])
      this.types = this.types.filter(x => x !== this.types[2])
      this.sizes = this.sizes.filter(x => x !== this.sizes[2])
      this.capacity.adults = this.capacity.adults.filter(x => x !== this.capacity.adults[2])
      this.capacity.children = this.capacity.children.filter(x => x !== this.capacity.children[2])
      this.prices = this.prices.filter(x => x !== this.prices[2])
    } else if (this.$route.params.room.includes('Luxury')) {
      this.title = 'Luxury Suite Room'
      this.subtitle = 'GREAT FOR LUXURY TRIP'
      this.description.title = 'Great choice for a relaxing vacation for families with children or a group of friends.'
      this.description.paragraph_1 = 'Exercitation photo booth stumptown tote bag Banksy, elit small batch freegan sed. Craft beer elit seitan exercitation, photo booth et 8-bit kale chips proident chillwave deep v laborum. Aliquip veniam delectus, Marfa eiusmod Pinterest in do umami readymade swag. Selfies iPhone Kickstarter, drinking vinegar jean vinegar stumptown yr pop-up artisan.'
      this.description.paragraph_2 = 'See-through delicate embroidered organza blue lining luxury acetate-mix stretch pleat detailing. Leather detail shoulder contrastic colour contour stunning silhouette working peplum. Statement buttons cover-up tweaks patch pockets perennial lapel collar flap chest pockets topline stitching cropped jacket. Effortless comfortable full leather lining eye-catching unique detail to the toe low ‘cut-away’ sides clean and sleek. Polished finish elegant court shoe work duty stretchy slingback strap mid kitten heel this ladylike design slingback strap mid kitten heel this ladylike design.'
      this.description.paragraph_3 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel molestie nisl. Duis ac mi leo. Mauris at convallis erat. Aliquam interdum semper luctus. Aenean ex tellus, gravida ut rutrum dignissim, malesuada vitae nulla. Sed viverra, nisl dapibus lobortis porttitor.'
      this.description.price = '249'
      this.description.bed = 'King Bed'
      this.description.capacity = '3 Adults  1 Children '
      this.description.size = '55'
      this.description.view = 'Sea view'
      this.amenities = {
        1: '40-inch Samsung® LED TV',
        2: 'Electronic safe with charging facility',
        3: 'iHome™ Bluetooth MP3 Player',
        4: 'Iron and ironing board',
        5: 'Mini bar',
        6: 'Non-smoking',
        7: 'USB charging station',
        8: 'Wired and wireless broadband Internet access',
        9: 'Work desk',
      },
      this.services = {
        1: 'Free-to-use smartphone (Free )',
        2: 'Safe-deposit box (Free )',
        3: 'Luggage storage (Free )',
        4: 'Childcare ($60 / Once / Per Accommodation )',
        5: 'Massage ($15 / Once / Per Guest )'
      },
      this.images = this.images.filter(img => img !== this.images[3])
      this.types = this.types.filter(x => x !== this.types[3])
      this.sizes = this.sizes.filter(x => x !== this.sizes[3])
      this.capacity.adults = this.capacity.adults.filter(x => x !== this.capacity.adults[3])
      this.capacity.children = this.capacity.children.filter(x => x !== this.capacity.children[3])
      this.prices = this.prices.filter(x => x !== this.prices[3])
    }

    let params = $nuxt.$route.params.room
    params = params.split('Room')
    this.params = params[0]
    console.log(this.params);
  }
}
</script>

