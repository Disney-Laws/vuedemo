import request from '@/utils/request'
//热搜列表
export const getSearchHot = params =>{
    return request({
        url:'/search/hot',
        params
    })
}
//传入搜索关键词
export const getKeyWord =params => request ({
    url:'/cloudsearch',
    params
})