<template>
  <div class="detail_container">
    <div class="header">Add Details</div>
    <div class="blocks">
      <Block :title="'How long'" :value="minutes" :icon="'time'"/>
      <Block :title="'Set Price'" :value="price" :icon="'dollar'"/>
      <Calendar/>
      <Time/>
      <Btn :text="'Done'"/>
    </div>
  </div>
</template>
  
<script>
import Block from "@/components/Views/Details/Block.vue";
import Calendar from "@/components/Views/Details/Calendar.vue";
import Time from "@/components/Views/Details/Time.vue";
import Btn from "../assets/Btn.vue";
  export default {
    name: "Details",
    components: { Block, Calendar, Time, Btn },
    data: () => ({
      minutes: "8 mins",
      price: "50",
    }),
    methods: {
    },
}
</script>
<style scoped>
.detail_container {
  width: 100%;
  padding: 10px 20px;
  color: #000000;
}
.header {
  font-weight: 600;
  font-size: 24px;
  margin-bottom: 20px;
}
.blocks {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}
.btn {
  font-weight: 600;
  font-size: 19px;
  margin: 0 auto;
}
</style>