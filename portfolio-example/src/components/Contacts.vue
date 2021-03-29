<template lang="pug">
  .contact
    .contact--email
      img(src="../assets/email-logo.jpeg")
      a(href="mailto:contact.email") {{ contact.email }}
    .contact--number
      img(src="../assets/phone-logo.jpeg")
      a(href="tel:contact.number") {{ contact.number }}
    .contact--placeofliving
      img(src="../assets/maplogo.jpeg")
      a(href="'https://www.google.com/maps/place/%D0%86%D0%B2%D0%B0%D0%BD%D0%BE-%D0%A4%D1%80%D0%B0%D0%BD%D0%BA%D1%96%D0%B2%D1%81%D1%8C%D0%BA,+%D0%86%D0%B2%D0%B0%D0%BD%D0%BE-%D0%A4%D1%80%D0%B0%D0%BD%D0%BA%D1%96%D0%B2%D1%81%D1%8C%D0%BA%D0%B0+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+76000/@48.9117518,24.6470894,12z/data=!3m1!4b1!4m5!3m4!1s0x4730c16c34b0381d:0xd6d32394e59e41c2!8m2!3d48.922633!4d24.711117") {{ contact.placeofliving }}
    .contacts--social-media
      ul
        li(v-for="item in contact.social")
          a(:href="item") {{ item }}
</template>

<script>
export default {
  data() {
    return {
      contact: {
        email: "maksym198858@gmail.com",
        number: "+380951077047",
        placeofliving: "Iwano-Frankiwsk city",
        social:[
          "https://www.facebook.com/profile.php?id=100004221463011",
          "https://www.instagram.com/maksymtymofiiv/"
        ]
      }
    }
  }
}
</script>

<style lang="sass" scoped>
.contact
  text-align: center
  font-size: 28px
  font-weight: bold
  padding-top: 25px
  border-bottom: 2px solid #000
  img
    width: 45px
    height: 45px
    border-radius: 50%
    margin-right: 15px
  a
    text-decoration: none

li
  list-style: none
.contact--email, .contact--number, .contact--placeofliving
  display: flex
  justify-content: center
</style>
