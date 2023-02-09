<template>
  <div class="items">
    <!-- Profile -->
    <div class="item">
      <div class="user_info">
        <div class="profile">
          <img :src="require(`@/assets/profile/${profile.avatar}`)"/>
        </div>
        <div class="name">
          <div class="nick">{{ profile.name }}</div>
          <div class="tag">@{{ profile.tag }}</div>
        </div>
      </div>
      <div class="btn_container">
        <Btn @click="openPage('ProfileEdit')" :text="'Edit Profile'"/>
      </div>
    </div>
    <!-- Change Password -->
    <div class="item setting" @click="openPage('Creator')">
      <div class="title">Change Password</div>
      <div class="arrow">
        <img src="@/assets/settings/arrow.svg"/>
      </div>
    </div>
        <!-- Earnings -->
    <div class="item setting" @click="openPage('Earning')">
      <div class="title">Earnings</div>
      <div class="arrow">
        <img src="@/assets/settings/arrow.svg"/>
      </div>
    </div>
    <!-- Log out -->
    <div class="item setting">
      <div class="title">Log out</div>
      <div class="arrow">
        <img class="logout" src="@/assets/settings/logout.svg"/>
      </div>
    </div>
  </div>
</template>
  
<script>
import Btn from '../assets/Btn.vue';

  export default {
    name: "Settings",
    data: () => ({
        profile: {
            avatar: "avatar_woman.svg",
            name: "Savannah",
            tag: "Savannah",
        }
    }),
    methods: {
        openPage(page) {
            this.$router.push({ name: page });
        },
    },
    components: { Btn }
}
  </script>
<style scoped>
  @media (max-width: 414px) {
  }
  .item.setting {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8%;
    font-size: 140%;
    cursor: pointer;
  }
  .item.setting .arrow img{
    width: 10px;
    margin-right: 6px;
  }
  .item.setting .arrow img.logout{
    width: 22px;
    margin-right: 0px;
  }
.items {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  padding-top: var(--top-margin);
}
.item {
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 94%;
  height: 104px;
  padding: 2%;
  margin: 1%;
  background-color: #F5F2F2;
  border-radius: 15px;
}
.btn_container {
  margin: auto 0px;
}
.btn {
  font-size: 14px;
  font-weight: 300;
  padding: 12px 24px;
}
.user_info {
  display: flex;
  align-items: center;
}
.name {
  text-align: start;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  font-size: 110%;
  margin-left: 15px;
}
.nick {
  font-weight: 500;
  font-size: 18px;
}
.tag {
  font-size: 16px;
font-weight: 300;
}
.profile, .profile img {
  height: 100%;
}
</style>