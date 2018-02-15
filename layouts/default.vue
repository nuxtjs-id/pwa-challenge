<template>
  <div>
    <nuxt/>
  </div>
</template>
<script>
export default {
  beforeMount () {
    let _self = this
    window.addEventListener('scroll', _self.handleScroll)
    window.addEventListener('resize', _self.onResize, { passive: true })
    if (window.innerWidth < 600) {
      _self.$store.state.isMobile = true
    } else {
      _self.$store.state.isMobile = false
    }
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    onResize () {
      let _self = this
      _self.$store.state.isMobile = window.innerWidth < 769
    },
    handleScroll () {
      let _self= this
      let y = window.scrollY
      _self.$store.state.scroll.scrolled = y > 0
      _self.$store.state.scroll.y = y
      if (y > 400 && !_self.$store.state.isMobile) {
        _self.$store.state.contentLoad = 50
      } else if (y > 150 && _self.$store.state.isMobile) {
        _self.$store.state.contentLoad = 50
      }
    }
  },
  watch: {
    '$route': function (newRoute, oldRoute) {
      let _self = this
      switch (newRoute.name) {
        case 'index':
          _self.$store.state.activeContent = null
          break
        case 'cat-cat':
          _self.$store.state.activeContent = null
          break
        default:
          _self.$store.state.activeContent = _self.$route.params.url
          break
      }
    }
  }
}
</script>
