<template>
  <div class="home">
    <SelfRepresentation msg="Welcome to My Portfolio"/>
  </div>
</template>

<script>

import SelfRepresentation from '@/components/SelfRepresentation.vue'

export default {
  name: 'Home',
  components: {
    SelfRepresentation
  }
}
</script>
