<template>
  <div class="edit_container">
    <div class="profile">
      <img src="@/assets/profile/avatar_woman.svg"/>
      <span class="edit">
        <img src="@/assets/settings/pencil.svg"/>
      </span>
    </div>
    <div class="fields">
      <InputField :placeholder="'Name'" :bold="true" :value="profile.name"/>
      <InputField :placeholder="'Tag'" :value="'@' + profile.tag"/>
      <InputField :placeholder="'Bio'" :value="profile.bio"/>
    </div>
    <Btn :text="'Save'"/>
  </div>
</template>
  
<script>
import Btn from '../assets/Btn.vue';
import InputField from '@/components/assets/InputField.vue';

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
    methods: {},
    components: { Btn, InputField }
}
</script>
<style scoped>
  .btn {
    margin-top: 20%;
    padding: 2.5% 10%;
    font-weight: 300;
    font-size: 110%;
  }
  .edit_container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90%;
    padding-top: var(--top-margin);
  }
  .fields {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 30px;
  }
  .field.name {
    font-weight: 500;
    color: #000000;
    font-size: 130%;
    font-style: normal;
  }
  .field.tag {
    font-weight: 400;
    font-size: 16px;
    color: #858585;
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