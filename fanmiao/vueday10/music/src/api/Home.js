import request from "@/utils/request";

// 推荐歌单
export const recommendMusicApi = (params) => 
  request({
    url: '/personalized',
    params,
    })
  