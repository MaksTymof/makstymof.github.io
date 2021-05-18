<template lang="html">
  <div class="component-container">
    <div class="buttonLike"
          id="myBtnOurT"
          @click="showModalTeam()">
          <i class="fa fa-users" aria-hidden="true"></i>
          <span> Our Team </span>
        </div>
        <div id="myModalTeam" class="modal">
          <div class="modal-content">
            <div class="modal-header">
              <h2>Backgroung of Our Team</h2>
              <span class="closeTeam">&times;</span>
            </div>
            <div class='modal-cards'>
              <div class="modal-card">
                <p>  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. <br>Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. <br>Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <button> Read More</button>
              </div>
              <div class="modal-card">
                <div class="modal-card_image">
                  <img src="../img/team.jpg" alt="team background">
                </div>
              </div>

            </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  methods: {
    showModalTeam() {
      var modal = document.getElementById('myModalTeam');
      var btn =  document.getElementById('myBtnOurT');
      var span = document.getElementsByClassName("closeTeam")[0];

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
         padding: 20px
         border: 1px solid #888
         width: 65%
    .modal-header
         display: flex
         justify-content: space-between
         color: #fff
         padding-bottom: 25px
    .closeTeam
         display: block
         color: #fff
         font-size: 36px
         font-weight: bold
         margin-top: -15px
    .closeTeam:hover,
    .closeTeam:focus
       color: #ccc
       text-decoration: none
       cursor: pointer
    .modal-cards
      display: flex
      justify-content: space-around
    .modal-card
      padding: 15px 25px
      p
        font-family: "Roboto", sans-serif
        font-size: 18px
        letter-spacing: 2px
        line-height: 35px
        margin-bottom: 25px
      button
        background-color: #414548
        font-size: 18px
        border: none
        color: #fff
        padding: 20px 25px

</style>
