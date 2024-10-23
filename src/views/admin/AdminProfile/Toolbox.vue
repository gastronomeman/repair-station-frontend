<script setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import {
  deleteItemService,
  deleteService,
  linkFindAllService
} from '@/api/webLink.js'
import { Delete, Editor } from '@icon-park/vue-next'
import { errorMsg, successMsg } from '@/utils/SendMsgUtils.js'

const router = useRouter()

const appList = ref([])

const getAppList = async () => {
  const resp = await linkFindAllService()
  if (resp.code === 1) {
    appList.value = resp.data
  }
}
getAppList()

const back = () => {
  router.go(-1)
}

const showItem = ref(true)

const del = async (item) => {
  if (item.list.length > 0) {
    errorMsg('集合里面还有网站，不能删除')
    return
  }
  if (!confirm('确认要删除整个集合吗？')) return
  const resp = await deleteService(item.id)
  if (resp.code === 1) {
    successMsg(resp.data)
    await getAppList()
  }
}
const delItem = async (id, itemId) => {
  if (!confirm('确认要删除这个网址吗？')) return
  const resp = await deleteItemService(id, itemId)
  if (resp.code === 1) {
    successMsg(resp.data)
    await getAppList()
  }
}

const add = async () => {
  await router.push('/admin/profile/tool-o?o=add')
}
const update = async (i) => {
  await router.push(`/admin/profile/tool-o?o=update&name=${i.title}&id=${i.id}`)
}
const addItem = async (id) => {
  await router.push(`/admin/profile/tool-o?o=addItem&id=${id}`)
}
</script>

<template>
  <nut-sticky>
    <nut-navbar title="软件工具箱" left-show @click-back="back">
      <template #left>
        <div>返回</div>
      </template>
    </nut-navbar>
  </nut-sticky>
  <div style="text-align: center; margin-top: 20px">
    <nut-button type="primary" size="small" @click="add">添加新集合</nut-button>
    &nbsp;
    <nut-button type="primary" size="small" @click="showItem = !showItem">
      收起 / 展开
    </nut-button>
  </div>
  <div class="toolLink" v-for="item in appList" :key="item.id">
    <div class="title">
      <van-row>
        <van-col span="7">{{ item.title }}</van-col>
        <van-col span="4">
          <nut-button type="primary" size="mini" @click="addItem(item.id)">
            新增
          </nut-button>
        </van-col>
        <van-col span="4">
          <nut-button type="primary" size="mini" @click="update(item)">
            修改
          </nut-button>
        </van-col>
        <van-col span="4">
          <nut-button type="primary" size="mini" @click="del(item)">
            删除
          </nut-button>
        </van-col>
      </van-row>
    </div>
    <div v-show="showItem" class="content" v-for="i in item.list" :key="i.id">
      <van-row>
        <van-col span="5"> <img class="photo" :src="i.photo" alt="" /></van-col>
        <van-col span="7">
          <div class="boxCenter">{{ i.name }}</div>
        </van-col>
        <van-col span="12">
          <div class="boxCenter">
            <div class="btn">
              <editor
                class="icon-center"
                theme="outline"
                size="15"
                fill="#333"
              />编辑
            </div>
            <div @click="delItem(item.id, i.id)" class="btn">
              <delete
                class="icon-center"
                theme="outline"
                size="15"
                fill="#333"
              />删除
            </div>
          </div>
        </van-col>
      </van-row>
      <nut-divider style="margin: 5px" dashed> </nut-divider>
    </div>
  </div>
</template>

<style scoped>
.toolLink {
  max-width: 500px;
  width: 80%;
  margin: 0 auto;

  .title {
    font-weight: bold;
    font-size: 20px;
    margin: 30px 0 20px;
  }

  .content {
    .photo {
      background-color: white;
      width: 60%;
      border-radius: 5px;
    }

    .boxCenter {
      height: 100%;
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }

    .btn {
      margin: 5px;
      display: inline-flex;
      border: 1px solid #939393;
      padding: 5px;
      border-radius: 4px;
      cursor: pointer;

      .icon-center {
        display: inline-flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
}
</style>
