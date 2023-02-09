<template>
  <div class="creator_container">
    <InputField :style="{paddingLeft: '10px'}" :fontsize="20" :placeholder="'Name'"/>
    <InputField :style="{paddingLeft: '10px'}" :fontsize="20" :placeholder="'Username'"/>
    <InputField :style="{paddingLeft: '10px'}" :fontsize="20" :placeholder="'Date of Birth'"/>
    <InputField :style="{paddingLeft: '10px'}" :fontsize="20" :placeholder="'Phone number(req)'"/>
    <InputField :style="{paddingLeft: '10px'}" :fontsize="20" :placeholder="'Instagram(req)'"/>
    <InputField :style="{paddingLeft: '10px'}" :fontsize="20" :placeholder="'TikTok'"/>
    <button class="btn" @click="toPage('Stripe')">Next</button>
  </div>
</template>
  
<script>
import InputField from '../assets/InputField.vue';

  export default {
    name: "Creator",
    data: () => ({}),
    methods: {
        toPage(page) {
            this.$router.push({ name: page });
        }
    },
    components: { InputField }
}
</script>
<style scoped>
.creator_container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 83%;
  width: 88%;
  padding-top: var(--top-margin);
}
.btn {
  color: #F5E0FF;
  background-color: #181817;
  padding: 25px;
  font-weight: 900;
  border: 0px solid;
  border-radius: 8px;
  width: 80%;
  cursor: pointer;
  font-size: 30px;
}
  .creator_container input {
    width: 100%;
  }
</style>