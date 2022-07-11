import request from "@/utils/request";

export const getSeachTag = (params) =>
  request({
    url: "/search/hot",
    params,
  });

export function getSearchList(params) {
  return request({
    url: "/cloudsearch",
    params,
  });
}
