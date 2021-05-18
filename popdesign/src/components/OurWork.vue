<template lang="html">
  <div class="component-container">
    <div class="buttonLike"
            id="myBtnWork"
            @click="showModalWork()">
      <span> Our Work </span>
      <i class="fa fa-handshake-o" aria-hidden="true"></i>
    </div>
        <div id="myModalWork" class="modal">
          <div class="modal-content">
            <div class="modal-header">
              <h2>Our Work</h2>
              <span class="closeWork">&times;</span>
            </div>
               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum architecto error eius accusamus,
                    repellendus praesentium sequi laboriosam at. Expedita, officia
                    cum temporibus at cupiditate explicabo
                    atque sint doloribus ducimus molestiae.</p>
                <Slider/>
      </div>
   </div>
</div>
</template>

<script>
import Slider from "@/components/Slider"
export default {
  components:{
    Slider
  },
  created() {

  },
  methods: {
    showModalWork() {
      var modal = document.getElementById('myModalWork');
      var btn =  document.getElementById('myBtnWork');
      var span = document.getElementsByClassName("closeWork")[0];

      btn.onclick = function() {
        modal.style.display = 'block'
      }

    span.onclick = function() {
      modal.style.display = "none"
    }
    window.addEventListener("click", function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      });
    }
  }
}

</script>

<style lang="sass" scoped>
.component-container
    .buttonLike
      border: 1px solid #fff
      width: 150px
      padding: 35px 45px 45px
      font-size: 22px
      text-transform: capitalize
      position: relative
      i
        font-size: 65px
      span
        position: absolute
        bottom: 10px
        left: 25px
      &:hover
        transform: rotate(35deg)
        background-color: #a5a58d
    .modal
         display: none
         position: fixed
         left: 0
         top: 0
         z-index: 1
         width: 100%
         overflow: auto
         font-family: 'Quicksand', sans-serif
         h2
           font-weight: 500
    .modal-content
         background: #0a0a0a
         margin: 3% auto
         padding: 35px 55px
         border: 1px solid #888
         width: 55%
    .modal-header
         display: flex
         justify-content: space-between
         color: #fff
         padding-bottom: 25px
    .closeWork
         display: block
         color: #fff
         font-size: 36px
         font-weight: bold
         margin-top: -15px
    .closeWork:hover,
    .closeWork:focus
       color: #ccc
       text-decoration: none
       cursor: pointer
    p
        font-size: 15px
        font-weight: 400
        text-align: left
        line-height: 35px
    .slideshow-container
      max-width: 1000px
      position: relative
      margin: auto

    /* Hide the images by default

    .mySlides
      display: none

    /* Next & previous buttons

    .prev
      cursor: pointer
      position: absolute
      top: 50%
      width: auto
      margin-top: -22px
      padding: 16px
      color: white
      font-weight: bold
      font-size: 18px
      transition: 0.6s ease
      border-radius: 0 3px 3px 0
      user-select: none

    .next
      cursor: pointer
      position: absolute
      top: 50%
      width: auto
      margin-top: -22px
      padding: 16px
      color: white
      font-weight: bold
      font-size: 18px
      transition: 0.6s ease
      border-radius: 0 3px 3px 0
      user-select: none
      right: 0
      border-radius: 3px 0 0 3px

    /* Position the "next button" to the right

    /* On hover, add a black background color with a little bit see-through

    .prev:hover, .next:hover
      background-color: rgba(0, 0, 0, 0.8)

    /* Caption text

    .text
      color: #f2f2f2
      font-size: 15px
      padding: 8px 12px
      position: absolute
      bottom: 8px
      width: 100%
      text-align: center

    /* Number text (1/3 etc)

    .numbertext
      color: #f2f2f2
      font-size: 12px
      padding: 8px 12px
      position: absolute
      top: 0

    /* The dots/bullets/indicators

    .dot
      cursor: pointer
      height: 15px
      width: 15px
      margin: 0 2px
      background-color: #bbb
      border-radius: 50%
      display: inline-block
      transition: background-color 0.6s ease

    .active, .dot:hover
      background-color: #717171

    /* Fading animation

    .fade
      -webkit-animation-name: fade
      -webkit-animation-duration: 1.5s
      animation-name: fade
      animation-duration: 1.5s

    @-webkit-keyframes fade
      from
        opacity: .4

      to
        opacity: 1

    @keyframes fade
      from
        opacity: .4

      to
        opacity: 1
</style>
