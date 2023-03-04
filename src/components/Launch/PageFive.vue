<template>
  <div class="container">
    <div class="title_container">
      <div class="title">
        <div class="text">EARN WHILE HAVING</div>
        <div class="text">FUN</div>
      </div>
      <div class="stars">
        <span class="img one"/>
        <span class="img two"/>
        <span class="img three"/>
        <span class="img four"/>
        <span class="img five"/>
      </div>
    </div>
    <div class="footer">
      <span 
        v-for="footer in footers" 
        :key="footer"
        @click="toPage(footer.page)"
      >
        {{ footer.name }}
      </span>
    </div>
  </div>
</template>
  
<script>
  
  export default {
    name: 'PageFive',
    data: () => ({
      footers: [
        {name: "Terms of Service", page: "Terms"},
        {name: "Privacy Policy", page: "Privacy"},
        {name: "Guidelines", page: "Guidelines"},
        {name: "Contact", page: "Contact"},
      ]
    }),
    methods: {
      toPage(page) {
        this.$router.push({name: page})
      }
    },
  }
  </script>
<style scoped>
   .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    color: #181817;
    padding-bottom: 2%;
    position: relative;
  }
  .title_container {
    display: flex;
    align-items: center;
    height: 100%;
    margin-top: 80px;
    position: relative;
  }
  .title {
    font-weight: 600;
    font-size: 120px;
    letter-spacing: 0.01em;
    text-align: center;
    vertical-align: middle;
    cursor: default;
    user-select: none;
    z-index: 1;
  }
  .footer span {
    font-weight: 700;
    font-size: 28px;
    color: #181817;
    margin: 0 20px;
    cursor: pointer;
    transition: .3s all ease-in-out;
  }
  .footer span:hover {
    color: #a53bb3;
  }
  .stars .img {
    width: 90px;
    height: 90px;
    position: absolute;
    z-index: 0;
  }
  .one {
    top: 110px;
    left: -120px;
    background-image: url("@/assets/launch/stars/one.svg");
  }
  .two {
    top: 150px;
    left: 600px;
    background-image: url("@/assets/launch/stars/two.svg");
  }
  .three {
    top: 230px;
    left: 99%;
    background-image: url("@/assets/launch/stars/three.svg");
  }
  .four {
    top: 500px;
    left: 830px;
    background-image: url("@/assets/launch/stars/four.svg");
  }
  .five {
    bottom: 250px;
    left: 50px;
    background-image: url("@/assets/launch/stars/five.svg");
  }
</style>