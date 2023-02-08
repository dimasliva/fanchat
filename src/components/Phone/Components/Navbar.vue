<template>
  <div class="navbar mobile">
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
  .navbar.mobile {
    height: var(--mobile-navbar);
  }
  .navbar .house {
    height: calc(var(--mobile-navbar) / 1.6);
  }
  .navbar .comment {
    height: calc(var(--mobile-navbar) / 1.6);
  }
  .navbar .loop {
    height: calc(var(--mobile-navbar) / 1.6);
  }
  .navbar .profile {
    height: calc(var(--mobile-navbar) / 1.6);
  }
  .plus .cross {

  }
  }
  .navbar {
    position: absolute;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    width: 80%;
    height: calc(36px * var(--multy-height));
    bottom: 3%;
    --multy-height: 1.3;
    --mobile-navbar: 46px;
  }
  .icons {
    height: calc(25px * var(--multy-height));
  }
  .house {
    height: calc(25px * var(--multy-height));
  }
  .loop {
  }
  .comment {
    height: calc(22px * var(--multy-height));
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
    height: 46%;
    position: absolute;
    bottom: 29%;
    left: 28%;
  }
  .plus .circle {
    width: 100%;
    height: 100%;
  }
  </style>