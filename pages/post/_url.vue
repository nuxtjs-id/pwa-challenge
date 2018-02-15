<template>
  <section class="container" v-if="$store.state.dataInit">
    <div class="p-relative">
      <div class="nuxt-navbar shadow">
        <span class="main-title">{{ $store.state.dataInit.feed.title }}</span>
        <!-- <span class="btn-search"><img src="/images/ic-search.png" style="width:100%;" alt="search"></span> -->
      </div>
    </div>
    <div v-if="content">
      <div class="feed-content shadow">
        <div class="thumbnail">
            <nuxt-lazy-load
              :img-thumb="'/images/nuxt-preloader.jpg'"
              :img="content.thumbnail"
              :img-key="'url-100'"
              :url="'post-url'"
              :title="content.title"
              :slug="content.slug"
              :add-class="'img-box75'"
            ></nuxt-lazy-load>
            <div class="clearfix"></div>
        </div>
        <div class="title">{{ content.title }}</div>
        <div class="headline"><span class="author" v-html="content.author"></span><span class="pub-date" v-html="content.pubDate"></span></div>
        <div class="categories">pwa, website, modern web</div>
        <div class="description" v-html="content.description"></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      content: null
    }
  },
  mounted () {
    let _self = this
    _self.content = _self.getContent(_self.$route.params.url)
  },
  methods: {
    getContent (url) {
      let _self = this
      let i
      let st = false
      let ist = false
      let slug
      for (i = 0; i < _self.$store.state.dataInit.items.length; i++) {
          slug = _self.$store.state.dataInit.items[i].title.toLowerCase().trim().replace(/[^0-9a-zA-Z]/g, '-')
          if (_self.$route.params.url === _self.$store.state.dataInit.items[i].slug) {
            st = true
            ist = i
          }
      }
      if (st) {
        return _self.$store.state.dataInit.items[ist]
      } else {
        return null
      }
    }
  },
  watch: {
    '$route': function (newRoute, oldRoute) {
      var _self = this
      if (newRoute.name === 'post-url') {
          _self.content = _self.getContent(_self.$route.params.url)
      }
    }
  }
}
</script>

