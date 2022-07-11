<template>
  <div class="home-container">
    <!-- 推荐歌单 -->
    <template>
      <van-cell class="title" title="推荐歌单" />
      <van-grid :border="false" :column-num="3">
        <van-grid-item v-for="item in recommendList" :key="item.id">
          <van-image width="111" height="100" :src="item.picUrl" />
          <p class="music-name van-multi-ellipsis--l2">{{ item.name }}</p>
        </van-grid-item>
      </van-grid>
    </template>
    <template>
      <van-cell title="最新音乐" class="title" />
      <SongItem
        v-for="item in newSongList"
        :key="item.id"
        :name="item.name"
        :author="item.song.artists[0].name"
        :id="item.id"
      ></SongItem>
    </template>
  </div>
</template>

<script>
import { getRecommendList, getNewSongList } from "@/apis/Home.js";
import SongItem from "@/components/SongItem.vue";
export default {
  data() {
    return {
      recommendList: [],
      newSongList: [],
    };
  },
  components: { SongItem },
  created() {
    this.getRecommend();
    this.getNewSong();
    // console.log(this.recommendList);//异步
  },
  methods: {
    async getRecommend() {
      try {
        const res = await getRecommendList({
          limit: 6,
        });
        // console.log(res.data.result);
        this.recommendList = res.data.result;
      } catch (e) {
        console.log(e);
      }
    },
    async getNewSong() {
      try {
        const res = await getNewSongList({
          limit: 10,
        });
        // console.log(res);
        this.newSongList = res.data.result;
      } catch (e) {
        console.log(e);
      }
    },
  },
};
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

  .van-grid-item__content {
    padding: 10px 0px;
  }
  .van-cell__value {
    flex: 0 0 30px;
    padding-top: 9px;
  }
}
</style>
