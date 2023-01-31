<template>
  <div class="creator_container">
    <input type="text" placeholder="Name">
    <input type="text" placeholder="Username">
    <input type="text" placeholder="Date of Birth">
    <input type="text" placeholder="Phone number(req)">
    <input type="text" placeholder="Instagram(req)">
    <input type="text" placeholder="TikTok">
    <button class="btn" @click="toPage('Stripe')">Next</button>
  </div>
</template>
  
<script>
  export default {
    name: "Creator",
    data: () => ({

    }), 
    methods: {
      toPage(page) {
        this.$router.push({name: page})
      }
    },
  }
</script>
<style scoped>
.creator_container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 80%;
  width: 88%;
  margin-top: 1%;
}
.btn {
  color: #F5E0FF;
  background-color: #181817;
  padding: 5%;
  font-size: 200%;
  font-weight: 900;
  border: 0px solid;
  border-radius: 8px;
  width: 80%;
  cursor: pointer;
}
  .creator_container input {
    border: 0px;
    border-bottom: 1px solid gray;
    font-family: 'Petrona';
    font-style: normal;
    font-weight: 500;
    font-size: 230%;
    line-height: 33px;
    color: #636363;
    padding-left: 10px;
    outline: none;
    width: 100%;
    background: transparent;
  }
</style>