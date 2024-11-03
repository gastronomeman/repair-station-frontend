<script setup>
import { ref, defineEmits } from 'vue'
import { useExamState } from '@/stores/index.js'

const examState = useExamState()

const props = defineProps({
  index: {
    type: Object,
    required: true
  },
  sub: {
    type: Object,
    required: true
  }
})

const sub = ref(props.sub)
const index = ref(props.index)

const radio = ref('')

const emit = defineEmits(['choice'])
const choice = (s) => {
  radio.value = s
  if (sub.value.result === s) {
    examState.setResult(+index.value, true)
  } else {
    examState.setResult(+index.value, false)
  }

  setTimeout(() => {
    emit('choice')
  }, 150)
}
</script>

<template>
  <div>
    <div class="content">
      <p>
        <span class="index">&nbsp;{{ index + 1 }}.&nbsp;</span>
        {{ sub.topic }}
      </p>
    </div>
    <div class="radio">
      <nut-radio-group v-model="radio">
        <nut-radio class="tag" @touchend.prevent="choice('1')" label="1">
          {{ sub.option1 }}
        </nut-radio>
        <nut-radio class="tag" @touchend.prevent="choice('2')" label="2">
          {{ sub.option2 }}
        </nut-radio>
        <nut-radio class="tag" @touchend.prevent="choice('3')" label="3">
          {{ sub.option3 }}
        </nut-radio>
        <nut-radio class="tag" @touchend.prevent="choice('4')" label="4">
          {{ sub.option4 }}
        </nut-radio>
      </nut-radio-group>
    </div>
  </div>
</template>

<style scoped>
.content {
  width: 88%;
  max-width: 500px;
  margin: 15px auto 0;
  p {
    margin: 0;
    .index {
      background-color: #93d5dc;
      border-radius: 10px;
      padding: 1px;
      margin: 3px;
    }
  }
}

.radio {
  max-width: 500px;
  width: 88%;
  margin: auto;
  z-index: 999;
  .tag {
    margin: 15px 0;
  }
}
</style>
