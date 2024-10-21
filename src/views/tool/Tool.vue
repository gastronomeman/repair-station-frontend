<script setup>
import ToolShow from '@/components/ToolShow.vue'
import Footer from '@/components/Footer.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const appList = window.config.appList

const back = () => {
  router.go(-1)
}
</script>

<template>
  <nut-sticky>
    <nut-navbar title="网站工具箱" left-show @click-back="back">
      <template #left>
        <div>返回</div>
      </template>
    </nut-navbar>
  </nut-sticky>
  <div class="title">
    **此网页的工具是为了帮助同学们更好的找到各个软件的官网，用作学习之用，如遇不会安装可以点击<a
      href="/"
      >报修</a
    >，让我们帮助你！
  </div>
  <div v-for="(app, index) in appList" :key="index">
    <ToolShow :app-list="app.list" :title="app.title"></ToolShow>
  </div>
  <nut-divider dashed />
  <p style="font-size: 11px; width: 80%; margin: 10px auto; color: #939393">
    &nbsp;&nbsp;&nbsp;&nbsp; 本站所发布的全部内容源于互联网搬运，
    仅限于小范围内传播学习和文献参考， 请在下载后24小时内删除，
    如果有侵权之处请第一时间联系我们删除。敬请谅解! E-mail：1305573134@qq.com
  </p>
  <Footer></Footer>
</template>

<style scoped>
.title {
  color: red;
  text-align: center;
  width: 80%;
  margin: 20px auto 0;
}
</style>
