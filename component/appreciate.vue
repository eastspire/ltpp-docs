<template>
  <div>
    <div class="hint-container tip">
      <p class="hint-container-title">赞赏</p>
      <p>
        为了确保<strong> LTPP </strong
        >能够持续运行和不断优化，我希望<strong>寻求一些赞助支持</strong>，每一份支持都将<strong>直接用于服务器费用和网站维护</strong>，如果你认为这个项目有价值，任何小额赞助都会对我有极大的帮助！
      </p>
      <div class="pay-wrap">
        <div class="wechat-pay">
          <a id="微信支付" href="#微信支付">
            <figure>
              <img
                src="/img/wechat-pay.png"
                alt=""
                width="200"
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
                width="200"
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
