<template>
  <div class="privacy">
    <div class="text">By Signing up, you are agreeing with our</div>
    <div class="text">
      <span class="terms">
        Terms of use
      </span>
      and
      <span class="terms">
        Privacy Policy
      </span>
    </div>
  </div>
</template>
  
<script>
  export default {
    name: "Policy",
  }
</script>
<style scoped>
@media (max-height: 700px) {
  .privacy .text{
    font-size: 19px !important;
    line-height: 21px !important;
  }
}
.text .terms {
  color: rgba(186, 77, 237, 1);
  cursor: pointer;
}

.privacy {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 50px;
}
.text{
  font-family: 'Petrona';
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 120%;
  text-align: center;
  color: #636363;
}
</style>