<template>
  <div class="container">
    <div class="col">
      <LeftTopBlock/>
      <LeftBottomBlock/>
    </div>
    <div class="col">
      <RightTopBlock/>
      <RightBottomBlock/>
    </div>
  </div>
</template>
  
<script>
import BtnsSignLogin from './Components/BtnsSignLogin.vue';
import LeftTopBlock from './Components/LeftTopBlock.vue';
import LeftBottomBlock from './Components/LeftBottomBlock.vue';
import RightTopBlock from './Components/RightTopBlock.vue';
import RightBottomBlock from './Components/RightBottomBlock.vue';
  export default {
    name: "PageSix",
    data: () => ({}),
    methods: {},
    components: { BtnsSignLogin, LeftTopBlock, LeftBottomBlock, RightTopBlock, RightBottomBlock }
}
  </script>
<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Rubik+Mono+One&display=swap');
   .container {
    display: flex;
    width: 100%;
    height: 100%;
    color: #181817;
    position: relative;
    padding: .5%;
  }
  .col {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .col:last-child {
    width: 80%;
  }
</style>