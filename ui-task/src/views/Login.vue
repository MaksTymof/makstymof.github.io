<template>
  <div class="login-container">
    <SearchBarNHeader/>
    <div class="subtitle">Lorem ipsum dolor</div>
      <LoginForm/>
  </div>
</template>
<script>
import LoginForm from "@/components/LoginForm.vue"
import SearchBarNHeader from "@/components/SearchBarNHeader.vue"
export default {
    components: {
      LoginForm,
      SearchBarNHeader
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
.login-container {
    padding-top: 10px;
}
  .subtitle {
    display: none;
    @include lg{
      display: block;
      padding: 31px 62px;
      background-color: #CCC;
    }
  }


</style>
