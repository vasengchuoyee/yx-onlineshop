<template>
  <v-container>
    <!-- neck product -->
    <v-row>
      <v-col
        v-for="item in products"
        :key="item.id"
        class="image-card"
        xs="12"
        sm="12"
        md="6"
        lg="3"
        cols="6"
        id="neck"
      >
        <v-card class="cards" max-width="344">
          <img
            class="images"
            :src="item.image"
            cover
            @mouseover="toggleHover(true, item.id)"
            @mouseleave="toggleHover(false, item.id)"
            alt="Hover Image"
          />
          <v-container>
            <v-row>
              <v-col class="ml-10" @click="toggleHeart(item)">
                <v-icon :color="item.isLiked ? 'red' : 'red'">{{
                  item.isLiked ? "mdi-heart" : "mdi-heart-outline"
                }}</v-icon>
              </v-col>

              <v-col>
                <v-btn
                  class="ml-20"
                  color="pink"
                  variant="outlined"
                  @click="shareToWhatsApp"
                >
                  <v-icon>mdi-share-variant</v-icon>
                </v-btn>
              </v-col>
            </v-row>

            <v-div class="text-names">
              <p>{{ item.name }}</p>
              <h5 class="text-pink">
                ລາຄາ: <b>{{ formatPrice(item.price) }} ₭</b>
              </h5>
            </v-div>

            <v-div :cols="cols" :md="md" :sm="sm" :lg="lg">
              <v-btn
                :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
                @click="toggleDetails(item)"
                class="chevron-btn"
              ></v-btn>
              <!-- Card content -->
              <!-- <p>{{ item.id}}</p> -->
              <v-expand-transition>
                <div v-show="item.showDetails">
                  <v-divider></v-divider>
                  <p class="text-grey">{{ item.details }}</p>
                  <br />
                  <v-btn class="contect-btn" @click="conCat(message)"
                    >ຕິດຕໍ່ພວກເຮົາ</v-btn
                  >
                </div>
              </v-expand-transition>
            </v-div>
          </v-container>
        </v-card>
      </v-col>
    </v-row>

    <!-- braces product -->
    <v-row>
      <v-col
        v-for="item in brances"
        :key="item.id"
        class="image-card"
        xs="12"
        sm="12"
        md="6"
        lg="3"
        cols="6"
        id="brances"
      >
        <v-card class="cards" max-width="344">
          <img
            class="images"
            :src="item.image"
            cover
            @mouseover="toggleHover(true, item.id)"
            @mouseleave="toggleHover(false, item.id)"
            alt="Hover Image"
          />
          <v-container>
            <v-row>
              <v-col class="ml-10" @click="toggleHeart(item)">
                <v-icon :color="item.isLiked ? 'red' : 'red'">{{
                  item.isLiked ? "mdi-heart" : "mdi-heart-outline"
                }}</v-icon>
              </v-col>
              <v-col>
                <v-btn class="ml-20" @click="shareToWhatsApp">
                  <v-icon color="pink">mdi-share-variant</v-icon>
                </v-btn>
              </v-col>
            </v-row>

            <v-div class="text-names">
              <p>{{ item.name }}</p>
              <h5 class="text-pink">
                ລາຄາ: <b>{{ formatPrice(item.price) }} ₭</b>
              </h5>
            </v-div>

            <v-div :cols="cols" :md="md" :sm="sm" :lg="lg">
              <v-btn
                :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
                @click="toggleDetails(item)"
                class="chevron-btn"
              ></v-btn>
              <!-- Card content -->
              <!-- <p>{{ item.id}}</p> -->
              <v-expand-transition>
                <div v-show="item.showDetails">
                  <v-divider></v-divider>
                  <p class="text-gley">{{ item.details }}</p>
                  <br />
                  <v-btn class="contect-btn" @click="conCat(message)"
                    >ຕິດຕໍ່ພວກເຮົາ</v-btn
                  >
                </div>
              </v-expand-transition>
            </v-div>
          </v-container>
        </v-card>
      </v-col>
    </v-row>

    <!-- the rings products -->
    <v-row>
      <v-col
        v-for="item in rings"
        :key="item.id"
        class="image-card"
        xs="12"
        sm="12"
        md="6"
        lg="3"
        cols="6"
        id="rings"
      >
        <v-card class="cards" max-width="344">
          <img
            class="images"
            :src="item.image"
            cover
            @mouseover="toggleHover(true, item.id)"
            @mouseleave="toggleHover(false, item.id)"
            alt="Hover Image"
          />
          <v-container>
            <v-row>
              <v-col class="ml-10" @click="toggleHeart(item)">
                <v-icon :color="item.isLiked ? 'red' : 'red'">{{
                  item.isLiked ? "mdi-heart" : "mdi-heart-outline"
                }}</v-icon>
              </v-col>
              <v-col>
                <v-btn class="ml-20" @click="shareToWhatsApp">
                  <v-icon color="pink">mdi-share-variant</v-icon>
                </v-btn>
              </v-col>
            </v-row>

            <v-div class="text-names">
              <p>{{ item.name }}</p>
              <h5 class="text-pink">
                ລາຄາ: <b>{{ formatPrice(item.price) }} ₭</b>
              </h5>
            </v-div>

            <v-div :cols="cols" :md="md" :sm="sm" :lg="lg">
              <v-btn
                :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
                @click="toggleDetails(item)"
                class="chevron-btn"
              ></v-btn>
              <!-- Card content -->
              <!-- <p>{{ item.id}}</p> -->
              <v-expand-transition>
                <div v-show="item.showDetails">
                  <v-divider></v-divider>
                  <p class="text-grey">{{ item.details }}</p>
                  <br />
                  <v-btn class="contect-btn" @click="conCat(message)"
                    >ຕິດຕໍ່ພວກເຮົາ</v-btn
                  >
                </div>
              </v-expand-transition>
            </v-div>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "AboutView",
  data() {
    return {
      cols: 3,
      md: 6,
      sm: 12,
      lg: 4,
      active: true,
      isHovered: false,
      isLiked: false,
      message:
        "ສະບາຍດີ.!! ພວກເຮົາມີຄວາມສົນໃຈສິ້ນຄ້າໃນຮ້ານ KK - Giftshop ຂອງທ່ານ",

      // the product data here
      products: [
        {
          id: 1,
          name: "ສາຍຄໍໃສ່ຮູບ",
          details:
            "ສາມາດແກະສະຫຼັກໄດ້ຮູບ,ໂລໂກ້,ຊື່ແລະວັນທີເດືອນປີໄດ້ຕາມໃຈລູກຄ້າ",
          price: 160000,
          image: "image/k001.png",
          fav: true,
        },
        {
          id: 2,
          name: "ສາຍຄໍທະຫານ",
          details:
            "ສາມາດແກະສະຫຼັກໄດ້ຮູບ,ໂລໂກ້,ຊື່ແລະວັນທີເດືອນປີໄດ້ຕາມໃຈລູກຄ້າ",
          price: 190000,
          image: "image/k006.png",
          fav: true,
        },
        {
          id: 3,
          name: "ສາຍຄໍທະຫານ",
          details:
            "ສາມາດແກະສະຫຼັກໄດ້ຮູບ,ໂລໂກ້,ຊື່ແລະວັນທີເດືອນປີໄດ້ຕາມໃຈລູກຄ້າ",
          price: 190000,
          image: "image/k007.png",
          active: false,
        },
        {
          id: 4,
          name: "ສາຍຄໍທະຫານ",
          details:
            "ສາມາດແກະສະຫຼັກໄດ້ຮູບ,ໂລໂກ້,ຊື່ແລະວັນທີເດືອນປີໄດ້ຕາມໃຈລູກຄ້າ",
          price: 190000,
          image: "image/k008.png",
          active: false,
        },
        {
          id: 5,
          name: "ແກະສະຫຼັກຮູບ",
          details:
            "ສາມາດແກະສະຫຼັກໄດ້ຮູບ,ໂລໂກ້,ຊື່ແລະວັນທີເດືອນປີໄດ້ຕາມໃຈລູກຄ້າ",
          price: 180000,
          image: "image/k005.png",
          active: false,
        },
        {
          id: 6,
          name: "ສາຍຄໍທະຫານ",
          details:
            "ສາມາດແກະສະຫຼັກໄດ້ຮູບ,ໂລໂກ້,ຊື່ແລະວັນທີເດືອນປີໄດ້ຕາມໃຈລູກຄ້າ",
          price: 190000,
          image: "image/k009.png",
          active: false,
        },
        {
          id: 7,
          name: "ສາຍຄໍທະຫານ",
          details:
            "ສາມາດແກະສະຫຼັກໄດ້ຮູບ,ໂລໂກ້,ຊື່ແລະວັນທີເດືອນປີໄດ້ຕາມໃຈລູກຄ້າ",
          price: 190000,
          image: "image/k010.png",
          active: false,
        },
        {
          id: 8,
          name: "ສາຍຄໍຕໍາຫຼວດ",
          details:
            "ສາມາດແກະສະຫຼັກໄດ້ຮູບ,ໂລໂກ້,ຊື່ແລະວັນທີເດືອນປີໄດ້ຕາມໃຈລູກຄ້າ",
          price: 190000,
          image: "image/k011.png",
          active: false,
        },
        {
          id: 9,
          name: "ສາຍຄໍຕຳຫຼວດ",
          details:
            "ສາມາດແກະສະຫຼັກໄດ້ຮູບ,ໂລໂກ້,ຊື່ແລະວັນທີເດືອນປີໄດ້ຕາມໃຈລູກຄ້າ",
          price: 190000,
          image: "image/k012.png",
          active: false,
        },
        {
          id: 10,
          name: "ສາຍຄໍເດັກຊ່າງໄຟ",
          details:
            "ສາມາດແກະສະຫຼັກໄດ້ຮູບ,ໂລໂກ້,ຊື່ແລະວັນທີເດືອນປີໄດ້ຕາມໃຈລູກຄ້າ",
          price: 180000,
          image: "image/k013.png",
          active: false,
        },
        {
          id: 11,
          name: "ແກະສະຫຼັກຕາມໃຈ",
          details:
            "ສາມາດແກະສະຫຼັກໄດ້ຮູບ,ໂລໂກ້,ຊື່ແລະວັນທີເດືອນປີໄດ້ຕາມໃຈລູກຄ້າ",
          price: 180000,
          image: "image/k014.png",
          active: false,
        },
        {
          id: 12,
          name: "ສາຍຄໍພໍ່-ແມ່",
          details:
            "ສາມາດເຮັດເປັນຂອງຂັວນໃຫ້ຄອບຄົວແລະອ້າຍນ້ອງພ້ອມແກະສະຫຼັກໄດ້ຮູບ,ໂລໂກ້,ຊື່ແລະວັນທີເດືອນປີໄດ້ຕາມໃຈລູກຄ້າ",
          price: 180000,
          image: "image/k016.png",
          active: false,
        },
        {
          id: 13,
          name: "ສາຍຄໍອ້າຍ-ນ້ອງ",
          details:
            "ສາມາດເຮັດເປັນຂອງຂັວນໃຫ້ຄອບຄົວແລະອ້າຍນ້ອງພ້ອມແກະສະຫຼັກໄດ້ຮູບ,ໂລໂກ້,ຊື່ແລະວັນທີເດືອນປີໄດ້ຕາມໃຈລູກຄ້າ",
          price: 180000,
          image: "image/k004.png",
          active: false,
        },
        {
          id: 14,
          name: "ແກະສະຫຼັກຕາມໃຈ",
          details:
            "ສາມາດແກະສະຫຼັກໄດ້ຮູບ,ໂລໂກ້,ຊື່ແລະວັນທີເດືອນປີໄດ້ຕາມໃຈລູກຄ້າ",
          price: 180000,
          image: "image/k017.png",
          active: false,
        },
        {
          id: 15,
          name: "ແກະສະຫຼັກຕາມໃຈ",
          details:
            "ສາມາດແກະສະຫຼັກໄດ້ຮູບ,ໂລໂກ້,ຊື່ແລະວັນທີເດືອນປີໄດ້ຕາມໃຈລູກຄ້າ",
          price: 180000,
          image: "image/k018.png",
          active: false,
        },
        {
          id: 16,
          name: "ແກະສະຫຼັກຕາມໃຈ",
          details:
            "ສາມາດແກະສະຫຼັກໄດ້ຮູບ,ໂລໂກ້,ຊື່ແລະວັນທີເດືອນປີໄດ້ຕາມໃຈລູກຄ້າ",
          price: 180000,
          image: "image/k020.png",
          active: false,
        },
        {
          id: 17,
          name: "ແກະສະຫຼັກຕາມໃຈ",
          details:
            "ສາມາດແກະສະຫຼັກໄດ້ຮູບ,ໂລໂກ້,ຊື່ແລະວັນທີເດືອນປີໄດ້ຕາມໃຈລູກຄ້າ",
          price: 180000,
          image: "image/k021.png",
          active: false,
        },
        {
          id: 18,
          name: "ແກະສະຫຼັກຕາມໃຈ",
          details:
            "ສາມາດແກະສະຫຼັກໄດ້ຮູບ,ໂລໂກ້,ຊື່ແລະວັນທີເດືອນປີໄດ້ຕາມໃຈລູກຄ້າ",
          price: 180000,
          image: "image/k022.png",
          active: false,
        },
        {
          id: 19,
          name: "ແກະສະຫຼັກຕາມໃຈ",
          details:
            "ສາມາດແກະສະຫຼັກໄດ້ຮູບ,ໂລໂກ້,ຊື່ແລະວັນທີເດືອນປີໄດ້ຕາມໃຈລູກຄ້າ",
          price: 180000,
          image: "image/k023.png",
          active: false,
        },
        {
          id: 20,
          name: "ແກະສະຫຼັກຕາມໃຈ",
          details:
            "ສາມາດແກະສະຫຼັກໄດ້ຮູບ,ໂລໂກ້,ຊື່ແລະວັນທີເດືອນປີໄດ້ຕາມໃຈລູກຄ້າ",
          price: 180000,
          image: "image/k024.png",
          active: false,
        },
        {
          id: 21,
          name: "ແກະສະຫຼັກຕາມໃຈ",
          details:
            "ສາມາດແກະສະຫຼັກໄດ້ຮູບ,ໂລໂກ້,ຊື່ແລະວັນທີເດືອນປີໄດ້ຕາມໃຈລູກຄ້າ",
          price: 180000,
          image: "image/k025.png",
          active: false,
        },
        {
          id: 22,
          name: "ສາຍຄໍອ້າຍ-ນ້ອງ",
          details:
            "ສາມາດເຮັດເປັນຂອງຂັວນໃຫ້ຄອບຄົວແລະອ້າຍນ້ອງພ້ອມແກະສະຫຼັກໄດ້ຮູບ,ໂລໂກ້,ຊື່ແລະວັນທີເດືອນປີໄດ້ຕາມໃຈລູກຄ້າ",
          price: 180000,
          image: "image/k026.png",
          active: false,
        },
        {
          id: 23,
          name: "ແກະສະຫຼັກຕາມໃຈ",
          details:
            "ສາມາດແກະສະຫຼັກໄດ້ຮູບ,ໂລໂກ້,ຊື່ແລະວັນທີເດືອນປີໄດ້ຕາມໃຈລູກຄ້າ",
          price: 180000,
          image: "image/k027.png",
          active: false,
        },
        {
          id: 24,
          name: "ແກະສະຫຼັກຕາມໃຈ",
          details:
            "ສາມາດແກະສະຫຼັກໄດ້ຮູບ,ໂລໂກ້,ຊື່ແລະວັນທີເດືອນປີໄດ້ຕາມໃຈລູກຄ້າ",
          price: 180000,
          image: "image/k028.png",
          active: false,
        },
        {
          id: 25,
          name: "ແກະສະຫຼັກຕາມໃຈ",
          details:
            "ສາມາດແກະສະຫຼັກໄດ້ຮູບ,ໂລໂກ້,ຊື່ແລະວັນທີເດືອນປີໄດ້ຕາມໃຈລູກຄ້າ",
          price: 180000,
          image: "image/k029.png",
          active: false,
        },
        {
          id: 26,
          name: "ແກະສະຫຼັກຕາມໃຈ",
          details:
            "ສາມາດແກະສະຫຼັກໄດ້ຮູບ,ໂລໂກ້,ຊື່ແລະວັນທີເດືອນປີໄດ້ຕາມໃຈລູກຄ້າ",
          price: 180000,
          image: "image/k030.png",
          active: false,
        },
        {
          id: 27,
          name: "ແກະສະຫຼັກຕາມໃຈ",
          details:
            "ສາມາດແກະສະຫຼັກໄດ້ຮູບ,ໂລໂກ້,ຊື່ແລະວັນທີເດືອນປີໄດ້ຕາມໃຈລູກຄ້າ",
          price: 180000,
          image: "image/k031.png",
          active: false,
        },
        {
          id: 28,
          name: "ສາຍຄໍທະຫານ",
          details:
            "ສາມາດແກະສະຫຼັກໄດ້ຮູບ,ໂລໂກ້,ຊື່ແລະວັນທີເດືອນປີໄດ້ຕາມໃຈລູກຄ້າ",
          price: 180000,
          image: "image/k032.png",
          active: false,
        },
        {
          id: 29,
          name: "ສາຍຄໍຕໍາຫຼວດ",
          details:
            "ສາມາດແກະສະຫຼັກໄດ້ຮູບ,ໂລໂກ້,ຊື່ແລະວັນທີເດືອນປີໄດ້ຕາມໃຈລູກຄ້າ",
          price: 180000,
          image: "image/k033.png",
          active: false,
        },
        {
          id: 30,
          name: "ສາຍຄໍທະຫານ",
          details:
            "ສາມາດແກະສະຫຼັກໄດ້ຮູບ,ໂລໂກ້,ຊື່ແລະວັນທີເດືອນປີໄດ້ຕາມໃຈລູກຄ້າ",
          price: 180000,
          image: "image/k034.png",
          active: false,
        },
        {
          id: 31,
          name: "ສາຍຄໍຊ່າງໄຟຟ້າ",
          details:
            "ສາມາດແກະສະຫຼັກໄດ້ຮູບ,ໂລໂກ້,ຊື່ແລະວັນທີເດືອນປີໄດ້ຕາມໃຈລູກຄ້າ",
          price: 180000,
          image: "image/k035.png",
          active: false,
        },
        {
          id: 32,
          name: "ສາຍຄໍເດັກຊ່າງ",
          details:
            "ສາມາດແກະສະຫຼັກໄດ້ຮູບ,ໂລໂກ້,ຊື່ແລະວັນທີເດືອນປີໄດ້ຕາມໃຈລູກຄ້າ",
          price: 180000,
          image: "image/k036.png",
          active: false,
        },
        {
          id: 33,
          name: "ແກະສະຫຼັກຮູບ",
          details:
            "ສາມາດແກະສະຫຼັກໄດ້ຮູບ,ໂລໂກ້,ຊື່ແລະວັນທີເດືອນປີໄດ້ຕາມໃຈລູກຄ້າ",
          price: 180000,
          image: "image/k037.png",
          active: false,
        },
        {
          id: 34,
          name: "ສາຍຄໍຕາມໃຈ",
          details:
            "ສາມາດແກະສະຫຼັກໄດ້ຮູບ,ໂລໂກ້,ຊື່ແລະວັນທີເດືອນປີໄດ້ຕາມໃຈລູກຄ້າ",
          price: 180000,
          image: "image/k038.png",
          active: false,
        },
        {
          id: 35,
          name: "ສາຍຄໍທະຫານ",
          details:
            "ສາມາດແກະສະຫຼັກໄດ້ຮູບ,ໂລໂກ້,ຊື່ແລະວັນທີເດືອນປີໄດ້ຕາມໃຈລູກຄ້າ",
          price: 180000,
          image: "image/k039.png",
          active: false,
        },
        {
          id: 36,
          name: "ສາຍຄໍຮູບສີ",
          details:
            "ສາມາດແກະສະຫຼັກໄດ້ຮູບ,ໂລໂກ້,ຊື່ແລະວັນທີເດືອນປີໄດ້ຕາມໃຈລູກຄ້າ",
          price: 180000,
          image: "image/k040.png",
          active: false,
        },
        {
          id: 37,
          name: "ສາຍຄໍຮູບລົດ",
          details:
            "ສາມາດແກະສະຫຼັກໄດ້ຮູບ,ໂລໂກ້,ຊື່ແລະວັນທີເດືອນປີໄດ້ຕາມໃຈລູກຄ້າ",
          price: 180000,
          image: "image/k041.png",
          active: false,
        },
        {
          id: 38,
          name: "ສາຍຄໍຮູບລົດ",
          details:
            "ສາມາດແກະສະຫຼັກໄດ້ຮູບ,ໂລໂກ້,ຊື່ແລະວັນທີເດືອນປີໄດ້ຕາມໃຈລູກຄ້າ",
          price: 180000,
          image: "image/k042.png",
          active: false,
        },
        {
          id: 39,
          name: "ສາຍຄໍຮູບລົດ",
          details:
            "ສາມາດແກະສະຫຼັກໄດ້ຮູບ,ໂລໂກ້,ຊື່ແລະວັນທີເດືອນປີໄດ້ຕາມໃຈລູກຄ້າ",
          price: 180000,
          image: "image/k043.png",
          active: false,
        },
        {
          id: 40,
          name: "ສາຍຄໍຮູບລົດ",
          details:
            "ສາມາດແກະສະຫຼັກໄດ້ຮູບ,ໂລໂກ້,ຊື່ແລະວັນທີເດືອນປີໄດ້ຕາມໃຈລູກຄ້າ",
          price: 180000,
          image: "image/k044.png",
          active: false,
        },
        {
          id: 41,
          name: "ສາຍຄໍ ພຮະເຢຊູ",
          details:
            "ສາມາດແກະສະຫຼັກໄດ້ຕົວອັກສອນ,ຊື່ແລະວັນທີເດືອນປີໄດ້ຕາມໃຈລູກຄ້າ",
          price: 150000,
          image: "image/s01.png",
          active: false,
        },
        {
          id: 42,
          name: "ສາຍຄໍ ພຮະເຢຊູ",
          details:
            "ສາມາດແກະສະຫຼັກໄດ້ຕົວອັກສອນ,ຊື່ແລະວັນທີເດືອນປີໄດ້ຕາມໃຈລູກຄ້າ",
          price: 160000,
          image: "image/s02.png",
          active: false,
        },
        {
          id: 43,
          name: "ສາຍຄໍ ພຮະເຢຊູ",
          details:
            "ສາມາດແກະສະຫຼັກໄດ້ຕົວອັກສອນ,ຊື່ແລະວັນທີເດືອນປີໄດ້ຕາມໃຈລູກຄ້າ",
          price: 160000,
          image: "image/s03.png",
          active: false,
        },
        {
          id: 44,
          name: "ສາຍຄໍ ພຮະເຢຊູ",
          details:
            "ສາມາດແກະສະຫຼັກໄດ້ຕົວອັກສອນ,ຊື່ແລະວັນທີເດືອນປີໄດ້ຕາມໃຈລູກຄ້າ",
          price: 160000,
          image: "image/s04.png",
          active: false,
        },
      ],

      // the branec products
      brances: [
        {
          id: 45,
          name: "ສາຍແຂນໃຫຍ່",
          details:
            "ສາມາດແກະສະຫຼັກໄດ້ຕົວອັກສອນ,ຊື່ແລະວັນທີເດືອນປີໄດ້ຕາມໃຈລູກຄ້າ",
          price: 180000,
          image: "image/t001.png",
          active: false,
        },
        {
          id: 46,
          name: "ສາຍແຂນໃຫຍ່",
          details:
            "ສາມາດແກະສະຫຼັກໄດ້ຕົວອັກສອນ,ຊື່ແລະວັນທີເດືອນປີໄດ້ຕາມໃຈລູກຄ້າ",
          price: 180000,
          image: "image/t002.png",
          active: false,
        },
        {
          id: 47,
          name: "ສາຍແຂນນ້ອຍ",
          details:
            "ສາມາດແກະສະຫຼັກໄດ້ຕົວອັກສອນ,ຊື່ແລະວັນທີເດືອນປີໄດ້ຕາມໃຈລູກຄ້າ",
          price: 160000,
          image: "image/t003.png",
          active: false,
        },
        {
          id: 48,
          name: "ສາຍແຂນນ້ອຍ",
          details:
            "ສາມາດແກະສະຫຼັກໄດ້ຕົວອັກສອນ,ຊື່ແລະວັນທີເດືອນປີໄດ້ຕາມໃຈລູກຄ້າ",
          price: 160000,
          image: "image/t005.png",
          active: false,
        },
        {
          id: 49,
          name: "ສາຍແຂນນ້ອຍ",
          details:
            "ສາມາດແກະສະຫຼັກໄດ້ຕົວອັກສອນ,ຊື່ແລະວັນທີເດືອນປີໄດ້ຕາມໃຈລູກຄ້າ",
          price: 160000,
          image: "image/t005.png",
          active: false,
        },
        {
          id: 50,
          name: "ສາຍແຂນຢ່າງ",
          details: "ສາຍແຂນໄວ້ລຸ້ນສາມາດເຮືອງແສງໄດ້ໃສ່ແລ້ວໜ້າຮັກຫຼາຍຂື້ນ",
          price: 45000,
          image: "image/t006.png",
          active: false,
        },
        {
          id: 51,
          name: "ສາຍແຂນຢ່າງ",
          details: "ສາຍແຂນໄວ້ລຸ້ນສາມາດເຮືອງແສງໄດ້ໃສ່ແລ້ວໜ້າຮັກຫຼາຍຂື້ນ",
          price: 45000,
          image: "image/t007.png",
          active: false,
        },
        {
          id: 52,
          name: "ສາຍແຂນຢ່າງ",
          details: "ສາຍແຂນໄວ້ລຸ້ນສາມາດເຮືອງແສງໄດ້ໃສ່ແລ້ວໜ້າຮັກຫຼາຍຂື້ນ",
          price: 45000,
          image: "image/t008.png",
          active: false,
        },
      ],
      //rings product

      rings: [
        {
          id: 53,
          name: "ແຫວນເຮືອງແສງ",
          details:
            "ສາມາດແກະສະຫຼັກໄດ້ຕົວອັກສອນ,ຊື່ແລະວັນທີເດືອນປີໄດ້ຕາມໃຈລູກຄ້າ",
          price: 70000,
          image: "image/r001.png",
          active: false,
        },
        {
          id: 54,
          name: "ແຫວນ",
          details:
            "ສາມາດແກະສະຫຼັກໄດ້ຕົວອັກສອນ,ຊື່ແລະວັນທີເດືອນປີໄດ້ຕາມໃຈລູກຄ້າ",
          price: 150000,
          image: "image/r002.png",
          active: false,
        },
        {
          id: 55,
          name: "ແຫວນ",
          details:
            "ສາມາດແກະສະຫຼັກໄດ້ຕົວອັກສອນ,ຊື່ແລະວັນທີເດືອນປີໄດ້ຕາມໃຈລູກຄ້າ",
          price: 150000,
          image: "image/r003.png",
          active: false,
        },
        {
          id: 56,
          name: "ແຫວນເຮືອງແສງ",
          details:
            "ສາມາດແກະສະຫຼັກໄດ້ຕົວອັກສອນ,ຊື່ແລະວັນທີເດືອນປີໄດ້ຕາມໃຈລູກຄ້າ",
          price: 70000,
          image: "image/r004.png",
          active: false,
        },
        {
          id: 57,
          name: "ແຫວນເຮືອງແສງ",
          details:
            "ສາມາດແກະສະຫຼັກໄດ້ຕົວອັກສອນ,ຊື່ແລະວັນທີເດືອນປີໄດ້ຕາມໃຈລູກຄ້າ",
          price: 70000,
          image: "image/r005.png",
          active: false,
        },
        {
          id: 58,
          name: "ແຫວນເຮືອງແສງ",
          details:
            "ສາມາດແກະສະຫຼັກໄດ້ຕົວອັກສອນ,ຊື່ແລະວັນທີເດືອນປີໄດ້ຕາມໃຈລູກຄ້າ",
          price: 60000,
          image: "image/r006.png",
          active: false,
        },
        {
          id: 59,
          name: "ແຫວນເຮືອງແສງ",
          details:
            "ສາມາດແກະສະຫຼັກໄດ້ຕົວອັກສອນ,ຊື່ແລະວັນທີເດືອນປີໄດ້ຕາມໃຈລູກຄ້າ",
          price: 60000,
          image: "image/r007.png",
          active: false,
        },
        {
          id: 60,
          name: "ແຫວນເຮືອງແສງ",
          details:
            "ສາມາດແກະສະຫຼັກໄດ້ຕົວອັກສອນ,ຊື່ແລະວັນທີເດືອນປີໄດ້ຕາມໃຈລູກຄ້າ",
          price: 60000,
          image: "image/r008.png",
          active: false,
        },
        {
          id: 61,
          name: "ແຫວນເຮືອງແສງ",
          details:
            "ສາມາດແກະສະຫຼັກໄດ້ຕົວອັກສອນ,ຊື່ແລະວັນທີເດືອນປີໄດ້ຕາມໃຈລູກຄ້າ",
          price: 60000,
          image: "image/r009.png",
          active: false,
        },
        {
          id: 62,
          name: "ແຫວນຄູ່",
          details:
            "ສາມາດແກະສະຫຼັກໄດ້ຕົວອັກສອນ,ຊື່ແລະວັນທີເດືອນປີໄດ້ຕາມໃຈລູກຄ້າ",
          price: 160000,
          image: "image/r010.png",
          active: false,
        },
        {
          id: 63,
          name: "ແຫວນຄູ່",
          details:
            "ສາມາດແກະສະຫຼັກໄດ້ຕົວອັກສອນ,ຊື່ແລະວັນທີເດືອນປີໄດ້ຕາມໃຈລູກຄ້າ",
          price: 160000,
          image: "image/r011.png",
          active: false,
        },
        {
          id: 64,
          name: "ແຫວນຄູ່",
          details:
            "ສາມາດແກະສະຫຼັກໄດ້ຕົວອັກສອນ,ຊື່ແລະວັນທີເດືອນປີໄດ້ຕາມໃຈລູກຄ້າ",
          price: 160000,
          image: "image/r012.png",
          active: false,
        },
        {
          id: 65,
          name: "ແຫວນ",
          details:
            "ສາມາດແກະສະຫຼັກໄດ້ຕົວອັກສອນ,ຊື່ແລະວັນທີເດືອນປີໄດ້ຕາມໃຈລູກຄ້າ",
          price: 160000,
          image: "image/r013.png",
          active: false,
        },
        {
          id: 66,
          name: "ແຫວນ",
          details:
            "ສາມາດແກະສະຫຼັກໄດ້ຕົວອັກສອນ,ຊື່ແລະວັນທີເດືອນປີໄດ້ຕາມໃຈລູກຄ້າ",
          price: 70000,
          image: "image/rings1.png",
          active: false,
        },

        {
          id: 67,
          name: "(powerbank)",
          details: "ສາມາດພິມຮູບ,ຕົວອັກສອນ, ຊື່ ແລະວັນທີເດືອນປີໄດ້ຕາມໃຈລູກຄ້າ",
          price: 300000,
          image: "image/p003.png",
          active: false,
        },
        {
          id: 68,
          name: "(powerbank)",
          details: "ສາມາດພິມຮູບ,ຕົວອັກສອນ, ຊື່ ແລະວັນທີເດືອນປີໄດ້ຕາມໃຈລູກຄ້າ",
          price: 300000,
          image: "image/p004.png",
          active: false,
        },
      ],
    };
  },
  methods: {
    conCat(message) {
      try {
        let encodedMessage = encodeURIComponent(message);
        let link = "https://wa.me/8562091991059?text=" + encodedMessage;
        window.open(link);
      } catch (error) {
        console.error(error);
      }
    },

    toggleHeart(item) {
      item.isLiked = !item.isLiked;
    },
    toggleDetails(item) {
      item.showDetails = !item.showDetails;
    },

    // mergeProps,
    toggleHover(value) {
      this.isHovered = value;
    },

    // format the price
    formatPrice(item) {
      let val = (item / 1).toFixed(0).replace(".", ",");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },

    shareToWhatsApp() {
      let url = "https://api.whatsapp.com/send?";
      url +=
        "text=" +
        encodeURIComponent(
          "ກົດລິ້ງນີ້ເພື່ອເຂົ້າຊົນສິ້ນຄ້າ https://kk-giftshop.web.app/"
        );

      window.open(url, "_blank");
    },
  },
};
</script>

<style scoped>
.images {
  width: 100%;
  height: 160px;
  object-fit: cover;
  display: flex;
  border-radius: 6px;
  transition: transform 0.3s ease-in-out;
  background-color: white;
}

.images:hover {
  transform: scale(1.1);
}

.cards {
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 16px;
  padding: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: rgb(248, 217, 219);
}

/* Default styles for the button */
.chevron-btn {
  background-color: rgb(227, 106, 243);
  color: white;
  border: none;
  border-radius: 50px;
  padding: 8px 16px;
  font-size: 16px;
  cursor: pointer;
  margin-left: 180px;
}

.ml-20:hover {
  background-color: rgb(143, 132, 180);
}

/* Media query for devices with a minimum width of 390px */
@media screen and (min-width: 390px) {
  .chevron-btn {
    font-size: 18px;
    padding: 10px 20px;
  }
}

/* Media query for devices with a maximum width greater than 960px */
@media screen and (max-width: 960px) {
  .chevron-btn {
    background-color: rgb(229, 93, 247);
    margin-left: 80px;
  }
}

@media only screen and (max-width: 360px) {
  .respon {
    display: flex;
  }
}
</style>
