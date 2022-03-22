<template>
  <div>
    <v-container data-aos="fade-up" 
    data-aos-duration="500"
    data-aos-easing="ease-out"
    data-aos-once="true"
    >

      <v-row class="d-flex align-stretch justify-center flex-column text-center px-5 pb-5" style="overflow:hidden;">

      <NuxtLink :to="localePath(`/rooms/${type.replace(/\s+/g, '')}`)">
        <v-row class="img-container d-flex align-center justify-center" >
          <div class="add"></div>
          <img :src="image" alt="img" class="card-img">
        </v-row>
      </NuxtLink>

      <v-row class="d-flex align-center justify-center py-5 mt-5">
        <h2>{{ type }}</h2>
      </v-row>

      <v-row class="d-flex align-center justify-center">
        <v-col cols="4" xl="4" lg="4" md="4" sm="4">
          <h3>{{ size }}</h3> 
          <p>SIZE m<sup>2</sup></p>
        </v-col>
        <v-col cols="4" xl="4" lg="4" md="4" sm="4" class="d-flex align-center justify-center flex-column vl">
          <h3>{{ adults }}</h3>
          <p>MAX ADULTS</p>
        </v-col>
        <v-col cols="4" xl="4" lg="4" md="4" sm="4" class="d-flex align-center justify-center flex-column vl">
          <h3>{{ children }}</h3>
          <p>MAX CHILDREN</p>
        </v-col>
      </v-row>

      <v-row class="d-flex align-center justify-center pt-5">
        <p class="text-decoration-underline font-weight-bold">BOOK NOW FROM ${{ price }}</p>
      </v-row>

      </v-row>

    </v-container>
  </div>
</template>

<script>
export default {
  props: {
    image: String,
    type: String,
    size: Number,
    adults: Number,
    children: Number,
    price: Number
  }

}
</script>

<style lang="scss" scoped>
h2{
  font-size: clamp(20px, 5vw, 30px);
  line-height: 1.2em;
  color: var(--secondary);
  font-weight: 600;
}
.vl {
  border-left: 1px solid #222222;
  height: 70px;
}

// PLUS SIGN
.img-container{
  @include img-container;
}
.add {
  @include add;  
}
// horizontal
.add::before{
  content: '';
  position: absolute;
  left: 250%;
  top: 50%;
  width: 60px;
  margin-left: -40px;
  margin-top: -5px;
  border-top: 2px solid;
  transition: all 0.35s ease;
}
// vertical
.add::after {
 content: '';
 position: absolute;
 left: 55%;
 top: -120%;
 height: 60px;
 margin-left: -5px;
 margin-top: -40px;
 border-left: 2px solid;
 transition: all 0.35s ease;
}
// IMAGES
.card-img {
  max-width: 15vw;
  min-width: 15vw;
  max-height: 20vh;
  object-fit: cover;
}
@media only screen and (max-width: 1264px) {
  .card-img {
  max-width: 20rem;
  min-width: 20rem;
  max-height: 15rem;
  min-height: 15rem;
}
}
</style>