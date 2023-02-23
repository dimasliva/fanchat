<template>
  <div class="container">
    <div class="title">
      <div class="text">Frequently Asked</div>
      <div class="text">Questions & Answers</div>
    </div>
    <div class="blocks page_four">
      <div class="block">
        <div class="title">How do I become a creator on Fanchat?</div>
        <div class="desc">
          It’s very simple, just log into your account > settings > become a creator option. And simply fill in the asked details.
        </div>
      </div>

      <div class="block">
        <div class="title">  How much can I earn?</div>
        <div class="desc">  
          How much you earn is completely up to you! You can set your own prices for every video chat session with your fans and you keep 89% of everything  earned. Fanchat keeps 11% to cover operations and maintain the platform.
        </div>
      </div>

      <div class="block">
        <div class="title">Which payment method does Fanchat use to pay Creators?</div>
        <div class="desc">Fanchat uses Stripe, as it is one of the safest, most widely used, and most well-known payment platforms that have the lowest fees and are available in many countries globally.</div>
      </div>

      <div class="block">
        <div class="title">How often do Creators receive the payment?</div>
        <div class="desc">Creators are paid bi-weekly, on the 15th and 30th of the month. There is no minimum required for a payout (e.g. if you make 88 cents for the week, you will be paid 88 cents). All payments will be paid to your bank account as entered with Stripe as a direct deposit.</div>
      </div>
    </div>
  </div>
</template>
  
<script>
  export default {
    name: 'PageFour',
    data: () => ({
    }),
    methods: {
    },
  }
</script>
<style scoped>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    color: #181817;
  }
  .title {
    font-weight: 500;
    font-size: 58px;
    line-height: 65px;
    text-align: center;
    margin-bottom: 20px;
  }
  .blocks {
    width: 895px;
  }
  .block {
    width: 100%;
    background: rgba(217, 217, 217, 0.4);
    box-shadow: 0px 4px 100px rgba(0, 0, 0, 0.6);
    border-radius: 19px;
    margin: 15px 0px;
    text-align: start;
    display: flex;
    flex-direction: column;
    align-items: start;
    padding: 15px;
    font-size: 25px;
  }
  .page_four .block:nth-child(even) {
    background: rgba(217, 217, 217, 0.4);
    box-shadow: 0px 4px 100px rgba(0, 0, 0, 0.27);
  }
  .page_four .block .title {
    font-size: 25px;
    font-weight: 800;
    line-height: 28px;

    color: #000000;
    margin-bottom: 4px;
  }
</style>