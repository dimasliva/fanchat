<template>
  <div class="items">
    <div class="item" v-for="item in items" :key="item">
      <div class="info_container">
        <span 
          class="img profile"
          :style="`background-image: url(${item.model.profile_picture ? item.model.profile_picture : require('@/assets/profile/avatar_woman.svg')});`"
        />
        <div class="info">
          <span class="name">{{ item.model.username }}</span>
          <span class="tag">@{{ item.model.username }}</span>
          <span class="session">Last sessions was on {{moment(item.datetime).format("MMM D YYYY")}}</span>
        </div>
      </div>
      <Btn :text="booking_status ? 'Book Again' : 'Book Again'"/>
    </div>
  </div>
</template>
  
<script>
import Btn from '../assets/Btn.vue';
import { getBuyerSeances } from "@/api/buyer/func";
import moment from "moment";
import { setCookie } from '@/api/cookie/func';
  export default {
    name: "Home",
    components: { Btn },
    data: () => ({
      items: [],
      moment: moment,
    }),
    methods: {
      async getSeances() {
        this.items = (await getBuyerSeances()).seanses
        setCookie("userId", this.items[0].buyer.id)
      }
    },
    mounted() {
      this.getSeances()
    },
}
  </script>
  <style scoped>
  @media (max-width: 414px) {
    .info_container .info .name {
      font-size: 15px;
    }
    .info_container .info .tag {
      font-size: 13px;
      line-height: 14px;
    }
    .info_container .info .session {
      font-size: 10px;
    }
    .btn {
      font-size: 11px;
    }
  }
  .info_container {
    display: flex;
    align-items: flex-end;
    width: 68%;
  }
.info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
}
.info .name {
  color: #000000;
  font-weight: 500;
  font-size: 17px;
  margin-bottom: 1%;
}
.info .tag {
  font-weight: 300;
  font-size: 14px;
  margin-top: 4px;
  margin-bottom: 8px;
}
.info .session {
  font-size: 13px;
  font-weight: 300;
  line-height: 90%;
  letter-spacing: 0em;
  text-align: left;
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
  padding: var(--item-padding);
  margin: 1%;
  background-color: #F5F2F2;
  border-radius: 15px;
  --item-padding: 12px;
}
.item .profile {
  width: 90px;
  height: 90px;
  margin-right: 16px;
  border-radius: 7px;
}

  </style>