<template>
  <span class="logo">{{ logo }}</span>
</template>
  
<script>
  
export default {
  name: 'Logo',
  methods: {
  },
  computed: {
    logo() {
      return this.$route.name === "Home" 
      ? "Home"
      : this.$route.name === "Explore"
      ? "Explore"
      : this.$route.name === "Sessions"
      ? "Sessions"
      : this.$route.name === "Message"
      ? "Sessions"
      : this.$route.name === "Profile"
      ? "Profile"
      : this.$route.name === "Settings"
      ? "Profile"
      : this.$route.name === "ProfileEdit"
      ? "Profile"
      : this.$route.name === "Earning"
      ? "Earnings"
      : this.$route.name === "Creator"
      ? "Creator"
      : this.$route.name === "Details"
      ? "Add"
      : this.$route.name === "Stripe"
      ? "Creator"
      : "Fanchat" 
    }
  }
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Rubik+Mono+One&display=swap');
.logo {
  position: relative;
  user-select: none;

  font-weight: 400;
  font-size: 23px;
  font-family: 'Rubik Mono One', sans-serif;
}
</style>