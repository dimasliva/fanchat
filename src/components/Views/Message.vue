<template>
  <div class="items">
    <div class="item" v-for="item in items" :key="item">
      <div class="info_container">
        <img :src="require(`@/assets/profile/${item.img}`)">
        <div class="info">
          <span class="name">{{ item.name }}</span>
          <span class="tag">@{{ item.tag }}</span>
          <span class="confirmed">Confirmed Booking!</span>
        </div>
      </div>
      <div class="btn_call" v-if="item.call">
        <Btn :call="item.call" :text="item.session" class="btn mobile" @click="toPage('Call')"/>
        <span class="tap">Tap to Connect</span>
      </div>
      <Btn v-else :call="item.call" :text="item.session" class="btn mobile"/>
    </div>
  </div>
</template>
  
  <script>
import Btn from '../assets/Btn.vue';

export default {
  name: "Message",
  data: () => ({
    items: [
      {
        img: "avatar_woman.svg",
        name: "Savannah",
        tag: "Savannah",
        session: "Jan 20 @7pm",
        call: true,
      },
      {
        img: "avatar_woman_2.svg",
        name: "Kylie",
        tag: "Kylie",
        session: "Jan 20 @9pm",
        call: false,
      },
    ]
  }),
  components: { Btn },
  methods: {
    toPage(page) {
      this.$router.push({name: page})
    }
  },
}
</script>
<style scoped>
@media (max-width: 414px) {
  .btn.mobile {
    font-size: 9px;
  }
}
.btn_call {
  display: flex;
  flex-direction: column;
  font-size: 12px;
  font-weight: 500;
  margin-top: 18px;
}
.btn_call span {
  margin-top: 3px;
}
  .items {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    overflow-y: auto;
    padding-top: var(--top-margin);
  }
  .item {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 94%;
    height: var(--item-height);
    padding: var(--item-padding);
    margin: 1%;
    background-color: #F5F2F2;
    border-radius: 15px;
    --item-height: 104px;
    --item-padding: 12px;
  }
.info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  height: var(--item-height);
  padding-bottom: var(--item-padding);
}
.info .name {
  color: #000000;
  font-weight: 500;
  font-size: 17px;
  margin-bottom: 1%;
}
.info .tag {
  font-size: 14px;
  margin-bottom: 6px;
}
.info .confirmed {
  font-weight: 700;
  color: #C867F7;
  font-size: 12px;
  text-align: left;
}
.info_container {
  display: flex;
  align-items: center;
  width: 68%;
}
.info_container img {
  margin-right: 16px;
  height: calc(var(--item-height) - 20px);
}
.btn {
  font-size: 12px;
}
.tap {
  font-weight: 700;
  font-size: 10px;
  color: #181817;
}
</style>