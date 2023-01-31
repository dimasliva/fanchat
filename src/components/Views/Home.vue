<template>
      <div class="items">
        <div class="item" v-for="item in items" :key="item">
          <img :src="require(`@/assets/profile/${item.img}`)">
          <div class="info">
            <span class="name">{{ item.name }}</span>
            <span>@{{ item.tag }}</span>
            <span class="session">{{item.session}}</span>
          </div>
          <button class="btn">Book Again</button>
        </div>
      </div>
  </template>
  
  <script>
  export default {
    name: "Home",
    data: () => ({
      items: [
      {
        img: "avatar_woman.svg",
        name: "Savannah",
        tag: "Savannah",
        session: "Last session was on Jan 6 2023",
      },
      {
        img: "avatar_woman.svg",
        name: "Savannah",
        tag: "Savannah",
        session: "Last session was on Jan 6 2023",
      },
      {
        img: "avatar_woman.svg",
        name: "Savannah",
        tag: "Savannah",
        session: "Last session was on Jan 6 2023",
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
  padding: 12px 16px;
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
}
.info .name {
  font-family: 'Petrona';
  color: #000000;
  font-weight: 500;
  font-size: 121%;
  margin-bottom: 1%;
}
.info .session {
  font-family: Petrona;
  font-size: 90%;
  font-weight: 300;
  line-height: 90%;
  letter-spacing: 0em;
  text-align: left;
  margin-top: 5%;
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
  width: 94%;
  height: 17%;
  padding: 2%;
  margin: 1%;
  background-color: #F5F2F2;
  border-radius: 15px;
}
.item img {
  margin-right: 2%;
  height: 100%;
}
  </style>