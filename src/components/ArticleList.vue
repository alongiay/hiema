<template>
  <div>
    <van-pull-refresh
      v-model="refreshing"
      @refresh="onRefresh"
      ref="pullrefresh"
    >
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <!-- <van-cell-group>
          <van-cell
            v-for="(item, index) in articleList"
            :key="index"
            :title="item.title"
            value="内容"
            label="描述信息"
          />
        </van-cell-group> -->
        <ArticleItem
          v-for="(item, index) in articleList"
          :key="index"
          :article="item"
        ></ArticleItem>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
import ArticleItem from './ArticleItem.vue'
import { getArticleList } from '@/api/home'
const ele = null // 全局，只有写在template中，需要响应数据的时候
let scrollTop = 0
export default {
  name: 'ArticleList',
  props: {
    id: {
      type: Number,
      // eslint-disable-next-line vue/require-prop-type-constructor
      required: true
    }

  },
  created () {
    this.getArticleList()
  },
  // 操作dom
  mounted () {
    console.log(this.$refs.pullrefresh)
    this.$refs.pullrefresh.$el.addEventListener('scroll', function () {
      scrollTop = this.scrollTop
    })
  },
  activated () {
    ele.scrollTop = scrollTop
  },
  data () {
    return {
      timestamp: Date.now(),
      articleList: [],
      loading: false,
      finished: false,
      refreshing: false
    }
  },
  methods: {
    async getArticleList () {
      if (this.refreshing) {
        this.articleList = []
        this.refreshing = false
      }
      try {
        const res = await getArticleList({ channel_id: this.id, timestamp: this.timestamp })
        console.log(res)
        this.timestamp = res.data.data.pre_timestamp
        if (this.timestamp === null) {
          this.finished = true
        }
        this.articleList.push(...res.data.data.results)
        this.loading = false
      } catch (err) {
        console.log(err)
      }
    },
    onLoad () {
      this.getArticleList()
    },
    onRefresh () {
      this.finished = false
      this.loading = true
      this.timestamp = Date.now()
      this.getArticleList()
    }
  },
  computed: {},
  watch: {},
  filters: {},
  // eslint-disable-next-line vue/no-unused-components
  components: { ArticleItem }
}
</script>

<style scoped lang='less'>
.van-cell-group {
  margin-top: 174px;
}
</style>
