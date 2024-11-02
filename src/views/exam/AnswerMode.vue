<script setup>
import { ref } from 'vue'
import { RadioTwo } from '@icon-park/vue-next'

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
const radio = ref(0)

const check = (s) => {
  radio.value = s
  console.log(s)
}
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
              <span class="index">&nbsp;{{ index + 1 }}.&nbsp;</span>
              {{ item.topic }}
            </p>
            <div class="radio" @touchstart.prevent="check(1)">
              <p>
                <radio-two class="icon" theme="outline" size="18" />
                {{ item.option1 }}
              </p>
            </div>
            <div class="radio" @touchstart.prevent="check(2)">
              <p>
                <radio-two class="icon" theme="outline" size="18" />
                {{ item.option2 }}
              </p>
            </div>
            <div class="radio" @touchstart.prevent="check(3)">
              <p>
                <radio-two class="icon" theme="outline" size="18" />
                {{ item.option3 }}
              </p>
            </div>
            <div class="radio" @touchstart.prevent="check(4)">
              <p>
                <radio-two class="icon" theme="outline" size="18" />
                {{ item.topic }}
              </p>
            </div>
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
    .index {
      background-color: #93d5dc;
      border-radius: 10px;
      padding: 1px;
      margin: 3px;
    }
  }

  .radio {
    margin: 10px auto;
    p {
      color: #7a7374;
      display: inline-flex;
      margin: 0;

      .icon {
        margin-right: 5px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
}
</style>
