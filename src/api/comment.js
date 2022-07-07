import request from '@/utils/request'

export const
  getCommentList = ({ type, source, offset, limit }) => {
    return request({
      url: 'comments',
      params: {
        type,
        source,
        offset,
        limit
      }
    })
  }
/**
 *
 * @param {增加点赞} target
 * @returns
 */
export const addLike = (target) => {
  return request({
    method: 'POST',
    url: 'comment/likings',
    data: {
      target
    }
  })
}
/**
 *取消点赞
 * @param {要取消点赞的评论id或评论回复id} target
 * @returns
 */
export const delLike = (target) => {
  return request({
    method: 'DELETE',
    url: `comment/likings/${target}`
  })
}
export const addComment = (data) => {
  return request({
    method: 'POST',
    url: 'comments',
    data
  })
}
