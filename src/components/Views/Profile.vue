<template>
  <ProfileModal :open="modalOpen" :profile="modalItem" @closeModal="closeModal"/>
  <div class="profile mobile">
    <div class="photo">
      <span 
          class="img profile"
          :style="`background-image: url(${profile.profile_picture ? profile.profile_picture : require(`@/assets/profile/avatar_woman.svg`)});`"
        />
      <Btn class="btn_component" :text="'$' + this.profile.price + '/' + '8min'" @click="openModal"/>
    </div>
    <div class="info">
      <span class="name">{{ profile.username }}</span>
      <span class="tag">@{{ profile.username }}</span>
      <div class="bio">
        <span class="title">Bio</span>
        <span class="text">{{profile.biography}}</span>
      </div>
    </div>
  </div>
</template>
  
<script>
import { getModelSeance } from "@/api/model/func";
import ProfileModal from "@/components/Modals/ProfileModal.vue";
import Btn from "../assets/Btn.vue";
export default {
  name: "Profile",
  components: { ProfileModal, Btn },
  data: () => ({
    profile: {},
    modalItem: null,
    modalOpen: null
  }), 
  methods: {
    async getOpenModel() {
      if(this.$route.params.id) {
        this.profile = (await getModelSeance(this.$route.params.id)).user
      } else {
        console.log()
      }
    },
    closeModal() {
      this.modalOpen = false
    },
    openModal() {
      this.modalOpen = true
      this.modalItem = this.profile
    },
  },
  mounted() {
    this.getOpenModel()
  },
  computed: {
  }
}
</script>
<style scoped>
@media (max-width: 414px) {
  .profile.mobile {
    height: 78%;
  }
}
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
  margin-top: 5px;
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
  height: 81%;
  overflow-y: auto;
  padding-top: var(--top-margin);
}
.profile .photo {
  position: relative;
}
.profile .photo .profile {
  width: 100%;
  height: 381px;
  border-radius: 10px;
}
</style>