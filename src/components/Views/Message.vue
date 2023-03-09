<template>
  <div class="items">
    <div class="item" v-for="item in items" :key="item.id">
      <div class="info_container">
        <span 
          class="img profile"
          :style="`background-image: url(${item.model.profile_picture ? item.model.profile_picture : require('@/assets/profile/avatar_woman.svg')});`"
        />
        <div class="info">
          <span class="name">{{ item.model.username }}</span>
          <span class="tag">@{{ item.model.username }}</span>
          <span class="confirmed">Confirmed Booking!</span>
        </div>
      </div>
      <div class="btn_call" v-if="item.booking_status">
        <Btn :call="item.booking_status" class="btn mobile" @click="toPage('Call')"/>
        <span class="tap">Tap to Connect</span>
      </div>
      <Btn v-else :text="moment(item.datetime).format('MMM DD @HHa')" class="btn mobile"/>
    </div>
  </div>
</template>
  
<script>
import { getBuyerSeances } from '@/api/buyer/func';
import moment from 'moment';
import Btn from '../assets/Btn.vue';

export default {
  name: "Message",
  components: { Btn },
  data: () => ({
    items: [],
    moment: moment,
  }),
  methods: {
    toPage(page) {
      this.$router.push({name: page})
    },
    async getSeances() {
      this.items = (await getBuyerSeances()).seanses
    }
  },
  mounted() {
    this.getSeances()
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
.info_container .profile {
  width: 90px;
  height: 90px;
  margin-right: 16px;
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