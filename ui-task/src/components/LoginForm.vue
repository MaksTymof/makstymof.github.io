<template lang="html">
  <div class="login-form-container">
    <div class="login-form">
      <div class="login-user-description">
           <div class="login-form_icon">
              <i class="fa fa-user" aria-hidden="true"></i>
           </div>
           <div class="login-user-info">
             <p class="none">  Lorem ipsum dolor sit amet </p>
             <p>  Lorem ipsum dolor sit amet </p>
           </div>
       </div>
       <div class="login-form_subtitle">Lorem ipsum dolor sit amet orem ipsum</div>
       <form action="">
          <label for="username">
              <span>Username</span>
              <input type="text" name="username">
              <span class="dash left"></span>
              <span class="dash right"></span>
          </label>
          <label for="password">
              <span>Password</span>
              <input type="password" name="password">
          </label>
          <div class="button-container">
            <button class="enter">Enter</button>
            <button class="return">Back</button>
          </div>
      </form>
    </div>
 </div>
</template>

<script>
export default {
  name: 'LoginFrom',
  data() {
    return {
      bgimage:"./img/mobile-bg.png",
      bgmask: "./img/mask.png"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
$screen-xl-min: 1200px;
@mixin lg {
   @media (min-width: #{$screen-xl-min}) {
       @content;
   }
}
.login-form-container{
  background-image: url('../../public/img/mobile-bg.png');
  background-repeat: no-repeat;
  background-size: cover;
  @include lg{
        background-image: url('../../public/img/bg-large.png');
        background-repeat: no-repeat;
        background-size: cover;
    }
}
.login-form {
  padding: 16px 23px 66px;
  color: #fff;
  background-image: url('../../public/img/mask.png');
  background-repeat: no-repeat;
  background-size: cover;
}
  .login-user-info{

    p{
    @include lg{
        line-height: 45px;
        font-size: 28px;
      }
    }
  }
  .login-user-description{
    display: flex;
    flex-wrap: wrap;
    padding: 16px 11px;
    width: 90%;
    margin: 0 auto;
    border-bottom: 3px solid #fff;
    @include lg{
         width: 65%;
         margin-bottom: 72px;
      }
  }
  .none{
    @include lg{
         display: none;
      }
  }
  .login-form_icon{
    width: 25px;
    height: 25px;
    color: orange;
    background-color: #EEE;
    border-radius: 50%;
    text-align: center;
    font-size: 20px;
    line-height: 25px;
    margin-left: 10px;
    margin-top: 5px;
    @include lg{
        padding-top: 3px;
        font-size: 32px;
        width: 40px;
        height: 40px;
      }
  }
  .login-form_subtitle{
    width: 80%;
    margin: 0 auto;
    padding: 25px 35px;
    font-size: 18px;
    text-align: center;
    text-transform: uppercase;
    @include lg{
        font-size: 24px;
      }
  }
  label, input{
    display: block;
  }
  label {
    padding: 20px 10px;
    margin-bottom: 10px;
    position: relative;
    @include lg{
        width: 25%;
        margin: 0 auto;
      }
  }
  label span {
    margin-right: 20px;
    font-size: 18px;
    @include lg{
        font-size: 20px;
      }
  }
  input{
    width: 100%;
    border: none;
    border-radius: 20px;
    height: 40px;
    margin-top: 15px;
  }
  .button-container{
    @include lg{
        display: flex;
        justify-content: center;
        padding-top: 93px;
    }
  }
  button{
    color: #fff;
    font-size: 20px;
    border: none;
    border-radius: 35px;
    padding: 10px 15px;
    width: 45%;
    margin: 25px 5px;
    @include lg {
        width: 25%;
    }
  }
  .return{
    background-color: #C4C4C4;
    text-align: right;
    padding-right: 25px;
    position: relative;
    @include lg{
        padding-right: 155px;
        font-size: 24px;
    }
  }
  button[class="return"]::before{
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border-top: 8px solid transparent;
    border-bottom: 8px solid transparent;
    border-right: 8px solid #fff;
    left: 35px;
    bottom: 13px;
    @include lg{
        left: 125px;
        bottom: 16px;
    }
  }
  .enter{
    background-color: #009C41;
    @include lg{
      font-size: 24px;
    }
  }
  .dash{
    display: block;
    position: absolute;
    width: 14px;
    height: 2px;
    background-color: #000;
    left: 30px;
    bottom: 30px;
    margin-bottom: 10px;
  }
  .left{
    transform: rotate(40deg)
  }
  .right{
    transform: rotate(-40deg)
  }
</style>
