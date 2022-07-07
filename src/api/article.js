import request from '@/utils/request'

export const getArticle = (article_id) => {
  return request({
    url: `/articles/${article_id}`
  })
}
// 增加用户 @param{用户id} target @returns
export const addUser = (target) => {
  return request({
    method: 'POST',
    url: 'user/followings',
    data: { target }
  })
}
// 取消用户
export const delUser = (target) => {
  return request({
    method: 'DELETE',
    url: `user/followings/${target}`
  })
}
// get post put delete

export const addCollect = (target) => {
  return request({
    method: 'POST',
    url: 'article/collections',
    data: {
      target
    }

  })
}
// 取消收藏@param{收藏的目标文章id}target  @returns
export const delCollect = (target) => {
  return request({
    method: 'DELETE',
    url: `article/collections/${target}`
  })
}
