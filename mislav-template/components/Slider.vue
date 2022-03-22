<template>

  <section class="slider">

    <div class="slide"
      v-for="(image, i) in images" :key="i" 
      :class="[ i === index ? 'activeSlide' :  i === index - 1 || (index === 0 && i === images.length - 1) ? 'lastSlide' : 'nextSlide' ]"
      >
      <img :src="image" alt="img" >
      <h1 ref="title" :class="[ i === index ? 'activeTitle text-center font-weight-medium mb-15 px-1' : 'text-center font-weight-medium mb-15 px-1' ]">{{ $t(`slider.titles.${titles[i]}`) }} </h1>
      <p ref="subtitle" :class="[ i === index ? 'activeSubtitle text-center font-weight-regular mb-15 pt-5 pt-sm-10 pb-15 px-5' : 'text-center font-weight-regular mb-15 pt-5 pt-sm-10 pb-15 px-5' ]">{{ $t(`slider.subtitles.${subtitles[i]}`) }}</p>
    </div>
    <div class="arrow-container-left d-none d-sm-flex" @click="prev">
      <i class="arrow left"></i>      
    </div>
    <div class="arrow-container-right d-none d-sm-flex"  @click="next">
      <i class="arrow right"></i>
    </div>
    
    <v-container style="position: absolute; bottom: 10vh;"   class="d-flex justify-center">
      <div v-for="(image, i) in images" :key="i"
      class="slider-line" 
      :id="[ i === index && 'slider-line-active' ]"
      @click="index = i"
      ></div>
      
    </v-container>

  </section>


</template>

<script>
export default {
  data () {
      return {
          index: 0,
          interval: null,
          position: 'nextSlide',
          rectLast: null,
          rectActive: null,
          rectNext: null,
          images: [
          "/images/slider/slider-home-8.jpeg",
          "/images/slider/slider-home-6.jpeg",
          "/images/slider/slider-home-11.jpeg",
          "/images/slider/slider-home-2.jpg",
          ],
          titles: [
            "one",
            "two",
            "three",
            "four",
          ],
          subtitles: [
            "one",
            "two",
            "three",
            "four",
          ],
          touchstartX: 0,
          touchendX: 0
      }
    }, 
  methods: {
      prev() {
        this.index = this.index - 1
      },
      next() {
        this.index = this.index + 1
      },
      handleGesture() {
      if (this.touchendX < this.touchstartX) this.next()
      if (this.touchendX > this.touchstartX) this.prev()
      }
  },
  watch: {
    index() {
      const lastIndex = this.images.length - 1
      if (this.index < 0) {
        this.index = lastIndex
      }
      if (this.index > lastIndex) {
        this.index = 0
      }
      clearInterval(this.interval)
      this.interval = setInterval(() => {
        this.next() 
      }, 100000);
    },
    touchstartX() {
       
    }
  },
  mounted() {
    this.interval = setInterval(() => {
      this.next() 
    }, 100000);

    const slider = document.querySelector('.slider')

    slider.addEventListener('touchstart', e => {
      this.touchstartX = e.changedTouches[0].screenX
    })

    slider.addEventListener('touchend', e => {
      this.touchendX = e.changedTouches[0].screenX
      this.handleGesture()
    })
    
    let title = this.$refs.title
    title[0].classList.remove("activeTitle")
    let subtitle = this.$refs.subtitle
    subtitle[0].classList.remove("activeSubtitle")
  },
}
</script>

<style lang="scss" scoped>
p{
  font-size: clamp(16px, 0.5vw, 18px);
}

.slider{
  position: relative;
  width: 100vw;
  min-height: 89vh;
  max-height: 89vh;
  @include flexCenter;
  background: rgba(0, 0, 0, 0.8);
  
}
.slide{
  opacity: 0;
  position: absolute;
  @include flexCenter;
}
.slide.activeSlide {
  opacity: 1;
  position: absolute;
  transform: translateX(0);
  transition: all 1s ease-out;
}
.slide.lastSlide {
  position: absolute;
  transform: translateX(-100%);
  transition: all 1s ease-out;
}
.slide.nextSlide {
  position: absolute;
  transform: translateX(100%);
  transition: all 1s ease-out;
}
img{
  width: 100vw;
  min-height: 89vh;
  max-height: 89vh;
  object-fit: cover;
  filter: brightness(80%);
}
h1,p{
  position: absolute;
  color: var(--primary);
  line-height: 1.2;
}
p{
  margin-top: 18vh;
}
@keyframes activeTitle {
  0%   { opacity: 0; transform: translateY(25vh);}
  25%   { opacity: 0; transform: translateY(25vh);}
  50%  {opacity: 0; transform: translateY(10vh)}
  100% {opacity: 1; transform: translateY(0vh);}
}
.activeTitle{
  animation-name: activeTitle;
  animation-duration: 2s;
  text-align: center;
}
@keyframes activeSubtitle {
  0%   { opacity: 0; transform: translateY(25vh);}
  25%   { opacity: 0; transform: translateY(25vh);}
  50%  {opacity: 0; transform: translateY(10vh)}
  100% {opacity: 1; transform: translateY(0vh);}
}
.activeSubtitle{
  text-align: center;
  animation-name: activeSubtitle;
  animation-duration: 2.5s;
}
.slider-line{
  position: relative;
  min-width: clamp(2rem, 2vw, 2.5rem);
  min-height: 3px;
  background: var(--primary);
  // border-radius: 5px;
  box-shadow: 0 2px 5px rgba(255,101,47,.2);
  cursor: pointer;
  margin: 0 0.4rem;
  opacity: 0.5;  
  &:hover{
    opacity: 1;
  }
}
#slider-line-active{
  opacity: 1;
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