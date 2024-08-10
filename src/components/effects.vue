<template>
  <div>
    <button
      @click="startChristmasEffects"
      :class="{ 'christmas-mode': isChristmasMode }"
    >
      ຕິດຕໍ່ພວກເຮົາ
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isChristmasMode: false,
    };
  },
  methods: {
    startChristmasEffects() {
      this.isChristmasMode = true;

      setTimeout(() => {
        this.isChristmasMode = false;
      }, 1000);
    },
  },
};
</script>

<style>
/* Christmas button styles */
button {
  padding: 15px 30px;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: -8px;
}

.christmas-mode {
  background-color: #00ff40;
  color: #ffffff;
  border: 2px solid #ffffff;
  animation: shake 0.5s ease-in-out;
}

/* Shake animation keyframes */
@keyframes shake {
  0%,
  100% {
    transform: translateX(0);
  }

  25%,
  75% {
    transform: translateX(-5px);
  }

  50% {
    transform: translateX(5px);
  }
}
</style>
