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
      <Btn :text="item.session"/>
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
            },
            {
                img: "avatar_woman_2.svg",
                name: "Kylie",
                tag: "Kylie",
                session: "Jan 20 @9pm",
            },
        ]
    }),
    methods: {},
    components: { Btn }
}
  </script>
  <style scoped>
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
.items {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow-y: auto;
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
.info_container {
  display: flex;
  align-items: center;
  width: 68%;
}
.info_container img {
  margin-right: 16px;
  height: calc(var(--item-height) - 20px);
}
  </style>