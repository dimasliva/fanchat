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
      margin-top: 3%;
      margin-bottom: 7%;
      width: 100%;
      border-bottom: 1px solid #9D9D9D;
    }
    .container {
      padding: 0px 4%;
      padding-top: 6%;
      padding-bottom: 1%;
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
    }
    .settings {
      padding-right: 1%;
      cursor: pointer;
    }
  </style>