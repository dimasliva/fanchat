<template>
  <div class="container">
    <div class="phone">
      <div class="top">
        <div class="img user">
          <div class="bg nick">@sunnymalhi</div>
        </div>
      </div>
      <div class="bottom">
        <div class="img user">
          <div class="bg nick">@savannah</div>
          <div class="btn_close" @click="toPage('Message')">
            <div class="close img"></div>
          </div>
          <div class="bg time">5:30</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "Call",
    data: () => ({
    }), 
    methods: {
      toPage(page) {
        this.$router.push({name: page})
      }
    },
}
</script>
<style scoped>
.container {
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 3%;
  overflow-y: auto;
}
.phone {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: var(--phone-width);
  height: var(--phone-height);
  box-shadow: 4px 5px 4px rgba(0, 0, 0, 0.25);
  background: #FFFFFF;
  border-radius: var(--phone-border-radius)
}
.user {
  width: var(--phone-width);
  height: calc(var(--phone-height) / 2);
  border-radius: 10px;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 10px;
}
.top .user {
  background-image: url("@/assets/call/man.png");
}
.bottom .user {
  background-image: url("@/assets/profile/avatar_woman.svg");
}
.bg {
  color: white;
  font-weight: 700;
  font-size: 20px;

  background: rgba(255, 255, 255, 0.19);
  backdrop-filter: blur(11px);
  border-radius: 10px;
  padding: 8px;
}
.btn_close {
  padding: 8px 12px;
  background: #C03206;
  backdrop-filter: blur(11px);

  border-radius: 10px;
  cursor: pointer;
}
.close {
  height: 15.414214134216309px;
  width: 15.4142484664917px;
border-radius: 0px;

  background-image: url("@/assets/call/close.svg");
}
</style>