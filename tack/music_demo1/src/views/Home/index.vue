<template>
  <div class="home-container">
    <!-- 推荐歌单 -->
    <van-cell class="title" title="推荐歌单" />
    <van-grid :border="false" :column-num="3">
      <van-grid-item v-for="item in recommendList" :key="item.id">
        <van-image width="100" height="100" :src="item.picUrl" />
        <p class="music-name van-multi-ellipsis--l2">{{ item.name }}</p>
      </van-grid-item>
    </van-grid>

    <van-cell class="title" title="最佳匹配" />
    <!-- <van-cell
      :label="`${item.song.artists[0].name}-${item.name}`"
      :title="item.name"
      v-for="item in newList"
      :key="item.id"
    > -->
      <SongItme
        v-for="item in newList"
        :key="item.id"
        :name="item.name"
        :author="item.song.artists[0].name"
        :id="item.id"
      ></SongItme>
    
    <!-- </van-cell> -->
  </div>
</template>

<script>
import { getRecommendListApi, getNewsongListApi } from '@/apis'
import SongItme from '../../components/songitme.vue'
export default {
  components: {
    SongItme,
  },
  data() {
    return {
      recommendList: [], // 推荐歌单
      newList: [],
    }
  },
  created() {
    this.getlist()
    this.getNewsonglist()
  },

  methods: {
    // 获取推荐歌单
    async getlist() {
      try {
        const res = await getRecommendListApi({
          limit: 6,
        })
        this.recommendList = res.data.result
        //console.log(res.data.result)
      } catch (err) {
        console.log('出错误了')
      }
    },

    async getNewsonglist() {
      try {
        const res = await getNewsongListApi({
          limit: 10,
        })
        this.newList = res.data.result
        console.log(res.data.result)
      } catch (err) {
        console.log('出错误了')
      }
    },
  },
}
</script>

<style lang="less" scoped>
.home-container {
  .title {
    background-color: #c71d24;
    color: #fff;
  }

  .music-name {
    font-size: 12px;
    text-align: left;
    line-height: 20px;
    width: 100%;
    padding: 0 5px;
    box-sizing: border-box;
    height: 37px;
  }

  /deep/.van-grid-item__content {
    padding: 10px 0px;
  }
  .van-icon-play-circle-o:before {
    line-height: 50px;
  }
  .van-cell__label {
    width: 300px;
  }
}
</style>
