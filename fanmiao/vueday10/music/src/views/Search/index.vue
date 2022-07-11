<template>
  <div>
    <van-search
      v-model="value"
      shape="round"
      placeholder="请输入搜索关键词"
      @input="inputFn"
    />
    <!-- 热门搜索 -->
    <template v-if="resultList.length === 0">
      <!-- 搜索下容器 -->
      <div class="search_wrap">
        <!-- 标题 -->
        <p class="hot_title">热门搜索</p>
        <!-- 热搜关键词容器 -->
        <div class="hot_name_wrap">
          <!-- 每个搜索关键词 -->
          <span
            class="hot_item"
            v-for="(item, index) in hotArr"
            :key="index"
            @click="btn(item.first)"
          >
            {{ item.first }}
          </span>
        </div>
      </div>
    </template>
    <!-- 最佳匹配 -->
    <template v-else>
      <van-cell-group>
        <van-cell title="最佳匹配" />
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
        >
          <SongItem
            v-for="(item,index) in resultList"
            :key="index"
            :name="item.name"
            :author="item.ar[0].name"
            :id="item.al.id"
          ></SongItem>
          <!-- <van-cell
            center
            v-for="item in resultList"
            :key="item.al.id"
            :title="item.al.name"
            :label="item.ar[0].name + ' - ' + item.name"
          >
            <template #right-icon>
              <van-icon name="play-circle-o" />
            </template>
          </van-cell> -->
        </van-list>
      </van-cell-group>
    </template>
  </div>
</template>

<script>
import { hotSearchApi, searchResultApi } from '@/api/Search';
import SongItem from '@/components/SongItem.vue';
export default {
  components:{
    SongItem,
  },
  data() {
    return {
      value: '',
      hotArr: [],
      resultList: [],
      loading: false,
      finished: false,
      page: 1,
      timer: '',
    };
  },
  async mounted() {
    try {
      const res = await hotSearchApi();
      console.log(res.data.result.hots);
      this.hotArr = res.data.result.hots;
    } catch (e) {
      console.log('获取热门搜索失败');
    }
  },
  methods: {
    btn(val) {
      this.page = 1; // 点击重新获取第一页数据
      this.finished = false; // 点击新关键词-可能有新的数据
      this.value = val;
      this.getResult(val);
      this.loading = false; // 本次数据加载完毕-才能让list加载更多
    },
    async getResult() {
      try {
        const res = await searchResultApi({
          keywords: this.value,
          limit: 5,
          offset: (this.page - 1) * 5,
        });
        console.log(res.data.result.songs);
        this.resultList = res.data.result.songs;
      } catch (e) {
        console.log('获取最佳匹配失败');
      }
    },
    async onLoad() {
      if (this.resultList.length >= 10) {
        this.finished = true;
        return;
      }
      try {
        const res = await searchResultApi({
          keywords: this.value,
          limit: 5,
          offset: (this.page - 1) * 5,
        });
        console.log(res.data.result.songs);
        this.loading = false;
        if (res.data.result.songs) {
          this.resultList.push(...res.data.result.songs);
          this.page++;
        } else {
          this.finished = true;
        }
      } catch (e) {
        console.log('获取更多失败');
      }
    },
    inputFn() {
      if (this.timer) clearTimeout(this.timer);
      this.timer = setTimeout(async () => {
        this.finished = false; // 输入框关键字改变-可能有新数据(不一定加载完成了)
        // 输入框值改变
        if (this.value.length === 0) {
          // 搜索关键词如果没有, 就把搜索结果清空阻止网络请求发送(提前return)
          this.resultList = [];
          return;
        }
        this.getResult();

        this.loading = false;
      }, 900);
    },
  },
};
</script>

<style>
/* 搜索容器的样式 */
.search_wrap {
  padding: 0.266667rem;
}

/*热门搜索文字标题样式 */
.hot_title {
  font-size: 0.32rem;
  color: #666;
}

/* 热搜词_容器 */
.hot_name_wrap {
  margin: 0.266667rem 0;
}

/* 热搜词_样式 */
.hot_item {
  display: inline-block;
  height: 0.853333rem;
  margin-right: 0.213333rem;
  margin-bottom: 0.213333rem;
  padding: 0 0.373333rem;
  font-size: 0.373333rem;
  line-height: 0.853333rem;
  color: #333;
  border-color: #d3d4da;
  border-radius: 0.853333rem;
  border: 1px solid #d3d4da;
}

/* 给单元格设置底部边框 */
.van-cell {
  border-bottom: 1px solid lightgray;
}
</style>
