<template>
    <div class="block">
      <div class="title">Set Date & Time(select maximum 6 slots)</div>
      <div class="calendar">
        <v-date-picker v-model="date" />
      </div>
    </div>
</template>
    
<script>
import 'v-calendar/dist/style.css';
import { DatePicker } from 'v-calendar';
export default {
    name: "Calendar",
    components: {
      DatePicker,
    },
    props: {

    },    
    data: () => ({
        text: "",
        date: new Date(),
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
    font-weight: 500;
    font-size: 18px;
    margin-bottom: 10px;
    color: #000000;
  }
  .calendar {
    width: 100%;
  }
  .vc-container {
    width: 100%;
  }
  </style>