<template>
    <div class="container">
      <div class="phone">
        <Header/>
          <Profile v-if="content === 'Profile'"/>
          <Message v-else-if="content === 'Message'"/>
          <Explore v-else-if="content === 'Explore'"/>
          <Home v-else-if="content === 'Home'"/>
          <Settings v-else-if="content === 'Settings'"/>
          <ProfileEdit v-else-if="content === 'ProfileEdit'"/>
          <Earning v-else-if="content === 'Earning'"/>
          <Creator v-else-if="content === 'Creator'"/>
          <Stripe v-else-if="content === 'Stripe'"/>
          <Details v-else-if="content === 'Details'"/>
        <Navbar v-if="$route.name !== 'Creator' && $route.name !== 'Stripe'"/>
      </div>
    </div>
  </template>
  
  <script>
  import Header from "@/components/Phone/Components/Header.vue";
  import Navbar from "@/components/Phone/Components/Navbar.vue";
  import Profile from "@/components/Views/Profile.vue";
  import Message from "@/components/Views/Message.vue";
  import Explore from "@/components/Views/Explore.vue";
  import Home from "@/components/Views/Home.vue";
  import Settings from "@/components/Views/Settings.vue";
  import ProfileEdit from "@/components/Views/ProfileEdit.vue";
  import Earning from "@/components/Views/Earning.vue";
  import Creator from "@/components/Views/Creator.vue";
  import Stripe from "@/components/Views/Stripe.vue";
  import Details from "@/components/Views/Details.vue";
  export default {
    name: "Phone",
    props: {
      content: String,
    },
    components: { Navbar, Header, Profile, Details, Message, Explore, Home, Settings, ProfileEdit, Earning, Creator, Stripe },
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
  width: 100%;
  height: 100%;
  padding: 3%;
  overflow-y: auto;
}
.phone {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 498px;
  height: 871px;
  box-shadow: 4px 5px 4px rgba(0, 0, 0, 0.25);
  background: #FFFFFF;
  border-radius: var(--phone-border-radius)
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