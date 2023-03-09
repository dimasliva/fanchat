<template>
  <div class="items mobile">
    <div class="item" v-for="item in items" :key="item" @click="openModel(item.id)">
      <img :src="item.profile_picture ? item.profile_picture : require('@/assets/profile/avatar_woman.svg')">
      <div class="info">
        <span class="name">{{ item.username }}</span>
        <span class="tag">@{{ item.username }}</span>
      </div>
      <Btn :text="item.price ? '$' + item.price + '/8min' : '$0/8min'"/>
      <!-- <button class="mobile btn">{{item.price}}</button> -->
    </div>
  </div>
</template>
  
<script>
  import Btn from '../assets/Btn.vue';
  import { getAllModelsList } from "@/api/model/func";
  export default {
    name: "Explore",
    components: { Btn },
    data: () => ({
      items: []
    }),
    methods: {
      async getSeances() {
        this.items = (await getAllModelsList()).seanses
        console.log('getUsers', this.items)
      },
      openModel(id) {
        this.$router.push({name: "Model", params: {id}})
      }
    },
    mounted() {
      this.getSeances()
    }
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
    grid-template-columns: 33% 33% 33%;
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
    cursor: pointer;
  }
</style>