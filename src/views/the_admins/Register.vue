<template>
  <v-card class="mx-auto mt-10" color="#F287F2" max-width="344" title="User Registration">
    <v-container>
      <v-text-field v-model="first" color="primary" label="First name" variant="underlined"></v-text-field>

      <v-text-field v-model="last" color="primary" label="Last name" variant="underlined"></v-text-field>

      <v-text-field v-model="email" color="primary" label="Email" variant="underlined"></v-text-field>

      <v-text-field v-model="password" color="primary" label="Password" placeholder="Enter your password"
        variant="underlined" type="password"></v-text-field>
    </v-container>

    <v-divider></v-divider>

    <v-card-actions>
      <v-spacer></v-spacer>

      <v-btn class="bg-red" @click="register">
        Registration
        <v-icon icon="mdi-chevron-right" end></v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import axios from 'axios';
import Cookies from 'js-cookie';

export default {
  data: () => ({
    first: null,
    last: null,
    email: null,
    password: null,
  }),
  methods: {
    register() {
      const userData = {
        first: this.first,
        last: this.last,
        email: this.email,
        password: this.password,
      };

      axios.post('https://restaurant.hidden-it.com/api/register', userData)
        .then(response => {
          console.log('Registration successful:', response.data);
          const token = response.data.token;
          Cookies.set('token', token);
          // Optionally, you can navigate to another page upon successful registration
          // this.$router.push({ name: 'dashboard' });
        })
        .catch(error => {
          console.error('Registration failed:', error);
        });
    }
  }
}
</script>
