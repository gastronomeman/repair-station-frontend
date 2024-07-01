<script setup>
import { ref, nextTick } from 'vue'
import { Search, Announcement } from '@icon-park/vue-next'
import { useRouter } from 'vue-router'

import '@/assets/orders/orders.scss'

const router = useRouter()

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
  router.push('/orders/query')
}
</script>

<template>
  <nut-noticebar :text="text" wrapable v-if="text !== ''">
    <template #left-icon>
      <announcement theme="outline" size="20" />
    </template>
  </nut-noticebar>
  <div class="orders-head">
    <h1>{{ title }}</h1>
    <h3>- Online Repair -</h3>
    <nut-sticky @change="sticky">
      <nut-searchbar
        @click="focusSearchbar"
        ref="searchbarRef"
        v-model="search.input"
        :background="search.backgroundColor"
        @search="goToQuery"
        placeholder="输入你的学号查询报修状态"
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
    <img src="@/assets/orders/images/adv_repair.jpg" alt="图标" />
  </div>
  <router-view></router-view>
  <div class="orders-footer" style="height: 100px"></div>
</template>

<style scoped></style>
