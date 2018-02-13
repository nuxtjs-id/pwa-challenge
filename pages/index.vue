<template>
  <section class="container">
    <div>
      <div class="feed-content" v-for="(v, i) in dataFeed.items" :key="i">
        <div class="title">{{ v.title }}</div>
        <div class="headline"><span class="author" v-html="v.author"></span><span class="pub-date" v-html="v.pubDate"></span></div>
        <div class="thumbnail"><img :src="v.thumbnail"></div>
        <div class="description" v-html="v.description"></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      dataFeed: []
    }
  },
  mounted () {
    var _self = this
    _self.dataFeed = this.$store.state.dataInit
  }
}
</script>
