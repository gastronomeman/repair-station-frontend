<script setup>
import ToolShow from '@/components/ToolShow.vue'
import Footer from '@/components/Footer.vue'
import { useRouter } from 'vue-router'
import { ref } from 'vue'

const router = useRouter()

const appList = ref([
  {
    title: '日常软件',
    list: [
      {
        name: 'QQ',
        url: 'https://im.qq.com/index/#downloadAnchor',
        photo:
          'https://qzonestyle.gtimg.cn/qzone/qzact/act/external/tiqq/logo.png'
      },
      {
        name: '微信',
        url: 'https://pc.weixin.qq.com/',
        photo:
          'https://res.wx.qq.com/t/wx_fed/base/portal/windows/res/assets/logo.ca85d20a32.svg'
      },
      {
        name: '飞书',
        url: 'https://www.feishu.cn/download',
        photo:
          'https://p1-hera.feishucdn.com/tos-cn-i-jbbdkfciu3/84a9f036fe2b44f99b899fff4beeb963~tplv-jbbdkfciu3-image:0:0.image'
      },
      {
        name: '钉钉',
        url: 'https://page.dingtalk.com/wow/z/dingtalk/simple/ddhomedownload#/',
        photo:
          'https://gw.alicdn.com/imgextra/i3/O1CN01eMicSg1GVD4uXMWGv_!!6000000000627-73-tps-32-32.ico'
      },
      {
        name: 'Todesk',
        url: 'https://www.todesk.com/download.html',
        photo: 'https://www.todesk.com/dist/img/734933e.svg'
      },
      {
        name: 'steam',
        url: 'https://store.steampowered.com/about/',
        photo: 'https://store.steampowered.com/favicon.ico'
      },
      {
        name: 'chrome',
        url: 'https://www.google.cn/intl/zh-CN/chrome/',
        photo: 'https://www.google.cn/chrome/static/images/chrome-logo-m100.svg'
      },
      {
        name: 'WeGame',
        url: 'https://www.wegame.com.cn/client/',
        photo:
          'https://wegame.gtimg.com/g.55555-r.c4663/wegame-home/wegame-h5-share.f036f35a.jpg'
      }
    ]
  },
  {
    title: '装机可用',
    list: [
      {
        name: '图吧工具箱',
        url: 'https://www.tbtool.cn/',
        photo: 'https://www.tbtool.cn/resource/icon.ico'
      },
      {
        name: 'Nvidia驱动',
        url: 'https://www.nvidia.cn/drivers/lookup/',
        photo: 'https://www.nvidia.cn/favicon.ico'
      },
      {
        name: 'AMD驱动',
        url: 'https://www.amd.com/zh-cn/support/download/drivers.html',
        photo: 'https://www.amd.com/content/dam/code/images/favicon/favicon.ico'
      },
      {
        name: 'geek卸载工具',
        url: 'https://geekuninstaller.com/',
        photo: 'https://geekuninstaller.com/assets/images/icon_geek_32.png'
      }
    ]
  },
  {
    title: '软件开发',
    list: [
      {
        name: 'VsCode',
        url: 'https://code.visualstudio.com/docs/?dv=win64user',
        photo: 'https://code.visualstudio.com/favicon.ico'
      },
      {
        name: 'sublime',
        url: 'https://www.sublime.com/',
        photo: 'https://www.sublimehq.com/images/sublime_text.png'
      },
      {
        name: 'IDEA',
        url: 'https://www.jetbrains.com/idea/download/#section=windows',
        photo: 'https://www.jetbrains.com/icon.svg?r=1234'
      },
      {
        name: 'eclipse',
        url: 'https://www.eclipse.org/downloads/',
        photo:
          'https://www.eclipse.org/downloads/assets/public/images/logo-eclipse.png'
      },
      {
        name: 'nodejs',
        url: 'https://nodejs.cn/download/',
        photo: 'https://img.nodejs.cn/favicon.png'
      }
    ]
  }
])

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
