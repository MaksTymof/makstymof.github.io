<template lang="html">
  <div class="searchbarheader-container">
    <div class="search-bar"></div>
     <div class="user-header">
          <div class="user-icon">
            <i class="fa fa-user" aria-hidden="true"></i>
          </div>
          <div class="user-info">
            <div class="user-title">
              <p>  Lorem ipsum dolor sit amet </p>
              <p>  Lorem ipsum dolor sit amet </p>
            </div>
            <div class="user-definition">Lorem ipsum dolor </div>
         </div>
      </div>
  </div>
</template>
<script>
export default {
}
</script>

<style lang="scss">
$screen-xl-min: 1200px;
@mixin lg {
   @media (min-width: #{$screen-xl-min}) {
       @content;
   }
}
.search-bar {
  width: 85%;
  background-color: #EEE;
  border-radius: 25px;
  padding: 15px;
  margin: 0 auto;
  @include lg{
    display: none;
  }
}
.user-header{
  padding: 16px 11px;
  border-top: 2px solid #EEE;
  margin: 15px auto;
  display: flex;
  flex-wrap: wrap;
  @include lg{
      padding: 33px 35px;

  }
}
  .user-icon{
    background-color: #009C41;
    height: 30px;
    width: 30px;
    border-radius: 10px;
    color: #fff;
    text-align: center;
    font-size: 18px;
    line-height: 30px;
    margin-top: 8px;
    margin-left: 11px;
    @include lg {
        margin-top: 5px;
        height: 38px;
        width: 38px;
        line-height: 35px;
        font-size: 20px;
        border-radius: 50%;
    }
  }
  .user-info {
    @include lg{
      padding-top: 5px;
    }

  }
  .user-title {
      p {
        color: #009C41;
        font-size: 12px;
        @include lg{
          text-transform: uppercase;
          line-height: 17px;
        }

      }
  }
  .user-definition {
          font-size: 14px;
          color: #ffa500;
          @include lg{
            display: none;
          }
      }
</style>
