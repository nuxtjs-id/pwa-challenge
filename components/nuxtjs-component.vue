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
    let _self = this
    let a = new Image()
    let x
    a.src = _self.img
    a.onload = function () {
      x = setInterval(function () {
          let el = document.querySelector('.nuxt-loader-' + _self.imgKey)
          el.style.backgroundImage = 'url(' + _self.img + ')'
          el.classList.add('loaded')
          clearInterval(x)
      }, 3000)
    }
  }
}
</script>
