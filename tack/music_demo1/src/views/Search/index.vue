<template>
  <div style="padding-top: 48px">
    <van-search
      shape="round"
      placeholder="请输入搜索关键词"
      v-model="value"
      @input="inputFn"
    />
    <!-- 热门搜索 -->
    <template v-if="list.length == 0">
      <van-cell title="热门搜索" />
      <div style="padding: 10px 16px">
        <van-tag
          color="#6666"
          text-color="#000"
          size="large"
          plain
          round
          type="primary"
          v-for="(item, index) in getSearchList"
          :key="index"
          @click="cliFn(item.first)"
          style="margin-right: 8px; margin-bottom: 5px"
        >
          {{ item.first }}
        </van-tag>
      </div>
    </template>

    <template v-else>
      <van-cell title="最佳匹配" />
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <!-- <van-cell
          v-for="item in list"
          :key="item.id"
          :title="item.name"
          :label="`${item.ar[0].name}-${item.name}`"
        /> -->
        <SongItme
          v-for="item in list"
          :key="item.id"
          :name="item.name"
          :author="item.ar[0].name"
          :id="item.id"
        ></SongItme>
      </van-list>
    </template>
  </div>
</template>
<script>
import { getSearchListApi, getcloudListApi } from '@/apis'
import SongItme from '../../components/songitme.vue'
export default {
  components: {
    SongItme,
  },
  data() {
    return {
      getSearchList: [],
      value: '',
      list: [],
      loading: false,
      finished: false,
      page: 1,
      timer: '',
    }
  },
  created() {
    this.getlist()
  },
  methods: {
    async getlist() {
      try {
        const res = await getSearchListApi()
        this.getSearchList = res.data.result.hots
        // console.log(res.data.result.hots)
      } catch (err) {
        console.log('出错误了')
      }
    },
    async cliFn(val) {
      this.page = 1
      this.finished = false
      this.value = val
      try {
        const res = await getcloudListApi({
          keywords: this.value,
          limit: 20,
          offset: (this.page - 1) * 20,
        })

        this.list = res.data.result.songs
        this.$toast.success('成功')
        this.loading = false
      } catch (err) {
        this.$toast.fail('失败')
      }
    },
    async inputFn() {
      this.page = 1
      if (this.timer) clearTimeout(this.timer)
      this.timer = setTimeout(async () => {
        this.finished = false
        if (this.value.length == 0) {
          this.list = []
          return
        }
        try {
          const res = await getcloudListApi({
            keywords: this.value,
            limit: 20,
            offset: (this.page - 1) * 20,
          })
          if (res.data.result.songs.length == undefined) {
            this.list = []
            return
          }
          this.list = res.data.result.songs
          this.$toast.success('成功')
          this.loading = false
        } catch (err) {
          //this.$toast.fail('失败')
        }
      }, 900)
    },
    async onLoad() {
      this.page++
      try {
        const res = await getcloudListApi({
          keywords: this.value,
          limit: 20,
          offset: (this.page - 1) * 20,
        })
        if (res.data.result.songs.length == undefined) {
          this.finished = true
          this.loading = false
          return
        }
        console.log(res)
        this.list = [...this.list, ...res.data.result.songs]
        this.loading = false
      } catch {
        this.$toast.fail('失败')
      }
    },
  },
}
</script>

<style></style>
