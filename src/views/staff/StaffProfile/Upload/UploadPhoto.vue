<script setup>
import { useRoute, useRouter } from 'vue-router'
import { ref } from 'vue'
import { CloseOne } from '@icon-park/vue-next'
import { successMsg, warningMsg } from '@/utils/SendMsgUtils.js'
import { uploadsService } from '@/api/common.js'

const router = useRouter()
const route = useRoute()
const onClick = () => router.push('/staff/profile/uploader')

const radio1 = ref('')
const radio2 = ref('')
const radio3 = ref('')

const fileList1 = ref([])
const fileList2 = ref([])
const fileList3 = ref([])

const submitUpload = async () => {
  if (radio1.value === '' || radio2.value === '' || radio3.value === '') {
    warningMsg('单选选项不能为空')
    return
  }
  if (!confirm(`是否确认提交：“${route.query.name}”的图片？`)) return

  const toast = showLoadingToast({
    message: '加载中...',
    forbidClick: true,
    loadingType: 'spinner',
    duration: 0
  })

  //文件存入FormData
  const formData = new FormData()
  if (fileList1.value.length > 0)
    fileList1.value.forEach((item) => {
      formData.append('files', item.file)
    })

  if (fileList2.value.length > 0)
    fileList2.value.forEach((item) => {
      formData.append('files', item.file)
    })

  if (fileList3.value.length > 0)
    fileList3.value.forEach((item) => {
      formData.append('files', item.file)
    })

  const resp = await uploadsService(formData, route.query.id)

  if (resp.code === 1) {
    successMsg('提交图片成功')
    await router.push('/staff/profile/uploader')
  }
  toast.close()
}
const clearUpload = () => {
  fileList1.value = []
  fileList2.value = []
  fileList3.value = []
}
const onOversize = () => {
  warningMsg('照片大小不能超过20MB!')
}
</script>

<template>
  <nut-navbar title="拆机照片核对" left-show @click-back="onClick">
    <template #left>
      <div>返回</div>
    </template>
  </nut-navbar>
  <div class="upload">
    <p style="color: red">
      *图片没说非必填，都要提交，否则后期与机主发生纠纷，全由社员自身负责。<br />
      *选项是提醒作用不会保存在数据库，照片会上传服务器。
    </p>
    <h4>1.确认电脑有无保修（拆机前确认）</h4>
    <p>*有保修除加装固态，其余非必要不拆机</p>
    &nbsp;&nbsp;
    <el-radio-group v-model="radio1">
      <el-radio value="0" size="large">没保修</el-radio>
      <el-radio value="1" size="large">有保修</el-radio>
    </el-radio-group>
    <h4>2.修单前确认电脑状态</h4>
    <p>
      <span style="color: red">*1.机主签名截图</span><br />
      *2.合页朝下竖起来看b面和c面的松紧程度(拍出松的缝隙)<br />
      *3.触摸板下摁，两边(拍出凹陷程度)<br />
      *4.检查全机有无缝隙<br />
      *5.屏幕有无破损
    </p>
    <van-uploader
      v-model="fileList1"
      @oversize="onOversize"
      :max-size="1024 * 1024 * 20"
      :max-count="6"
      preview-size="100px"
      accept="image/jpeg, image/png"
      multiple
    >
      <template #preview-delete>
        <close-one
          theme="outline"
          size="25"
          fill="#ffffff"
          strokeLinejoin="miter"
        />
      </template>
    </van-uploader>
    <h4>3.和机主确认“修单前确认电脑状态”的拍照确认电脑状态有无问题</h4>
    <el-radio-group v-model="radio2">
      <el-radio value="0" size="large">有问题</el-radio>
      <el-radio value="1" size="large">确认无疑</el-radio>
    </el-radio-group>
    <h4>4.修单中（非必填）</h4>
    <p>
      *1.拆机拍下主板等<br />
      *2.安装软件的记录
    </p>
    <van-uploader
      v-model="fileList2"
      @oversize="onOversize"
      :max-size="1024 * 1024 * 20"
      :max-count="6"
      preview-size="100px"
      accept="image/jpeg, image/png"
      multiple
    >
      <template #preview-delete>
        <close-one
          theme="outline"
          size="25"
          fill="#ffffff"
          strokeLinejoin="miter"
        />
      </template>
    </van-uploader>
    <h4>5.修完后再三和机主确定机子有无问题</h4>
    <p>*多次开机测试后再询问</p>
    <el-radio-group v-model="radio3">
      <el-radio value="0" size="large">有问题</el-radio>
      <el-radio value="1" size="large">没问题</el-radio>
    </el-radio-group>
    <h4>6.修完后</h4>
    <p>
      *1.电脑bc面<br />
      *2.触摸板<br />
      *3.缝隙<br />
      *4.电脑屏幕<br />
      拍一遍
    </p>
    <van-uploader
      v-model="fileList3"
      @oversize="onOversize"
      :max-size="1024 * 1024 * 20"
      :max-count="6"
      preview-size="100px"
      accept="image/jpeg, image/png"
      multiple
    >
      <template #preview-delete>
        <close-one
          theme="outline"
          size="25"
          fill="#ffffff"
          strokeLinejoin="miter"
        />
      </template>
    </van-uploader>
    <div style="text-align: center; margin: 15px auto">
      <nut-button type="success" size="small" @click="submitUpload">
        提交核对图片
      </nut-button>
      &nbsp;
      <nut-button type="danger" size="small" @click="clearUpload">
        手动清空全部
      </nut-button>
    </div>
  </div>
</template>

<style scoped>
.upload {
  max-width: 800px;
  width: 80%;
  margin: 20px auto;
  h4 {
    margin: 5px 0 0;
  }
  p {
    color: #7a7374;
    font-size: 12px;
    margin: 0 0 5px;
  }
}
</style>
