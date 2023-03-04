<template>
  <div class="row terms img">
    <div class="title">Terms of Service</div>
    <div class="footer">
      <span class="link">FAQ’s</span>
      <span class="link">Guidelines</span>
      <span class="link">Privacy Policy</span>
      <span class="link">Contact</span>
    </div>
  </div>
</template>
  
<script>
  export default {
    name: 'LeftBottomBlock',
    data: () => ({

    }),
    methods: {
    },
  }
  </script>
<style scoped>
  .row.terms {
    width: 100%;
    height: 20%;

    background-image: url("@/assets/launch/blocks/left_bottom.jpg");
    border-radius: 20px;
    margin-top: 10px;

    font-weight: 700;
    font-size: 2.2vw;
    line-height: 34px;

    color: #181817;
    
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    cursor: default;
    user-select: none;
    position: relative;
    padding: 20px 30px;
  }
  .terms .title{
    margin-bottom: 30px;
  }
  .terms .footer {
    display: flex;
    justify-content: space-between;
  }
</style>