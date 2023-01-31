<template>
  <div class="items">
    <!-- Profile -->
    <div class="item">
      <div class="profile">
        <img :src="require(`@/assets/profile/${profile.avatar}`)"/>
      </div>
      <div class="name">
        <div class="nick">{{ profile.name }}</div>
        <div class="tag">@{{ profile.tag }}</div>
      </div>
      <button @click="openPage('ProfileEdit')" class="btn edit">Edit Profile</button>
    </div>
    <!-- Change Password -->
    <div class="item setting">
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
        this.$router.push({name: page})
      },
    },
  }
  </script>
  <style scoped>
  @media (max-width: 428px) {
    .items .item {
      height: 14%;
    }
  }
  .item.setting {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 8%;
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
  .btn {
    border: 1px solid #CDCCCC;
    border-radius: 21px;
    background-color: transparent;
    position: absolute;
    right: 2%;
    bottom: 10%;
    padding: 2.5% 6%;
    font-weight: 300;
    font-size: 98%;
    cursor: pointer;
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
  font-size: 114%;
}
.tag {
  font-size: 98%;
  font-weight: 300;
}
.profile, .profile img {
  height: 100%;
}
  </style>