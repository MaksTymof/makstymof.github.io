<template>
  <div class="my-self">
    <div class="photo-logo">
      <h1> {{ msg }} </h1>
      <img alt="My Photo" src="../assets/my-photo.jpeg">
    </div>
    <SelfDescription/>
    <Contacts/>
  </div>
</template>

<script>
import SelfDescription from '@/components/SelfDescription.vue'
import Contacts from '@/components/Contacts.vue'
export default {
  components:{
    SelfDescription,
    Contacts
  },
  name: 'SelfRepresentation',
  props: {
    msg: String
  }
}
</script>

<style lang="sass">
.photo-logo
  width: 300px
  height: 350px
  z-index: 5
  margin: 0 auto
  text-align: center
  margin-bottom: 145px
  border-bottom: 2px solid #000   
  h1
    font-size: 36px
    font-weight: bold
  img
    display: block
    width: inherit
    height: inherit
    border-radius: 50%

</style>
