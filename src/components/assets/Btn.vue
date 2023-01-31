<template>
  <button class="btn">{{ text }}</button>
</template>
  
  <script>
  export default {
    name: "Phone",
    props: {
      text: String,
    },
    data: () => ({
    }), 
    methods: {

    },
  }
  </script>
<style scoped>
.btn {
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.25);
  border: 2px solid transparent;
  background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), 
  linear-gradient(180deg, #C867F7 0%, #DB7859 100%);
  background-origin: border-box;
  background-clip: content-box, border-box;
  box-shadow: 2px 1000px 1px #fff inset;
  border-radius: 22px;
  padding: 12px 16px;
  background-color: #fff;
  cursor: pointer;
  font-weight: 600;
}
</style>