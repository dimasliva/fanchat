<template>
  <ProfileModal :open="modalOpen" :profile="modalItem" @closeModal="closeModal"/>
  <div class="profile">
    <div class="photo">
      <img :src="require(`@/assets/profile/${profile.img}`)">
      <Btn class="btn_component" :text="btnText" @click="openModal"/>
    </div>
    <div class="info">
      <span class="name">{{ profile.name }}</span>
      <span class="tag">@{{ profile.tag }}</span>
      <div class="bio">
        <span class="title">Bio</span>
        <span class="text">{{profile.bio}}</span>
      </div>
    </div>
  </div>
</template>
  
<script>
import ProfileModal from "@/components/Modals/ProfileModal.vue";
import Btn from "../assets/Btn.vue";
export default {
  name: "Profile",
  components: { ProfileModal, Btn },
  data: () => ({
    profile: {
      img: "avatar_woman.svg",
      name: "Savannah",
      tag: "Savannah",
      bio: "Welcome to my Profile, Book an exclusive video chat session with me, where we can talk about anything and get to know each other!",
      time: "8mins",
      price: 50,
    },
    modalItem: null,
    modalOpen: null
  }), 
  methods: {
    closeModal() {
      this.modalOpen = false
    },
    openModal() {
      this.modalOpen = true
      this.modalItem = this.profile
    },
  },
  computed: {
    btnText() {
      return '$' + this.profile.price + '/' + this.profile.time
    }
  }
}
</script>
<style scoped>
.btn_component {
  position: absolute;
  bottom: -4%;
  right: 5%;
}
.bio {
  display: flex;
  flex-direction: column;
  text-align: start;
  font-size: 130%;
}
.bio .title {
  font-family: 'Petrona';
  font-style: normal;
  font-weight: 500;
  color: #000000;
  font-size: 130%;
}
.info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0 2.5%;
}
.info .name {
  font-family: 'Petrona';
  color: #000000;
  font-weight: 500;
  font-size: 150%;
}
.info .tag {
  font-family: Petrona;
  text-align: left;
  margin-bottom: 3.5%;
  font-size: 122%;
}
.profile {
  width: 95%;
  height: 76%;
  overflow-y: auto;
}
.profile .photo {
  position: relative;
}
.profile .photo img {
  width: 100%;
}
</style>