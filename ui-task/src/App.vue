<template>
  <div id="app" dir="rtl">
    <div id="nav">
      <router-link to="/">Login</router-link> |
      <router-link to="/mainPage">Main Page</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
$screen-xl-min: 1200px;
* {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
 }
</style>
