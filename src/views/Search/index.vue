<template>
  <div>
    <van-search
      v-model="searchText"
      show-action
      placeholder="请输入搜索"
      background="#3296fa"
    />
  </div>
</template>

<script>
export default {
  created () { },
  data () {
    return {
      searchText: ''
    }
  },
  methods: {},
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped>
</style>
