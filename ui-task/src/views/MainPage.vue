<template>
  <div class="mainpage-container">
      <SearchBarNHeader/>
      <MainPageSection/>
  </div>
</template>

<script>
import SearchBarNHeader from '@/components/SearchBarNHeader'
import MainPageSection from '@/components/MainPageSection'
export default {
  components:{
    SearchBarNHeader,
    MainPageSection
  }
}
</script>
<style lang="scss">
$screen-xl-min: 1200px;
@mixin lg {
   @media (min-width: #{$screen-xl-min}) {
       @content;
   }
}
.mainpage-container {
  padding-top: 20px;
}
.user-definition{
    display: none;
}
.user-icon{
  margin-top: 0px;
  height: 30px;
  width: 30px;
  line-height: 30px;
  font-size: 18px;
  @include lg {
      margin-top: 2px;
      height: 38px;
      width: 38px;
      line-height: 35px;
      font-size: 20px;
      border-radius: 50%;
  }
}
</style>
