<template>
  <div class="row exclusive img">
    <span class="img five star"/>
    <span class="img two star"/>
    <span class="img three star"/>
    <div class="text">Host Exclusive</div>
    <div class="text">Video Chat</div>
    <div class="text">Sessions with</div>
    <div class="text">your Fans</div>
  </div>
</template>
  
<script>
  export default {
    name: 'RightTopBlock',
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
  .text {
    z-index: 1;
  }
  .row.exclusive {
    width: 100%;
    height: 50%;

    background-image: url("@/assets/launch/blocks/right_top.png");
    border-radius: 24px;
    margin-left: 10px;
    color: #181817;
    align-items: flex-start;
    justify-content: center;
    font-size: 4vw;
  }
  .exclusive .text:nth-child(odd) {
    margin: 1% 0%;
    margin-left: 20%;
  }
  .star {
    position: absolute;
  }

  .two {
    background-image: url("@/assets/launch/stars/two.svg");
  }
  .three {
    background-image: url("@/assets/launch/stars/three.svg");
  }
  .five {
    background-image: url("@/assets/launch/stars/five.svg");
  }
  .exclusive .five {
    width: var(--star-size);
    height: var(--star-size);
    --star-size: 70px;
    --top: 30%;
    --left: 1%;
    top: var(--top);
    left: var(--left);
    transform: translateY(- var(--top));
    transform: translateX(- var(--left));
  }
  .exclusive .two {
    width: var(--star-size);
    height: var(--star-size);
    --star-size: 90px;
    --bottom: 20%;
    --right: 6%;
    bottom: var(--bottom);
    right: var(--right);
    transform: translateY(- var(--bottom));
    transform: translateX(- var(--right));
  }
  .exclusive .three {
    width: var(--star-size);
    height: var(--star-size);
    --star-size: 80px;
    --bottom: 2%;
    --right: 15%;
    bottom: var(--bottom);
    right: var(--right);
    transform: translateY(- var(--bottom));
    transform: translateX(- var(--right));
  }
</style>