<script setup>
import { computed, ref } from 'vue'
import { getPageService } from '@/api/student.js'

const page = ref({
  currentPage: 1,
  pageSize: 15,
  total: 0
})
const search = ref('')
const staffList = ref([])
const getStaffList = async () => {
  const resp = await getPageService(
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

const change = async () => {
  await getStaffList()
}

const searchStaff = async () => {
  page.value.currentPage = 1
  await getStaffList()
}

const resetList = async () => {
  search.value = ''
  await getStaffList()
}

const toTop = async () => {
  page.value.currentPage = 1
  search.value = ''
  await getStaffList()
}

const toEnd = async () => {
  page.value.currentPage = Math.ceil(page.value.total / page.value.pageSize)
  search.value = ''
  await getStaffList()
}

const totalPage = computed(() => {
  return Math.ceil(page.value.total / page.value.pageSize)
})
</script>

<template>
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
        <div class="content">{{ item.id }}</div>
      </nut-col>
      <nut-col :span="6">
        <div class="content">{{ item.name }}</div>
      </nut-col>
      <nut-col :span="6" v-if="item.score != null">
        成绩：{{ item.score }}
      </nut-col>
      <nut-col :span="6" v-else> 成绩：无 </nut-col>
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
  <div class="page-footer">
    <p>{{ page.currentPage }}/{{ totalPage }}页</p>
    <nut-button size="small" type="default" @click="toTop">首页</nut-button>
    &nbsp;
    <nut-button size="small" type="default" @click="toEnd">尾页</nut-button>
  </div>
</template>

<style scoped>
.search {
  width: 90%;
  margin: 8px auto 15px;
  text-align: center;
  .nut-divider {
    margin: 15px 0 0;
  }
}

.table {
  width: 90%;
  margin: 0 auto;
  text-align: right;

  .content {
    height: 100%;
  }
  .nut-divider {
    margin: 6px 0;
  }
}

.page {
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
.page-footer {
  text-align: center;
  p {
    color: #7a7374;
    margin: 0 0 5px;
  }
  margin: 10px 0 60px;
}
</style>
