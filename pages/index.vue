<template>
  <section class="container">
    <div>
      <div class="feed-content shadow" v-for="(v, i) in dataFeed.items" :key="i">
        <div class="thumbnail">
            <nuxt-lazy-load
              :img-thumb="'/images/nuxt-preloader.jpg'"
              :img="v.thumbnail"
              :img-key="'content-' + i"
              :url="'url'"
              :slug="i"
              :add-class="'img-box75'"
            ></nuxt-lazy-load>
            <div class="clearfix"></div>
        </div>
        <div class="title">{{ v.title }}</div>
        <div class="headline"><span class="author" v-html="v.author"></span><span class="pub-date" v-html="v.pubDate"></span></div>
        <div class="description" v-show="false" v-html="v.description"></div>
        <div class="categories">pwa, website, modern web</div>
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
