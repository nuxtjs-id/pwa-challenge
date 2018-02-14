<template>
  <router-link
    class="d-block"
    :to="{ name: url, params: { url: slug } }"
  >
    <div
      :class="[addClass, 'nuxt-loader-' + imgKey]"
      :style="{'background-image': 'url(' + imgThumb + ')'}"
    ></div>
    <div class="clearfix"></div>
  </router-link>
</template>

<script>
export default {
  props: ['imgThumb', 'imgKey', 'img', 'url', 'slug', 'addClass'],
  mounted () {
    var _self = this
    var el = document.querySelector('.nuxt-loader-' + _self.imgKey)
    var a = new Image()
    a.src = _self.img
    a.onload = function () {
      el.style.backgroundImage = 'url(' + _self.img + ')'
      el.classList.add('loaded')
    }
  }
}
</script>
