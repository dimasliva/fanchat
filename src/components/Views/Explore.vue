<template>
  <div class="items mobile">
    <div class="item" v-for="item in items" :key="item">
      <img :src="require(`@/assets/profile/${item.img}`)">
      <div class="info">
        <span class="name">{{ item.name }}</span>
        <span class="tag">@{{ item.tag }}</span>
      </div>
      <button class="mobile btn">{{item.price}}</button>
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
  @media (max-width: 414px) {
    .mobile.items {
      grid-template-rows: 36% 36% 36%;
    }
    .info .tag {
      font-size: 12px;
    }
    .info .name {
      font-size: 14px;
    }
    .mobile.btn {
      font-size: 10px;
    }
    .items .item img {
      height: 90px;
    }
  }
  .btn {
    box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.25);
    border: 2px solid transparent;
    background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), 
    linear-gradient(180deg, #C867F7 0%, #DB7859 100%);
    background-origin: border-box;
    background-clip: content-box, border-box;
    box-shadow: 2px 1000px 1px #fff inset;
    border-radius: 22px;
    padding: 9px 10px;
    background-color: #fff;
    cursor: pointer;
    font-weight: 600;
    font-size: 12px;
  }
  .info {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .tag {
    font-size: 14px;
    margin-bottom: 5%;
  }
  .name {
    color: #000000;
    font-weight: 500;
    font-size: 17px;
    margin-top: 3%;
    margin-bottom: 3%;
  }
  .items {
    display: grid;
    grid-template-rows: 32% 32% 32%;
    grid-template-columns: 1fr 1fr 1fr;
    width: 100%;
    overflow-y: auto;
    padding: 0px 1%;
    padding-top: 10px;
    flex-wrap: wrap;
    height: 76%;
  }
  .item {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 20px;
  }
  .item img {
    height: 100%;
  }
</style>