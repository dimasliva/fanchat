<template>
    <div class="header">
      <div class="container">
        <Logo/>
        <span @click="openSettings" class="settings">
          <img src="@/assets/profile/settings.svg"/>
        </span>
      </div>
    </div>
  </template>
  
  <script>
import Logo from '@/components/Logo.vue';

  
  export default {
    name: "Header",
    components: { Logo },
    methods: {
      openSettings() {
        this.$router.push({name: 'Settings'})
      },
    },
}
  </script>
  <style scoped>
    .header {
      width: 100%;
      border-bottom: 1px solid #9D9D9D;
    }
    .container {
      padding: 20px 4%;
      padding-top: 30px;
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
    }
    .settings {
      padding-right: 1%;
      height: 23px;
      cursor: pointer;
    }
    .settings img {
      height: 100%;
    }
</style>