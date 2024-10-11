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
</script>

<template>
  <nut-sticky>
    <nut-navbar title="帮助" left-show @click-back="onClick">
      <template #left>
        <div>返回</div>
      </template>
    </nut-navbar>
  </nut-sticky>
  <div class="helpPage">
    <h2 align="center">维修站报修系统操作说明</h2>
    <p>1.首页，查看当前故障报修数量、个人信息、公告以及更多。</p>
    <img src="@/assets/help/help1.jpg" width="250px" alt="" /><br />
    <nut-divider dashed />
    <p>2.点击按钮进来，点击“接单”为接手处理此故障，</p>
    <img src="@/assets/help/help2.jpg" width="250px" alt="" /><br />
    <nut-divider dashed />
    <p>3.点击上方“维修中”查看已接单</p>
    <img src="@/assets/help/help3.jpg" width="250px" alt="" />
    <img src="@/assets/help/help4.jpg" width="250px" alt="" /><br />
    <nut-divider dashed />
    <p>4.这里是自己接的单。维修完成后点击黄字”维修中“结束维修单。</p>
    <img src="@/assets/help/help5.jpg" width="250px" alt="" />
    <img src="@/assets/help/help6.jpg" width="250px" alt="" /><br />
    <nut-divider dashed />
    <p>
      5.1
      如果有“拆机”单在修单前，需要点击“签订协议”，同时需要给笔记本细节进行拍照。机主签完名之后记得自己截图保存<br />
      <span style="color: red">
        如自己没有保存照片及截图，后期纠纷社员自己承担
      </span>
    </p>
    <img src="@/assets/help/help7.jpg" width="250px" alt="" /><br />
    <nut-divider dashed />
    <p>5.2 点击此处对拆机过程的图片进行上传<br /></p>
    <img src="@/assets/help/help8.jpg" width="250px" alt="" /><br />
    <nut-divider dashed />
    <p>5.3 在此处选择要上传的订单<br /></p>
    <img src="@/assets/help/help9.jpg" width="250px" alt="" /><br />
    <nut-divider dashed />
    <p>5.4 按照所描述的规则进行上传填写<br /></p>
    <img src="@/assets/help/help10.jpg" width="250px" alt="" /><br />
    <nut-divider dashed />
    <p>6.个人中心，可查看历史处理记录，修改口令等等。</p>
    <img src="@/assets/help/help0.jpg" width="250px" alt="" /><br />
    <nut-divider dashed />
    <p>*为了账号安全，退出前务必点击“退出”按钮，退出此次登陆状态。</p>
    <nut-divider class="foot-line" />
    <p style="margin: 0">
      **如果觉得此系统不完善，或者是想继续改进，需要源码，请联系我。微信：L18218644665。
    </p>
    <p style="text-align: right">—— 22届师兄</p>
    <br /><br /><br /><br /><br />
  </div>
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
.helpPage {
  width: 80%;
  margin: 0 auto;
  text-align: center;
  img {
    border: 1px solid #7a7374;
    border-radius: 10px;
  }
}
.foot-line {
  margin: 45px 0 10px;
}
</style>
