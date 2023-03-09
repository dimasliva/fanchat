<template>
  <div class="edit_container">
    <div class="profile">
      <img src="@/assets/profile/avatar_woman.svg"/>
      <span class="edit">
        <img src="@/assets/settings/pencil.svg"/>
      </span>
    </div>
    <div class="fields">
      <InputField 
        @edit="e => chageField('name', e)"
        :placeholder="'Name'" 
        :bold="true" 
        :value="user.first_name"
      />
      <InputField 
        @edit="e => chageField('tag', e)"
        :placeholder="'Tag'" 
        :value="'@'+user.tag"
      />
      <InputField 
        @edit="e => chageField('bio', e)"
        :placeholder="'Bio'" 
        :value="user.biography"
      />
    </div>
    <Btn :text="'Save'" @click="userEdit"/>
  </div>
</template>
  
<script>
import Btn from '../assets/Btn.vue';
import InputField from '@/components/assets/InputField.vue';
import { editUser, getUser } from '@/api/user/func';
import { getCookie } from '@/api/cookie/func';

export default {
  name: "ProfileEdit",
  components: { Btn, InputField },
  data() {
    return ({
      userId: getCookie('userId') ,
      user: {
        first_name: "",
        tag: "",
        biography: "",
      },
      userData: null,
    })
  },
  methods: {
    chageField(type, text) {
      console.log(text)
      if(type === 'name') {
        this.user.first_name = text
        this.user.tag = text
      } else if(type === 'tag') {
        console.log('tag', text.substr(text.lenght - 1))
        this.user.tag = text.replace(/\@/, '')
        this.user.first_name = text.replace(/\@/, '')
      } else {
        this.user.biography = text
      }
    },
    async userEdit() {
      this.userData.first_name = this.user.first_name
      this.userData.biography = this.user.biography
      await editUser(this.userId, this.userData)
    },
    async getUser() {
      this.userData = (await getUser(this.userId)).user
      this.user.first_name = this.userData.first_name
      this.user.biography = this.userData.biography
      console.log(this.user.first_name)
      console.log(this.userData.first_name)
    },
  },
  mounted() {
    this.getUser()
  },
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