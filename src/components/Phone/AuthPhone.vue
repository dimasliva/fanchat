<template>
  <div class="container">
    <div class="phone">
      <div class="phone_bg">
        <SignIn v-if="content === 'SignIn'"/>
        <SignUp v-else-if="content === 'SignUp'"/>
      </div>
    </div>
  </div>
  </template>
  
  <script>
  import SignIn from "@/components/Views/Auth/SignIn.vue";
  import SignUp from "@/components/Views/Auth/SignUp.vue";
  export default {
    name: "AuthPhone",
    props: {
      content: String,
    },
    components: { SignIn, SignUp },
    data: () => ({
    }), 
    methods: {

    },
  }
  </script>
<style scoped>
.container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  height: 100%;
  padding: 3%;
}

.phone_bg {
  background: #FFFFFF;
  width: 100%;
  height: 90%;
  border-radius: 21px;
  position: absolute;
  padding: 5%;
  padding-bottom: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
}
.phone {
  position: relative;
  display: flex;
  align-items: flex-end;
  width: 515px;
  height: 99%;
  box-shadow: 4px 5px 4px rgba(0, 0, 0, 0.25);
  background-color: #F5E0FF;
  border-radius: 21px;
}
@media (max-width: 428px) {
  .container {
    padding: 0%;
  }
  .phone {
    width: 100%;
    height: 100%;
    border-radius: 0px;
  }
}
</style>