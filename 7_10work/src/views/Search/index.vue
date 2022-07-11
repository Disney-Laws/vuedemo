<template>
  <div>
    <van-search
      shape="round"
      placeholder="请输入搜索关键词"
      v-model="value"
      @input="inputFn"
      clearable
    />
    <!-- 热门搜索 -->
    <template v-if="keywordList.length == 0">
      <van-cell title="热门搜索" />
      <div style="padding: 10px 16px">
        <van-tag
          color="red"
          size="large"
          plain
          round
          type="primary"
          v-for="(item, index) in hotList"
          :key="index"
          style="margin: 5px 5px"
          @click="clickFn(item.first)"
        >
          {{ item.first }}
        </van-tag>
      </div>
    </template>
    <template v-else>
      <van-cell title="最佳匹配" size="large" />
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <SongItem
        v-for="item in keywordList"
        :key="item.id"
        :name="item.name"
        :author="item.ar[0].name"
        :id="item.id"
      ></SongItem>
      </van-list>
    </template>
  </div>
</template>
<script>
import { getSearchHot, getKeyWord } from "@/apis/Search";
import SongItem from "@/components/SongItem.vue";
export default {
  components: { SongItem },
  data() {
    return {
      hotList: [],
      value: "",
      keywordList: [],
      loading: false, //加载中的状态，值为false才能触底触发onload方法
      finished: false, //未加载全部（如果设置为true，底部就不会再次执行onload方法
      page: 1,
      timer: null,
    };
  },
  created() {
    this.getSearchHotFn();
  },
  methods: {
    async getSearchHotFn() {
      try {
        const res = await getSearchHot({});
        this.hotList = res.data.result.hots;
        // console.log(res.data.result.hots);
      } catch (e) {
        console.log(e);
      }
    },
    async getKeyWordFn() {
      try {
        const res = await getKeyWord({
          keywords: this.value,
          limit: 20,
        });
        this.$toast("请求成功");
        if (!res.data.result.songs) {
          this.keywordList = [];
          return;
        }
        // console.log(res.data.result.songs);
        this.keywordList = res.data.result.songs;
      } catch (e) {
        console.log(e);
        this.$toast("请求失败");
      }
    },
    clickFn(val) {
      this.page = 1; // 点击重新获取第一页数据
      this.value = val;
      this.finished = false;
      this.loading = false;

      this.getKeyWordFn();
    },
    inputFn() {
      if (this.timer) clearTimeout(this.timer)
        this.timer = setTimeout(() => {
          this.finished = false;
          this.page = 1; // 点击重新获取第一页数据
          if (this.value.length == 0) {
            this.keywordList = [];
            return;
          }
          this.loading = false;
          this.getKeyWordFn();
        },500);
      // console.log(111);
    },
    async onLoad() {
      this.finished = false;
      this.page++;
      try {
        const res = await getKeyWord({
          keywords: this.value,
          limit: 20,
          offset: (this.page - 1) * 20,
        });
        // this.$toast("请求成功");
        // console.log(res.data.result.songs);
        if (!res.data.result.songs) {
          this.finished = true;
          this.loading = false;
          return;
        }
        this.keywordList = [...this.keywordList, ...res.data.result.songs];
      } catch (e) {
        console.log(e);
        this.$toast("请求失败");
      }
      this.loading = false;
    },
  },
};
</script>
