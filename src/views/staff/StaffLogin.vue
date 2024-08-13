<script setup>
import { ref } from 'vue'
import { isNotBlank } from '@/utils/StringUtils.js'
import md5 from 'js-md5'
import { successMsg, warningMsg } from '@/utils/SendMsgUtils.js'
import { staffLoginService } from '@/api/staff.js'
import { useStaffState } from '@/stores/index.js'
import { useRouter } from 'vue-router'
import { User, Key } from '@icon-park/vue-next'

const router = useRouter()

const staffState = useStaffState()
const staff = ref({
  studentId: '',
  password: ''
})

const checkPassword = () => {
  if (isNotBlank(staff.value.password)) {
    staff.value.password = ''
    return
  }
  staff.value.password = md5(staff.value.password)
}

const submit = async () => {
  if (isNotBlank(staff.value.studentId) || isNotBlank(staff.value.password)) {
    warningMsg('账号密码不能为空！')
    staff.value.password = ''
    return
  }
  console.log(staff.value)
  const resp = await staffLoginService(staff.value)
  if (resp.code === 1) {
    staffState.setToken(resp.data)
    staffState.setName(staff.value.studentId)

    successMsg('登录成功！')
    if (staff.value.studentId === 'admin') {
      await router.push('/admin')
      return
    }
    await router.push('/staff')
  }
}
</script>

<template>
  <div class="login-container">
    <div class="login-img-logo">
      <img src="@/assets/rs_logo.png" alt="Logo" />
    </div>
    <div class="login-input">
      <h2>维修站后台管理系统</h2>
      <el-input
        clearable
        size="large"
        v-model="staff.studentId"
        style="width: 260px"
        placeholder="管理员学号："
      >
        <template #prefix>
          <el-icon class="input-icon"><user /></el-icon>
        </template>
      </el-input>
      <br />
      <el-input
        clearable
        type="password"
        size="large"
        v-model="staff.password"
        style="width: 260px"
        placeholder="管理员密码："
        @blur="checkPassword"
      >
        <template #prefix>
          <el-icon class="input-icon"><key /></el-icon>
        </template>
      </el-input>
      <div>
        <nut-button shape="round" type="info" @click="submit">登录</nut-button>
        <p>*仅限ITeam基地维修站成员使用，请妥善保管个人账号和密码。(*^o^*)</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.login-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;

  .login-img-logo {
    margin-bottom: 10px;
    width: 130px;
  }

  .login-img-logo img {
    width: 100%;
    height: auto;
  }

  .login-input {
    margin-bottom: 180px;

    h2 {
      text-align: center;
      margin-bottom: 10px;
    }

    .el-input:first-child {
      margin-bottom: 10px;
    }
    div {
      margin-top: 10px;
      text-align: center;
      width: 240px;

      p {
        color: #7a7374;
      }
    }
  }
}
</style>
