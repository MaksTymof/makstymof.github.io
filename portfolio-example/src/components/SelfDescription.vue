<template lang="pug">
  .description
    .description--article
      p My name is Max
      p I'm a Junior Front-End Developer with some skills of Back-End Developer
      p {{ message }}
      p Am quiet new in the branch but with great patience to achive the greatest results
    .description--personal-skills
      h2 My Skills are:
      ul
        li(v-for=("skill in skills") :key="skill.index") {{ skill }}
</template>

<script>
export default {
  data() {
    return {
      message: `I believe that creativity in the workplace
      is the key to success⁠ — a concept I live out through
      my interests in board games, exercise, reading books`,
      skills:["HTML5", "CSS3", "Javascript", "Node.js",
      "Express.js", "Pug", "Gulp",
      "Vue.js", "jQuery.js", "Bulma.css", "Bootstrap 4"]
    }
  }
}
</script>

<style lang="sass" scoped>
.description
  border-bottom: 2px solid #000
.description--article
  text-align: center
  margin: 0 auto
  font-size: 24px
  font-weight: bold
  border-bottom: 2px solid #000
h2
  font-weight: bold
  font-size: 36px
  text-align: center

.description--personal-skills
  ul
    text-align: center
    font-weight: bold
    font-size: 32px
    li
      list-style: none

</style>
