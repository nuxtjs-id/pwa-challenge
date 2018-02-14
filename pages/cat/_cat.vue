<template>
  <section class="container">
    <div class="nuxt-navbar shadow">
      <span class="main-title" v-if="$store.state.dataInit">{{ $store.state.dataInit.feed.title }}</span>
      <span class="btn-search"><img src="/images/ic-search.png" style="width:100%;" alt="search"></span>
    </div>
    <div v-if="$store.state.dataInit">
      <div class="feed-content shadow" v-for="(v, i) in dataFilters" :key="i">
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
      dataFilters: []
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
  }
}
</script>
