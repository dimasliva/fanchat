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
      <button class="btn">{{item.session}}</button>
    </div>
  </div>
</template>
  
  <script>
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
    methods: {

    },
  }
  </script>
  <style scoped>
  .btn {
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.25);
  border: 2px solid transparent;
  background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), 
  linear-gradient(180deg, #C867F7 0%, #DB7859 100%);
  background-origin: border-box;
  background-clip: content-box, border-box;
  box-shadow: 2px 1000px 1px #fff inset;
  border-radius: 22px;
  padding: 10px 6px;
  background-color: #fff;
  cursor: pointer;
  position: absolute;
  top: 36%;
  right: 5%;
  font-weight: 600;
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
  font-size: 13px;
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