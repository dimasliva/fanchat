<template>
  <div class="container">
    <div class="title">
      <div class="text">CONNECT WITH YOUR FANS</div>
      <div class="text">AND GET PAID DOING IT </div>
    </div>
    <div class="blocks">

      <div class="block">
        <div class="title">
          <span class="img camera"/>
          VIDEO CALL
        </div>
        <div class="desc">
          Host Exclusive Paid Video Chat Sessions with your Fans. Your Time Zone & Your Price
        </div>
      </div>

      <div class="block">
        <div class="title">
          <span class="dollar">$</span>
          EARN
        </div>
        <div class="desc">
          Earn from every  Video Chat Session. You set the price for every Video Chat. 8mins Video Chat & Earn on your Terms.
        </div>
      </div>

    </div>
  </div>
</template>
  
<script>
  
  export default {
    name: 'PageTwo',
    data: () => ({
    }),
    methods: {
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
  }
  .title {
    font-weight: 600;
    font-size: 68px;
    text-align: center;
    line-height: 77px;
  }
  .blocks {
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
    width: 650px;
  }
  .block {
    background: rgba(200, 103, 247, 0.25);
    border: 1px solid #000000;
    border-radius: 33px;
    padding: 20px 10px;
    padding-bottom: 30px;
    width: 294px;
  }  
  .block .title {
    font-weight: 700;
    font-size: 32px;
    line-height: 36px;
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .block .desc {
    font-weight: 500;
    font-size: 30px;
    line-height: 34px;
    text-align: start;
  }
  .camera {
    width: 40px;
    height: 26px;
    background-image: url("@/assets/launch/camera.svg");
    margin-right: 14px;
  }
  .dollar {
    margin-right: 20px;
    margin-left: -20px;
  }
</style>