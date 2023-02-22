<template>
  <div class="phone mobile">
    <div class="logo">
      <img src="@/assets/logos/FanChat.png"/>
    </div>
    <div class="desc">
      <span>Host Exclusive Video Chat</span>
      <span>Sessions with your Fans </span>
      <!-- <span style="position: absolute; bottom: 0px;">{{ window }}</span> -->
    </div>
    <div class="btns">
      <button @click="toPage('SignUp')" class="btn signup">Sign up</button>
      <button @click="toPage('SignIn')" class="btn signin">Log in</button>
    </div>
  </div>
</template>
  
  <script>
  
  export default {
    name: 'PhoneMobile',
    data: () => ({
    }),
    methods: {
      toPage(page) {
        this.$router.push({name: page})
      },
    },
  }
  </script>
  <style scoped>
    @media (max-width: 428px) {
      .container .phone {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;
        width: 100%;
        height: 100%;
        background: #F5E0FF;
        border-radius: 0px;
        margin-top: 0%;
        margin-right: 0%;
        padding-bottom: 20%;
      }
      .phone .logo {
        width: 100%;
      }
      .phone .logo img{
        width: 100%;
      }
      .phone .desc {
        font-family: 'Petrona';
        font-style: normal;
        font-weight: 300;
        font-size: 24px;
        line-height: 27px;
        text-align: center;
        margin-bottom: 140px;
        color: #181817;
      }
      .btns {
        display: flex;
        flex-direction: column;
        width: 75%;
      }
      .phone .btns .signup {
        color: #F5E0FF;
        background-image: linear-gradient(#ffffff, #ffffff);
        padding: 7%;
      }
      .btns .btn {
        width: 100%;
      }
    }
  </style>