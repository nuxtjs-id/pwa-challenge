<template>
  <router-link
    class="d-block"
    :aria-label="title"
    :to="{ name: url, params: { url: slug } }"
  >
    <span
      class="d-block"
      :class="[addClass, 'nuxt-loader-' + imgKey]"
      :style="{'background-image': 'url(' + imgThumb + ')'}"
    ></span>
    <span class="clearfix"></span>
  </router-link>
</template>

<script>
export default {
  props: ['imgThumb', 'imgKey', 'img', 'url', 'slug', 'title', 'addClass'],
  mounted () {
    var _self = this
    var el = document.querySelector('.nuxt-loader-' + _self.imgKey)
    setTimeout(function () {
      var a = new Image()
      a.src = _self.img
      a.onload = function () {
        el.style.backgroundImage = 'url(' + _self.img + ')'
        el.classList.add('loaded')
      }
    }, 1000)
  }
}
</script>
