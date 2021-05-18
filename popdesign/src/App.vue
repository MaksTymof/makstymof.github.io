<template lang="html">
  <div class="app">
        <Home class="inner-padding"/>
        <OurInfo class="inner-padding minus-margin-top"/>
  </div>
</template>
<script>
import Home from "@/views/Home"
import OurInfo from "@/views/OurInfo"
export default {
  components:{
    Home,
    OurInfo,
  }
}

</script>
<style lang="sass">
*
  padding: 0
  margin: 0
  box-sizing: border-box
html
  scroll-behavior: smooth
.inner-padding
  padding: 25px
.minus-margin-top
  margin-top: -55px
.app
  width: 100%
  min-height: 100vh
  display: flex
  padding: 150px 150px 55px
  background-image: url('./img/pop-bg.jpg')
  background-repeat: no-repeat
  background-position: center
  background-size: cover
  color: #fff
  font-family: 'Quicksand', sans-serif
</style>
