<template lang="html">
  <div class="component-container">
    <div class="buttonLike"
            id="myBtn"
            @click="showModalWlc()">
            <i class="fa fa-home" aria-hidden="true"></i>
            <span> welcome </span>
     </div>
        <div id="myModal" class="modal">
          <div class="modal-content">
            <div class="modal-header">
              <h2>Welcome to Pop Design</h2>
              <span class="close">&times;</span>
            </div>
            <div class='modal-cards'>
              <div class="modal-card">
                <div class="modal-card_image">
                  <img src="../img/welcome-1.jpg" alt="Welcome Girl">
                </div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum architecto error eius accusamus,
                    repellendus praesentium sequi laboriosam at. Expedita, officia
                    cum temporibus at cupiditate explicabo
                    atque sint doloribus ducimus molestiae.</p>
              </div>
              <div class="modal-card">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum architecto error eius accusamus,
                    repellendus praesentium sequi laboriosam at. Expedita, officia
                    cum temporibus at cupiditate explicabo
                    atque sint doloribus ducimus molestiae.</p>
                <div class="modal-card_image">
                  <img src="../img/welcome-2.jpg" alt="Welcome Girl">
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
    showModalWlc() {
      var modal = document.getElementById('myModal');
      var btn =  document.getElementById('myBtn');
      var span = document.getElementsByClassName("close")[0];

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
    .close
         display: block
         color: #fff
         font-size: 36px
         font-weight: bold
         margin-top: -15px
    .close:hover,
    .close:focus
       color: #ccc
       text-decoration: none
       cursor: pointer
    .modal-cards
      display: flex
      justify-content: space-between
    .modal-card_image
          padding: 15px
    .modal-card_image img
         display: block
         width: 100%
    .modal-card
      padding: 15px
      p
        font-size: 15px
        font-weight: 400
        text-align: left
        line-height: 35px
</style>
