<template>
  <div class="container">
    <div class="pages" v-if="window.width > 428">
      <PageOne/>
      <PageTwo/>
      <PageThree/>
      <PageFour/>
      <PageFive/>
      <PageSix/>
    </div>
    <PhoneMobile v-else-if="window.width < 428"/>
  </div>
</template>

<script>
import PhoneMobile from "@/components/Launch/PhoneMobile.vue";
import PageOne from "@/components/Launch/PageOne.vue";
import PageTwo from "@/components/Launch/PageTwo.vue";
import PageThree from "@/components/Launch/PageThree.vue";
import PageFour from "@/components/Launch/PageFour.vue";
import PageFive from "@/components/Launch/PageFive.vue";
import PageSix from "@/components/Launch/PageSix.vue";

export default {
  name: 'Launch',
  components: { PhoneMobile, PageOne, PageTwo, PageThree, PageFour, PageFive, PageSix },
  data: () => ({
    window: {
      width: 0,
      height: 0
    }
  }),
  methods: {
    handleResize() {
      this.window.width = window.innerWidth;
      this.window.height = window.innerHeight;
    }
  },
  created() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize);
  },
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Oleo+Script+Swash+Caps:wght@400;700&display=swap');

  .container, .pages {
    position: relative;
    width: 100%;
    height: 100%;
  }
 
</style>