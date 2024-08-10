<template>
  <v-carousel show-arrows="hover" height="350px" cycle>
    <!-- First Carousel Item -->
    <v-carousel-item>
      <div>
        <v-row>
          <v-col cols="12" sm="10">
            <!-- Use full width on small screens and 10 columns on larger screens -->
            <div class="video-container">
              <video class="responsive-video" autoplay muted>
                <source
                  src="/bans-videos.mp4"
                  type="video/mp4"
                  class="bans-videos"
                />
              </video>
            </div>
          </v-col>

          <v-col cols="2" class="margin">
            <h3>
              <typing :text="displayText"></typing>
              <typing :text="displayText1"></typing><br />
              <div class="text-red">
                <typing :text="displayText2"></typing>
              </div>
            </h3>
          </v-col>
        </v-row>
      </div>
    </v-carousel-item>

    <!-- Second Carousel Item -->
    <v-carousel-item cover class="imgshow">
      <products1 />
    </v-carousel-item>

    <!-- Third Carousel Item -->
    <v-carousel-item src="image/rings.png" cover class="imgshow">
      <h1 class="text-center">` ແຫຼວນເຮືອງແສງ `</h1>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
import typing from "./typing.vue";
import products1 from "./products1.vue";
import effects from "./effects.vue";

export default {
  name: "shows",
  components: {
    typing,
    products1,
    effects,
  },
  data() {
    return {
      displayText: "ຮ້ານຂາຍ ສອຍ ສາຍຄໍ ແລະ ແຫວນ",
      displayText1: "ພ້ອມແກະສະເຫັກຊື່ຕາມໃຈລູກຄ້າ",
      displayText2: "ຖືກໃຈທຸກທ່ານ",
    };
  },
};
</script>

<style scoped>
h3 {
  margin-top: 50px;
}

.margin {
  margin-top: 40px;
  margin-left: -20px;
  background-color: rgb(245, 198, 205);
  text-align: center;
  border-radius: 50px;
  height: 240px;
  display: flex;
  justify-content: center;
  font-size: 8px;
}

.imgshow {
  display: flex;
  justify-content: center;
  width: 100%;
}

.bans-videos {
  width: 200px;
  height: auto;
}
.video-container {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 aspect ratio (change to whatever ratio your video has) */
  height: 0;
  overflow: hidden;
}

.video-container video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

/* Media query for smaller screens */
@media screen and (max-width: 600px) {
  .video-container {
    padding-bottom: 75%; /* Adjust aspect ratio for smaller screens if needed */
  }
}
</style>
