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
@media (max-width: 428px) {
  .privacy .text{
    font-size: 89%;
    line-height: 110%;
  }
}
.text .terms {
  color: rgba(186, 77, 237, 1);
}

.privacy {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 50px;
  font-family: 'Petrona';
  font-size: 150%;
  font-weight: 500;
  line-height: 110%;
  letter-spacing: 0em;
  text-align: center;
  color: #636363;
}
</style>