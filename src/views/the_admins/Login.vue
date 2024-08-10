<template>
  <div class="login-container backgroud">
    <v-card
      class="mx-auto pa-12 pb-8"
      elevation="8"
      max-width="448"
      rounded="lg"
    >
      <div class="text-subtitle-1 text-medium-emphasis">Account</div>
      <v-text-field
        v-model="email"
        density="compact"
        placeholder="Email address"
        prepend-inner-icon="mdi-email-outline"
        variant="outlined"
      ></v-text-field>
      <div
        class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between"
      >
        Password
        <a
          class="text-caption text-decoration-none text-blue"
          href="#"
          rel="noopener noreferrer"
          target="_blank"
        >
          Forgot login password?
        </a>
      </div>
      <v-text-field
        v-model="password"
        :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
        :type="visible ? 'text' : 'password'"
        density="compact"
        placeholder="Enter your password"
        prepend-inner-icon="mdi-lock-outline"
        variant="outlined"
        @click:append-inner="visible = !visible"
      ></v-text-field>
      <v-card class="mb-12" color="surface-variant" variant="tonal">
        <v-card-text class="text-medium-emphasis text-caption"
          >Warning: After 3 consecutive failed login attempts</v-card-text
        >
      </v-card>
      <v-btn
        class="mb-8"
        color="blue"
        size="large"
        variant="tonal"
        block
        @click="login"
        >Log In</v-btn
      >
      <v-card-text class="text-center">
        <a
          class="text-blue text-decoration-none"
          href="#"
          rel="noopener noreferrer"
          target="_blank"
        >
          Sign up now <v-icon icon="mdi-chevron-right"></v-icon>
        </a>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import axios from "axios";
import Cookies from "js-cookie";

export default {
  data() {
    return {
      email: "",
      password: "",
      visible: false,
    };
  },
  methods: {
    login() {
      const formData = new FormData();
      formData.append("email", this.email);
      formData.append("password", this.password);
      axios
        .post("https://restaurant.hidden-it.com/api/login", formData)
        .then((res) => {
          console.log("Login successful", res.data);
          const token = res.data.token;
          Cookies.set("token", token);
          if (token) {
            this.$router.push({ name: "admins" });
          } else {
            this.$router.push({ name: "adminlogin" });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    const token = Cookies.get("token");
    console.log("get token:", token);
    if (token) {
      this.$router.push({ name: "admins" });
    } else {
      console.log("No token!");
    }
  },
};
</script>

<style scoped></style>
