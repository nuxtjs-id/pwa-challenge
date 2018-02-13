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

<style>
html {
  overflow-y: auto;
}
#__nuxt {
  font-family: "Open Sans",-apple-system,system-ui,BlinkMacSystemFont,"Helvetica Neue",Arial,sans-serif !important;
  letter-spacing:.3px;
}
.feed-content {
  padding-bottom:10px;
  margin-bottom:15px;
  border-bottom:solid 1px #eee;
}
.feed-content > div {
  max-width:100%;
  box-sizing: border-box;
}
.feed-content > div > img {
  max-width:100%;
}
.feed-content > div.title {
  font-weight: bold;
  margin:10px 0px;
  font-size:18px;
}
.feed-content > div.headline {
  margin:10px 0px;
  color:#a0a0a0;
  font-size:14px;
  letter-spacing:.5px;
}
.feed-content > div.headline > span.pub-date {
  float:right;
  font-size:12px;
  letter-spacing:.5px;
}
.feed-content > div.description {
  display:none;
}
figure {
  margin:0px;
  padding:0px;
}
figure > img {
  max-width:100%;
}

@media only screen and (min-width: 769px) {
  section.container {
    max-width:100%;
    padding:10px 500px;
  }
}

@media only screen and (max-width: 768px) {
  section.container {
    max-width:100%;
    padding:10px!important;
  }
}
</style>
