<template>
  <div>
    <h2>this is the incaome page</h2>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. At natus,
      dignissimos accusamus odio blanditiis similique sint modi iure qui ratione
      possimus rem saepe amet maxime laboriosam dolor veniam officiis quaerat.
    </p>
    <br />
    <v-form v-model="valid">
      <v-container>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              label="ຊື້ສິ້ນຄ້າ"
              hide-details
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              label="ຈຳນວນ"
              hide-details
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field 
            label="ລາຄາ" 
            hide-details 
            required
            ></v-text-field>
          </v-col> </v-row>
        <br />
        <v-btn color="green" class="btn-left">
          <v-icon>mdi-save</v-icon>SAVE</v-btn>
      </v-container>
    </v-form>
  </div>
</template>
<script>
export default {
  data: () => ({
    email: "",
    emailRules: [
      (value) => {
        if (value) return true;

        return "E-mail is requred.";
      },
      (value) => {
        if (/.+@.+\..+/.test(value)) return true;

        return "E-mail must be valid.";
      },
    ],
  }),
};
</script>

<style scoped>
.btn-left {
  margin-left: 800px;
}
</style>
