<template>
  <div class="row connect img">
    <div class="text">
      <div class="text">CONNECT WITH YOUR</div>
      <div class="text">FANS AND</div>
      <div class="text">GET PAID DOING IT</div>
    </div>
    <BtnsSignLogin/>
  </div>
</template>
  
<script>
import BtnsSignLogin from './BtnsSignLogin.vue';

  export default {
    name: "RightBottomBlock",
    data: () => ({}),
    methods: {},
    components: { BtnsSignLogin }
}
  </script>
<style scoped>
  .row {
    padding: 10px;
    display: flex;
    flex-direction: column;
    background-size: cover;
    cursor: default;
    user-select: none;
    position: relative;
  }
  .text {
    z-index: 1;
  }  
  .row.connect {
    width: 100%;
    height: 50%;

    background-image: url("@/assets/launch/blocks/right_bottom.jpg");
    border-radius: 24px;
    margin-left: 10px;
    margin-top: 10px;
    padding: 4% 10px;
    font-size: 4vw;
    text-align: left;
    justify-content: space-between;
  }
</style>