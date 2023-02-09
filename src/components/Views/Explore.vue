<template>
  <div class="items mobile">
    <div class="item" v-for="item in items" :key="item">
      <img :src="require(`@/assets/profile/${item.img}`)">
      <div class="info">
        <span class="name">{{ item.name }}</span>
        <span class="tag">@{{ item.tag }}</span>
      </div>
      <Btn :text="item.price"/>
      <!-- <button class="mobile btn">{{item.price}}</button> -->
    </div>
  </div>
</template>
  
<script>
import Btn from '../assets/Btn.vue';

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
        ]
    }),
    methods: {},
    components: { Btn }
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
    .items.mobile {
      height: 78%;
    }
  }
  .btn {
    padding: 8px 10px;
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
    padding-top: var(--top-margin);
    flex-wrap: wrap;
    height: 81%;
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