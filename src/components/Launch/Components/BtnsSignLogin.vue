<template>
  <div class="btns">
    <div @click="toPage('SignUp')" class="btn signup">Sign up</div>
    <div @click="toPage('SignIn')" class="btn signin">Log in</div>
  </div>
</template>
  
<script>
  
  export default {
    name: 'PageSix',
    data: () => ({

    }),
    methods: {
      toPage(page) {
        this.$router.push({ name: page });
      },
    },
  }
  </script>
<style scoped>
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
    justify-content: center;
    align-items: flex-end;
  }
</style>