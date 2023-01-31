<template>
  <div class="fields">
    <input type="text" class="input_email" placeholder="Email">
    <input type="text" placeholder="Password">
  </div>
  <Policy/>
  <div class="btns">
    <button @click="login('Home')" class="btn signup">Sign in</button>
    <button @click="toPage('SignUp')" class="btn signin">Back</button>
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
.fields {
  display: flex;
  flex-direction: column;
  width: 100%;
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
  background: transparent;
}
.input_email {
  margin: 18% 0px;
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