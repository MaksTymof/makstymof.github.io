<template lang="html">
    <div class="ourinfo-container">
          <Welcome class="inner-padding"/>
          <OurTeam class="inner-padding"/>
          <OurWork class="inner-padding"/>
          <Contacts class="inner-padding"/>

    </div>
</template>

<script>
import Welcome from '@/components/Welcome.vue'
import OurTeam from '@/components/OurTeam.vue'
import OurWork from '@/components/OurWork.vue'
import Contacts from '@/components/Contacts.vue'

export default {
  components:{
    Welcome,
    OurTeam,
    OurWork,
    Contacts
  }
}
</script>

<style lang="sass" >
  .ourinfo-container
    width: 500px
    height: 300px
    display: flex
    flex-wrap: wrap

  .inner-padding
    padding: 10px
</style>
