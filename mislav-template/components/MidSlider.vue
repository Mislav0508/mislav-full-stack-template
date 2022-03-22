<template>
  <v-container fluid class="whole-container">
    <v-row class="d-flex flex-wrap" style="position: relative;">

      <v-col cols="12" xl="4" lg="4" md="4" sm="12" class="containers-L pa-xl-5 d-xl-flex justify-center align-center" style='z-index:999;background-color: #222222;'>
        
        <v-col class="px-xl-15 py-xl-7">

          <h2 class="mb-3">{{ type }}</h2>
          <p class="mb-0">From</p>
          <h2 class="font-weight-bold mb-10">{{ price }}</h2>

          <v-row class="mb-4 ">

            <v-col cols="6" xl="4" lg="6" md="5" sm="3" >
              <p class="font-weight-bold mb-1">bed: </p>
              <p class="font-weight-bold mb-1">capacity: </p>
              <p class="font-weight-bold mb-1">room size: </p>
              <p class="font-weight-bold mb-1">view: </p>
              <p class="font-weight-bold mb-1">recommend: </p>
            </v-col>

            <v-col cols="6" xl="5" lg="6" md="7" sm="5">
              <p class="mb-1">{{ bed }}</p>
              <p class="mb-1">{{ capacity }}</p>
              <p class="mb-1">{{ room_size }}m<sup>2</sup> </p>
              <p class="mb-1">{{ view }}</p>
              <p class="mb-1">{{ recommend }}</p>
            </v-col>

          </v-row>

          <v-row>
            <NuxtLink :to="localePath(`/rooms/${type.replace(/\s+/g, '')}`)"
            style="text-decoration:none">
              <v-btn outlined tile large color="white" width="180" type="button" class="no-uppercase">
              view detail
              </v-btn>
            </NuxtLink>
          </v-row>

        </v-col>

      </v-col>
      
      <v-col cols="12" xl="8" lg="8" md="8" sm="12" class="containers-R ma-0 pa-0 d-flex align-center">
        
          <div class="sliderMid" :id="type.replaceAll(' ','')">

            <div class="slideMid" v-for="(img, i) in image" :key="i">
              <img :src="img" alt="img" :class="imageSize[i] == 1 ? 'imagesS' : 'imagesL'">
            </div>

          </div>


      <div class="arrow-container-left" @click="prev">
        <i class="arrow left"></i>      
      </div>
      <div class="arrow-container-right" @click="next()">
        <i class="arrow right"></i>
      </div>
      </v-col>

    </v-row>
  </v-container>
</template>

<script>
export default {
  props: { 
    id: Number,
    type: String,
    price: String,
    bed: String,
    capacity: String,
    room_size: String,
    view: String,
    recommend: String,
    image: Array,
    translate: Number,
    imageSize: Array
   },
  data () {
    return {
      translateX: null,
      touchstartX: 0,
      touchendX: 0
    }
  },
  watch: {
    translateX(val) {
      console.log(val);
    }
  },
  mounted() {
    this.translateX = this.translate

    var myElements = document.querySelectorAll('.sliderMid');

    myElements.forEach((element, i) => {
      myElements[i].style.transform = "translateX(" + this.translateX + "rem)"
    })

    // TOUCH GESTURES
    const type = this.type.replaceAll(' ','')
    const slider = document.querySelector(`#${type}`)
  
    slider.addEventListener('touchstart', e => {
      this.touchstartX = e.changedTouches[0].screenX
    })

    slider.addEventListener('touchend', e => {
      this.touchendX = e.changedTouches[0].screenX
      this.handleGesture()
    })

  },
  methods: {
    next() {
      if (this.translateX < -40) return
      this.translateX = this.translateX - 30
      var myElements = document.querySelectorAll('.sliderMid');
      let id = this._props.id
      myElements[id - 1].style.transform = "translateX(" + this.translateX + "rem)"
    },
    prev() {
      if (this.translateX >= 50) return
      this.translateX = this.translateX + 30
      var myElements = document.querySelectorAll('.sliderMid');
      let id = this._props.id
      myElements[id - 1].style.transform = "translateX(" + this.translateX + "rem)"
    },
    handleGesture() {
      if (this.touchendX < this.touchstartX) this.next()
      if (this.touchendX > this.touchstartX) this.prev()
    }
  }
}
</script>

<style lang="scss" scoped>
p, h2{
  letter-spacing: 0px ;
}
.whole-container{
  background-color: #222222;
  color: var(--primary);
}
.containers-L, .containers-R{
  min-height: 55vh;
  max-height: 55vh;
}
@media screen and (max-width: 1264px) {
  .containers-L, .containers-R{
    max-height: 65vh;
  }
  .sliderMid{
    max-height: 65vh;
  }
  .imagesL{
    max-height: 65vh;
  }
  .imagesS{
    max-height: 65vh;
  }
}
@media screen and (max-width: 960px) {
  .containers-L{
    max-height: 50vh;
    min-height: 50vh;
  }
}
@media screen and (max-width: 600px) {
  .containers-L{
    max-height: 80vh;
    min-height: 80vh;
    min-height: 55vh;
    max-height: 55vh;
  }
}
  p{
    color: var(--primary);
  }
  h2{
    color: var(--primary);
  }
.sliderMid{
  background: var(--secondary);
  width: 100%;
  min-height: 55vh;
  max-height: 55vh;
  @include flexCenter;
  transition: transform 0.9s ease-out;
  /* transform: translateX(45vw); */
}
.slideMid{
  display: flex;
  transition: transform 0.9s ease-out;
  /* z-index: 9999999; */
}
.imagesL{
  /* object-fit: cover; */
  position: relative;
  min-width: 100%;
  min-height: 55vh;
  max-height: 55vh;
  z-index: 0;
  transition: transform 0.9s ease-out;
  /* transform: translateX(0); */
}
.imagesS{
  min-width: 100%;
  min-height: 55vh;
  max-height: 55vh;
  z-index: 0;
  transition: transform 0.9s ease-out;
  /* transform: translateX(0); */
}
@media screen and (min-width: 2560px) {
  .sliderMid, .imagesL, .imagesS, .containers-L, .containers-R {
    min-height: 35vh;
    max-height: 35vh;
  }
}
/* ARROWS */
.arrow-container-left{
  // top: 25vh; 
  left: 35vw;
  position: absolute;
  padding: 0.7rem 0.8rem 0.6rem 1.1rem;  
  cursor: pointer;
  transition: all 0.1s linear;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 100%;
  &:hover{
    transform: translateX(-0.4vw);
    background: rgba(0, 0, 0, 0.5);
  }
}
.arrow-container-right{
  // top: 25vh;
  right: 3vw;
  position: absolute;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 100%;
  padding: 0.7rem 1.1rem 0.6rem  0.8rem;
  cursor: pointer;
  transition: all 0.1s linear;
  &:hover{
    transform: translateX(0.4vw);
    background: rgba(0, 0, 0, 0.5);
  }
}
@media screen and (max-width: 960px) {
  .arrow-container-left{
    left: 3vw;
  }
}
@media screen and (max-width: 600px) {
  .arrow-container-left{
    top: 80vh; 
    left: 3vw;    
  }
  .arrow-container-right{
    top: 80vh; 
    right: 3vw;
  }
}
.arrow {
  border: solid var(--primary);
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 0.3rem;
  position: relative;
  cursor: pointer;
  z-index: 5;
  transition: all 0.3s linear;
}
.right {
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);  
}
.left {
  transform: rotate(135deg);
  -webkit-transform: rotate(135deg);  
}


.no-uppercase {
  text-transform: unset !important;
  font-weight: bold;
}
</style>