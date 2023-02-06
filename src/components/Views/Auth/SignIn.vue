<template>
  <div class="auth_container">
    <div class="title">Sign in</div>
    <div class="fields">
      <input type="text" class="input_email" placeholder="Email">
      <input type="text" placeholder="Password">
      <div class="privacy_container">
        <Policy/>
      </div>
    </div>
    <div class="btns">
      <button @click="login('Home')" class="btn signup">Sign in</button>
      <button @click="toPage('SignUp')" class="btn signin">Back</button>
    </div>
  </div>
</template>
  
<script>
import Policy from '@/components/Views/Auth/Components/Policy.vue';
  export default {
    name: "SignIn",
    data: () => ({}),
    methods: {
        toPage(page) {
            this.$router.push({ name: page });
        },
        login(page) {
            this.$router.push({ name: page });
        },
    },
    components: { Policy }
}
</script>
<style scoped>
@media (max-width: 414px) {
  .auth_container {
    padding-top: 30px !important;
  }
  .auth_container .title {
    font-size: 36px;
    margin-bottom: 40px;
  }
  .fields .privacy_container {
    margin-top: 0px;
  }
  .fields .input_email {
    margin: 45px 0px;
  }
  .btns .btn {
    width: 85%;
    border-radius: 13px;
    padding: 18px 0px;
    font-size: 30px;
    cursor: pointer;
  }
}
.auth_container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding-top: 8%;
}
.privacy_container {
  margin-top: 10px;
}
.title {
  font-weight: 500;
  font-size: 45px;
  line-height: 43px;
  text-align: center;
  color: #383838;
  margin-bottom: 40px;
}
  .container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    width: 100%;
    height: 100%;
    padding: 3%;
  }
  .fields {
    display: flex;
    flex-direction: column;
  }
  .fields input {
    border: 0px;
    border-bottom: 1px solid #AFABAB;
    font-weight: 400;
    font-size: 24px;
    line-height: 23px;
    color: #858585;
    padding-left: 15px;
    padding-bottom: 10px;
    outline: none;
    width: 100%;
    background: transparent;
  }
  .input_email {
    margin: 60px 0px;
  }
  .phone {
    position: relative;
    display: flex;
    align-items: flex-end;
    width: 29%;
    height: 95%;
    box-shadow: 4px 5px 4px rgba(0, 0, 0, 0.25);
    background-color: #F5E0FF;
    border-radius: 21px;
  }
  .btn.signup {
    border-radius: 13px;
    color: #F5E0FF;
    box-shadow: 0 0 6px 0 rgba(157, 96, 212, 0.5);
    border: 0px solid transparent;
    background-image: linear-gradient(#ffffff00, #ffffff00), linear-gradient(180deg, #CE67FF, #F0CAC9, #5AE1FF);

    background-origin: border-box;
    background-clip: content-box, border-box;
    box-shadow: 2px 1000px 1px #181817 inset;
  }
  .signin {
    background: transparent;
    border: transparent;
    color: #181817;
    margin-top: 20px;
  }
  .btn {
    width: 82%;
    border-radius: 13px;
    padding: 28px 0px;
    font-family: 'Petrona';
    font-style: normal;
    font-weight: 900;
    font-size: 34px;
    cursor: pointer;
  }
  .btns {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0px auto;
    width: 96%;
  }
</style>