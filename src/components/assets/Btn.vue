<template>
  <button class="btn mobile call" v-if="call">
    <img class="camera" src="@/assets/message/camera.svg"/>
  </button>
  <button class="btn mobile" v-else>{{ text }}</button>
</template>
  
<script>
  export default {
    name: "Btn",
    props: {
      text: String,
      call: Boolean,
    },
    data: () => ({
    }), 
    methods: {

    },
  }
</script>
<style scoped>
  @media (max-width: 414px) {
    .btn.mobile {
      font-size: 14px;
      color: #000000;
    }
  }
  .btn.call {
    padding: 0px 10px;
  }
  .btn .camera {
    width: 35px;
  }
.btn {
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.25);
  border: 2px solid transparent;
  background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), 
  linear-gradient(180deg, #C867F7 0%, #DB7859 100%);
  background-origin: border-box;
  background-clip: content-box, border-box;
  box-shadow: 1px 1000px 1px #fff inset;
  border-radius: 6px;
  padding: 12px 16px;
  background-color: #fff;
  cursor: pointer;
  font-weight: 600;
  color: #000000;
}
</style>