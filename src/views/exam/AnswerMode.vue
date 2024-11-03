<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import AnswerItem from '@/components/answer/AnswerItem.vue'
import { useExamState } from '@/stores/index.js'

const examState = useExamState()
const subList = ref([
  {
    id: '123',
    topic: 'WWW服务器与客户机之间主要采用（）安全协议进行网页的发送和接收。',
    option1: 'HTTP',
    option2: 'HTTPS',
    option3: 'HTML',
    option4: 'SMTP',
    result: '2'
  },
  {
    id: '124',
    topic:
      '若系统正在将（）文件修改的结果写回磁盘时系统发生崩溃则对系统的影响相对较大。',
    option1: '空闲块',
    option2: '用户程序',
    option3: '目录',
    option4: '用户数据',
    result: '2'
  },
  {
    id: '125',
    topic:
      '正常情况下，操作系统对保选择题存有大量有用数据的硬盘进行（）操作时，不会清除有用数据。',
    option1: '磁盘分区和格式化',
    option2: '磁盘格式化和碎片整理',
    option3: '磁盘清理和碎片整理',
    option4: '磁盘分区和磁盘清理',
    result: '2'
  }
])

const swiperRef = ref()
const handlePrev = () => {
  swiperRef.value?.prev()
}
const handleNext = () => {
  swiperRef.value?.next()
}

/*const i = ref()
const onChange = (index) => {
  i.value = index
}
onChange(0)*/

const progress = computed(() => {
  return ((examState.result.length / subList.value.length) * 100).toFixed(2)
})

const time = ref(0) // 计时的秒数
const timer = ref(null)

const formattedTime = computed(() => {
  const minutes = Math.floor(time.value / 60)
  const seconds = time.value % 60
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
})
onMounted(() => {
  timer.value = setInterval(() => {
    time.value++
  }, 1000) // 每秒增加1秒
})
onBeforeUnmount(() => {
  clearInterval(timer.value) // 清理计时器
})
</script>

<template>
  <div class="swiper-demo">
    <div class="title">
      <nut-row>
        <nut-col :span="3">
          <div class="time">
            {{ formattedTime }}
          </div>
        </nut-col>
        <nut-col :span="9">
          <div class="content">&nbsp;</div>
        </nut-col>
        <nut-col :span="12">
          <div class="content">
            <nut-button
              size="mini"
              shape="round"
              type="info"
              @click.prevent="handleNext"
            >
              提交
            </nut-button>
          </div>
        </nut-col>
      </nut-row>
    </div>

    <nut-swiper
      :isPreventDefault="false"
      :loop="false"
      ref="swiperRef"
      :init-page="0"
    >
      <nut-swiper-item v-for="(item, index) in subList" :key="index">
        <div class="progress">
          <nut-progress
            :percentage="progress"
            stroke-color="linear-gradient(270deg, rgba(18,126,255,1) 0%,rgba(32,147,255,1) 32.815625%,rgba(13,242,204,1) 100%)"
            status="active"
          />
        </div>
        <AnswerItem
          @choice="handleNext"
          class="answer-item"
          :sub="item"
          :index="index"
        ></AnswerItem>
      </nut-swiper-item>
    </nut-swiper>

    <div class="swiper-btns">
      <div class="swiper-btn">
        <nut-button shape="round" type="info" @click.prevent="handlePrev">
          上一题
        </nut-button>
        &nbsp;
        <nut-button shape="round" type="info" @click.prevent="handleNext">
          下一题
        </nut-button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.title {
  width: 88%;
  max-width: 500px;
  text-align: right;
  margin: 8px auto 5px;
  .time {
    text-align: left;
    color: #7a7374;
  }
}
.progress {
  width: 88%;
  max-width: 500px;
  margin: 0 auto;
}
.swiper-demo {
  .swiper-btns {
    text-align: center;
    max-width: 500px;
    width: 88%;
    margin: 0 auto;

    .icon {
      height: 100%;
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>
