<template>
  <div class="modal-backdrop mobile" :class="{'open': open}" @click="closeModal">
    <div class="modal" v-if="profile" @click.stop>
      <div class="header">
        Video Call with {{ profile.name }}
      </div>
      <div class="details">
        <div class="detail">
          <span class="icon">
            <img src="@/assets/profile/modal/call/time.svg"/>
          </span>
          <span class="desc">{{profile.time}}</span>
        </div>
        <div class="detail">
          <span class="icon">
            <img src="@/assets/profile/modal/call/video.svg"/>
          </span>
          <span class="desc">Details will be shown in the chat after the booking</span>
        </div>
        <div class="detail">
          <span class="icon">
            <img class="dollar" src="@/assets/profile/modal/call/$.svg"/>
          </span>
          <span class="desc">{{profile.time}}</span>
        </div>
      </div>
      <!-- Select one -->
      <div class="title">Select one</div>
      <div class="selects">
        <div class="select" v-for="select in selects" :key="select">{{ select }}</div>
      </div>
      <div class="title">Rules:</div>
      <div class="rules">
        <div class="rule mobile">-This is a safe space for everyone and disrespectful behavior won’t be tolerated.</div>
        <div class="rule mobile">-Keep it PG! FanChat is a clean/non-sexual platform.</div>
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
@media (max-width: 414px) {
  .modal-backdrop.mobile {
    border-radius: 0;
  }
  .mobile .modal {
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
  }
  .modal .btn_component {
    font-size: 20px;
  }
  .rule.mobile {
    font-size: 12px;
  }
}
.btn_component {
  font-size: 20px;
  padding: 10px 30px;
  padding-bottom: 12px;
  margin: 0 auto;
  margin-bottom: 4%;
}
.rules {
  margin-bottom: 6%;
}
.rule {
  font-size: 14px;
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
  flex-direction: column;
}
.detail {
  margin: 10px 0px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.icon {
  display: flex;
  justify-content: center;
  width: 40px;
  margin-right: 10px;
}
.icon img {
  width: 25px;
}
.icon .dollar {
  width: 13px;
}
.desc {
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
  font-weight: 500;
  font-size: 21px;
  line-height: 24px;
  color: #000000;
}
</style>