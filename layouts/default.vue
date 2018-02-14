<template>
  <div>
    <nuxt/>
  </div>
</template>
<script>
export default {
  watch: {
    '$route': function (newRoute, oldRoute) {
      var _self = this
      switch (newRoute.name) {
        case 'index':
          _self.$store.state.activeContent = null
          break
        case 'cat-cat':
          _self.$store.state.activeContent = null
          break
        default:
          _self.$store.state.activeContent = parseInt(_self.$route.params.url)
          break
      }
    }
  }
}
</script>
