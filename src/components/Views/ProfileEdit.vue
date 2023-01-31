<template>
  <div class="edit_container">
    <div class="profile">
      <img src="@/assets/profile/avatar_woman.svg"/>
      <span class="edit">
        <img src="@/assets/settings/pencil.svg"/>
      </span>
    </div>
    <div class="fields">
      <input type="text" placeholder="Name" class="field name" :value="profile.name">
      <input type="text" placeholder="Tag" class="field tag" :value="'@' + profile.tag">
      <input type="text" placeholder="Bio" class="field bio" :value="profile.bio">
    </div>
    <button class="btn save">Save</button>
  </div>
</template>
  
<script>
  export default {
    name: "ProfileEdit",
    data: () => ({
      profile: {
        avatar: "avatar_woman.svg",
        name: "Savannah",
        tag: "Savannah",
        bio: "",
      }
    }), 
    methods: {
    },
  }
</script>
<style scoped>
  .btn {
    margin-top: 20%;
    border: 1px solid #CDCCCC;
    border-radius: 21px;
    background-color: transparent;
    padding: 2.5% 10%;
    font-weight: 300;
    font-weight: 300;
    font-size: 110%;
    cursor: pointer;
  }
  .edit_container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90%;
  }
  .fields {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .field.name {
    font-weight: 500;
    color: #000000;
    font-size: 130%;
    font-style: normal;
  }
  .field.tag {
    font-style: normal;
    font-weight: 300;
  }
  .field {
    font-size: 108%;
    border: 0px;
    border-bottom: 1px solid #AFABAB;
    margin: 4% 0%;
    line-height: 23px;
  }
  .profile {
    position: relative;
    margin-top: 3%;
    width: 22%;
  }
  .profile img {
    width: 100%;
  }
  .edit {
    position: absolute;
    right: -15%;
    top: -12%;
    background-color: #A7A7A7; 
    padding: 7% 6%;
    padding-bottom: 3%;
    border-radius: 55%;
  }
  .edit img {
    width: 15px;
    height: 15px;
  }
</style>