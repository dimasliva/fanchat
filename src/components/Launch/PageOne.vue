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
    <BtnsSignLogin/>
  </div>
</template>
  
  <script>
import BtnsSignLogin from './Components/BtnsSignLogin.vue';

  
  export default {
    name: "PageOne",
    data: () => ({}),
    methods: {
        toPage(page) {
            this.$router.push({ name: page });
        },
    },
    components: { BtnsSignLogin }
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
  </style>