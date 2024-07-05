<script setup></script>

<template>
  <div class="new-order-container">
    <div class="new-order-head">
      <img src="@/assets/orders/images/news_top.png" alt="图标" />
      <div class="new-order-from">
        <h2>非常抱歉，维修服务暂时停止，开启时间请等待通知！</h2>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;服务具体开放通知，可关注下面公众号获取最新消息<br />
          &nbsp;&nbsp;&nbsp;&nbsp;如遇紧急情况，需要维修电脑可添加维修站QQ咨询群：790445318
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.new-order-container {
  .new-order-from {
    h2 {
      color: #7a7374;
      text-align: center;
      margin: 0;
      padding: 0 20px;
    }
    p {
      font-size: 18px;
      padding: 0 8px 25px;
      word-wrap: break-word;
      overflow-wrap: break-word;
    }
  }
}
</style>
