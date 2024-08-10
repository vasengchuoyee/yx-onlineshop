<template>
  <div>
    <v-hover v-slot="{ isHovering, props }">
      <v-card
        class="mx-auto"
        color="grey-lighten-4"
        max-width="600"
        cover
        v-bind="props"
      >
        <v-img :aspect-ratio="16 / 9" cover src="image/best02.png">
          <v-expand-transition class="styles">
            <div
              v-if="isHovering"
              class="d-flex transition-fast-in-fast-out bg-green-darken-2 v-card--reveal text-h6"
              style="height: 40%"
            >
              <div>
                <p>ສິ້ນຄ້າທີ່ຂາຍດີທີ່ສຸດ</p>
                <br />
                <p>ລາຄາເລີ່ມຕົ້ນ 8x xxx kip</p>
              </div>
            </div>
          </v-expand-transition>
        </v-img>
      </v-card>
    </v-hover>
  </div>
</template>

<style scoped>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.9;
  position: absolute;
  width: 100%;
}

.styles {
  background-color: green;
}

.bg-red {
  margin-left: 20px;
}

</style>
