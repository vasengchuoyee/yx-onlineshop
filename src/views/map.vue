<!-- <template>
    <div>
        <MglMap mapStyle="https://api.maptiler.com/maps/streets/style.json?key=lO410d5HOacIIjajyFco" :zoom="10"
            :center="[16.62662018, 49.2125578]">
            <MglMarker :coordinates="[16.62662018, 49.2125578]" color="#42b883" />
            <MglNavigationControl position="top-left" />
        </MglMap>
    </div>
</template>

<script>
import { MglMap, MglNavigationControl, MglMarker } from 'vue-maplibre-gl'

export default {
    name: 'map',
    components: {
        MglMap,
        MglMarker,
        MglNavigationControl,
    }
}
</script> -->

<template>
    <div>
        <img :src="isHealed ? healedImagePath : originalImagePath" @mouseover="healImage" @mouseleave="resetImage"
            alt="Healable Image" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            originalImagePath: '/image/kkkk.png',
            healedImagePath: '/image/k022.jpeg',
            isHealed: false
        };
    },
    methods: {
        healImage() {
            // Set isHealed to true to display the healed image
            this.isHealed = true;
        },
        resetImage() {
            // Reset isHealed to false to display the original image
            this.isHealed = false;
        }
    }
};
</script>

<style scoped>
/* Add any necessary styling here */
</style>