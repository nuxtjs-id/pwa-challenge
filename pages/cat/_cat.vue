<template>
  <main class="container" v-if="$store.state.dataInit">
    <div class="p-relative">
      <div class="nuxt-navbar shadow">
        <span class="main-title">{{ $store.state.dataInit.feed.title }}</span>
        <!-- <span class="btn-search"><img src="/images/ic-search.png" style="width:100%;" alt="search"></span> -->
      </div>
    </div>
    <div v-if="dataFilters">
      <div class="feed-content shadow" v-for="(v, i) in dataFilters" :key="i" v-if="i < $store.state.contentLoad">
        <div class="thumbnail">
            <nuxt-lazy-load
              :img-thumb="'/images/nuxt-preloader.jpg'"
              :img="v.thumbnail"
              :img-key="'cat-' + i"
              :url="'post-url'"
              :slug="v.slug"
              :title="v.title"
              :add-class="'img-box75'"
            />
        </div>
        <div class="title">{{ v.title }}</div>
        <div class="headline"><span class="author" v-html="v.author"></span><span class="pub-date" v-html="v.pubDate"></span></div>
        <div class="categories">
          <nuxt-link v-for="(y, a) in v.categories" :key="a" :to="{name: 'cat-cat', params: {cat: y}}">{{ y.replace(/\-/g, ' ').trim() }}<span v-if="a < v.categories.length - 1">, </span></nuxt-link>
        </div>
        <div class="description" v-html="v.desc"></div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data () {
    return {
      dataFilters: null
    }
  },
  mounted () {
    let _self = this
    _self.dataFilters = _self.$store.state.dataInit.items
    if (_self.$route.params.cat) {
        let i
        let filteredItems = []
        for (i = 0; i < _self.dataFilters.length; i++) {
            if (_self.dataFilters[i].categories.some(c => c === _self.$route.params.cat)) {
                filteredItems.push(_self.dataFilters[i])
            }
        }
        _self.dataFilters = filteredItems
    } else {
        _self.$router.replace('/')
    }
  },
  watch: {
    '$route': function (newRoute, oldRoute) {
      var _self = this
      if (newRoute.name === 'cat-cat') {
          _self.dataFilters = _self.$store.state.dataInit.items
          if (_self.$route.params.cat) {
              let i
              let filteredItems = []
              for (i = 0; i < _self.dataFilters.length; i++) {
                  if (_self.dataFilters[i].categories.some(c => c === _self.$route.params.cat)) {
                      filteredItems.push(_self.dataFilters[i])
                  }
              }
              _self.dataFilters = filteredItems
          } else {
              _self.$router.replace('/')
          }
      }
    }
  }
}
</script>
