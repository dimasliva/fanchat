<template>
  <div class="row fans img">
    <span class="img four star"/>
    <span class="img one star"/>
    <div class="img logo"/>
    <div class="text">
      <div>Your Fans</div>
      <div style="color: rgba(90, 225, 255, 1);">Deserve</div>
      <div>a chance</div>
      <div>to talk to</div>
      <div style="color: rgba(155, 16, 158, 1);">You</div>
    </div>
  </div>
</template>
  
<script>
  export default {
    name: 'LeftTopBlock',
    data: () => ({

    }),
    methods: {
    },
  }
  </script>
<style scoped>
  .row {
    padding: 10px;
    display: flex;
    flex-direction: column;
    background-size: cover;
    cursor: default;
    user-select: none;
    position: relative;
  }
  .row .logo {
    width: 202px;
    height: 66px;
    margin-bottom: 5%;
    background-image: url("@/assets/logos/leftLogo.svg");
  }
  .row.fans .text div{
    font-family: 'Rubik Mono One';
    font-weight: 400;
    font-size: 4.5vw;
    letter-spacing: -0.05em;
    color: #181817;
    text-align: start;
  }
  .row.fans {
    width: 100%;
    height: 80%;
    background-image: url("@/assets/launch/blocks/left_top.jpg");
    border-radius: 24px;
  }
  .fans .one{
    width: var(--star-size);
    height: var(--star-size);
    --star-size: 90px;
    --top: 23%;
    --right: 34%;
    top: var(--top);
    right: var(--right);
    transform: translateY(- var(--top));
    transform: translateX(- var(--right));
  }
  .fans .four{
    width: var(--star-size);
    height: var(--star-size);
    --star-size: 90px;
    --bottom: 6%;
    --right: 45%;
    bottom: var(--bottom);
    right: var(--right);
    transform: translateY(- var(--bottom));
    transform: translateX(- var(--right));
  }
  .star {
    position: absolute;
  }
  .one {
    background-image: url("@/assets/launch/stars/one.svg");
  }
  .four {
    background-image: url("@/assets/launch/stars/four.svg");
  }
  .text {
    z-index: 1;
  }
</style>