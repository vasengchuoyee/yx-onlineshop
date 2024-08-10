<!-- <template>
    <div>
        <div class="back-to-top" @click="scrollToTop" :class="{ 'show': showButton }">
            <img src="/icon.png" class="img" @click="conCat(message)">
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            showButton: false,
            message: 'ສະບາຍດີ.!! ຍິນດີຕອນຮັບທ່ານເຂົ້າສູ່ຮ້ານ KK  (Gift shop) ແລະ ທ່ານສາມາດສັ່ງຊື້ສິ້ນຄ້າໃນຮ້ານຂອງພວກເຮົາ'
        };
    },
    created() {
        window.addEventListener('scroll', this.handleScroll);
    },
    destroyed() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll() {
            if (window.scrollY > 0) {
                this.showButton = true;
            } else {
                this.showButton = false;
            }
        },

        conCat(message) {
            try {
                let Str = `${this.message}`;
                let link = "";
                link = "http://web";
                link += this.isMobile() ? "api" : "web";
                link +=
                    ".whatsapp.com/send?phone=" +
                    "856" +
                    "2091991059" +
                    "&text=" +
                    encodeURI(Str);
                window.open(link);
            } catch (error) {
                console.log(error);
            }
        }
    }
};
</script>

<style scoped>
.img {
    width: 60px;
    height: auto;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
    border-radius: 100%;
    cursor: pointer;
    animation: glow 2s infinite alternate;
}

.back-to-top {
    position: fixed;
    float: right;
    text-align: center;
    text-decoration: none;
    border-radius: 30%;
    opacity: 0;
    transform: scale(0.3);
    z-index: 9;
    transition: all 0.3s;

}

.back-to-top.show {
    bottom: 40px;
    right: 40px;
    opacity: 1;
    transform: scale(1);
}

.back-to-top.show:hover {
    color: #fff;
    bottom: 30px;
    opacity: 1;
}

@keyframes glow {
    0% {
        box-shadow: 0 0 10px rgba(0, 0, 0, 0);
    }

    50% {
        box-shadow: 0 0 20px rgb(20, 33, 212);
    }

    100% {
        box-shadow: 0 0 10px rgba(207, 6, 6, 0);
    }
}

@media only screen and (max-width: 412px) {
    .back-to-top {
        width: 10px;
        height: 20px;
        line-height: 10px;
    }

    .back-to-top.show {
        bottom: 60px;
        right: 60px;
    }

    .back-to-top.show:hover {
        bottom: 10px;
    }
}
</style> -->

<template>
  <div>
    <div class="back-to-top" @click="scrollToTop" :class="{ show: showButton }">
      <img
        src="/icon.png"
        class="img"
        @click="openWhatsApp(message)"
        alt="WhatsApp icon"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showButton: false,
      message:
        "ສະບາຍດີ.!! ຍິນດີຕອນຮັບທ່ານເຂົ້າສູ່ຮ້ານ KK  (Gift shop) ແລະ ພວກເຮົາຢາກສັ່ງຊື້ສິ້ນຄ້າໃນຮ້ານຂອງພວກເຮົາ",
    };
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.showButton = window.scrollY > 0;
    },
    openWhatsApp(message) {
      try {
        let encodedMessage = encodeURIComponent(message);
        let link = "https://wa.me/8562091991059?text=" + encodedMessage;
        window.open(link);
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style scoped>
.img {
  width: 60px;
  height: auto;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
  border-radius: 100%;
  cursor: pointer;
  animation: glow 2s infinite alternate;
}

.back-to-top {
  position: fixed;
  float: right;
  text-align: center;
  text-decoration: none;
  border-radius: 30%;
  opacity: 0;
  transform: scale(0.3);
  z-index: 9;
  transition: all 0.3s;
}

.back-to-top.show {
  bottom: 40px;
  right: 40px;
  opacity: 1;
  transform: scale(1);
}

.back-to-top.show:hover {
  color: #fff;
  bottom: 30px;
  opacity: 1;
}

@keyframes glow {
  0% {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0);
  }

  50% {
    box-shadow: 0 0 20px rgb(20, 33, 212);
  }

  100% {
    box-shadow: 0 0 10px rgba(207, 6, 6, 0);
  }
}

@media only screen and (max-width: 412px) {
  .back-to-top {
    width: 10px;
    height: 20px;
    line-height: 10px;
  }

  .back-to-top.show {
    bottom: 60px;
    right: 60px;
  }

  .back-to-top.show:hover {
    bottom: 10px;
  }
}
</style>
