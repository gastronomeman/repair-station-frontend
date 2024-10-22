<script setup>
import ToolShow from '@/components/ToolShow.vue'
import Footer from '@/components/Footer.vue'
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import { errorMsg, successMsg } from '@/utils/SendMsgUtils.js'

const router = useRouter()

const appList = ref([
  {
    title: '学习网站',
    list: [
      {
        name: '哔哩哔哩',
        url: 'https://www.bilibili.com/',
        photo: 'https://www.bilibili.com/favicon.ico'
      },
      {
        name: '学习 Web 开发',
        url: 'https://developer.mozilla.org/zh-CN/docs/Learn',
        photo: 'https://developer.mozilla.org/favicon-192x192.png'
      }
    ]
  },
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
        name: '网易云音乐',
        url: 'https://music.163.com/#/download',
        photo: 'https://s1.music.126.net/style/favicon.ico?v20180823'
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
        name: 'Everything',
        url: 'https://www.voidtools.com/zh-cn/',
        photo: 'https://www.voidtools.com/favicon.ico'
      },
      {
        name: 'steam',
        url: 'https://store.steampowered.com/about/',
        photo: 'https://store.steampowered.com/favicon.ico'
      },
      {
        name: '火绒',
        url: 'https://www.huorong.cn/',
        photo: 'https://www.huorong.cn/favicon.png'
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
        name: 'Intel驱动',
        url: 'https://www.amd.com/zh-cn/support/download/drivers.html',
        photo:
          'https://www.intel.cn/etc.clientlibs/settings/wcm/designs/intel/default/resources/favicon.ico'
      },
      {
        name: 'AMD驱动',
        url: 'https://www.intel.cn/content/www/cn/zh/download-center/home.html',
        photo: 'https://www.amd.com/content/dam/code/images/favicon/favicon.ico'
      },
      {
        name: 'geek卸载工具',
        url: 'https://geekuninstaller.com/',
        photo: 'https://geekuninstaller.com/assets/images/icon_geek_32.png'
      },
      {
        name: '微PE工具箱',
        url: 'https://www.wepe.com.cn/download.html',
        photo: 'https://www.wepe.com.cn/favicon.ico'
      },
      {
        name: '测速网',
        url: 'https://www.speedtest.cn/',
        photo: 'https://www.speedtest.cn/images/ico/favicon.ico'
      },
      {
        name: '在线屏幕测试',
        url: 'https://lab.luozhinet.com/tool/screentest/',
        photo: 'https://lab.luozhinet.com/tool/screentest/htmlimg/favicon.ico'
      },
      {
        name: '在线键盘测试',
        url: 'https://www.zfrontier.com/lab/keyboardTester',
        photo: 'https://www.zfrontier.com/favicon.ico'
      },
      {
        name: '在线手柄测试',
        url: 'https://gobing.cn/experiment/key',
        photo: 'https://gobing.cn/favicon.ico'
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
        name: 'VS 2022',
        url: 'https://visualstudio.microsoft.com/zh-hans/downloads/',
        photo:
          'https://visualstudio.microsoft.com/wp-content/uploads/2021/10/Product-Icon.svg'
      },
      {
        name: 'Dev-C++',
        url: 'https://bloodshed-dev-c.en.softonic.com/',
        photo:
          'https://images.sftcdn.net/images/t_app-icon-s/p/4095d654-96d0-11e6-87f8-00163ed833e7/1965154745/bloodshed-dev-c-icon.jpg'
      },
      {
        name: 'sublime',
        url: 'https://www.sublimetext.com/',
        photo: 'https://www.sublimehq.com/images/sublime_text.png'
      },
      {
        name: 'Java',
        url: 'https://www.oracle.com/java/technologies/downloads/',
        photo: 'https://www.java.com/favicon.ico'
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
        name: 'Python',
        url: 'https://www.python.org/downloads/',
        photo: 'https://www.python.org/static/favicon.ico'
      },
      {
        name: 'pycharm',
        url: 'https://www.jetbrains.com.cn/pycharm/',
        photo: 'https://www.jetbrains.com/icon.svg?r=1234'
      },
      {
        name: 'Postman',
        url: 'https://www.postman.com/downloads/',
        photo: 'https://voyager.postman.com/logo/postman-logo-icon-orange.svg'
      },
      {
        name: 'Apifox',
        url: 'https://apifox.com/',
        photo: 'https://cdn.apifox.com/static/logo/favicon.ico'
      },
      {
        name: 'node.js',
        url: 'https://nodejs.cn/download/',
        photo: 'https://img.nodejs.cn/favicon.png'
      },
      {
        name: 'GitHub',
        url: 'https://github.com/',
        photo: 'https://github.githubassets.com/favicons/favicon.png'
      },
      {
        name: 'gitee',
        url: 'https://gitee.com/',
        photo: 'https://gitee.com/favicon.ico'
      },
      {
        name: 'HBuilder X',
        url: 'https://www.dcloud.io/hbuilderx.html',
        photo:
          'https://qiniu-ecdn.dcloud.net.cn/uploads/images/hbuilderx/hx_icon@2x.png'
      },
      {
        name: 'MySQL',
        url: 'https://dev.mysql.com/downloads/mysql/',
        photo: 'https://labs.mysql.com/common/themes/sakila/favicon.ico'
      },
      {
        name: 'SQL Server',
        url: 'https://www.microsoft.com/zh-cn/sql-server/sql-server-downloads',
        photo: 'https://www.microsoft.com/favicon.ico?v2'
      },
      {
        name: 'MongoDB',
        url: 'https://www.mongodb.com/try/download/community',
        photo: 'https://www.mongodb.com/assets/images/global/favicon.ico'
      },
      {
        name: 'MVN Repository',
        url: 'https://mvnrepository.com/',
        photo:
          'https://mvnrepository.com/assets/images/7080b8b0f6f48e6fbaffd5f9d85fcc7f-favicon.ico'
      },
      {
        name: 'Vue2',
        url: 'https://v2.cn.vuejs.org/',
        photo: 'https://cn.vuejs.org/logo.svg'
      },
      {
        name: 'Vue3',
        url: 'https://cn.vuejs.org/',
        photo: 'https://cn.vuejs.org/logo.svg'
      },
      {
        name: '小程序开发',
        url: 'https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html',
        photo:
          'https://p0.meituan.net/csc/2729b5c1c19758c68dc9ab7a242d362d1378.png'
      }
    ]
  },
  {
    title: '工具网站',
    list: [
      {
        name: '草料二维码生成器',
        url: 'https://cli.im/',
        photo: 'https://static.clewm.net/static/images/favicon.ico'
      },
      {
        name: '私密文件分享',
        url: 'https://wormhole.app/',
        photo:
          'https://www.zhizhudh.com/wp-content/uploads/2024/03/PmVgYWM1_400x400.jpg'
      },
      {
        name: '各种中国传统颜色',
        url: 'https://www.zhongguose.com/',
        photo: 'https://www.zhongguose.com/img/favicon.ico'
      },
      {
        name: '线稿自动上色',
        url: 'https://petalica.com/index_zh.html',
        photo: 'https://petalica.com/images/favicon.ico'
      },
      {
        name: '图形计算器',
        url: 'https://www.geogebra.org/graphing',
        photo: 'https://www.geogebra.org/apps/icons/graphing.ico'
      },
      {
        name: '图像转文字',
        url: 'https://www.asciiart.eu/image-to-ascii',
        photo: 'https://www.asciiart.eu/favicon-32x32.png'
      }
    ]
  }
])

const back = () => {
  router.go(-1)
}

const textColor = ref('black')

const copyToClipboard = () => {
  if (navigator.clipboard) {
    navigator.clipboard
      .writeText(window.location.href)
      .then(() => {
        textColor.value = '#939393'
        successMsg('复制成功！')
      })
      .catch(() => {
        errorMsg('复制失败')
      })
  } else {
    alert('不支持剪贴板功能')
  }
}
</script>

<template>
  <nut-sticky>
    <nut-navbar title="软件工具箱" left-show @click-back="back">
      <template #left>
        <div>返回</div>
      </template>
    </nut-navbar>
  </nut-sticky>
  <div class="title">
    **此网页的工具是为了帮助同学们更好的找到各个软件的官网，用作学习之用，如遇不会安装可以点击<a
      href="/"
      >报修</a
    >，让我们帮助你！<br />
    <p @click="copyToClipboard" :style="{ color: textColor }">
      点击此处，复制网址<br />（复制网址到电脑浏览更佳哦）
    </p>
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
  <br />
</template>

<style scoped>
.title {
  color: red;
  text-align: center;
  width: 80%;
  margin: 20px auto 0;
  p {
    margin: 0;
    padding: 3px;
    cursor: pointer;
    color: black;
    border-radius: 4px;
    border: 1px solid #939393;
  }
}
</style>
