<template>
  <div>
    <div :class="!sidebar ? 'sidebar' : 'sidebar show-sidebar'">
      <!-- <img src="/images/logo.svg" alt="" style="position:fixed;top:-15vh;transform:scale(0.15)"> -->

      <v-container class="d-flex align-center flex-column">
        <v-row class="d-flex align-start flex-column">
          <NuxtLink :to="localePath('/')" class="link-sidebar">{{
            $t("navbar.home")
          }}</NuxtLink>

          <div
            class="d-flex align-start flex-column"
            @click="dropdown = !dropdown"
          >
            <div class="d-flex align-center">
              <p class="link-sidebar py-1" style="cursor: pointer">
                {{ $t("navbar.our_rooms") }}
              </p>
              <i
                :class="dropdown ? 'up-arrow-scroll' : 'down-arrow-scroll'"
              ></i>
            </div>
            <div
              class="linksContainer d-flex justify-center flex-column align-start"
              ref="linksContainerRef"
            >
              <div
                class="links d-flex justify-center flex-column align-start"
                ref="linksRef"
              >
                <NuxtLink
                  :to="localePath('/rooms')"
                  style="text-decoration: none"
                >
                  <v-list-item-title
                    class="link-sidebar"
                    style="font-size: 15px"
                    >‣ {{ $t("navbar.rooms.rooms") }}</v-list-item-title
                  >
                </NuxtLink>
                <NuxtLink
                  v-for="(room, i) in rooms"
                  :key="i"
                  :to="localePath(`/rooms/${room.replace(/\s+/g, '')}Room`)"
                  class="link-sidebar"
                  style="font-size: 15px"
                >
                  ‣ {{ $t(`navbar.rooms.${room}`) }}
                </NuxtLink>
              </div>
            </div>
          </div>

          <div class="d-flex justify-center align-start flex-column">
            <NuxtLink :to="localePath('/about')" class="link-sidebar">{{
              $t("navbar.about")
            }}</NuxtLink>

            <NuxtLink :to="localePath('/gallery')" class="link-sidebar">{{
              $t("navbar.gallery")
            }}</NuxtLink>

            <NuxtLink :to="localePath('/explore')" class="link-sidebar">{{
              $t("navbar.explore")
            }}</NuxtLink>

            <NuxtLink :to="localePath('/contact')" class="link-sidebar">{{
              $t("navbar.contact")
            }}</NuxtLink>

            <NuxtLink :to="localePath('/privacypolicy')" class="link-sidebar"
              >Privacy Policy</NuxtLink
            >
          </div>
        </v-row>
      </v-container>

      <div class="lang-container" @click="closeSidebar">
        <NuxtLink :to="switchLocalePath('en')" hreflang="en"
          ><img src="/images/flags/uk.png" alt="" class="lang-img"
        /></NuxtLink>
        <NuxtLink :to="switchLocalePath('hr')" hreflang="hr"
          ><img src="/images/flags/croatia.png" alt="" class="lang-img mx-3"
        /></NuxtLink>
        <NuxtLink :to="switchLocalePath('de')" hreflang="de"
          ><img src="/images/flags/germany.png" alt="" class="lang-img"
        /></NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    showSidebar: Boolean,
  },
  data() {
    return {
      sidebar: false,
      rooms: ["Superior", "Deluxe", "Signature", "Luxury"],
      dropdown: false,
    };
  },
  methods: {
    closeSidebar() {
      this.$emit("closeSidebar", false);
    },
  },
  watch: {
    showSidebar(val) {
      this.sidebar = val;
      this.dropdown = false;
    },
    dropdown(val) {
      const linksHeight = this.$refs.linksRef.getBoundingClientRect().height;
      if (val) {
        this.$refs.linksContainerRef.style.height = `${linksHeight}px`;
      } else {
        this.$refs.linksContainerRef.style.height = "0px";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
/* SIDEBAR */
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  width: 18vw;
  min-height: 100vh;
  background: var(--primary);
  @include flexCenter;
  flex-direction: column;
  transition: all 0.3s ease-out;
  transform: translate(-100%);
  will-change: transform;
  z-index: 9999;
  overflow: hidden;
}
.show-sidebar {
  transform: translate(0);
  border-right: 15px solid rgb(230, 230, 230);
}
@media only screen and (max-width: 1458px) {
  .sidebar {
    min-width: 25vw;
  }
}
@media only screen and (max-width: 1024px) {
  .sidebar {
    min-width: 30vw;
  }
}
@media only screen and (max-width: 848px) {
  .sidebar {
    min-width: 40vw;
  }
}
@media only screen and (max-width: 600px) {
  .sidebar {
    min-width: 80vw;
  }
}
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 998;
  overflow: hidden;
}
/* LINKS SIDEBAR */
.link-sidebar {
  text-decoration: none;
  color: var(--secondary);
  font-weight: 600;
  font-size: 20px;
  letter-spacing: 1px;
  // font-family: Raleway, Helvetica, Arial, sans-serif !important;
  margin: 0.5vh 0;
}
.link-sidebar::after {
  content: "";
  display: block;
  width: 0;
  height: 1px;
  background: var(--secondary);
  transition: width 0.3s;
}
.link-sidebar:hover::after {
  width: 100%;
}
/* LINKS SIDEBAR END */
.lang-container {
  position: absolute;
  bottom: 2vh;
  padding: 1rem 1.5rem 0.5rem 1.5rem;
  @include flexCenter;
}
.lang-img {
  max-width: 2rem;
}
.down-arrow-scroll {
  @include down-arrow-scroll;
}
.up-arrow-scroll {
  @include up-arrow-scroll;
}
.linksContainer {
  height: 0;
  overflow: hidden;
  transition: all 0.3s ease;
}
@media screen and (max-width: 600px) {
  .linksContainer {
    // height: auto !important;
  }
}
</style>
