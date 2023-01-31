<template>
  <div class="container">
    <div class="phone">
      <div class="phone_bg">
        <div class="fields">
          <input type="text" placeholder="Name">
          <input type="text" class="input_email" placeholder="Email">
          <input type="text" placeholder="Password">
        </div>
        <div class="privacy">
          <div class="text">By Signing up, you are agreeing with our</div>
          <div class="text">
            <span class="terms">
              Terms of use
            </span>
            and
            <span class="terms">
              Privacy Policy
            </span>
          </div>
        </div>
        <div class="btns">
          <button @click="register" class="btn signup">Sign up</button>
          <button @click="toPage('SignIn')" class="btn signin">Log in</button>
      </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Auth',
  methods: {
    toPage(page) {
      console.log('toPage', page)
      this.$router.push({name: page})
    },
    register() {
      
    },
  }
}
</script>
<style scoped>
.text .terms {
  color: rgba(186, 77, 237, 1);
}

.privacy {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px 0px;
  font-family: 'Petrona';
  font-size: 150%;
  font-weight: 500;
  line-height: 110%;
  letter-spacing: 0em;
  text-align: center;
  color: #636363;
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
  .fields input {
    border: 0px;
    border-bottom: 1px solid gray;
    font-family: 'Petrona';
    font-style: normal;
    font-weight: 500;
    font-size: 230%;
    line-height: 33px;
    color: #636363;
    padding-left: 10px;
    outline: none;
    width: 100%;
  }
  .input_email {
    margin: 10% 0px;
  }
  .fields {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .close {
    border-radius: 10px;
    background-color: transparent;
    border: 2px solid gray;
    width: 30px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 5%;
    top: 3%;
  }
  .close img {
    width: 100%;
  }
  .phone_bg {
    width: 100%;
    height: 90%;
    background-color: #F5E0FF;
    border-radius: 21px;
    position: absolute;
    padding: 5%;
    padding-bottom: 15%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
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
    width: 85%;
    border-radius: 13px;
    font-weight: 700;
    font-size: 250%;
    padding: 5%  0px;
    font-family: 'Petrona';
    font-style: normal;
    font-weight: 800;
    cursor: pointer;
  }
  .btns {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
</style>