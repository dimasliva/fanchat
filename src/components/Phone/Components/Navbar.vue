<template>
    <div class="navbar">
      <img @click="toPage('Home')" src="@/assets/profile/house.svg"/>
      <img @click="toPage('Explore')" src="@/assets/profile/loop.svg"/>
      <span class="plus">
        <img class="circle" src="@/assets/profile/plus.svg"/>
        <img class="cross" src="@/assets/profile/x.svg"/>
      </span>
      <img @click="toPage('Message')" class="comment" src="@/assets/profile/comment.svg"/>
      <img @click="toPage('Profile')" class="profile" src="@/assets/profile/profile.svg"/>
    </div>
  </template>
  
  <script>
  
  export default {
    name: 'Navbar',
    methods: {
      toPage(page) {
        this.$router.push({name: page})
      }
    }
  }
  </script>
  <style scoped>
  .navbar {
    position: absolute;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    height: 4%;
    bottom: 3%;
  }
  .navbar img, .plus img {
    width:7%;
    cursor: pointer;
  }
  .navbar  .comment {
    width: 8%;
  }
  .navbar .profile {
    width: 6%;
  }
  .plus {
    position: relative;
  }
  .plus .cross {
    width: 65%;
    position: absolute;
    bottom: 16%;
    left: 33%;
    height: 80%;
  }
  .plus .circle {
    width: 130%;
    bottom: 0;
  }
  </style>