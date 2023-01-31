<template>
      <div class="items">
        <div class="item" v-for="item in items" :key="item">
          <img :src="require(`@/assets/profile/${item.img}`)">
          <div class="info">
            <span class="name">{{ item.name }}</span>
            <span class="tag">@{{ item.tag }}</span>
          </div>
          <button class="btn">{{item.price}}</button>
        </div>
      </div>
  </template>
  
  <script>
  export default {
    name: "Explore",
    data: () => ({
      items: [
        {
          img: "avatar_woman.svg",
          name: "Savannah",
          tag: "Savannah",
          price: "$50/8mins",
        },
        {
          img: "avatar_woman.svg",
          name: "Savannah",
          tag: "Savannah",
          price: "$50/8mins",
        },
        {
          img: "avatar_woman.svg",
          name: "Savannah",
          tag: "Savannah",
          price: "$50/8mins",
        },
        {
          img: "avatar_woman.svg",
          name: "Savannah",
          tag: "Savannah",
          price: "$50/8mins",
        },        {
          img: "avatar_woman.svg",
          name: "Savannah",
          tag: "Savannah",
          price: "$50/8mins",
        },        {
          img: "avatar_woman.svg",
          name: "Savannah",
          tag: "Savannah",
          price: "$50/8mins",
        },        {
          img: "avatar_woman.svg",
          name: "Savannah",
          tag: "Savannah",
          price: "$50/8mins",
        },        {
          img: "avatar_woman.svg",
          name: "Savannah",
          tag: "Savannah",
          price: "$50/8mins",
        },        {
          img: "avatar_woman.svg",
          name: "Savannah",
          tag: "Savannah",
          price: "$50/8mins",
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
  padding: 10px 10px;
  background-color: #fff;
  cursor: pointer;
  font-weight: 600;
}
.info {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.info .tag {
  margin-bottom: 5%;
}
.info .name {
  font-family: 'Petrona';
  color: #000000;
  font-weight: 500;
  font-size: 121%;
  margin: 2% 0%;
}
.items {
  display: grid;
  grid-template-rows: 32% 32% 32%;
  grid-template-columns: 1fr 1fr 1fr;
  width: 100%;
  height: 76%;
  overflow-y: auto;
  padding: 0px 1%;
  flex-wrap: wrap;
}
.item {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 12%;
}
.item img {
  height: 60%;
}
  </style>