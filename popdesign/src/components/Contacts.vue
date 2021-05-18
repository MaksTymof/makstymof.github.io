<template lang="html">
  <div class="component-container">
    <div class="buttonLike"
            id="myBtnCtn"
            @click="showModalCtn()">
            <i class="fa fa-comments-o" aria-hidden="true"></i>
            <span> Contact </span>
     </div>
        <div id="myModalCtn" class="modal">
          <div class="modal-content">
            <div class="modal-header">
              <h2>Contact Us</h2>
              <span class="closeCtn">&times;</span>
            </div>
            <div class='modal-cards'>
              <div class="modal-card">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum architecto error eius accusamus,
                  atque sint doloribus ducimus molestiaeLorem ipsum dolor sit amet,
                  consectetur adipisicing elit. Eum architecto error eius accusamus,
                  atque sint doloribus ducimus molestiae..</p>
                <form action="" method="POST">
                    <input type="text" name="name" placeholder="Name">
                    <input type="email" name="email" placeholder="Email">
                    <textarea name="name" placeholder="Message"></textarea>
                    <button type="submit">Submit</button>
                </form>
              </div>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  methods: {
    showModalCtn() {
      var modal = document.getElementById('myModalCtn');
      var btn =  document.getElementById('myBtnCtn');
      var span = document.getElementsByClassName("closeCtn")[0];

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
         padding: 50px 100px
         border: 1px solid #888
         width: 65%
    .modal-header
         display: flex
         justify-content: space-between
         color: #fff
         padding-bottom: 25px
         h2
           padding: 0px 0px 0px 15px
    .closeCtn
         display: block
         color: #fff
         font-size: 36px
         font-weight: bold
         margin-top: -15px
    .closeCtn:hover,
    .closeCtn:focus
       color: #ccc
       text-decoration: none
       cursor: pointer
    .modal-card
      padding: 15px
      p
        font-size: 15px
        font-weight: 400
        text-align: left
        line-height: 35px
      form
        display: flex
        flex-wrap: wrap
        justify-content: space-between
        padding: 20px
      input
        display: block
        margin-left: 10px
        width: calc(49.5% - 10px)
        background: #414548
        border: none
        padding: 15px
        margin-bottom: 25px

      input[name="name"]
        margin-left: 0px
      textarea
        width: 100%
        background: #414548
        padding: 25px 0px 150px 15px
        margin-bottom: 15px
        &::placeholder
            color: #ccc
            text-transform: capitalize
            opacity: .4
      button
        padding: 15px 25px
        background-color: blue
        color: #fff
        border: none
        font-size: 18px
        letter-spacing: 2px

</style>
