<template>
  <div class="landing">
    <div class="title">
      <div class="text">Your Fans <span class="deserve">Deserve</span>a chance to</div>
      <div class="text">talk to You</div>
    </div>
    <div class="desc">
      <span>Host Exclusive Video Chat Sessions with</span>
      <span>your Fans </span>
    </div>
    <div class="btns">
      <button @click="toPage('SignUp')" class="btn signup">Sign up</button>
      <button @click="toPage('SignIn')" class="btn signin">Log in</button>
    </div>
  </div>
</template>
  
  <script>
  
  export default {
    name: 'PageOne',
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
  @media (max-width: 1280px) {
    .landing .title {
      font-size: 60px;
      line-height: 65px;
    }
    .landing .desc {
      font-size: 49px;
      line-height: 55px;
    } 
    .btns .btn {
      font-size: 32px;
      padding: 10px 36px;
      padding-top: 10px;
      padding-bottom: 12px;
    }
  }
   .landing {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    color: #181817;
  }
  .title {
    font-weight: 700;
    font-size: 85px;
    text-align: center;
  }
  .title .deserve {
    background: #5AE1FF;
    border-radius: 7px;
    padding: 0px 8px;
    margin-right: 10px;
  }
  .desc {
    text-align: center;
    font-weight: 200;
    font-size: 60px;
    font-family: 'Petrona';
    display: flex;
    flex-direction: column;
    margin-bottom: 50px;
    margin-top: 40px;
  }
  .btn.signup {
    border-radius: 13px;
    color: #F2CFC4;
    box-shadow: 0 0 6px 0 rgba(157, 96, 212, 0.5);
    border: solid 3px transparent;
    background-image: linear-gradient(#ffffff00, #ffffff00), linear-gradient(180deg, #CE67FF, #F0CAC9, #5AE1FF);

    background-origin: border-box;
    background-clip: content-box, border-box;
    box-shadow: 2px 1000px 1px #181817 inset;
  }
  .signin {
    background: transparent;
    border: transparent;
    color: #181817;
  }
  .btn {
    border-radius: 13px;
    font-weight: 700;
    font-size: 38px;
    padding: 0px 40px;
    padding-top: 14px;
    padding-bottom: 16px;
    font-style: normal;
    font-weight: 800;
    cursor: pointer;
  }
  .btns {
    display: flex;
    align-items: center;
  }
  </style>