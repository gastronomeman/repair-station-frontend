<script setup>
import { ref } from 'vue'

const initPage = ref(0)
const subList = ref([
  {
    id: '123',
    topic: 'WWW服务器与客户机之间主要采用（）安全协议进行网页的发送和接收。',
    option1: 'HTTP',
    option2: 'HTTPS',
    option3: 'HTML',
    option4: 'SMTP'
  },
  {
    id: '123',
    topic: 'WWW服务器与客户机之间主要采用（）安全协议进行网页的发送和接收。',
    option1: 'HTTP',
    option2: 'HTTPS',
    option3: 'HTML',
    option4: 'SMTP'
  }
])
//const radio = ref(0)
</script>

<template>
  <nut-swiper :init-page="initPage" :height="500">
    <nut-swiper-item
      v-for="(item, index) in subList"
      :key="index"
      style="height: 100%"
    >
      <nut-row>
        <nut-col :span="24">
          <div class="content">
            <p>
              <span>&nbsp;{{ index + 1 }}.&nbsp;</span>{{ item.topic }}
            </p>
            <div class="radio" @touchstart.prevent="console.log(1)">111</div>
            <div class="radio" @touchstart.prevent="console.log(2)">222</div>
          </div>
        </nut-col>
      </nut-row>
    </nut-swiper-item>
  </nut-swiper>
</template>

<style scoped>
.content {
  width: 90%;
  margin: 15px auto;
  p {
    span {
      background-color: #93d5dc;
      border-radius: 10px;
      padding: 1px;
      margin: 3px;
    }
  }

  .radio {
    width: 95%;
    margin: 0 auto;
  }
}
</style>
