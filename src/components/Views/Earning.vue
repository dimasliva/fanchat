<template>
  <div class="earn_container">
    <!-- Recent Earning -->
    <div class="earning">
      <span class="dollar">
        <img src="@/assets/profile/modal/call/$.svg"/>
      </span>
      <div class="recent_earn">
        <InputField class="input" :value="currentEarn" :bold="true" :fontsize="24"/>
        <div class="text">Recent Earnings</div>
      </div>
      <Btn :text="'Pay out'" @click="toPage('Creator')"/>
    </div>
    <!-- Past Earning -->
    <div class="past_earn">
      <div class="title">Past Earnings Paid out</div>
      <div class="items">
        <div class="item" v-for="item in items">
          <span class="earn">$ {{ item.earn }}</span>
          <span class="data">{{ item.session }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
import Btn from '../assets/Btn.vue';
import InputField from '../assets/InputField.vue';

  export default {
    name: "Earning",
    data: () => ({
        currentEarn: "28,981",
        items: [
            { earn: "1498.34", session: "on Jan 1’2023" },
            { earn: "1498.34", session: "on Jan 1’2023" },
            { earn: "144", session: "on Dec 31’2022" },
            { earn: "544.34", session: "on Dec 11’2022" },
            { earn: "98.34", session: "on Dec 1’2022" },
        ]
    }),
    methods: {
        toPage(page) {
            this.$router.push({ name: page });
        }
    },
    components: { Btn, InputField }
}
</script>
<style scoped>
.items {
  width: 100%;
  display: flex;
  flex-direction: column;
}
.item {
  width: 100%;
  background-color: #F5F2F2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4% 3%;
  border-radius: 14px;
  margin: .6% 0%;
}
.item .data {
  font-weight: 400;
  font-size: 15px;
  color: #848484;
}
.item .earn {
  font-weight: 400;
  font-size: 17px;

  color: #000000;
}
.input {
  width: 100%;
}
.past_earn {
  margin-top: 16%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.dollar {
  display: flex;
  align-items: center;
  height: 70%;
  margin-right: 20px;
}
.dollar, .btn.pay {
  margin-bottom: 5%;
}
.recent_earn {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-right: 15px;
  width: 150px;
}
.recent_earn .text {
  white-space: nowrap;
  font-weight: 400;
  font-size: 14px;
  color: #828282;
}
.title {
  font-size: 17px;
  font-weight: 400;
}
.earn_container {
  display: flex;
  flex-direction: column;
  padding-top: var(--top-margin);
}
  .earning {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    position: relative;
    width: 100%;
  }
  .btn {
    margin-top: 2px;
    padding: 11px 40px;
    font-weight: 300;
    font-size: 14px;
  }
  .earn_container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90%;
  }
</style>