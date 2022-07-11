import request from '../utils/request';

export const getSongByIdAPI = (id) =>
  request({
    url: `/song/detail?ids=${id}`,
    method: 'GET',
  });

export const getLyricByIdAPI = (id) =>
  request({
    url: `/lyric?id=${id}`,
    method: 'GET',
  });
