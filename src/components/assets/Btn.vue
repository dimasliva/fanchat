<template>
  <button class="btn mobile call" v-if="call">
    <div class="img_contrainer">
      <span class="img camera"></span>
    </div>
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

.btn {
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.25);
  border: 2px solid transparent;
  border-radius: 24px;
  background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), 
  linear-gradient(180deg, #C867F7 0%, #DB7859 100%);
  background-origin: border-box;
  background-clip: content-box, border-box;
  box-shadow: 1px 1000px 1px #fff inset;
  padding: 10px 10px;
  background-color: #fff;
  cursor: pointer;
  font-weight: 600;
  color: #000000;
}
.call {
  width: 80px;
  padding: 0;
}
.img_contrainer {
  height: 32px;
}
.camera {
  height: 100%;
  background-size: contain;
  background-image: url("@/assets/message/camera.svg");
}
</style>