import request from '@/utils/request';

// 热搜关键字
export const hotSearchApi = () => request({
    url: '/search/hot'
})

// 搜索结果列表
export const searchResultApi = params => request({
    url: '/cloudsearch',
    params
})
