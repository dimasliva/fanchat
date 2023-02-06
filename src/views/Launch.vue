<template>
  <div class="container">
    <div class="landing" v-if="window.width > 428">
      <div class="title">
        <div class="text">Your Fans <span class="deserve">Deserve</span></div>
        <div class="text">a chance to talk</div>
        <div class="text">to you</div>
      </div>
      <div class="desc">
        <span>Host Exclusive Video Chat</span>
        <span>Sessions with your Fans </span>
      </div>
      <div class="btns">
        <button @click="toPage('SignUp')" class="btn signup">Sign up</button>
        <button @click="toPage('SignIn')" class="btn signin">Log in</button>
      </div>
    </div>
    <div class="phone" v-if="window.width > 428"></div>
    <div class="phone mobile" v-else>
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
  </div>
</template>

<script>

export default {
  name: 'Launch',
  data: () => ({
    window: {
      width: 0,
      height: 0
    }
  }),
  methods: {
    toPage(page) {
      this.$router.push({name: page})
    },
    handleResize() {
      this.window.width = window.innerWidth;
      this.window.height = window.innerHeight;
    }
  },
  created() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize);
  },
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Oleo+Script+Swash+Caps:wght@400;700&display=swap');
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
  .container {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
  }
  .landing {
    display: flex;
    flex-direction: column;
    width: 45%;
    padding-left: 3%;
    height: 60%;
    align-items: flex-start;
    justify-content: center;
  }
  .phone {
    margin-top: 1%;
    margin-right: 6%;
    width: 560px;
    height: 89%;
    background: #FFFFFF;
    box-shadow: 4px 5px 4px rgba(0, 0, 0, 0.25);
    border-radius: 21px;
  }
  .title {
    font-weight: 700;
    font-size: 54px;
    font-size: calc(115px - 30px);
    text-align: start;
    line-height: calc(120px - 30px);
  }
  .title .deserve {
    background: #5AE1FF;
    border-radius: 7px;
    padding: 0px 12px;
  }
  .desc {
    text-align: start;
    font-weight: 200;
    font-size: calc(90px - 30px);
    line-height: calc(92px - 30px);
    font-family: 'Petrona';
    display: flex;
    flex-direction: column;
    margin: calc(50px - 20px) 0px;
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
    font-size: calc(68px - 30px);
    padding: 10px 44px;
    padding-top: 10px;
    padding-bottom: 12px;
    font-family: 'Petrona';
    font-style: normal;
    font-weight: 800;
    cursor: pointer;
  }
  .btns {
    display: flex;
    align-items: center;
  }
</style>