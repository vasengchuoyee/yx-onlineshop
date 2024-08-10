<template>
  <div class="d-flex flex-row">
    <v-col cols="2" class="menu-bg">
      <router-link to="/"> <v-img src="image/yx.jpg"></v-img> </router-link>
      <br />
      <v-tabs v-model="tab" direction="vertical">
        <v-scroller>
          <v-list>
            <v-tab value="option-1">
              <v-icon color="blue">mdi-monitor</v-icon>
              ໜ້າຫຼັກ
            </v-tab>
            <v-tab value="option-2">
              <v-icon color="green">mdi-book</v-icon>
              ຈັດການສິ້ນຄ້າ
            </v-tab>
            <v-tab value="option-3">
              <v-icon color="red">mdi-cards</v-icon>
              ຈັດການລາຍຮັບ
            </v-tab>
            <v-tab value="option-4">
              <v-icon color="orange">mdi-cart</v-icon>
              ເພີ່ມສິ້ນຄ້າໃໝ່
            </v-tab>
          </v-list>
        </v-scroller>
      </v-tabs>
    </v-col>
    <v-window v-model="tab" cols="12" class="scrolling-window">
      <v-window-item value="option-1">
        <Dashboard />
      </v-window-item>
      <v-window-item value="option-2">
        <Addproduct />
      </v-window-item>
      <v-window-item value="option-3">
        <Income />
      </v-window-item>
      <v-window-item value="option-4">
        <dashbard />
      </v-window-item>
    </v-window>
  </div>
</template>

<script>
import Dashboard from "../../components/Page_admin/Dashboard.vue";
import Addproduct from "../../components/Page_admin/Addproduct.vue";
import Income from "../../components/Page_admin/Income.vue";

export default {
  name: "Admins",
  components: {
    Dashboard,
    Addproduct,
    Income,
  },
  data: () => ({
    tab: "option-1",
  }),
};
</script>

<style scoped>
.scrolling-window {
  overflow-y: auto;
  max-height: 600px;
}
.menu-bg {
  background-color: #f7c0c033;
}
</style>
