<script setup>
import { ref } from 'vue'
import { addSubService } from '@/api/sub.js'
import { successMsg } from '@/utils/SendMsgUtils.js'
import { useRouter } from 'vue-router'

const router = useRouter()
const sub = ref({
  topic: '',
  option1: '',
  option2: '',
  option3: '',
  option4: '',
  result: ''
})

const addSub = async () => {
  const resp = await addSubService(sub.value)
  if (resp.code === 1) {
    successMsg(resp.data)
    await clearSub()
    await router.push('/admin/profile/exam/sub')
  }
}

const clearSub = async () => {
  sub.value = {
    topic: '',
    option1: '',
    option2: '',
    option3: '',
    option4: '',
    result: ''
  }
}
</script>

<template>
  <div class="add0">
    <el-form label-width="auto" style="width: 100%">
      <el-form-item label="题目：">
        <el-input
          v-model="sub.topic"
          type="textarea"
          :rows="2"
          show-word-limit
          maxlength="100"
        />
      </el-form-item>
      <el-form-item label="选项A：">
        <el-input
          v-model="sub.option1"
          type="textarea"
          :rows="1"
          maxlength="60"
        />
      </el-form-item>
      <el-form-item label="选项B：">
        <el-input
          v-model="sub.option2"
          type="textarea"
          :rows="1"
          maxlength="60"
        />
      </el-form-item>
      <el-form-item label="选项C：">
        <el-input
          v-model="sub.option3"
          type="textarea"
          :rows="1"
          maxlength="60"
        />
      </el-form-item>
      <el-form-item label="选项D：">
        <el-input
          v-model="sub.option4"
          type="textarea"
          :rows="1"
          maxlength="60"
        />
      </el-form-item>
      <el-form-item label="正确答案：">
        <el-input
          placeholder="A就填1,B填2,C填3,D填4..."
          v-model.number="sub.result"
          type="textarea"
          :rows="1"
          maxlength="60"
        />
      </el-form-item>
      <div style="text-align: center">
        <nut-button type="warning" size="small" @click="clearSub">
          清空
        </nut-button>
        &nbsp;
        <nut-button type="info" size="small" @click="addSub">
          添加题目
        </nut-button>
      </div>
    </el-form>
  </div>
</template>

<style scoped>
.add0 {
  width: 75%;
  max-width: 500px;
  margin: 20px auto 0;
}
</style>
