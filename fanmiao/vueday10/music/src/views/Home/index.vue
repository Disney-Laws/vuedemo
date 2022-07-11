<template>
  <div>
    <van-cell-group>
      <van-cell title="推荐歌单" />
      <van-grid :column-num="3">
        <van-grid-item v-for="item in list" :key="item.id">
          <van-image width="100" height="100" :src="item.picUrl" />
          <p class="song_name">{{ item.name }}</p>
        </van-grid-item>
      </van-grid>
    </van-cell-group>

    <van-cell-group>
      <van-cell title="最新音乐" />
      <SongItem
      v-for="item in newList" :key="item.id"
      :name="item.name"
      :author="item.song.artists[0].name"
      :id="item.id"
      >

      </SongItem>
      <!-- <van-cell 
      center 
      v-for="item in newList" :key="item.id"
      :title="item.name" :label="item.song.artists[0].name+ ' - ' +item.name">
        <template #right-icon>
          <van-icon name="play-circle-o" />
        </template>
      </van-cell> -->
    </van-cell-group>
  </div>
</template>

<script>
import { recommendMusicApi, newMusicApi } from '@/api/Home';
import SongItem from '@/components/SongItem.vue';
export default {
    data() {
        return {
            list: [],
            newList: [],
        };
    },
    created() {
        this.getList();
        this.getnewlist();
    },
    methods: {
        async getList() {
            try {
                const res = await recommendMusicApi({
                    limit: 6,
                });
                // console.log(res.data.result);
                this.list = res.data.result;
            }
            catch (e) {
                console.log("获取推荐歌单失败");
            }
        },
        async getnewlist() {
            try {
                const res = await newMusicApi();
                console.log(res.data.result);
                this.newList = res.data.result;
            }
            catch (e) {
                console.log("获取最新音乐失败");
            }
        },
    },
    components: { SongItem }
};
</script>

<style>
/* 标题 */
.title {
  padding: 0.266667rem 0.24rem;
  margin: 0 0 0.24rem 0;
  background-color: #eee;
  color: #333;
  font-size: 15px;
}
/* 推荐歌单 - 歌名 */
.song_name {
  font-size: 0.346667rem;
  padding: 0 0.08rem;
  margin-bottom: 0.266667rem;
  word-break: break-all;
  text-overflow: ellipsis;
  display: -webkit-box; /** 对象作为伸缩盒子模型显示 **/
  -webkit-box-orient: vertical; /** 设置或检索伸缩盒对象的子元素的排列方式 **/
  -webkit-line-clamp: 2; /** 显示的行数 **/
  overflow: hidden; /** 隐藏超出的内容 **/
}
</style>
