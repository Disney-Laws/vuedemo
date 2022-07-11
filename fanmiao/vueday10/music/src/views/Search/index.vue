<template>
  <div>
    <van-search v-model="value" shape="round" placeholder="请输入搜索关键词" />
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
          <van-cell
            center
            v-for="item in resultList"
            :key="item.al.id"
            :title="item.al.name"
            :label="item.ar[0].name + ' - ' + item.name"
          >
            <template #right-icon>
              <van-icon name="play-circle-o" />
            </template>
          </van-cell>
        </van-list>
      </van-cell-group>
    </template>
  </div>
</template>

<script>
import { hotSearchApi, searchResultApi } from '@/api/Search';
export default {
  data() {
    return {
      value: '',
      hotArr: [],
      resultList: [],
      loading: false,
      finished: true,
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
      this.value = val;
      this.getResult(val);
    },
    async getResult() {
      try {
        const res = await searchResultApi({
          keywords:this.value,
          limit: 5,
        });
        console.log(res.data.result.songs);
        this.resultList = res.data.result.songs;
      } catch (e) {
        console.log('获取最佳匹配失败');
      }
    },
    onLoad() {

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
