<script setup>
import { useRoute, useRouter } from 'vue-router'
const router = useRouter()
const route = useRoute()

const onClick = () => {
  if (route.fullPath.includes('admin')) {
    router.push('/admin/profile')
  } else {
    router.push('/staff/profile')
  }
}
const handleClick = () => {
  console.log('back to top')
}
</script>

<template>
  <nut-navbar title="帮助" left-show @click-back="onClick">
    <template #left>
      <div>返回</div>
    </template>
  </nut-navbar>
  <div class="bz">
    <h2 align="center">1.0版操作说明</h2>
    <p>1.首页，查看当前故障报修数量、个人信息、公告以及更多。</p>
    <img
      src="@/assets/help/微信图片_202407181918153.jpg"
      width="250px"
      alt=""
    /><br />
    <p>2.点击按钮进来，点击“接单”为接手处理此故障，</p>
    <img
      src="@/assets/help/微信图片_20240718191815.jpg"
      width="250px"
      alt=""
    /><br />
    <p>3.点击上方“维修中”查看已接单</p>
    <img src="@/assets/help/微信图片_20240718191814.jpg" width="250px" alt="" />
    <img
      src="@/assets/help/微信图片_202407181918141.jpg"
      width="250px"
      alt=""
    /><br />
    <p>4.这里是自己接的单。</p>
    <img
      src="@/assets/help/微信图片_202407181918152.jpg"
      width="250px"
      alt=""
    /><br />
    <p>
      5.如果有拆机单在修单前需要点击“签订协议”，机主签完名之后记得自己截图保存
    </p>
    <img
      src="@/assets/help/微信图片_202407181918151.jpg"
      width="250px"
      alt=""
    /><br />
    <p>6.个人中心，可查看历史处理记录，修改口令等等。</p>
    <img
      src="@/assets/help/微信图片_202407181918154.jpg"
      width="250px"
      alt=""
    /><br />
    <p>*为了账号安全，退出前务必点击“退出”按钮，退出此次登陆状态。</p>
    <img
      v-if="route.fullPath.includes('admin')"
      src="@/assets/help/微信图片_20240718193750.jpg"
      width="250px"
      alt=""
    /><br /><br /><br /><br /><br /><br />
  </div>
  <nut-backtop
    el-id="elId1"
    @click="handleClick"
    :distance="100"
    :bottom="60"
  ></nut-backtop>
</template>

<style scoped>
p {
  color: #a0a0a0;
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0;
  margin-inline-end: 0;
}
.bz {
  width: 254px;
  margin: 0 auto;
}
</style>
