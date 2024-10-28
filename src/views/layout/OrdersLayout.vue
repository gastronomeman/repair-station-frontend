<script setup>
import { ref, nextTick, watch } from 'vue'
import { Search, Announcement, Tool } from '@icon-park/vue-next'
import { useRouter, useRoute } from 'vue-router'

import '@/assets/orders/orders.scss'
import OrdersFooter from '@/components/orders/OrdersFooter.vue'
import {
  getOrderTitleService,
  getServerStatusService
} from '@/api/repairStationStatus.js'
import { isNotBlank } from '@/utils/StringUtils.js'

const router = useRouter()
const route = useRoute()

const checkPath = async () => {
  //订单的逻辑
  if (route.fullPath.startsWith('/orders')) {
    try {
      const resp = await getServerStatusService()
      //如果resp.code === 1就是开启接单模式，=== 0 是停止接单
      if (resp.code === 1 && route.fullPath === '/orders/announcements') {
        await router.push('/')
      } else if (
        resp.code === 0 &&
        route.fullPath !== '/orders/announcements'
      ) {
        await router.push('/orders/announcements')
      }
    } catch (error) {
      await router.push('/error')
    }
  }
}

const text = ref('')
const getText = async () => {
  const resp = await getOrderTitleService()
  if (resp.code === 1) {
    text.value = resp.data
  }
}
getText()

const title = ref('电脑报修')

const search = ref({
  input: '',
  backgroundColor: '#f0f0f0'
})

const searchbarRef = ref(null)

const focusSearchbar = () => {
  if (searchbarRef.value) {
    nextTick(() => {
      const input = searchbarRef.value.$el.querySelector('input')
      if (input) {
        input.focus()
      }
    })
  }
}
const goToQuery = () => {
  router.push({
    path: '/orders/query',
    query: { studentId: search.value.input }
  })
}

watch(
  () => route.fullPath,
  async (newPath) => {
    if (newPath.includes('/orders/query')) title.value = '报修查询'
    else if (
      newPath === '/orders/notice' ||
      newPath === '/orders/from' ||
      newPath === '/orders/wait'
    )
      title.value = '电脑报修'
    else title.value = '维修公告'

    await checkPath()
  },
  { immediate: true }
)
</script>

<template>
  <nut-sticky>
    <nut-noticebar :text="text" scrollable v-if="!isNotBlank(text)">
      <template #left-icon>
        <announcement theme="outline" size="20" />
      </template>
    </nut-noticebar>
  </nut-sticky>
  <div class="orders-head">
    <h1>{{ title }}</h1>
    <h3>- Repair Station -</h3>
    <nut-searchbar
      @click="focusSearchbar"
      ref="searchbarRef"
      v-model="search.input"
      :background="search.backgroundColor"
      @search="goToQuery"
      placeholder="输入学号或姓名查询报修状态"
    >
      <template #leftout>
        {{ search.left }}
      </template>
      <template #rightin>
        <Search
          class="search-icon"
          @click="goToQuery"
          theme="outline"
          size="18"
        />
      </template>
    </nut-searchbar>
    <div class="orders-img">
      <div v-if="title !== '维修公告'">
        <nut-row>
          <nut-col :span="12">
            <div class="text" @click="router.push('/')">
              电脑报修
              <tool class="search-icon" theme="outline" size="20" fill="#333" />
            </div>
          </nut-col>
          <nut-col :span="12">
            <div class="text" @click="router.push('/orders/query?studentId=')">
              <span>报修查询</span>
              <Search class="search-icon" theme="outline" size="20" />
            </div>
          </nut-col>
        </nut-row>
      </div>
      <img src="@/assets/orders/images/adv_repair.jpg" alt="图标" />
    </div>
  </div>
  <router-view></router-view>
  <OrdersFooter></OrdersFooter>
</template>

<style scoped></style>
