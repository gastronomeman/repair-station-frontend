<script setup>
import { ref, nextTick, watch } from 'vue'
import { Search, Announcement, Tool } from '@icon-park/vue-next'
import { useRouter, useRoute } from 'vue-router'

import '@/assets/orders/orders.scss'
import OrdersFooter from '@/components/orders/OrdersFooter.vue'

const router = useRouter()
const route = useRoute()

const text = ref('')
const title = ref('电脑报修')

const search = ref({
  left: '',
  input: '',
  backgroundColor: '#f0f0f0'
})
const sticky = (fixed) => {
  if (fixed) {
    search.value.backgroundColor = '#ffffff'
    search.value.left = 'ITeam维修站'
  } else {
    search.value.backgroundColor = '#f0f0f0'
    search.value.left = ''
  }
}

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
  (newPath) => {
    if (newPath.includes('/orders/query')) title.value = '报修查询'
    else if (newPath === '/orders/new') title.value = '电脑报修'
    else title.value = '维修公告'
  },
  { immediate: true }
)
</script>

<template>
  <nut-noticebar :text="text" wrapable v-if="text !== ''">
    <template #left-icon>
      <announcement theme="outline" size="20" />
    </template>
  </nut-noticebar>
  <div class="orders-head">
    <h1>{{ title }}</h1>
    <h3>- Repair Station -</h3>
    <nut-sticky @change="sticky">
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
    </nut-sticky>
    <div class="orders-img">
      <div v-if="title !== '维修公告'">
        <nut-row>
          <nut-col :span="12">
            <div class="text" @click="router.push('/orders/new')">
              电脑报修<tool
                class="search-icon"
                theme="outline"
                size="20"
                fill="#333"
              />
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
