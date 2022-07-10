import request from '@/utils/request';

// 推荐歌单
export const recommendMusicApi = (params) =>
  request({
    url: '/personalized',
    params,
  });

// 最新音乐
export const newMusicApi = (params) =>
  request({
    url: '/personalized/newsong',
    params,
  });
