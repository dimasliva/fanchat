<template>
  <div class="container">
    <div class="title">
      <div class="text">ON FANCHAT, ALL THE MONEY</div>
      <div class="text">YOU EARN IS ENTIRELY YOURS</div>
    </div>
    
    <div class="block">
      <div class="title">
        <div class="text">YOU GET 89%</div>
      </div>
      <div class="desc">
        YOU HEARD IT RIGHT, WE KEEP THE LOWEST STAKE AND GIVE YOU THE MAJORITY
      </div>
    </div>

    <div class="block second">
      <div class="title">
        <div class="text">WE KEEP 11%</div>
      </div>
      <div class="desc">
        FANCHAT KEEPS 11% TO COVER OPERATIONS AND MAINTAIN THE PLATFORM
      </div>
    </div>

  </div>
</template>
  
<script>
  
  export default {
    name: 'PageThree',
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
    font-size: 61px;
    text-align: center;
    line-height: 69px;
    margin-bottom: 20px;
  }
  .block {
    width: 700px;
    margin: 20px 0px;
  }
  .block.second {
    text-align: start;
    width: 600px;
  }
  .block .title {
    margin-bottom: 5px;
  }
  .desc {
    font-weight: 300;
    font-size: 40px;
  }
</style>