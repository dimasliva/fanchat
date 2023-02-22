<template>
  <div class="phone mobile">
    <span class="logo img"/>
    <div class="desc">
      <span>Host Exclusive Video Chat</span>
      <span>Sessions with your Fans </span>
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
    .phone {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      height: 100%;
      background: #FFF;
      border-radius: 0px;
      padding-top: 45%;
      padding-bottom: 16%;
    }
    .logo {
      width: 100%;
      height: 120px;
      background-image: url("@/assets/logos/leftLogo.svg");
      background-size: contain;
    }
    .phone .desc {
      font-weight: 300;
      font-size: 35px;
      line-height: 39.48px;
      margin-bottom: 14%;
      text-align: center;
      display: flex;
      flex-direction: column;
      color: #181817;
    }
    .btns {
      display: flex;
      flex-direction: column;
      width: 75%;
    }
    .signup {
      height: 74px;
      background: #181817;
      border-radius: 8px;
      font-size: 30px;
      color: #FFFFFF;
    }
    .signin {
      font-size: 28px;

      color: #181817;
      background: transparent;
      border: 0;
      padding: 12px 0;
    }
    .btns .btn {
      font-weight: 900;
      width: 100%;
      cursor: pointer;
    }
  }
</style>