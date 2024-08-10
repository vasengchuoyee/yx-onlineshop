<template>
  <v-footer class="footer">
    <v-row>
      <v-col cols="12" sm="6">
        <v-col cols="6" sm="4" class="footer-item">
          <v-img src="image/yx.jpg" class="borimg"></v-img>
        </v-col>
        <v-col cols="12" sm="12" class="footer-item">
          <v-row class="padd">
            <v-icon>mdi-facebook</v-icon>
            <a
              href="https://www.facebook.com/ntxhaisnkaujhmoob.xyooj.3?mibextid=ZbWKwL"
              >Facebook</a
            >
          </v-row>
          <v-row class="padd">
            <v-icon>mdi-whatsapp</v-icon
            ><a
              href="https://api.whatsapp.com/send?phone=2091991059&text= [ສະບາຍດີ.!! ພວກເຮົາຕ້ອງການສັ່ງຊື້ສິ້ນຄ້າບາງຢ່າງຈາກຮ້ານ YX ຂອງທ່ານ] "
              >whatsapp</a
            >
          </v-row>
          <v-row class="icon-tik">
            <v-img src="image/tiktok.png"></v-img>
            <a
              href="https://www.tiktok.com/@maixay.giftshop?_t=8jqOFm0vAK9&_r=1"
              class="atext"
              >tiktok</a
            > </v-row
          ><br />

          <v-row class="padd">
            <v-icon>mdi-phone</v-icon><a>call: 020-9199-1059</a>
          </v-row>
          <v-row class="padd">
            <v-icon>mdi-email</v-icon><a>Email: ntxhaisxyooj0129@gmail.com</a>
          </v-row>
          <v-row class="padd">
            <v-icon>mdi-map-marker</v-icon
            ><a
              href="https://www.google.com/maps/place/Kew+Khem/@19.1515523,101.5469307,2736m/data=!3m2!1e3!4b1!4m9!1m2!2m1!1sban+kiekhem!3m5!1s0x312626548f9faaff:0x816a7fab8a92bdc5!8m2!3d19.150843!4d101.5674385!16s%2Fg%2F1tgqfwr0?entry=ttu"
              >Location</a
            >
          </v-row>
        </v-col>
      </v-col>

      <v-col cols="12" sm="6" class="text">
        <div>
          <h3>
            ຮ້ານ KK Gift Onlineshop ຂອງພວກເຮົາ ຮັບແກສະຫຼັກ ລາຍ, ໂລໂກ້, ຕົວໜັງສື,
            ຊື່ແລະວັນທີເດືອນປີ ໄດ້ຕາມໃຈມັກຂອງລູກຄ້າ<br />
            ( ຕັ້ງຢູ່ ບ້ານ ກິ່ວແຄມ, ເມືອງ ພຽງ, ແຂວງ ໄຊຍະບູລີ )
          </h3>
          <v-divider></v-divider>
          <hr />
          <div>
            {{ new Date() }}
          </div>
          <div>
            {{ new Date().getFullYear() }} — <strong>@VASENG CHUOYEE</strong>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {};
</script>

<style scoped>
.atext {
  margin-left: 30px;
  margin-top: -26px;
}

.icon-tik {
  width: 40px;
  height: 20px;
  margin-left: 4px;
}

.footer-content {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.padd {
  margin: 8px;
  display: flex;
  align-items: center;
}

a {
  text-decoration: none;
  color: black;
  padding: 4px;
}

a:hover {
  color: blue;
}

.footer {
  background: linear-gradient(
    0deg,
    rgb(243, 220, 237) 0%,
    rgb(248, 113, 248) 100%
  );
  height: 100px;
  display: flex;
  flex-direction: column;
  font-family: "Noto Sans Lao", sans-serif;
}

@media (max-width: 412px) {
  .footer-content {
    flex-direction: column;
    align-items: center;
  }

  .avatars {
    flex-direction: column;
    align-items: center;
  }
}

.borimg {
  border-radius: 50% 50% 50% 50%;
}

.text {
  margin-top: 50px;
}
</style>
