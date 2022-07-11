import request from '@/utils/request.js'

export const getSearchList = (params) =>
  request({
    url: '/search/hot',
    params,
  })

  export const getcloudList = (params) =>
  request({
    url: '/cloudsearch',
    params,
  })