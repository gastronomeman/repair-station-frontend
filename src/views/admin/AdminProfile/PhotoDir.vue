<script setup>
import { useRouter } from 'vue-router'
import { checkPhotoService, deletePhotoService } from '@/api/common.js'
import { ref } from 'vue'
import { errorMsg, successMsg } from '@/utils/SendMsgUtils.js'

const router = useRouter()

const onClick = () => {
  router.go(-1)
}
const dirList = ref('')
const getPhotoDir = async () => {
  const resp = await checkPhotoService()
  console.log(resp)
  if (resp.code === 1) {
    dirList.value = resp.data
  }
}

const showPhoto = async (str) => {
  //const id = str.split('-')[0]
  await router.push('/admin/profile/show-photo?dir=' + str.name)
}
getPhotoDir()

const deletePhoto = async (name) => {
  const userInput = window.prompt(`如确认删除${name}，请输入“确认删除”`)
  if (userInput === null) {
    return
  } else if (userInput !== '确认删除') {
    errorMsg('输入文字不正确')
    return
  }

  const resp = await deletePhotoService(name)
  if (resp.code === 1) {
    successMsg(resp.data)
    await getPhotoDir()
  }
}
</script>

<template>
  <nut-navbar title="上传照片文件夹" left-show @click-back="onClick">
    <template #left>
      <div>返回</div>
    </template>
  </nut-navbar>
  <br />
  <div class="table" v-for="(item, index) in dirList" :key="index">
    <nut-row>
      <nut-col :span="24" @click="showPhoto(item)">
        <span style="cursor: pointer">{{ item.name }}</span>
      </nut-col>
    </nut-row>
    <nut-row style="margin: 10px 0">
      <nut-col :span="18" @click="showPhoto(item)">
        <div style="color: #7a7374; cursor: pointer; margin: 5px 0">
          {{ item.date }}
        </div>
      </nut-col>
      <nut-col :span="6">
        <div style="text-align: right">
          <nut-button type="warning" size="mini" @click="deletePhoto(item.name)"
            >删除
          </nut-button>
        </div>
      </nut-col>
    </nut-row>
    <nut-divider style="margin: 5px" dashed />
  </div>
</template>

<style scoped>
.table {
  width: 80%;
  margin: 0 auto;
}
</style>
