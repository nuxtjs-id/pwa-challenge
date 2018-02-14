<template>
  <div>
    <nuxt/>
  </div>
</template>
<script>
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
.feed-content {
  padding:10px 10px;
  margin-bottom:5px;
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
  font-size:16px;
  margin-top:7px;
  padding:3px 5px;
}
.feed-content > div.headline {
  margin:10px 0px;
  color:#999;
  font-style: italic;
  font-size:14px;
  letter-spacing:.5px;
  padding:0px 5px;
}
.feed-content > div.headline > span.pub-date {
  float:right;
  font-size:12px;
  letter-spacing:.5px;
}
.feed-content > div.description {
  display:none;
}
.d-block {
  display:block;
  box-sizing: border-box;
}
.img-box75{
    width: 100%;
    padding-bottom: 74.9%;
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
    -webkit-transition: opacity .7s linear;
    transition: opacity .7s linear;
    -moz-transition: opacity .7s linear;
    -ms-transition: opacity .7s linear;
    -o-transition: opacity .7s linear;
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
}
@media only screen and (min-width: 415px) and (max-width: 767px) {
  section.container {
    max-width:100%;
    padding:3px 100px;
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
    padding:10px 250px;
  }
}
@media only screen and (min-width: 1366px) {
  section.container {
    max-width:100%;
    padding:10px 500px;
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
