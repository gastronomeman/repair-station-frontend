<script setup>
import { useRoute, useRouter } from 'vue-router'
import { changSqlService } from '@/api/orders.js'
import { errorMsg, successMsg } from '@/utils/SendMsgUtils.js'

const router = useRouter()
const route = useRoute()

const onClick = () => {
  if (route.fullPath.includes('admin')) router.push('/admin/profile')
  else router.push('/staff/profile')
}

const change = async () => {
  let name = prompt('你叫什么名字？')
  if (name === null) {
    errorMsg('名字不能为空')
    return
  }
  if (!confirm('是否确认进行转换？')) return
  const resp = await changSqlService()
  if (resp.code === 1) {
    successMsg(resp.data)
    alert(
      `${name}师弟师妹，数据以转到历史记录，请你前往服务器备份出数据，且删除订单表的数据。╰(*´︶\`*)╯ ——22届师兄`
    )
  }
}
</script>

<template>
  <nut-navbar title="转存数据库" left-show @click-back="onClick">
    <template #left>
      <div>返回</div>
    </template>
  </nut-navbar>
  <div class="t-sql">
    <p>
      &nbsp;&nbsp;&nbsp;&nbsp;这个功能是把整个学年的维修数据转存到历史订单的数据库。
    </p>
    <nut-button type="info" @click="change">进行转换</nut-button>
  </div>
</template>

<style scoped>
.t-sql {
  text-align: center;
  width: 80%;
  margin: 10px auto;
}
</style>
