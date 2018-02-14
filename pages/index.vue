<template>
  <section class="container" v-if="$store.state.dataInit">
    <div class="nuxt-navbar shadow">
      <span class="main-title">{{ $store.state.dataInit.feed.title }}</span>
      <span class="btn-search"><img src="/images/ic-search.png" style="width:100%;" alt="search"></span>
    </div>
    <div v-if="dataFeed">
      <div class="feed-content shadow" v-for="(v, i) in dataFeed.items" :key="i">
        <div class="thumbnail">
            <nuxt-lazy-load
              :img-thumb="'/images/nuxt-preloader.jpg'"
              :img="v.thumbnail"
              :img-key="'content-' + i"
              :url="'url'"
              :slug="i"
              :title="v.title"
              :add-class="'img-box75'"
            ></nuxt-lazy-load>
            <div class="clearfix"></div>
        </div>
        <div class="title">{{ v.title }}</div>
        <div class="headline"><span class="author" v-html="v.author"></span><span class="pub-date" v-html="v.pubDate"></span></div>
        <div class="description" v-show="false" v-html="v.description"></div>
        <div class="categories">
          <nuxt-link v-for="(y, a) in v.categories" :key="a" :to="{name: 'cat-cat', params: {cat: y}}">{{ y.replace(/\-/g, ' ').trim() }}<span v-if="a < v.categories.length - 1">, </span></nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      dataFeed: null
    }
  },
  mounted () {
    var _self = this
    _self.dataFeed = _self.$store.state.dataInit
  }
}
</script>
