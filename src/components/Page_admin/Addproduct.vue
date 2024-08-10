<template>
  <v-div>
    <v-row justify="center" class="mt-10">
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam similique
        modi architecto culpa, eveniet tempore magni illum, minus ea fuga velit
        rerum amet error optio quidem, at numquam. Facere, labore.
      </p>
      <v-col cols="12" lg="6" md="8" sm="10">
        <v-card ref="form" class="bg-forms">
          <v-card-text>
            <v-text-field
              ref="id"
              v-model="id"
              :error-messages="errorMessages"
              :rules="[() => !!id || 'This field is required']"
              label="ID-ສິ້ນຄ້າ"
              placeholder="----ID-ສິ້ນຄ້າ----"
              required
            ></v-text-field>
            <v-text-field
              ref="name"
              v-model="name"
              :error-messages="errorMessages"
              :rules="[() => !!name || 'This field is required']"
              label="ຊື້ສິ້ນຄ້າ"
              placeholder="----ຊື້ສິ້ນຄ້າ----"
              required
            ></v-text-field>
            <v-text-field
              ref="city"
              v-model="city"
              :rules="[() => !!city || 'This field is required', addressCheck]"
              label="ລາຄາສິ້ນຄ້າ"
              placeholder="----ລາຄາສິ້ນຄ້າ----"
              required
            ></v-text-field>
            <v-text-field
              ref="state"
              v-model="state"
              :rules="[() => !!state || 'This field is required']"
              label="ລາຍລະອຽດຂອງສິ້ນຄ້າ"
              placeholder="----ລາຍລະອຽດຂອງສິ້ນຄ້າ----"
              required
            ></v-text-field>
            <v-autocomplete
              ref="country"
              v-model="country"
              :items="countries"
              :rules="[() => !!country || 'This field is required']"
              label="ປະເພດ"
              placeholder="Select..."
              required
            ></v-autocomplete>
            <v-file-input clearable label="File input"></v-file-input>
          </v-card-text>
          <v-divider class="mt-12"></v-divider>
          <v-card-actions>
            <v-btn variant="text" @click="restet" class="bg-red"> Reset </v-btn>
            <v-spacer></v-spacer>
            <v-slide-x-reverse-transition>
              <v-tooltip v-if="formHasErrors" location="left">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    class="my-0"
                    icon
                    v-bind="attrs"
                    v-on="on"
                    @click="resetForm"
                  >
                    <v-icon>mdi-refresh</v-icon>
                  </v-btn>
                </template>
                <span>Refresh form</span>
              </v-tooltip>
            </v-slide-x-reverse-transition>
            <v-btn class="bg-blue" variant="text" @click="submit">
              Add To Database
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col> </v-row
    ><br />
    <hr />
    <v-table density="compact">
      <thead>
        <tr class="bg-pink">
          <th class="text-left">ID</th>
          <th class="text-left">Name</th>
          <th class="text-left">Price</th>
          <th class="text-left">type</th>
          <th class="text-left">detail</th>         
          <th class="text-left">images</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in desserts" :key="item.name">
            <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.price }}</td>
          <td>{{ item.type }}</td>
          <td>{{ item.detail }}</td>          
          <td>{{ item.images }}</td>
        </tr>
      </tbody>
    </v-table>
  </v-div>
</template>
<script>
export default {
  data: () => ({
    desserts: [
      {
        id: 1,
        name: "Frozen Yogurt",
        price: 159000,
        detail: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        type: 'ສາຍຄໍ',
        images: "link images",
      },
      {
        id: 2,
        name: "Frozen Yogurt",
        price: 159000,
        detail: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        type: 'ສາຍຄໍ',
        images: "link images",
      },
      {
        id: 3,
        name: "Frozen Yogurt",
        price: 15009,
        detail: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        type: 'ສາຍຄໍ',
        images: "link images",
      },
      {
        id: 4,
        name: "Frozen Yogurt",
        price: 159,
        detail: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        type: 'ສາຍຄໍ',
        images: "link images",
      },
      {
        id: 5,
        name: "Frozen Yogurt",
        price: 159,
        detail: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        type: 'ສາຍຄໍ',
        images: "link images",
      },
      {
        id: 6,
        name: "Frozen Yogurt",
        price: 159,
        detail: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        type: 'ສາຍຄໍ',
        images: "link images",
      },
    ],
    countries: ["ສາຍຄໍ", "ສາຍແຂນ", "ແຫວນ", "orther"],
    errorMessages: "",
    name: null,
    address: null,
    city: null,
    state: null,
    zip: null,
    country: null,
    formHasErrors: false,
  }),

  computed: {
    form() {
      return {
        name: this.name,
        address: this.address,
        city: this.city,
        state: this.state,
        zip: this.zip,
        country: this.country,
      };
    },
  },

  watch: {
    name() {
      this.errorMessages = "";
    },
  },

  methods: {
    addressCheck() {
      this.errorMessages =
        this.address && !this.name ? `Hey! I'm required` : "";

      return true;
    },
    resetForm() {
      this.errorMessages = [];
      this.formHasErrors = false;

      Object.keys(this.form).forEach((f) => {
        this.$refs[f].reset();
      });
    },
    submit() {
      this.formHasErrors = false;

      Object.keys(this.form).forEach((f) => {
        if (!this.form[f]) this.formHasErrors = true;

        this.$refs[f].validate(true);
      });
    },
  },
};
</script>


<style scoped>
.bg-forms {
  background-color: pink;
}
</style>