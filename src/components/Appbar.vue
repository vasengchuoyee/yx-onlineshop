<template>
  <v-app-bar scroll-behavior="hide">
    <template v-slot:image>
      <v-img
        gradient="to top right, rgba(240,255,255,1) 30%, rgb(238, 130, 238)"
      ></v-img>
    </template>

    <div class="logo-container">
      <router-link to="/">
        <img src="/yxs.png" alt="Logo" class="logo-img" />
      </router-link>
    </div>

    <v-app-bar-title class="text-app">
      <p>KK</p>
      -GiftShop
    </v-app-bar-title>

    <v-spacer></v-spacer>

    <!-- menu -->
    <v-menu open-on-hover open-on-click transition="fab-transition">
      <template v-slot:activator="{ props }">
        <v-btn class="bg-pink rounded-pill" v-bind="props">
          ລາຍການສິ້ນຄ້າ
        </v-btn>
      </template>
      <v-list style="max-height: 200px; overflow-y: auto">
        <v-list-item>
          <h4
            text
            @click="scroll('neck')"
            :style="{ color: homeColor }"
            @mouseover="setHoverColor('neck', true)"
            @mouseout="setHoverColor('neck', false)"
          >
            <li>ສາຍຄໍ</li>
          </h4>
          <hr />
          <h4
            text
            @click="scroll('brances')"
            :style="{ color: homeColor }"
            @mouseover="setHoverColor('brances', true)"
            @mouseout="setHoverColor('brances', false)"
          >
            <li>ສາຍແຂນ</li>
          </h4>
          <hr />
          <h4
            text
            @click="scroll('rings')"
            :style="{ color: homeColor }"
            @mouseover="setHoverColor('rings', true)"
            @mouseout="setHoverColor('rings', false)"
          >
            <li>ແຫວນ</li>
          </h4>
        </v-list-item>
      </v-list>
    </v-menu>

    <!-- heart icon favorite things -->
    <router-link to="/favor">
      <v-icon color="pink">mdi-heart</v-icon>
    </router-link>

    <!-- list menu show -->
    <v-menu open-on-hover open-on-click>
      <template v-slot:activator="{ props }">
        <v-btn color="black" v-bind="props">
          <v-icon>mdi-format-list-bulleted </v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item>
          <v-list-item-title>
            <router-link to="/favor">
              <h4>- ລາຍການທີ່ມັກ</h4>
            </router-link>
            <router-link to="/register">
              <h4>- ສະໝັກລົງທະບຽນ</h4>
            </router-link>
            <router-link to="/login">
              <h4>- ເຂົ້າສູ່ລະບົບ</h4>
            </router-link>
            <router-link to="/about">
              <h4>- Admin</h4>
            </router-link>
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      hovered: false,
      defaultImageSrc: "path/to/default-image.jpg",
      hoverImageSrc: "path/to/hover-image.jpg",

      loading: false,
      showTextField: false,
      isSmallScreen: false,
    };
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    onClick() {
      this.showTextField = true;
    },
    toggleTextField() {
      this.showTextField = !this.showTextField;
    },

    scroll(refName) {
      const element = document.getElementById(refName);
      element.scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>

<style scoped>
p {
  color: rgb(233, 18, 197);
  display: contents;
  font-family: "Tangerine", cursive;
}
</style>
