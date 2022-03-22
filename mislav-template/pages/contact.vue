<template>
  <div>

    <v-container class="block-1-rooms d-flex align-center pt-lg-15 mt-10">

      <v-col cols="0" xl="2" lg="2" md="1" sm="1"></v-col>

      <v-col cols="12" xl="10" lg="10" md="11" sm="11" class="mt-15 mt-sm-0 pr-10 pr-sm-0">
        <h2 data-aos="fade-right" 
        data-aos-duration="1000"
        data-aos-easing="ease-out"
        data-aos-delay="500"
        data-aos-once="true" class="pt-10 pb-2">Apartments in Novi Vinodolski</h2>
        <p class="pb-5" data-aos="fade-right" 
        data-aos-duration="1000"
        data-aos-easing="ease-out"
        data-aos-delay="1000"
        data-aos-once="true">Unwind the clock of modern life. Unlock the door to a wonder of the world.</p>
      </v-col>      

    </v-container>

    <v-container fluid class="px-0">
      <GMap
        ref="gMap"
        language="en"
        :cluster="{options: {styles: clusterStyle}}"
        :center="{lat: locations[0].lat, lng: locations[0].lng}"
        :options="{fullscreenControl: true, mapTypeControl:true,styles: mapStyle}"
        :zoom="13"
        mapTypeId='terrain'
      >
        <GMapMarker
          v-for="location in locations"
          :key="location.id"
          :position="{lat: location.lat, lng: location.lng}"
          @click="currentLocation = location"
        >
          <GMapInfoWindow :options="{maxWidth: 200}">
            <code>
              lat: {{ location.lat }},
              lng: {{ location.lng }}
            </code>
          </GMapInfoWindow>
        </GMapMarker>
        <GMapCircle :options="circleOptions"/>
      </GMap>
    </v-container>

    <v-container>
      <v-row>

        <v-col cols="0" xl="2" lg="2" md="2" sm="0"></v-col>

        <v-col cols="12" xl="8" lg="8" md="8" sm="12" class="d-flex align-center justify-center py-5">

          <v-col cols="4" xl="4" lg="4" md="4" sm="4">
            <h3>Our Address</h3>
            <p>Pod Sveti Mikulj, Novi Vinodolski <br> renata@apartments.com</p>
          </v-col>
          <v-col cols="4" xl="4" lg="4" md="4" sm="4">
            <h3>By Car</h3>
            <p>Approximately 1 and a half hours from Zagreb, or 40 minutes from Rijeka</p>
          </v-col>
          <v-col cols="4" xl="4" lg="4" md="4" sm="0">
            <h3>By Plane</h3>
            <p>40min away from the nearest airport in Rijeka</p>
          </v-col>

        </v-col>

        <v-col cols="0" xl="2" lg="2" md="2" sm="1"></v-col>

      </v-row>
    </v-container>

    <v-container class="py-10 mb-sm-10">
      <v-row class="d-flex align-center justify-center">

        <v-col cols="12" xl="2" lg="2" md="1" sm="12"></v-col>

        <v-col cols="12" xl="5" lg="5" md="6" sm="12">
          <ContactForm />
        </v-col>

        <v-col cols="12" xl="3" lg="3" md="4" sm="12">
          <v-card
            elevation="2"
            tile
            class="pa-5 text-center"
          >
            <h3 class="pb-5">Renatas Apartments</h3>
            <p>Pod Sveti Mikulj 7</p>
            <p>Novi Vinodolski</p>
            <p>Tel.: +41 (0)54 2344 00</p>
            <p>Fax: +41 (0)542344 99</p>
            <p>revs@hotellerbeach.com</p>
          </v-card>
          
        </v-col>

        <v-col cols="12" xl="2" lg="2" md="1" sm="12"></v-col>

      </v-row>
    </v-container>


  </div>
</template>

<script>
import aosMixin from "../mixins/aos"
import ContactForm from "../components/ContactForm.vue"
export default {
  head() {
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true })
    return {
      title: this.$t('seo.seo_contact_title'),
      meta: [ // Each object in this array is its own meta tag
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial scale=1' },
        { hid: 'description', name: 'description', content: this.$t('seo.seo_contact_description') },
        ...i18nHead.meta
      ]
    }      
  },
  nuxtI18n: {
    paths: {
      en: '/contact',
      hr: '/kontakt',
      de: '/kontakt'     
    }
  },
  mixins: [aosMixin],
  data() {
  return {
    fullscreenControl: true,
    currentLocation: { 
      lat: 45.130149286110075, 
      lng: 14.775744856159324
     },
    circleOptions: {
      strokeColor: "#FF0000",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#FF0000",
      fillOpacity: 0.35
    },
    locations: [
      {
        lat: 45.130149286110075, 
        lng: 14.775744856159324
      }
    ],
    pins: {
      selected: "https://developers.google.com/maps/documentation/javascript/examples/full/images/",
      notSelected: "https://developers.google.com/maps/documentation/javascript/examples/full/images/"
    },
    mapStyle: [
      {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [{ color: "#e9bc62" }],
      },
    ],
    clusterStyle: [
      {
        url: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m1.png",
        width: 56,
        height: 56,
        textColor: "#fff"
      }
    ]
  }
}

}
</script>

<style >
.block-1-rooms{
  min-height: 30vh;
}
.GMap__Wrapper {
  width: 100%;
  height: 60vh;
}

</style>