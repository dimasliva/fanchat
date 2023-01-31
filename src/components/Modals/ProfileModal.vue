<template>
  <div class="modal-backdrop" :class="{'open': open}" @click="closeModal">
    <div class="modal" v-if="profile" @click.stop>
      <div class="header">
        Video Call with {{ profile.name }}
      </div>
      <div class="details">
        <div class="icons">
          <span class="icon">
            <img src="@/assets/profile/modal/call/time.svg"/>
          </span>
          <span class="icon">
            <img src="@/assets/profile/modal/call/video.svg"/>
          </span>
          <span class="icon">
            <img class="dollar" src="@/assets/profile/modal/call/$.svg"/>
          </span>
        </div>
        <div class="detail">
          <span class="icon">{{profile.time}}</span>
          <span class="icon">Details will be shown in the chat after the booking</span>
          <span class="icon">{{profile.price}}</span>
        </div>
      </div>
      <!-- Select one -->
      <div class="title">Select one</div>
      <div class="selects">
        <div class="select" v-for="select in selects" :key="select">{{ select }}</div>
      </div>
      <div class="title">Rules:</div>
      <div class="rules">
        <div class="rule">-This is a safe space for everyone and disrespectful behavior won’t be tolerated.</div>
        <div class="rule">-Keep it PG! FanChat is a clean/non-sexual platform.</div>
      </div>
      <Btn class="btn_component" :text="'Pay'"/>
    </div>
  </div>
</template>
<script>
import Btn from '@/components/assets/Btn.vue';

export default {
    name: "ProfileModal",
    props: {
        profile: Object,
        open: Boolean,
    },
    data: () => ({
        selects: ["Jan 20  @7pm", "Jan 20  @7:30pm", "Jan 20  @8pm", "Jan 20  @8:30pm", "Jan 20  @9pm", "Jan 20  @9:30pm",]
    }),
    methods: {
      closeModal() {
        this.$emit("closeModal");
      }
    },
    components: { Btn }
}
</script>
<style scoped>
.btn_component {
  width: 26%;
  font-size: 110%;
  padding: 2% 0%;
  padding-bottom: 2.5%;
  margin: 0 auto;
  margin-bottom: 4%;
}
.rules {
  margin-bottom: 6%;
}
.rule {
  font-size: 90%;
  font-weight: 600;
  text-align: start;
  color: #000000;
}
.selects {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
.select {
  padding: 8% 4%;
  border: 1px solid gray;
  border-radius: 12px;
  margin: 6px 0px;
  margin-right: 12%;
  font-size: 85%;
  cursor: pointer;
}
.title {
  color: #000000;
  font-size: 130%;
  font-weight: 500;
  text-align: start;
  margin: 3% 0%;
}
.details {
  display: flex;
  align-items: flex-start;
  font-size: 105%;
}
.icons {
  display: flex;
  flex-direction: column;
  margin-right: 3%;
}
.icons .icon img {
  width: 100%;
}
.icons .icon .dollar {
  width: 46%;
}
.icons .icon {
  width: 116%;
}
.icon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 12px 0px;
}
.detail {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.detail .icon {
  margin-top: 5%;
  justify-content: flex-start;
  align-items: center;
  text-align: start;
}

.modal-backdrop.open {
  opacity: 1;
  visibility: visible;
}
.modal-backdrop {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: flex-end;
  z-index: 1;
  opacity: 0;
  visibility: hidden;
  transition: all .3s ease-in-out;
  border-radius: var(--phone-border-radius)
}
.modal {
  width: 100%;
  background: #FFFFFF;
  border: 2px solid;
  padding: 4% 6%;
  padding-right: 10%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border-radius: var(--phone-border-radius)
}
.header {
  font-family: 'Petrona';
  font-style: normal;
  font-weight: 500;
  font-size: 140%;
  line-height: 24px;
  color: #000000;
}
</style>