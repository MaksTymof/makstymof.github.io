<template lang="html">
  <div class="user-card_container">
    <div class="user-card" v-for="client, idx in clients" :key="idx">
      <div class="header-editsend hoveraddition">
        <div class="edit">
          <i class="fa fa-pencil" aria-hidden="true"></i>
        </div>
        <div class="send">
          <i class="fa fa-envelope-o" aria-hidden="true"></i>
        </div>
     </div>
      <div class="card-header">
            <img :src="image" alt="Car Icon">
            <div class="header-editsend">
              <div class="edit">
                <i class="fa fa-pencil" aria-hidden="true"></i>
              </div>
              <div class="send">
                <i class="fa fa-envelope-o" aria-hidden="true"></i>
              </div>
           </div>
        </div>
        <div class="user-card_info">
           <span>First Name</span>
           <p>{{ client.first_name }}</p>
           <span>Last Name</span>
           <p>{{ client.last_name }}</p>
        </div>
        <div class="personal-numbers">
          <div class="personal">
              <span>Personal ID</span>
              <p>{{ client.personal_id }}</p>
          </div>
          <div class="insurance-number">
              <span>Insurance</span>
              <p>{{ client.insurance_number }}</p>
          </div>
        </div>
        <div class="dates">
          <div class="lastdate">
              <span>Last Visit</span>
              <p>{{ client.last_visit }}</p>
          </div>
          <div class="todaydate">
              <span>Today</span>
              <p>{{ client.today }}</p>
          </div>
        </div>
        <div class="additional-info">
          <div class="user-supply">
            <span>Phone Number</span>
            <p>{{ client.phone_number }}</p>
          </div>
          <div class="whois">{{ client.contact }}</div>
        </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex"
export default {
  computed: mapState(['clients']),
    loadClients() {
      this.$store.state.clients = clients
    },
  data() {
    return {
      image: 'img/card-car.png',
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
.user-card_container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    :hover {
        @include lg {
          background-color: #FF7728;
        }
    }
    :hover .hoveraddition{
        @include lg {
          display: flex;
          position: absolute;
          right: 190px;
          padding-top: 10px;
    }
  }
}
.user-card{
    width: 100%;
    height: 383px;
    background-color: #fff;
    border-radius: 30px;
    margin: 0 auto;
    margin-bottom: 15px;
    color: #1D4076;
    font-size: 18px;
    @include lg {
      width: 60%;
      height: 40px;
      display: flex;
      justify-content: space-between;
      padding-right: 25px;
    }
    span {
      @include lg {
        display: none;
      }
    }
}
.card-header{
    display: flex;
    justify-content: space-between;
    width: 90%;
    padding: 26px 0px;
    border-bottom: 3px solid #1D4076;
    margin: 0 auto;
    @include lg {
        display: none;
    }
  }
.header-editsend {
    width: 90px;
    display: flex;
    justify-content: space-between;
    margin-top: -10px;
}
.edit, .send {
    width: 40px;
    height: 40px;
    background-color: #009C41;
    border-radius: 50%;
    text-align: center;
    color: #fff;
    font-size: 20px;
    line-height: 35px;
}
.card-header img{
    width: 67px;
    height: 22px;
}
.user-card_info p {
    @include lg {
      height: 21px;
      display: flex;
      justify-content: center;
      align-self: center;
    }
}
.user-card_info, .personal-numbers, .dates, .additional-info {
    padding: 10px 25px;
    @include lg {
        display: flex;
        justify-content: space-around;
        text-align: center;
        padding: 0;
    }
    p {
      @include lg {
        margin-left: 15px;
        width: 100px;
        border-left: 1px solid #ccc;
        text-align: center;
      }
    }
}
.personal-numbers, .dates, .additional-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
.dates{
    margin-right: -15px;
  }
.user-supply p{
  @include lg {
    border: none;
  }
}
p {
    font-weight: bold;
 }
span {
  color: #797979;
}
.whois {
  color: #009C41;
  @include lg {
    display: none;
  }
}
.hoveraddition {
    display: none;
  }
.hoveraddition .edit, .hoveraddition .send{
    background-color: #fff;
    color: #21325E;
}

</style>
