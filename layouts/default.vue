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
      if (newRoute.name === 'index') {
        _self.$store.state.activeContent = null
      } else {
        _self.$store.state.activeContent = parseInt(_self.$route.params.url)
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
.nuxt-navbar {
  position:relative;
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
  margin-top:-15px;
}
.main-title {
  font-size:14px;
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
  font-size:20px;
  margin-top:7px;
  padding:3px 5px;
  letter-spacing:0px;
}
.feed-content > div.headline {
  margin:10px 0px;
  color:#999;
  font-size:14px;
  letter-spacing:.5px;
  padding:0px 5px;
  text-shadow:0px -1px 0px #aaa;
}
.feed-content > div.headline > span.pub-date {
  float:right;
  font-size:12px;
  letter-spacing:.5px;
}
.feed-content > div.categories {
  font-size:14px;
  letter-spacing:.3px;
  padding:0px 5px;
  color:#ff5555;
}
.feed-content > div.description {

}
.feed-content > div.description {
  padding:0px 7px;
  font-size:18px;
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
  section.container {
    max-width:100%;
    padding:3px!important;
  }
  .nuxt-navbar {
    margin-top:-6px;
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
  section.container {
    max-width:100%;
    padding:3px 100px;
  }
  .nuxt-navbar {
    margin-top:-6px;
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
  section.container {
    max-width:100%;
    padding:10px 150px;
  }
}
@media only screen and (min-width: 1025px) and (max-width: 1365px) {
  section.container {
    max-width:100%;
    padding:10px 270px;
  }
}
@media only screen and (min-width: 1366px) {
  section.container {
    max-width:100%;
    padding:10px 450px;
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
