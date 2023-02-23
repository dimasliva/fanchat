<template>
  <div class="container">
    <div class="title">Set Time</div>
    <div class="blocks">
      <div class="block">7:30pm</div>
      <div class="block">7:30pm</div>
      <div class="block">7:30pm</div>
      <div class="block">7:30pm</div>
      <div class="block">7:30pm</div>
      <div class="block">7:30pm</div>
    </div>
  </div>
</template>
    
<script>
export default {
  name: "Block",
  props: {
  },    
  data: () => ({
  }),
  methods: {
  },
  mounted() {
  }
}
  </script>
  <style scoped>
  .container {
    text-align: left;
    margin-bottom: 10px;
  }
  .container .title {
    font-weight: 500;
    font-size: 18px;
  }
  .blocks {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    margin-left: -4px;
  }
  .block {
    text-align: center;
    border: 1px solid #000000;
    border-radius: 12px;
    font-weight: 500;
    font-size: 18px;
    color: #000000;
    padding: 5px 8px;
    margin: 4px;
    cursor: pointer;
  }
</style>