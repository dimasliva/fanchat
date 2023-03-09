<template>
  <div class="creator_container">
    <InputField 
      :value="data.first_name"
      @edit="e => data.first_name = e"
      :style="{paddingLeft: '10px'}" 
      :placeholder="'Name'"
      />
    <InputField 
      :value="data.username" 
      @edit="e => data.username = e"
      :style="{paddingLeft: '10px'}" 
      :placeholder="'Username'"
      />
    <InputField 
      :value="data.birth_date" 
      @edit="e => data.birth_date = e"
      :style="{paddingLeft: '10px'}" 
      :placeholder="'Date of Birth'"
    />
    <InputField 
      :value="data.phone_number" 
      @edit="e => data.phone_number = e"
      :style="{paddingLeft: '10px'}" 
      :placeholder="'Phone number(req)'"
    />
    <InputField 
      :value="data.instagram_link" 
      @edit="e => data.instagram_link = e"
      :style="{paddingLeft: '10px'}" 
      :placeholder="'Instagram(req)'"
    />
    <InputField 
      :value="data.tiktok_link" 
      @edit="e => data.tiktok_link = e"
      :style="{paddingLeft: '10px'}" 
      :placeholder="'TikTok'"
      />
    <button class="btn" @click="editUser">Next</button>
  </div>
</template>
  
<script>
import { getCookie } from '@/api/cookie/func';
import { getUser, editUser } from '@/api/user/func';
import InputField from '../assets/InputField.vue';

export default {
  name: "Creator",
  components: { InputField },
  data: () => ({
    user: {},
    data: {
      first_name: "",
      username: "",
      birth_date: "",
      phone_number: "",
      instagram_link: "",
      tiktok_link: "",
    }
  }),
  methods: {
    async getUser() {
      this.user = (await getUser(getCookie("userId"))).user
      this.data.first_name = this.user.first_name
      this.data.username = this.user.username
      this.data.birth_date = this.user.birth_date
      this.data.phone_number = this.user.phone_number
      this.data.instagram_link = this.user.instagram_link
      this.data.tiktok_link = this.user.tiktok_link
      console.log(this.user)
    },
    async editUser() {
      let data = this.user
      data.first_name = this.data.first_name
      data.username = this.data.username
      data.birth_date = this.data.birth_date
      data.phone_number = this.data.phone_number
      data.instagram_link = this.data.instagram_link
      data.tiktok_link = this.data.tiktok_link
      await editUser(getCookie('userId'), data)
      this.$router.push({ name: "Stripe" });
    }
  },
  mounted() {
    this.getUser()
  },
  watch: {
    'data.first_name'(text) {
      console.log('watch', text)
    }
  },
}
</script>
<style scoped>
.creator_container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 83%;
  width: 88%;
  padding-top: var(--top-margin);
}
.btn {
  color: #F5E0FF;
  background-color: #181817;
  padding: 25px;
  font-weight: 900;
  border: 0px solid;
  border-radius: 8px;
  width: 80%;
  cursor: pointer;
  font-size: 30px;
}
  .creator_container input {
    width: 100%;
  }
</style>