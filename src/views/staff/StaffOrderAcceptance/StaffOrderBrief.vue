<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { People } from '@icon-park/vue-next'

const router = useRouter()

const percentage = ref(20)
const colors = [
  { color: '#f56c6c', percentage: 100 },
  { color: '#e6a23c', percentage: 80 },
  { color: '#5cb87a', percentage: 60 },
  { color: '#1989fa', percentage: 40 },
  { color: '#6f7ad3', percentage: 20 }
]

const goToOrderList = (orderType) => {
  //1.软件类 2.硬件类 3.网络类 4.手机类
  router.push({
    path: '/staff/order-acceptance/list',
    query: { orderType }
  })
}
</script>

<template>
  <nut-navbar title="站内维修统计">
    <template #right>
      <div class="title-right">
        <p>当前在线人数</p>
        <p>
          <people
            style="margin-right: 2px"
            theme="outline"
            size="10"
            fill="#333"
          />
          100人
        </p>
      </div>
    </template>
  </nut-navbar>
  <div class="brief-row">
    <nut-row>
      <nut-col :span="4" :offset="1">
        <div class="content">
          <p>本学期</p>
          <p>0</p>
        </div>
      </nut-col>
      <nut-col :span="4">
        <div class="content">
          <p>上个月</p>
          <p>0</p>
        </div>
      </nut-col>
      <nut-col :span="3">
        <div class="content">
          <p>本月</p>
          <p>0</p>
        </div>
      </nut-col>
      <nut-col :span="4">
        <div class="content">
          <p>近7天</p>
          <p>0</p>
        </div>
      </nut-col>
      <nut-col :span="3">
        <div class="content">
          <p>昨天</p>
          <p>0</p>
        </div>
      </nut-col>
      <nut-col :span="3">
        <div class="content">
          <p>今天</p>
          <p>0</p>
        </div>
      </nut-col>
    </nut-row>
  </div>
  <div class="brief-orders-type">
    <div class="up">
      <el-progress
        class="first-up"
        type="dashboard"
        :percentage="percentage"
        :color="colors"
        @click="goToOrderList(1)"
      >
        <template #default>
          <p class="percentage-value">0 / 1</p>
          <span class="percentage-label">软件类</span>
        </template>
      </el-progress>
      <el-progress
        type="dashboard"
        :percentage="50"
        :color="colors"
        @click="goToOrderList(2)"
      >
        <template #default>
          <p class="percentage-value">0 / 1</p>
          <span class="percentage-label">硬件类</span>
        </template>
      </el-progress>
    </div>
    <div class="down">
      <el-progress
        class="first-up"
        type="dashboard"
        :percentage="percentage"
        :color="colors"
        @click="goToOrderList(3)"
      >
        <template #default>
          <p class="percentage-value">0 / 1</p>
          <span class="percentage-label">网络类</span>
        </template>
      </el-progress>
      <el-progress
        type="dashboard"
        :percentage="percentage"
        :color="colors"
        @click="goToOrderList(4)"
      >
        <template #default>
          <p class="percentage-value">0 / 1</p>
          <span class="percentage-label">手机类</span>
        </template>
      </el-progress>
    </div>
  </div>
  <div class="staff-orders-count">
    <nut-divider dashed> 我的单量统计</nut-divider>
    <nut-row>
      <nut-col :span="12">
        <div class="content">
          <p>本学期已处理</p>
          <p>0单</p>
        </div>
      </nut-col>
      <nut-col :span="12">
        <div class="content">
          <p>本周已处理</p>
          <p>0单</p>
        </div>
      </nut-col>
    </nut-row>
  </div>
</template>

<style scoped>
.title-right {
  font-size: 13px;

  p:first-child {
    margin: 0 0 5px;
  }

  p:last-child {
    margin: 0;
  }
}

.brief-row {
  background-color: white;

  .content {
    margin-top: 10px;
    text-align: center;
  }

  p {
    margin: 2px 0;
  }
}

.brief-orders-type {
  width: 85%;
  margin: 0 auto;
  text-align: center;

  .el-progress {
    cursor: pointer;
  }

  .up {
    margin-top: 60px;

    .first-up {
      margin: 0 35px 0 0;
    }

    p {
      margin: 8px 0;
    }
  }

  .down {
    margin-top: 25px;

    .first-up {
      margin: 0 35px 0 0;
    }

    p {
      margin: 8px 0;
    }
  }
}

.staff-orders-count {
  width: 85%;
  max-height: 800px;
  margin: 20px auto 0;

  .nut-divider {
    margin-bottom: 0;
  }

  .content {
    text-align: center;
  }
}
</style>
