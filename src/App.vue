<template>
  <router-view class=""/>
  <span class="img logo_fanchat" />
  <img class="bg_text_1" src="@/assets/background/FANCHAT.svg"/>
  <img class="bg_text_2" src="@/assets/background/ANCHAT.svg"/>
  <img class="bg_text_3" src="@/assets/background/FANCHAT_right.svg"/>
  <img class="bg_text_4" src="@/assets/background/FAN_CHAT.svg"/>
</template>
<script>
  export default {
    name: "App",
    mounted() {
    }
  }
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Petrona:wght@200;300;400;500;600;700;800;900&display=swap');
:root {
  --phone-border-radius: 21px;
  --top-margin: 30px;
  --phone-width: 498px;
  --phone-height: 871px;
}
.bg_text_1, .bg_text_2, .bg_text_3, .bg_text_4 {
  position: fixed;
  user-select: none;
  z-index: -2;
  width: 50%;
}
.bg_text_1 {
  width: 960px;
  top: -5px;
  left: 1%;
}
.bg_text_2 {
  width: 672px;
  top: 248px;
  left: 0%;
}
.bg_text_3 {
  right: 80px;
  /* right: 6.2%; */
  top: 0%;
}
.bg_text_4 {
  right: 3%;
  top: 31%;
}
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Petrona';
}
body, html {
  width: 100%;
  height: 100%;
  background: radial-gradient(54.21% 54.21% at 50% 45.79%,
   rgba(186, 77, 237, 0.43) 0%,
  rgba(200, 103, 247, 0.43) 54.69%, 
  rgba(219, 120, 89, 0.2551) 100%);
  position: relative;
}
#app {
  height: 100%;
  width: 100%;
  overflow-y: auto;
  font-family: 'Petrona', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.logo_fanchat {
  position: fixed;
  left: .5%;
  top: 1%;
  user-select: none;

  background-image: url("@/assets/logos/leftLogo.svg");

  width: 223px;
  height: 73px;

  z-index: -1;
  }
.img {
  display: flex;
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
} 
</style>
