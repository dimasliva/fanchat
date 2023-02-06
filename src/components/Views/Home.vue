<template>
  <div class="items">
    <div class="item" v-for="item in items" :key="item">
      <div class="info_container">
        <img :src="require(`@/assets/profile/${item.img}`)">
        <div class="info">
          <span class="name">{{ item.name }}</span>
          <span class="tag">@{{ item.tag }}</span>
          <span class="session">{{item.session}}</span>
        </div>
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
    align-items: center;
    width: 68%;
  }
  .btn {
    box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.25);
    border: 2px solid transparent;
    background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), 
    linear-gradient(180deg, #C867F7 0%, #DB7859 100%);
    background-origin: border-box;
    background-clip: content-box, border-box;
    box-shadow: 2px 1000px 1px #fff inset;
    border-radius: 6px;
    padding: 12px 16px;
    background-color: #fff;
    cursor: pointer;
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
.item img {
  margin-right: 16px;
  height: calc(var(--item-height) - 20px);
}
  </style>