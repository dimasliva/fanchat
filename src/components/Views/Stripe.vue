<template>
  <div class="stripe_container">
    <div class="stripe">
      <InputField 
        :value="data" 
        @edit="e => data = e"
        :placeholder="'Country'"
      />
      <div class="desc">
        <button class="btn connect" @click="toPage('Stripe')">Connect with Stripe</button>
        <div class="description">
          <span class="text">Securely connect with your bank account.</span>
          <span class="text">Payments will be made every 15th and 30th of the month.</span>
        </div>
      </div>
    </div>
    <button class="btn next" @click="toPage('Stripe')">Next</button>
  </div>
</template>
  
<script>
import InputField from '@/components/assets/InputField.vue';

export default {
  name: "Creator",
  components: { InputField },
  data: () => ({
    data: "",
  }),
  methods: {
    toPage(page) {
      this.$router.push({ name: page });
    }
  },
}
</script>
<style scoped>
.description {
  display: flex;
  font-size: 13px;
  flex-direction: column;
  white-space: nowrap;
}
.desc {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: start;
  margin: auto;
  width: 295px;
  color: #000000;
}
.desc .btn {
  width: 85%;
  margin-bottom: 2%;
}
.stripe, .stripe button {
  width: 100%;
  margin-top: 14%;
}
.stripe button {
  margin-top: 14%;
}
.stripe_container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 80%;
  width: 88%;
  margin-top: 1%;
}
.btn.connect {
  background-color: transparent;
  color: #000000;
  font-size: 24px;
  font-weight: 400;
  border: 1px solid #000000;
  width: 100%;
  height: 74px;
  border-radius: 8px;
}
.btn {
  color: #F5E0FF;
  background-color: #181817;
  padding: 5%;
  font-weight: 900;
  border: 0px solid;
  border-radius: 8px;
  width: 80%;
}
.btn.next {
  font-size: 30px;
}
  .stripe input {
    width: 100%;
  }
</style>