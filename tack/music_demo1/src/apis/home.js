import request from '@/utils/request.js'

export const getRecommendList = (params) =>
  request({
    url: '/personalized',
    params,
    // 将来外面可能传入params的值 {limit: 20}
  })

export const getNewsongList = (params) =>
  request({
    url: '/personalized/newsong',
    params,
    // 将来外面可能传入params的值 {limit: 20}
  })
