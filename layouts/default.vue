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

<style>
html {
    overflow-y: auto;
  }
  body {
    background:#fafafa;
    margin:0;
    padding:0;
  }
  #__nuxt {
    font-family: "Open Sans",-apple-system,system-ui,BlinkMacSystemFont,"Helvetica Neue",Arial,sans-serif !important;
    letter-spacing:.3px;
  }
  .container {
    position:relative;
    padding-top:58px!important;
  }
  .p-relative {
    position:relative;
  }
  .nuxt-navbar {
    position:absolute;
    width:100%;
    padding:12px 15px;
    padding-top:15px;
    color:#ddd;
    text-transform: uppercase;
    text-shadow: 0 -1px 0px #fff;
    border-radius:5px;
    background:#000;
    box-sizing:border-box;
    margin-bottom:10px;
    margin-top:-63px;
    box-sizing: border-box;
  }
  .main-title {
    font-size:16px;
    letter-spacing:3px;
  }
  .btn-search {
    position:absolute;
    right:3px;
    top:5px;
    display:block;
    padding:12px;
    width:20px;
    cursor:pointer;
  }
  .feed-content {
    padding:10px 10px;
    margin-bottom:10px;
    border-bottom:solid 1px #eee;
    background:#fff;
    border-radius:5px;
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
    font-size:22px;
    margin-top:7px;
    padding:3px 5px;
    letter-spacing:0px;
  }
  .feed-content > div.title.c {
    font-size:22px!important;
    line-height: 150%;
  }
  .feed-content > div.headline {
    margin:10px 0px;
    color:#555;
    font-size:16px;
    letter-spacing:.5px;
    padding:0px 5px;
  }
  .feed-content > div.headline > span.pub-date {
    float:right;
    font-size:16px;
    letter-spacing:.5px;
  }
  .feed-content > div.categories {
    font-size:16px;
    padding:0px 5px;
    color:#3B8070;
  }
  .feed-content > div.categories a {
    color:#3B8070;
    text-decoration: none;
  }
  .feed-content > div.description {
    padding:0px 7px;
    font-size:16px;
    word-wrap: break-word;
    line-height: 145%;
  }
  .feed-content > div.description a {
    text-decoration: none!important;
    color:#3B8070;
  }
  .d-block {
    display:block;
    box-sizing: border-box;
  }
  .img-box75{
      width: 100%;
      padding-bottom: 55%;
      margin: 0;
      border-radius:5px;
      background-position: center center;
      float: left;
      background-size: cover;
      background-repeat: no-repeat;
      position: relative;
      overflow: hidden;
  }
  .shadow {
      -webkit-box-shadow: 0 10px 40px 0 rgba(62,57,107,0.07), 0 2px 9px 0 rgba(62,57,107,0.06);
              box-shadow: 0 10px 40px 0 rgba(62,57,107,0.07), 0 2px 9px 0 rgba(62,57,107,0.06);
  }
  
  [class*='nuxt-loader'] {
      background-color: #fafafa !important;
      opacity: .3;
      -webkit-transition: opacity .3s linear;
      transition: opacity .3s linear;
      -moz-transition: opacity .3s linear;
      -ms-transition: opacity .3s linear;
      -o-transition: opacity .3s linear;
  }
  
  [class*='nuxt-loader'].loaded {
      opacity: 1;
  }
  figure {
    margin:0px;
    padding:0px;
  }
  figure > img {
    max-width:100%;
  }
  
  @media only screen and (max-width: 414px) {
    main.container {
      max-width:100%;
      padding-left:3px!important;
      padding-right:3px!important;
      padding-bottom:3px!important;
    }
    .nuxt-navbar {
      position:fixed!important;
      left:0;
      border-radius:0px;
      width:100%;
      z-index:10;
    }
    .btn-search {
      position:absolute;
      right:3px;
      top:0px;
    }
    .feed-content > div.title {
      font-size:18px;
    }
  }
  @media only screen and (min-width: 415px) and (max-width: 767px) {
    main.container {
      max-width:100%;
      padding-left:100px!important;
      padding-right:100px!important;
      padding-bottom:3px!important;
    }
    .btn-search {
      position:absolute;
      right:3px;
      top:0px;
    }
    .feed-content > div.title {
      font-size:18px;
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    main.container {
      max-width:100%;
      padding-left:150px!important;
      padding-right:150px!important;
      padding-bottom:10px!important;
    }
  }
  @media only screen and (min-width: 1025px) and (max-width: 1365px) {
    main.container {
      max-width:100%;
      padding-left:270px!important;
      padding-right:270px!important;
      padding-bottom:10px!important;
    }
  }
  @media only screen and (min-width: 1366px) {
    main.container {
      max-width:100%;
      padding-left:450px!important;
      padding-right:450px!important;
      padding-bottom:10px!important;
    }
  }
  .clearfix:after,
  .clearfix:before{
    display:table;
    content:" ";
  }
  .clearfix:after{
    clear:both;
  }
</style>
