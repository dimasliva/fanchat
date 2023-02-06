<template>
    <div class="navbar">
      <img @click="toPage('Home')" class="icons house" src="@/assets/profile/house.svg"/>
      <img @click="toPage('Explore')" class="icons loop" src="@/assets/profile/loop.svg"/>
      <span class="plus">
        <img class="circle" src="@/assets/profile/plus.svg"/>
        <img class="cross" src="@/assets/profile/x.svg"/>
      </span>
      <img @click="toPage('Message')" class="icons comment" src="@/assets/profile/comment.svg"/>
      <img @click="toPage('Profile')" class="icons profile" src="@/assets/profile/profile.svg"/>
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
  @media (max-width: 414px) {
    .plus .cross {
      bottom: 27%;
      left: 25%;
    }
  }
  .navbar {
    position: absolute;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    width: 80%;
    height: 6%;
    bottom: 3%;
  }
  .icons {
    height: 70%;
  }
  .house {
    height: 65%;
  }
  .loop {
  }
  .comment {
    height: 65%;
  }
  .profile {
  }
  .navbar img, .plus img {
    cursor: pointer;
  }
  .plus {
    position: relative;
    height: 100%;
  }
  .cross {
    height: 50%;
    position: absolute;
    bottom: 27%;
    left: 27%;
  }
  .plus .circle {
    width: 100%;
    height: 100%;
  }
  </style>