<template>
  <div class="earn_container">
    <!-- Recent Earning -->
    <div class="earning">
      <span class="dollar">
        <img src="@/assets/profile/modal/call/$.svg"/>
      </span>
      <div class="recent_earn">
        <button class="btn">{{ currentEarn }}</button>
        <div class="text">Recent Earnings</div>
      </div>
      <button class="btn pay" @click="toPage('Creator')">Pay out</button>
    </div>
    <!-- Past Earning -->
    <div class="past_earn">
      <div class="title">Past Earnings Paid out</div>
      <div class="items">
        <div class="item" v-for="item in items">
          <span>$ {{ item.earn }}</span>
          <span>{{ item.session }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
  export default {
    name: "Earning",
    data: () => ({
      currentEarn: '28,981',
      items: [
        {earn: '1498.34', session: 'on Jan 1’2023'},
        {earn: '1498.34', session: 'on Jan 1’2023'},
        {earn: '144', session: 'on Dec 31’2022'},
        {earn: '544.34', session: 'on Dec 11’2022'},
        {earn: '98.34', session: 'on Dec 1’2022'},
      ]
    }), 
    methods: {
      toPage(page) {
        this.$router.push({name: page})
      }
    },
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
.past_earn {
  margin-top: 16%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.dollar {
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  width: 28%;
}
.dollar, .btn.pay {
  margin-bottom: 5%;
}
.recent_earn {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 41%;
  margin: 0px 1%;
  margin-right: 2%;
}
.recent_earn .text {
  margin-top: 4%;
  white-space: nowrap;
}
  .earn_container {
    display: flex;
    flex-direction: column;
  }
  .earning {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
  }
  .btn {
    border: 1px solid #CDCCCC;
    border-radius: 36px;
    background-color: transparent;
    padding: 5% 20%;
    font-weight: 400;
    font-size: 190%;
    cursor: pointer;
    width: 100%;
  }
  .btn.pay {
    white-space: nowrap;
    padding: 2% 0%;
    font-size: 100%;
    width: 24%;
  }
  .earn_container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90%;
  }
</style>