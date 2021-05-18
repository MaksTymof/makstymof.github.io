<template>
  <div class="home">
    <About/>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Footer from '@/components/Footer.vue'
import About from '@/components/About.vue'

export default {
  name: 'Home',
  components: {
    Footer,
    About
  }
}
</script>
<style lang="sass">
</style>
