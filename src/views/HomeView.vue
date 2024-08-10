<template>
  <div>
    <Appbar />
    <shows />
    <hr>
    <br>
    <h5 class="text-center">KK Gift shop (ຮ້ານ KK ຂອງຂັວນຂອງພວກເຮົາຮັບແກະສະຫຼັກສາຍຄໍ,ສາຍແຂນ ແລະ ແຫວນ ໄດ້ຕາມໃຈລູກຄ້າ)</h5>
    <Products />
    <br>
    <footers />

    <connect />
  </div>
</template>

<script>
import Appbar from '../components/Appbar.vue';
import Products from '../components/Products.vue';
import footers from '../components/footers.vue';
import shows from '../components/shows.vue';
import typing from '../components/typing.vue';
import connect from '../components/connect.vue'

export default {
  name: 'HomeView',
  components: {
    Appbar,
    Products,
    footers,
    shows,
    typing,
    connect
  },
  data() {
    return {

    };
  },
};
</script>
