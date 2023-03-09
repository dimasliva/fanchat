<template>
  <input 
    type="text" 
    :placeholder="placeholder" 
    class="field" 
    :class="{'bold': bold}" 
    :value="value"
    @input="e => value = e.target.value"
    :style="{fontSize: fontsize + 'px'}"
    maxlength="50"
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
    text: "",
    flag: false,
  }), 
  methods: {
  },
  mounted() {

  },
  watch: {
    value() {
      this.$emit("edit", this.value)
    },
  }
}
</script>
<style scoped>
  @media (max-width: 414px) {
  }
  .field {
    border: 0px;
    border-bottom: 1px solid #AFABAB;
    margin: 4% 0%;
    padding-bottom: 4px;
    
    font-weight: 400;
    font-size: 29px;
    line-height: 18px;
    color: #858585;
    outline: none;
  }
  .bold {
    font-weight: 500;
    color: #000000;
  }
</style>