<template>
  <input 
    type="text" 
    :placeholder="placeholder" 
    class="field" 
    :class="{'bold': bold}" 
    :value="value"
    :style="{fontSize: fontsize + 'px'}"
  >
</template>
  
  <script>
  export default {
    name: "InputField",
    props: {
      value: String,
      placeholder: String,
      bold: Boolean,
      fontsize: Number,
    },
    data: () => ({
    }), 
    methods: {

    },
  }
  </script>
<style scoped>
  @media (max-width: 414px) {
  }
  .field {
    border: 0px;
    border-bottom: 1px solid #AFABAB;
    margin: 4% 0%;
    padding-bottom: 10px;
    
    font-weight: 400;
    font-size: 16px;
    line-height: 18px;
    color: #858585;
  }
  .bold {
    font-weight: 500;
    color: #000000;
  }
</style>