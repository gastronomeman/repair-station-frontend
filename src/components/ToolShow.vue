<script setup>
import { computed } from 'vue'

const props = defineProps({
  appList: {
    type: Object,
    required: true
  },
  title: {
    type: String,
    required: true
  }
})

const s = computed(() => {
  // 按每3个一组划分appList
  const grouped = []
  for (let i = 0; i < props.appList.length; i += 3) {
    grouped.push(props.appList.slice(i, i + 3))
  }
  return grouped
})

const onClick = (url) => {
  window.location.href = url
}
</script>

<template>
  <div class="view">
    <p class="title">{{ props.title }}</p>
    <van-row :gutter="10" v-for="(group, index) in s" :key="index">
      <van-col v-for="(item, idx) in group" :key="idx" span="8">
        <div class="container" @click="onClick(item.url)">
          <img class="icon" :src="item.photo" alt="" />
          {{ item.name }}
        </div>
      </van-col>
    </van-row>
  </div>
</template>

<style scoped>
.view {
  width: 90%;
  margin: 0 auto;
  .title {
    margin: 25px 0 5px;
    font-weight: bold;
    font-size: 18px;
  }
  .container {
    width: 90%;
    display: inline-flex;
    align-items: center;
    margin: 8px auto;
    cursor: pointer;
    background: #f6f6f6;
    padding: 5px;
    border-radius: 8px;
    .icon {
      background-color: white;
      width: 25%;
      margin-right: 5px;
      border-radius: 5px;
    }
  }
}
</style>
