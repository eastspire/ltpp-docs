<template>
  <div>
    <div class="hint-container tip">
      <p class="hint-container-title">赞赏</p>
      <p>
        作为这些项目的<strong>开发者</strong>，这些项目凝聚了我的心血和热情，如果您觉得项目对您有帮助，或希望支持一个坚持不懈的个人开发者，<strong>无论金额大小，您的赞助都将是对我的莫大鼓励</strong>。感谢您的信任和支持！
      </p>
      <div class="pay-wrap">
        <div class="wechat-pay">
          <a id="微信支付" href="#微信支付">
            <figure>
              <img
                src="/img/wechat-pay.png"
                alt=""
                width="180"
                tabindex="0"
                loading="lazy"
                photo-swipe=""
                style="cursor: zoom-in"
              />
              <figcaption></figcaption></figure
          ></a>
        </div>
        <div class="alipay-pay">
          <a id="支付宝支付" href="#支付宝支付">
            <figure id="支付宝支付">
              <img
                src="/img/alipay-pay.jpg"
                alt=""
                width="180"
                tabindex="0"
                loading="lazy"
                photo-swipe=""
                style="cursor: zoom-in"
              />
              <figcaption></figcaption></figure
          ></a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.pay-wrap {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex-wrap: wrap;
}

.wechat-pay,
.alipay-pay {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin: 0rem 1rem;
}
</style>
