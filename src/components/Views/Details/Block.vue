<template>
    <div class="block">
      <div class="title">{{title}}</div>
      <div class="set">
        <div class="icon_container">
          <span class="img" :class="icon"/>
        </div>
        <input type="text" v-model="text" class="input" maxlength="6">
      </div>
    </div>
</template>
    
<script>
export default {
    name: "Block",
    props: {
      title: String,
      icon: String,
      value: String,
    },    
    data: () => ({
        text: "",
    }),
    methods: {
    },
    mounted() {
      this.text = this.value
    }
}
  </script>
  <style scoped>
  .block {
    text-align: left;
    margin-bottom: 10px;
  }
  .block .title {
    color: #000000;
    font-weight: 500;
    font-size: 18px;
  }
  .set {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 146px;
    margin-top: 6px;
  }
  .time {
    width: 23px;
    height: 23px;
    background-image: url("@/assets/profile/modal/call/time.svg");
  }
  .dollar {
    width: 12px;
    height: 26px;
    background-image: url("@/assets/profile/modal/call/$.svg");
  }
  .input {
    border: 1px solid #000000;
    border-radius: 12px;
    font-weight: 500;
    font-size: 16px;
    padding: 10px;
    outline: none;
    width: 81px;
    height: 30px;
    text-align: center;
  }
  
  </style>