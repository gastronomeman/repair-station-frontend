import ExamLayout from '@/views/layout/ExamLayout.vue'
import AnswerNotice from '@/views/exam/AnswerNotice.vue'
import AnswerMode from '@/views/exam/AnswerMode.vue'

export default [
  {
    path: '/exam',
    component: ExamLayout,
    meta: { requiresAuth: true },
    redirect: '/exam/notice',
    children: [
      {
        path: 'notice',
        meta: { title: '维修站答题' },
        component: AnswerNotice
      },
      {
        path: 'answer',
        meta: { title: '维修站答题' },
        component: AnswerMode
      }
    ]
  }
]
