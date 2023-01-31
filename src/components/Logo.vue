<template>
  <span class="logo">FanChat</span>
</template>
  
<script>
  
export default {
  name: 'Logo',
  methods: {
  }
}
</script>
<style scoped>
.logo {
  position: relative;
  user-select: none;

  font-family: 'Petrona', serif;
  font-weight: 800;
  font-size: 40px;
  line-height: 78%;

  color: white;
  background-color: transparent;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
}
</style>