<script setup>
import { useRoute, useRouter } from 'vue-router'
import { ref } from 'vue'
import {
  addStaffService,
  getStaffListService,
  removeStaffService,
  resetStaffService
} from '@/api/staff.js'
import { successMsg } from '@/utils/SendMsgUtils.js'

const router = useRouter()
const route = useRoute()
const onClick = () => {
  if (route.fullPath.includes('admin')) router.push('/admin/profile')
  else router.push('/staff/profile')
}

const staff = ref({
  studentId: '',
  name: ''
})

const page = ref({
  currentPage: 1,
  pageSize: 10,
  total: 0
})
const search = ref('')
const staffList = ref([])
const getStaffList = async () => {
  const resp = await getStaffListService(
    page.value.currentPage,
    page.value.pageSize,
    search.value
  )
  if (resp.code === 1) {
    staffList.value = resp.data.records
    page.value.total = resp.data.total
  }
}
getStaffList()

const addStaff = async () => {
  const resp = await addStaffService(staff.value)
  if (resp.code === 1) {
    successMsg(resp.data)
    staff.value.studentId = ''
    staff.value.name = ''
    await getStaffList()
  }
}

const resetStaff = async (staffI) => {
  const resp = await resetStaffService(staffI)
  if (resp.code === 1) {
    successMsg(resp.data)
    await getStaffList()
  }
}

const removeStaff = async (id) => {
  const resp = await removeStaffService(id)
  if (resp.code === 1) {
    successMsg(resp.data)
    await getStaffList()
  }
}

const change = async () => {
  await getStaffList()
}

const searchStaff = async () => {
  await getStaffList()
}

const resetList = async () => {
  search.value = ''
  await getStaffList()
}
</script>

<template>
  <nut-navbar title="添加新社员" left-show @click-back="onClick">
    <template #left>
      <div>返回</div>
    </template>
  </nut-navbar>
  <div class="staff-from">
    <el-input
      v-model="staff.studentId"
      style="width: 110px"
      placeholder="学号"
    />
    <el-input v-model="staff.name" style="width: 110px" placeholder="姓名" />
    <nut-button type="info" size="small" @click="addStaff">添加</nut-button>
  </div>
  <div class="search">
    <el-input
      v-model="search"
      clearable
      style="width: 150px"
      placeholder="输入学号名字查询"
    />&nbsp;
    <nut-button type="info" size="small" @click="searchStaff">查询</nut-button>
    &nbsp;
    <nut-button type="info" size="small" @click="resetList">重置</nut-button>
    <nut-divider />
  </div>
  <div class="table" v-for="(item, index) in staffList" :key="index">
    <nut-row>
      <nut-col :span="8">
        <div class="content">{{ item.studentId }}</div>
      </nut-col>
      <nut-col :span="6">
        <div class="content">{{ item.name }}</div>
      </nut-col>
      <nut-col :span="10">
        <div class="content">
          <nut-button type="primary" size="mini" @click="resetStaff(item)"
            >重置 </nut-button
          >&nbsp;
          <nut-button type="warning" size="mini" @click="removeStaff(item.id)"
            >删除
          </nut-button>
        </div>
      </nut-col>
    </nut-row>
    <nut-divider dashed />
  </div>
  <div class="page">
    <nut-pagination
      v-model="page.currentPage"
      :total-items="page.total"
      :items-per-page="page.pageSize"
      @change="change"
    />
  </div>
</template>

<style scoped>
.staff-from {
  width: 90%;
  margin: 20px auto;
  text-align: center;

  .el-input {
    margin-right: 10px;
  }
}

.search {
  width: 80%;
  margin: 15px auto;
  text-align: center;
}

.table {
  width: 80%;
  margin: 0 auto;
  text-align: right;

  .nut-divider {
    margin: 8px 0;
  }
}

.page {
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
