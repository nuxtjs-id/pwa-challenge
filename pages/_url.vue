<template>
  <section class="container">
    <div v-if="$store.state.dataInit">
      <div class="feed-content shadow" v-if="$store.state.activeContent === 0 || $store.state.activeContent > 0">
        <div class="thumbnail">
            <nuxt-lazy-load
              :img-thumb="'/images/nuxt-preloader.jpg'"
              :img="$store.state.dataInit.items[$store.state.activeContent].thumbnail"
              :img-key="'content-' + $store.state.activeContent"
              :url="'url'"
              :title="$store.state.dataInit.items[$store.state.activeContent].title"
              :slug="$store.state.activeContent"
              :add-class="'img-box75'"
            ></nuxt-lazy-load>
            <div class="clearfix"></div>
        </div>
        <div class="title">{{ $store.state.dataInit.items[$store.state.activeContent].title }}</div>
        <div class="headline"><span class="author" v-html="$store.state.dataInit.items[$store.state.activeContent].author"></span><span class="pub-date" v-html="$store.state.dataInit.items[$store.state.activeContent].pubDate"></span></div>
        <div class="categories">pwa, website, modern web</div>
        <div class="description" v-html="$store.state.dataInit.items[$store.state.activeContent].description"></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  mounted () {
    var _self = this
    _self.$store.state.activeContent = parseInt(_self.$route.params.url)
  }
}
</script>

<style scoped>
.feed-content > div.title {
  font-size:20px!important;
  line-height: 150%;
}
</style>

