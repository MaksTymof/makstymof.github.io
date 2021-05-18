<template lang="html">
<div class="mainpage-section_container-outer" :style="{ 'background-image': 'url(' + bgImage + ')' }">
  <div class="container-inner" :style="{ 'background-image': 'url(' + bgMask + ')' }">
    <div class="toggle-buttons">
      <div class="login-form_icon">
         <i class="fa fa-user" aria-hidden="true"></i>
      </div>
      <button class="toggle-right" @click="changeButtonColorRight()" id="toggle-right"> Click me </button>
      <button class="toggle-left" @click="changeButtonColorLeft()"  id="toggle-left"> Click me+ </button>
    </div>
    <div class="mainpage-search-container">
        <div class="search-block" editable>
            <span>Lorem</span>
            <i class="fa fa-search" aria-hidden="true"></i>
        </div>
        <div class="add-icon">
            <span> Add Client </span>
           <i class="fa fa-plus" aria-hidden="true"></i>
        </div>
    </div>
    <ul class="sections-titles">
        <li v-for="item, idx in titles" :key="item.idx">{{ item }}</li>
    </ul>
    <UserCard/>
  </div>
</div>
</template>
<script>
import UserCard from '@/components/UserCard'
export default {
  components: {
    UserCard
  },
  name:"MainPageSection",
  data() {
    return{
        bgImage: "./img/mobile-bg.png",
        bgMask: "./img/mask.png",
        titles: [
          "First name", "Last name", "ID","Insurance","Last visit", "Today",
          "Phone"
        ]
    }
  },
    methods : {
      changeButtonColorRight () {
        var togRight = document.getElementById('toggle-right');
        var togLeft = document.getElementById('toggle-left');
        togRight.addEventListener('click', function () {
          togRight.style.backgroundColor = "#c4c4c4"
          togLeft.style.backgroundColor = "#FF7728"
        })
    },
      changeButtonColorLeft () {
        var togRight = document.getElementById('toggle-right');
        var togLeft = document.getElementById('toggle-left');
        togLeft.addEventListener('click', function () {
          togRight.style.backgroundColor = "#FF7728"
          togLeft.style.backgroundColor = "#c4c4c4"
        })
    }
  }
}
</script>
<style lang="scss">
$screen-xl-min: 1200px;
@mixin lg {
   @media (min-width: #{$screen-xl-min}) {
       @content;
   }
}
.mainpage-section_container-outer {
    background-repeat: no-repeat;
    background-size: cover;
    @include lg {
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
    }
}
.container-inner{
  width: 100%;
  padding: 27px 23px;
  background-repeat: no-repeat;
  background-size: cover;
  button{
      width: 50%;
      padding: 5px;
      font-size: 18px;
  }
}
.toggle-buttons{
    display: flex;
    @include lg {
        width: 60%;
        margin: 0 auto;
        border-bottom: 3px solid #fff;
        margin-bottom: 25px;
    }
}
.login-form_icon{
    display: none;
    @include lg{
        display: block;
        margin-top: 25px;
    }
}
.toggle-right{
    margin-left: -10px;
    background-color: #FF7728;
    @include lg {
        height: 38px;
    }
}
.toggle-left{
    margin-right: -10px;
    color: #5F5F5F;
}
.sections-titles{
    display: none;
    @include lg {
        display: block;
        display: flex;
        justify-content: space-between;
        width: 60%;
        padding: 0px 38px;
        height: 38px;
        margin: 0 auto;
        background: transparent;
        color: #fff;

      }
      li {
        list-style: none;
        text-align: center;
        padding-top: 10px;
      }
}
.mainpage-search-container{
    display: flex;
    justify-content: space-between;
    width: 95%;
    border-bottom: 3px solid #fff;
    margin-bottom: 26px;
    @include lg {
      width: 60%;
      margin: 0 auto;
      border: none;
    }
}
.add-icon{
    background-color: #009C41;
    width: 40px;
    height: 40px;
    font-size: 28px;
    text-align: center;
    line-height: 45px;
    color: #fff;
    border-radius: 50%;
    span {
      display: none;
      @include lg {
        display: block;
        font-size: 22px;
        line-height: 35px;
        color: #fff;
      }
    }
    i {
      @include lg {
        display: none;
      }
    }
    @include lg {
        width: 25%;
        margin-right: 10px;
        height: 38px;
        border-radius: 25px;
    }
  }
.search-block{
    display: flex;
    justify-content: space-between;
    width: 75%;
    height: 35px;
    padding: 7px 10px;
    background-color: #fff;
    border-radius: 25px;
    margin-bottom: 21px;
    span{
        height: 18px;
        opacity: 0.5;
    }
  }
</style>
